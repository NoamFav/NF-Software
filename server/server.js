// server.js
import Fastify from "fastify";
import multipart from "@fastify/multipart";
import staticPlugin from "@fastify/static";
import BetterSqlite from "better-sqlite3";
import { randomUUID } from "node:crypto";
import cors from "@fastify/cors";
import fs from "node:fs";
import path from "node:path";

const app = Fastify({ logger: true });
fs.mkdirSync("/data/uploads", { recursive: true });
await app.register(multipart, {
    limits: {
        fileSize: 10 * 1024 * 1024,
        files: 8,
        fieldSize: 256 * 1024,
    },
});
await app.register(cors, {
    origin: (origin, cb) => {
        // Allow health checks / curl (no Origin header)
        if (!origin) return cb(null, true);

        const ALLOWED = new Set([
            "http://localhost:5173",
            "http://127.0.0.1:5173",
            "https://nf-software.com",
            "https://noamfav.github.io/",
        ]);

        cb(null, ALLOWED.has(origin));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Content-Disposition"],
    credentials: false,
    maxAge: 86400,
    strictPreflight: true,
});
await app.register(staticPlugin, { root: "/data/uploads", prefix: "/files/" });

const ADMIN_PW = process.env.ADMIN_PASSWORD || "change-me";
const dbPath = "/data/db.sqlite";

const db = new BetterSqlite(dbPath);
db.exec(`
CREATE TABLE IF NOT EXISTS submissions (
  id TEXT PRIMARY KEY,
  created_at TEXT DEFAULT (datetime('now')),
  name TEXT, email TEXT, phone TEXT, company TEXT, website TEXT,
  project_type TEXT, industry TEXT, team_size TEXT, timeframe TEXT, budget TEXT,
  description TEXT, goals TEXT, technical_requirements TEXT,
  design_preferences TEXT, target_audience TEXT,
  features TEXT, has_design TEXT, needs_hosting TEXT
);
CREATE TABLE IF NOT EXISTS attachments (
  id TEXT PRIMARY KEY,
  submission_id TEXT,
  filename TEXT,
  stored_path TEXT,
  size INTEGER,
  type TEXT
);
`);

const insertSubmission = db.prepare(`
INSERT INTO submissions (
  id, name, email, phone, company, website, project_type, industry, team_size,
  timeframe, budget, description, goals, technical_requirements,
  design_preferences, target_audience, features, has_design, needs_hosting
) VALUES (@id,@name,@email,@phone,@company,@website,@project_type,@industry,@team_size,
  @timeframe,@budget,@description,@goals,@technical_requirements,
  @design_preferences,@target_audience,@features,@has_design,@needs_hosting)
`);
const insertAttachment = db.prepare(`
INSERT INTO attachments (id, submission_id, filename, stored_path, size, type)
VALUES (@id,@submission_id,@filename,@stored_path,@size,@type)
`);

app.get("/health", async (_, reply) => reply.send({ ok: true }));
app.post("/submit", async (req, reply) => {
    const parts = req.parts();
    const fields = {};
    const files = [];

    for await (const part of parts) {
        if (part.type === "file") {
            const key = part.fieldname;
            if (!key.startsWith("attachment_")) continue;
            const safe = `${randomUUID()}-${part.filename}`;
            const dest = path.join("/data/uploads", safe);
            const ws = fs.createWriteStream(dest);
            let size = 0;
            for await (const ch of part.file) {
                size += ch.length;
                ws.write(ch);
            }
            ws.end();
            files.push({
                filename: part.filename,
                stored_path: safe,
                size,
                type: part.mimetype || "application/octet-stream",
            });
        } else {
            const val = await part.value;
            fields[part.fieldname] = val ?? "";
        }
    }

    // Honeypot check
    if ((fields.company_website || "").length) {
        return reply.code(200).send({ ok: true });
    }

    const id = randomUUID();
    const payload = {
        id,
        name: fields.name || "",
        email: fields.email || "",
        phone: fields.phone || "",
        company: fields.company || "",
        website: fields.website || "",
        project_type: fields.projectType || "",
        industry: fields.industry || "",
        team_size: fields.teamSize || "",
        timeframe: fields.timeframe || "",
        budget: fields.budget || "",
        description: fields.description || "",
        goals: fields.goals || "",
        technical_requirements: fields.technicalRequirements || "",
        design_preferences: fields.designPreferences || "",
        target_audience: fields.targetAudience || "",
        features: fields.features || "[]",
        has_design: fields.hasDesign || "",
        needs_hosting: fields.needsHosting || "",
    };

    const tx = db.transaction(() => {
        insertSubmission.run(payload);
        for (const f of files) {
            insertAttachment.run({
                id: randomUUID(),
                submission_id: id,
                filename: f.filename,
                stored_path: f.stored_path,
                size: f.size,
                type: f.type,
            });
        }
    });
    tx();

    return reply.send({ ok: true });
});

app.get("/admin", async (req, reply) => {
    const auth = req.headers.authorization || "";
    const ok =
        auth.startsWith("Basic ") &&
        Buffer.from(auth.split(" ")[1], "base64").toString().split(":")[1] ===
            ADMIN_PW;

    if (!ok) {
        reply.header("WWW-Authenticate", 'Basic realm="admin"');
        return reply.code(401).send("Auth required");
    }

    const rows = db
        .prepare(
            `
        SELECT s.*, json_group_array(
            CASE WHEN a.id IS NOT NULL
            THEN json_object(
                'filename', a.filename,
                'url', '/files/'||a.stored_path,
                'size', a.size,
                'type', a.type
            )
            ELSE NULL END
        ) AS files
        FROM submissions s
        LEFT JOIN attachments a ON a.submission_id = s.id
        GROUP BY s.id
        ORDER BY datetime(s.created_at) DESC
        LIMIT 200
    `,
        )
        .all();

    const formatDate = (date) => {
        const d = new Date(date + "Z");
        return d.toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const formatFileSize = (bytes) => {
        if (bytes < 1024) return bytes + " B";
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
        return (bytes / (1024 * 1024)).toFixed(1) + " MB";
    };

    const getBudgetLabel = (value) => {
        const labels = {
            micro: "€20 - €500",
            tiny: "€500 - €1,000",
            small: "€1,000 - €5,000",
            medium: "€5,000 - €15,000",
            large: "€15,000 - €50,000",
            enterprise: "€50,000+",
            discuss: "Prefer to discuss",
        };
        return labels[value] || value;
    };

    const getTimeframeLabel = (value) => {
        const labels = {
            urgent: "1-2 weeks",
            short: "1-2 months",
            medium: "3-6 months",
            long: "6+ months",
            flexible: "Flexible",
        };
        return labels[value] || value;
    };

    const getProjectTypeLabel = (value) => {
        const labels = {
            "web-app": "Web Application",
            "mobile-app": "Mobile App",
            api: "API/Backend",
            fullstack: "Full-Stack Solution",
            other: "Other",
        };
        return labels[value] || value;
    };

    const getPriorityClass = (r) => {
        if (r.timeframe === "urgent") return "priority-high";
        if (r.budget === "enterprise" || r.budget === "large")
            return "priority-high";
        if (r.timeframe === "short") return "priority-medium";
        return "priority-normal";
    };

    const cards = rows
        .map((r) => {
            const files = JSON.parse(r.files || "[]").filter((f) => f !== null);
            const features = JSON.parse(r.features || "[]");
            const priority = getPriorityClass(r);

            return `
            <div class="submission-card ${priority}">
                <div class="card-header">
                    <div class="header-main">
                        <div class="client-info">
                            <h2 class="client-name">${r.name || "Anonymous"}</h2>
                            ${r.company ? `<span class="company-name">${r.company}</span>` : ""}
                        </div>
                        <div class="metadata">
                            <span class="project-type">${getProjectTypeLabel(r.project_type)}</span>
                            <span class="timestamp">${formatDate(r.created_at)}</span>
                        </div>
                    </div>
                    <div class="key-metrics">
                        <div class="metric">
                            <span class="metric-label">Budget</span>
                            <span class="metric-value">${getBudgetLabel(r.budget)}</span>
                        </div>
                        <div class="metric">
                            <span class="metric-label">Timeline</span>
                            <span class="metric-value">${getTimeframeLabel(r.timeframe)}</span>
                        </div>
                    </div>
                </div>

                <div class="card-body">
                    <div class="section-group">
                        <section class="section contact-section">
                            <h3>Contact Information</h3>
                            <div class="data-grid">
                                <div class="data-item">
                                    <span class="label">Email</span>
                                    <a href="mailto:${r.email}" class="value">${r.email}</a>
                                </div>
                                ${
                                    r.phone
                                        ? `
                                <div class="data-item">
                                    <span class="label">Phone</span>
                                    <a href="tel:${r.phone}" class="value">${r.phone}</a>
                                </div>
                                `
                                        : ""
                                }
                                ${
                                    r.website
                                        ? `
                                <div class="data-item">
                                    <span class="label">Website</span>
                                    <a href="${r.website}" target="_blank" class="value">${r.website}</a>
                                </div>
                                `
                                        : ""
                                }
                                ${
                                    r.industry
                                        ? `
                                <div class="data-item">
                                    <span class="label">Industry</span>
                                    <span class="value">${r.industry}</span>
                                </div>
                                `
                                        : ""
                                }
                                ${
                                    r.team_size
                                        ? `
                                <div class="data-item">
                                    <span class="label">Team Size</span>
                                    <span class="value">${r.team_size}</span>
                                </div>
                                `
                                        : ""
                                }
                            </div>
                        </section>

                        ${
                            r.description
                                ? `
                        <section class="section">
                            <h3>Project Description</h3>
                            <div class="content-block">${r.description}</div>
                        </section>
                        `
                                : ""
                        }

                        ${
                            r.goals
                                ? `
                        <section class="section">
                            <h3>Goals & Success Metrics</h3>
                            <div class="content-block">${r.goals}</div>
                        </section>
                        `
                                : ""
                        }

                        ${
                            features.length > 0
                                ? `
                        <section class="section">
                            <h3>Required Features</h3>
                            <div class="feature-list">
                                ${features.map((f) => `<span class="feature-item">${f}</span>`).join("")}
                            </div>
                        </section>
                        `
                                : ""
                        }

                        ${
                            r.target_audience
                                ? `
                        <section class="section">
                            <h3>Target Audience</h3>
                            <div class="content-block">${r.target_audience}</div>
                        </section>
                        `
                                : ""
                        }

                        ${
                            r.technical_requirements
                                ? `
                        <section class="section">
                            <h3>Technical Requirements</h3>
                            <div class="content-block">${r.technical_requirements}</div>
                        </section>
                        `
                                : ""
                        }

                        ${
                            r.design_preferences
                                ? `
                        <section class="section">
                            <h3>Design Preferences</h3>
                            <div class="content-block">${r.design_preferences}</div>
                        </section>
                        `
                                : ""
                        }

                        <section class="section">
                            <h3>Additional Details</h3>
                            <div class="data-grid">
                                <div class="data-item">
                                    <span class="label">Design Assets</span>
                                    <span class="value">${r.has_design === "yes" ? "Complete design ready" : r.has_design === "partial" ? "Wireframes available" : "Full design needed"}</span>
                                </div>
                                <div class="data-item">
                                    <span class="label">Hosting Required</span>
                                    <span class="value">${r.needs_hosting === "yes" ? "Yes" : r.needs_hosting === "no" ? "No" : "TBD"}</span>
                                </div>
                            </div>
                        </section>

                        ${
                            files.length > 0
                                ? `
                        <section class="section">
                            <h3>Attachments (${files.length})</h3>
                            <div class="attachments">
                                ${files
                                    .map(
                                        (f) => `
                                <a href="${f.url}" target="_blank" class="attachment">
                                    <div class="attachment-icon">${f.type.startsWith("image/") ? "IMG" : "DOC"}</div>
                                    <div class="attachment-details">
                                        <div class="attachment-name">${f.filename}</div>
                                        <div class="attachment-meta">${formatFileSize(f.size)}</div>
                                    </div>
                                </a>
                                `,
                                    )
                                    .join("")}
                            </div>
                        </section>
                        `
                                : ""
                        }
                    </div>
                </div>
            </div>
        `;
        })
        .join("");

    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Submissions Dashboard</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                :root {
                    --color-bg: #f5f5f7;
                    --color-surface: #ffffff;
                    --color-text: #1d1d1f;
                    --color-text-secondary: #6e6e73;
                    --color-border: #d2d2d7;
                    --color-primary: #0071e3;
                    --color-priority-high: #ff3b30;
                    --color-priority-medium: #ff9500;
                    --spacing-xs: 0.5rem;
                    --spacing-sm: 0.75rem;
                    --spacing-md: 1rem;
                    --spacing-lg: 1.5rem;
                    --spacing-xl: 2rem;
                }

                body {
                    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif;
                    background: var(--color-bg);
                    color: var(--color-text);
                    line-height: 1.5;
                    padding: var(--spacing-xl);
                    font-size: 15px;
                }

                .dashboard-header {
                    max-width: 1400px;
                    margin: 0 auto var(--spacing-xl);
                }

                .dashboard-header h1 {
                    font-size: 2rem;
                    font-weight: 600;
                    margin-bottom: var(--spacing-xs);
                    letter-spacing: -0.02em;
                }

                .dashboard-header p {
                    color: var(--color-text-secondary);
                    font-size: 1rem;
                }

                .stats-bar {
                    max-width: 1400px;
                    margin: 0 auto var(--spacing-xl);
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: var(--spacing-md);
                }

                .stat-card {
                    background: var(--color-surface);
                    border: 1px solid var(--color-border);
                    padding: var(--spacing-lg);
                    border-radius: 12px;
                }

                .stat-card .number {
                    font-size: 2.5rem;
                    font-weight: 600;
                    display: block;
                    letter-spacing: -0.03em;
                    line-height: 1;
                    margin-bottom: var(--spacing-xs);
                }

                .stat-card .label {
                    font-size: 0.875rem;
                    color: var(--color-text-secondary);
                }

                .container {
                    max-width: 1400px;
                    margin: 0 auto;
                }

                .submission-card {
                    background: var(--color-surface);
                    border: 1px solid var(--color-border);
                    border-radius: 12px;
                    margin-bottom: var(--spacing-lg);
                    overflow: hidden;
                }

                .submission-card.priority-high {
                    border-left: 4px solid var(--color-priority-high);
                }

                .submission-card.priority-medium {
                    border-left: 4px solid var(--color-priority-medium);
                }

                .card-header {
                    border-bottom: 1px solid var(--color-border);
                    padding: var(--spacing-xl);
                }

                .header-main {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: var(--spacing-lg);
                    gap: var(--spacing-lg);
                }

                .client-info {
                    flex: 1;
                }

                .client-name {
                    font-size: 1.5rem;
                    font-weight: 600;
                    margin-bottom: var(--spacing-xs);
                    letter-spacing: -0.02em;
                }

                .company-name {
                    color: var(--color-text-secondary);
                    font-size: 1rem;
                }

                .metadata {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    gap: var(--spacing-xs);
                }

                .project-type {
                    background: var(--color-bg);
                    padding: var(--spacing-xs) var(--spacing-md);
                    border-radius: 6px;
                    font-size: 0.875rem;
                    font-weight: 500;
                }

                .timestamp {
                    color: var(--color-text-secondary);
                    font-size: 0.875rem;
                }

                .key-metrics {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: var(--spacing-lg);
                }

                .metric {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-xs);
                }

                .metric-label {
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--color-text-secondary);
                    font-weight: 500;
                }

                .metric-value {
                    font-size: 1.125rem;
                    font-weight: 600;
                }

                .card-body {
                    padding: var(--spacing-xl);
                }

                .section-group {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-xl);
                }

                .section h3 {
                    font-size: 1rem;
                    font-weight: 600;
                    margin-bottom: var(--spacing-md);
                    text-transform: uppercase;
                    letter-spacing: 0.03em;
                    font-size: 0.875rem;
                    color: var(--color-text-secondary);
                }

                .data-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    gap: var(--spacing-lg);
                }

                .data-item {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-xs);
                }

                .data-item .label {
                    font-size: 0.8125rem;
                    color: var(--color-text-secondary);
                    font-weight: 500;
                }

                .data-item .value {
                    color: var(--color-text);
                }

                .data-item a.value {
                    color: var(--color-primary);
                    text-decoration: none;
                }

                .data-item a.value:hover {
                    text-decoration: underline;
                }

                .content-block {
                    background: var(--color-bg);
                    padding: var(--spacing-lg);
                    border-radius: 8px;
                    white-space: pre-wrap;
                    line-height: 1.6;
                }

                .feature-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: var(--spacing-sm);
                }

                .feature-item {
                    background: var(--color-bg);
                    border: 1px solid var(--color-border);
                    padding: var(--spacing-sm) var(--spacing-md);
                    border-radius: 6px;
                    font-size: 0.875rem;
                }

                .attachments {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: var(--spacing-md);
                }

                .attachment {
                    display: flex;
                    align-items: center;
                    gap: var(--spacing-md);
                    padding: var(--spacing-md);
                    background: var(--color-bg);
                    border: 1px solid var(--color-border);
                    border-radius: 8px;
                    text-decoration: none;
                    color: inherit;
                    transition: background 0.2s;
                }

                .attachment:hover {
                    background: #ebebed;
                }

                .attachment-icon {
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--color-surface);
                    border: 1px solid var(--color-border);
                    border-radius: 6px;
                    font-size: 0.625rem;
                    font-weight: 700;
                    color: var(--color-text-secondary);
                    flex-shrink: 0;
                }

                .attachment-details {
                    flex: 1;
                    min-width: 0;
                }

                .attachment-name {
                    font-size: 0.875rem;
                    font-weight: 500;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .attachment-meta {
                    font-size: 0.8125rem;
                    color: var(--color-text-secondary);
                }

                .empty-state {
                    text-align: center;
                    padding: 4rem 2rem;
                    background: var(--color-surface);
                    border: 1px solid var(--color-border);
                    border-radius: 12px;
                }

                .empty-state h2 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: var(--spacing-sm);
                }

                .empty-state p {
                    color: var(--color-text-secondary);
                }

                @media (max-width: 768px) {
                    body {
                        padding: var(--spacing-md);
                    }

                    .header-main {
                        flex-direction: column;
                    }

                    .metadata {
                        align-items: flex-start;
                    }

                    .data-grid {
                        grid-template-columns: 1fr;
                    }

                    .key-metrics {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
        </head>
        <body>
            <div class="dashboard-header">
                <h1>Submissions Dashboard</h1>
                <p>Project inquiries and client submissions</p>
            </div>

            <div class="stats-bar">
                <div class="stat-card">
                    <span class="number">${rows.length}</span>
                    <span class="label">Total Submissions</span>
                </div>
                <div class="stat-card">
                    <span class="number">${rows.filter((r) => r.budget === "enterprise" || r.budget === "large").length}</span>
                    <span class="label">High-Value</span>
                </div>
                <div class="stat-card">
                    <span class="number">${rows.filter((r) => r.timeframe === "urgent").length}</span>
                    <span class="label">Urgent</span>
                </div>
                <div class="stat-card">
                    <span class="number">${
                        rows.filter((r) => {
                            const files = JSON.parse(r.files || "[]").filter(
                                (f) => f !== null,
                            );
                            return files.length > 0;
                        }).length
                    }</span>
                    <span class="label">With Attachments</span>
                </div>
            </div>

            <div class="container">
                ${
                    rows.length === 0
                        ? `
                    <div class="empty-state">
                        <h2>No Submissions</h2>
                        <p>New project inquiries will appear here</p>
                    </div>
                `
                        : cards
                }
            </div>

            <script>
                setTimeout(() => location.reload(), 5 * 60 * 1000);
                console.log('Dashboard loaded: ${rows.length} submissions');
            </script>
        </body>
        </html>
    `;

    reply.type("text/html").send(html);
});

app.listen({ host: "0.0.0.0", port: process.env.PORT || 8080 });
