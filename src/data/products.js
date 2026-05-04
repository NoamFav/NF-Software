// ============================================================================
// FILE: src/data/products.js
// ============================================================================

import { slugify } from "../lib/slug";

export const suites = [
    {
        id: "dev",
        slug: "dev",
        name: "NF Dev Suite",
        tagline: "Complete developer automation toolkit",
        description:
            "Full developer automation toolkit integrating all Git, repo, and productivity utilities.",
        gradient: "from-blue-500 to-cyan-500",
        icon: "Code",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
        openSource: true,
        license: "Apache-2.0",
        tools: [
            {
                name: "auto-commit",
                slug: "auto-commit",
                tagline: "AI-Powered Git Automation",
                description:
                    "High-performance automation tool managing commits, pushes, and repository cleanup with AI-generated conventional commit messages.",
                features: [
                    "AI commit messages - Context-aware and consistent",
                    "Batch operations - Multi-repo support",
                    "Zvezda integration - Seamless workflow",
                ],
                tech: ["Go", "Python", "OpenAI API"],
                status: "Beta",
                openSource: true,
                license: "Apache-2.0",
                github: true,
                plan: { annual: 0, oneTime: 0 },
            },
            {
                name: "zvezda",
                slug: "zvezda",
                tagline: "Visual DevOps CLI",
                description:
                    "Modern terminal interface built on Charm stack providing real-time repository analytics and interactive dashboards.",
                features: [
                    "Terminal UI - Beautiful Bubble Tea interface",
                    "Repo analytics - Real-time insights",
                    "GitHub integration - Native API support",
                ],
                tech: ["Go", "Bubble Tea", "Lipgloss"],
                status: "Alpha",
                openSource: true,
                license: "Apache-2.0",
                github: true,
                plan: { annual: 0, oneTime: 0 },
            },
            {
                name: "repoops",
                slug: "repoops",
                tagline: "Repository Orchestration Suite",
                description:
                    "Advanced CLI for large-scale repository management with automated scanning, pruning, and analytics.",
                features: [
                    "Multi-repo management - Unified control",
                    "Batch operations - Automated workflows",
                    "Health analytics - Code quality insights",
                ],
                tech: ["Go", "GitHub API", "SQLite"],
                status: "In Development",
                openSource: true,
                license: "Apache-2.0",
                github: true,
                plan: { annual: 0, oneTime: 0 },
            },
            {
                name: "CodeGrep",
                slug: "code-grep",
                tagline: "Syntax-Aware Code Search",
                description:
                    "High-performance code search using Tree-sitter for syntax-aware, context-rich code discovery.",
                features: [
                    "AST parsing - Understands code structure",
                    "Multi-language - Supports 40+ languages",
                    "Fast indexing - 100K+ files in seconds",
                ],
                tech: ["Rust", "Tree-sitter", "Regex"],
                status: "In Development",
                openSource: true,
                license: "Apache-2.0",
                github: true,
                plan: { annual: 0, oneTime: 0 },
            },
            {
                name: "NFvim Suite",
                slug: "nfvim-suite",
                tagline: "Neovim Workflow Environment",
                description:
                    "Curated Neovim setup with custom plugins including Apple Music control and Cyberpunk theme.",
                features: [
                    "Open Source",
                    "LSP integration - Full language support",
                    "Custom plugins - apple_music.nvim & 2077 theme",
                    "Optimized config - Professional workflow",
                ],
                tech: ["Lua", "VimScript", "Tree-sitter"],
                status: "Live",
                openSource: true,
                license: "Apache-2.0",
                github: true,
                plan: { annual: 0, oneTime: 0 },
            },
        ],
    },
    {
        id: "sys",
        slug: "sys",
        name: "NF Sys Suite",
        tagline: "System telemetry and visualization",
        description:
            "Real-time system telemetry, dashboards, and network visualization for performance monitoring.",
        gradient: "from-purple-500 to-pink-500",
        icon: "Cpu",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
        openSource: true,
        license: "Apache-2.0",
        tools: [
            {
                name: "Sysmon-CLI",
                slug: "sysmon-cli",
                tagline: "Terminal System Monitor",
                description:
                    "Cross-platform command-line system monitor with minimal overhead and maximum insight.",
                features: [
                    "Real-time metrics - CPU, RAM, disk, network",
                    "Low overhead - Less than 1% CPU usage",
                    "Cross-platform - Linux, macOS, Windows, BSD",
                ],
                tech: ["C", "POSIX", "IOKit", "procfs"],
                status: "Alpha",
                openSource: true,
                license: "Apache-2.0",
                github: true,
                plan: { annual: 0, oneTime: 0 },
            },
            {
                name: "SysDash Ultra",
                slug: "sysdash-ultra",
                tagline: "Intelligent Performance Dashboard",
                description:
                    "Graphical monitoring suite with predictive analytics and interactive visualizations.",
                features: [
                    "Predictive analytics - AI-powered alerts",
                    "Real-time charts - Interactive dashboards",
                    "GPU metrics - Complete system view",
                ],
                tech: ["Rust", "SwiftUI", "WebGL"],
                status: "In Development",
                openSource: true,
                license: "Apache-2.0",
                github: true,
                plan: { annual: 0, oneTime: 0 },
            },
            {
                name: "NetViz Pro",
                slug: "netviz-pro",
                tagline: "Network Visualization Platform",
                description:
                    "3D network analysis tool transforming traffic data into visual maps with anomaly detection.",
                features: [
                    "3D visualization - WebGL-powered maps",
                    "Packet inspection - Deep protocol analysis",
                    "Anomaly detection - ML-based alerts",
                ],
                tech: ["Rust", "libpcap", "BPF", "WebGL"],
                status: "In Development",
                openSource: true,
                license: "Apache-2.0",
                github: true,
                plan: { annual: 0, oneTime: 0 },
            },
        ],
    },
    {
        id: "iris",
        slug: "iris",
        name: "NF Iris Suite",
        tagline: "Local-first AI platform",
        description:
            "AI assistant platform with local voice, contextual memory, and modular agents - fully offline.",
        gradient: "from-indigo-500 to-purple-500",
        icon: "Brain",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
        plans: {
            individual: {
                annual: 49,
                oneTime: 149,
                skuAnnual: "suite_iris_annual_001",
                skuOneTime: "suite_iris_onetime_001",
            },
            professional: {
                annual: 69,
                seats: 1,
                sku: "suite_iris_professional_001",
            },
            enterprise: {
                annual: 299,
                seats: 5,
                sku: "suite_iris_enterprise_001",
            },
        },
        tools: [
            {
                name: "Iris Core",
                slug: "iris-core",
                tagline: "Local-First AI Assistant",
                description:
                    "Multimodal assistant with speech recognition, NLU, and agent-based automation - operates fully offline.",
                features: [
                    "Offline operation - Complete privacy",
                    "Voice control - Whisper.cpp & Coqui TTS",
                    "Contextual memory - Learns your workflow",
                ],
                tech: ["Rust", "Go", "Whisper.cpp", "Coqui TTS"],
                status: "Alpha",
                github: false,
                plan: {
                    annual: 19,
                    oneTime: 39,
                    skuAnnual: "tool_iris-core_annual_001",
                    skuOneTime: "tool_iris-core_onetime_001",
                },
            },
            {
                name: "Iris Voice CLI",
                slug: "iris-voice-cli",
                tagline: "Push-to-Talk AI Interface",
                description:
                    "Lightweight CLI enabling real-time voice communication with Iris using hotkey activation.",
                features: [
                    "Hotkey activation - Instant access",
                    "Local ASR - Privacy-first transcription",
                    "Developer integration - Terminal-native",
                ],
                tech: ["Rust"],
                status: "Alpha",
                github: false,
                plan: {
                    annual: 12,
                    oneTime: 25,
                    skuAnnual: "tool_iris-voice-cli_annual_001",
                    skuOneTime: "tool_iris-voice-cli_onetime_001",
                },
            },
            {
                name: "Iris Factory",
                slug: "iris-factory",
                tagline: "Agent Generation Framework",
                description:
                    "Dynamic agent creation system enabling Iris to self-assemble new capabilities as needed.",
                features: [
                    "Dynamic agents - Self-generating tasks",
                    "Task automation - Autonomous execution",
                    "Extensible - Custom agent creation",
                ],
                tech: ["Go"],
                status: "In Development",
                github: false,
                plan: {
                    annual: 9,
                    oneTime: 19,
                    skuAnnual: "tool_iris-factory_annual_001",
                    skuOneTime: "tool_iris-factory_onetime_001",
                },
            },
            {
                name: "Iris Memory",
                slug: "iris-memory",
                tagline: "Graph-Based Context Database",
                description:
                    "Hybrid database storing interconnected data about user habits and preferences.",
                features: [
                    "Graph database - Connected knowledge",
                    "Context recall - Session continuity",
                    "User adaptation - Personalized AI",
                ],
                tech: ["MongoDB", "Go"],
                status: "Testing",
                github: false,
                plan: {
                    annual: 9,
                    oneTime: 19,
                    skuAnnual: "tool_iris-memory_annual_001",
                    skuOneTime: "tool_iris-memory_onetime_001",
                },
            },
        ],
    },
    {
        id: "lab",
        slug: "lab",
        name: "NF Lab Suite",
        tagline: "Experimental tools and learning platforms",
        description:
            "Experimental and educational tools for learning, visualization, and research. Available via in-app purchase.",
        gradient: "from-emerald-500 to-teal-500",
        icon: "GraduationCap",
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&q=80",
        iap: true,
        tools: [
            {
                name: "BitVoyager",
                slug: "bitvoyager",
                tagline: "Gamified Coding Platform",
                description:
                    "Browser-based learning platform with XP-based progression and interactive coding challenges.",
                features: [
                    "XP progression - Gamified learning",
                    "Interactive terminal - Real coding practice",
                    "Multi-paradigm - Multiple languages supported",
                ],
                tech: ["TypeScript", "Rust", "WebAssembly", "xterm.js"],
                status: "Beta",
                iap: true,
                github: false,
                plan: { oneTime: 6 },
            },
            {
                name: "WorkTime",
                slug: "worktime",
                tagline: "Intelligent Productivity Tracker",
                description:
                    "iOS app automatically tracking productive time through app usage and motion data analysis.",
                features: [
                    "Auto-tracking - Passive monitoring",
                    "Analytics - Detailed insights",
                    "Screen Time API - Native integration",
                ],
                tech: ["Swift", "SwiftUI", "CoreData"],
                status: "In Development",
                iap: true,
                github: false,
                plan: { oneTime: 4 },
            },
            {
                name: "GymBuddy",
                slug: "gymbuddy",
                tagline: "Your Smart Gym Knowledge Coach",
                description:
                    "iOS app that helps you master fitness fundamentals through adaptive quizzes, exercise facts, and intelligent spaced repetition.",
                features: [
                    "Adaptive Quizzes – Difficulty adjusts to your level",
                    "Exercise Library – Facts, cues, and common mistakes",
                    "Spaced Repetition – Long-term retention system",
                ],
                tech: ["Swift", "SwiftUI", "CoreData"],
                status: "Alpha",
                iap: true,
                github: false,
                plan: { oneTime: 5 },
            },
        ],
    },
];

export const standaloneTools = [
    {
        name: "AutoSort",
        slug: "autosort",
        tagline: "Automated File Organization",
        description:
            "Background service continuously monitoring and organizing files with OCR recognition and intelligent renaming.",
        features: [
            "Auto-organization - Rule-based sorting",
            "OCR renaming - Intelligent file naming",
            "Metadata extraction - Smart categorization",
        ],
        tech: ["Go", "fsnotify", "YAML", "Tesseract OCR"],
        status: "Alpha",
        gradient: "from-orange-500 to-red-500",
        icon: "FolderTree",
        openSource: true,
        license: "Apache-2.0",
        github: true,
        plan: { annual: 0, oneTime: 0 },
    },
];

// Legacy/archived projects for reference
export const archivedProjects = [
    {
        name: "ShadowedHunter",
        tagline: "Metroidvania Game Project",
        description:
            "Story-driven Metroidvania with puzzle mechanics and deep combat.",
        tech: ["C#", "Unity", "DOTween"],
        status: "Design Phase",
    },
    {
        name: "QueryCrust",
        tagline: "Visual Database Query Tool",
        description:
            "Web-based platform for designing and executing database queries.",
        tech: ["React", "Flask", "MySQL"],
        status: "Completed",
    },
];

export const products = suites.flatMap((suite) =>
    suite.tools.map((tool) => {
        const suiteAnnual = suite.plans?.individual?.annual ?? null;
        const suiteOneTime = suite.plans?.individual?.oneTime ?? null;

        return {
            ...tool,
            slug: tool.slug ?? slugify(tool.name),
            suite: suite.name,
            suiteId: suite.id,
            suiteSlug: suite.slug ?? slugify(suite.name),
            suiteGradient: suite.gradient,
            suiteOpenSource: suite.openSource ?? false,
            suiteIap: suite.iap ?? false,
            image: suite.image,
            suitePricing: { annual: suiteAnnual, oneTime: suiteOneTime },
            plan: tool.plan ?? null,
        };
    }),
);
