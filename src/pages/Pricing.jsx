// ============================================================================
// FILE: src/pages/Pricing.jsx
// ============================================================================
import { useState } from "react";
import {
    Check,
    Shield,
    ArrowRight,
    Code,
    Cpu,
    Brain,
    GraduationCap,
    Sparkles,
    Github,
    Smartphone,
    Wrench,
    Terminal,
    Zap,
    Mail,
    Lock,
} from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Link } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";
import { getTheme } from "../utils/theme";
import { suites } from "../data/products";

const Pricing = () => {
    const { darkMode } = useDarkMode();
    const theme = getTheme(darkMode);
    const [selectedIrisPlan, setSelectedIrisPlan] = useState("individual");

    const fmt = (n) => {
        if (n === null || n === undefined) return "—";
        if (n === 0) return "Free";
        return new Intl.NumberFormat(undefined, {
            style: "currency",
            currency: "EUR",
            maximumFractionDigits: 0,
        }).format(n);
    };

    const getIconComponent = (iconName) => {
        const icons = { Code, Cpu, Brain, GraduationCap };
        return icons[iconName] ?? Code;
    };

    const devSuite = suites.find((s) => s.id === "dev");
    const sysSuite = suites.find((s) => s.id === "sys");
    const irisSuite = suites.find((s) => s.id === "iris");
    const labSuite = suites.find((s) => s.id === "lab");

    const openSourceSuites = [devSuite, sysSuite].filter(Boolean);

    const irisPlanOptions = [
        { id: "individual", label: "Personal" },
        { id: "professional", label: "Team" },
        { id: "enterprise", label: "Organization" },
    ];

    const customServices = [
        {
            icon: Terminal,
            title: "CLI & Automation",
            description:
                "Custom command-line tools, shell pipelines, and developer workflow automation.",
        },
        {
            icon: Zap,
            title: "Developer Tooling",
            description:
                "Language servers, build tooling, code analysis tools, and IDE integrations.",
        },
        {
            icon: Smartphone,
            title: "Mobile Apps",
            description:
                "Native iOS applications with SwiftUI — productivity, utilities, and niche tools.",
        },
        {
            icon: Wrench,
            title: "System Software",
            description:
                "Low-level system utilities, monitoring tools, and performance-critical software.",
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-30"
                        style={{
                            backgroundImage: `radial-gradient(circle at 50% 50%, ${darkMode ? "rgba(99, 102, 241, 0.15)" : "rgba(99, 102, 241, 0.08)"}, transparent 50%)`,
                        }}
                    />
                    <div
                        className={`absolute top-1/4 left-1/4 w-96 h-96 ${theme.blobBlue} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob`}
                    />
                    <div
                        className={`absolute top-1/3 right-1/4 w-96 h-96 ${theme.blobPurple} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000`}
                    />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div
                            className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${theme.badgeGradient} rounded-full border ${theme.blobBlue}/20 mb-6 animate-fade-in`}
                        >
                            <Sparkles
                                className={`w-4 h-4 ${theme.textBlue} animate-pulse`}
                            />
                            <span className="text-sm font-medium">
                                Open Source, Premium & Custom
                            </span>
                        </div>
                        <h1
                            className={`text-5xl md:text-6xl font-bold ${theme.text} mb-6`}
                        >
                            Simple, Honest Pricing
                        </h1>
                        <p
                            className={`text-xl ${theme.textSecondary} max-w-3xl mx-auto`}
                        >
                            Most tools are free and open source. Premium AI
                            tooling stays paid. Apps have their own in-app
                            purchase. Custom work is project-based.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Open Source ─────────────────────────────────────── */}
            <section className="relative pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-10">
                        <div
                            className={`flex-1 h-px ${theme.border} border-t`}
                        />
                        <div className="flex items-center gap-3">
                            <SiGithub className="w-5 h-5 text-green-500" />
                            <h2
                                className={`text-2xl font-bold ${theme.text} whitespace-nowrap`}
                            >
                                Free & Open Source
                            </h2>
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/15 text-green-500 border border-green-500/30">
                                Apache 2.0
                            </span>
                        </div>
                        <div
                            className={`flex-1 h-px ${theme.border} border-t`}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {openSourceSuites.map((suite) => {
                            const IconComponent = getIconComponent(suite.icon);
                            return (
                                <div
                                    key={suite.id}
                                    data-animate
                                    className={`${theme.cardBg} rounded-3xl p-8 border ${theme.border} hover:border-green-500/40 transition-all duration-300`}
                                >
                                    <div className="flex items-start gap-4 mb-6">
                                        <div
                                            className={`w-12 h-12 rounded-xl bg-gradient-to-r ${suite.gradient} flex items-center justify-center flex-shrink-0`}
                                        >
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3
                                                className={`text-xl font-bold ${theme.text}`}
                                            >
                                                {suite.name}
                                            </h3>
                                            <p
                                                className={`text-sm ${theme.textSecondary}`}
                                            >
                                                {suite.tagline}
                                            </p>
                                        </div>
                                        <div className="ml-auto">
                                            <div
                                                className={`text-3xl font-bold ${theme.text}`}
                                            >
                                                Free
                                            </div>
                                            <div
                                                className={`text-xs ${theme.textSecondary} text-right`}
                                            >
                                                forever
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2 mb-6">
                                        {suite.tools.map((tool) => (
                                            <div
                                                key={tool.name}
                                                className="flex items-center gap-2"
                                            >
                                                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                <span
                                                    className={`text-sm ${theme.textSecondary}`}
                                                >
                                                    {tool.name}
                                                </span>
                                                <span
                                                    className={`ml-auto text-xs ${theme.textTertiary}`}
                                                >
                                                    {tool.status}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <a
                                        href="https://github.com/NoamFav"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r ${suite.gradient} text-white font-semibold rounded-full hover:shadow-xl transition`}
                                    >
                                        <SiGithub className="w-4 h-4" />
                                        View on GitHub
                                    </a>
                                </div>
                            );
                        })}
                    </div>

                    <p
                        className={`text-center text-sm ${theme.textSecondary} mt-6`}
                    >
                        Clone, fork, contribute, or just use — Apache 2.0 means
                        no restrictions.
                    </p>
                </div>
            </section>

            {/* ── Iris Suite (Paid) ────────────────────────────────── */}
            <section className="relative pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-10">
                        <div
                            className={`flex-1 h-px ${theme.border} border-t`}
                        />
                        <div className="flex items-center gap-3">
                            <Brain className="w-5 h-5 text-indigo-500" />
                            <h2
                                className={`text-2xl font-bold ${theme.text} whitespace-nowrap`}
                            >
                                NF Iris Suite
                            </h2>
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-400 border border-indigo-500/30">
                                Premium
                            </span>
                        </div>
                        <div
                            className={`flex-1 h-px ${theme.border} border-t`}
                        />
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {irisPlanOptions.map((plan) => (
                            <button
                                key={plan.id}
                                onClick={() => setSelectedIrisPlan(plan.id)}
                                className={`px-6 py-2.5 rounded-full text-sm font-medium transition ${
                                    selectedIrisPlan === plan.id
                                        ? `bg-gradient-to-r ${irisSuite.gradient} text-white shadow-lg`
                                        : `${theme.cardBg} ${theme.textSecondary} border ${theme.border} ${theme.hoverBg}`
                                }`}
                            >
                                {plan.label}
                            </button>
                        ))}
                    </div>

                    <div
                        data-animate
                        className={`${theme.cardBg} rounded-3xl border ${theme.border} overflow-hidden`}
                    >
                        {/* Suite price header */}
                        <div
                            className={`bg-gradient-to-r ${irisSuite.gradient} p-8 text-white`}
                        >
                            <div className="flex items-start justify-between flex-wrap gap-6">
                                <div>
                                    <p className="text-indigo-200 text-sm font-medium mb-1">
                                        Local-first AI platform
                                    </p>
                                    <h3 className="text-3xl font-bold">
                                        {irisSuite.name}
                                    </h3>
                                    <p className="text-indigo-100 mt-2 max-w-md">
                                        {irisSuite.description}
                                    </p>
                                </div>
                                <div className="text-right">
                                    {selectedIrisPlan === "individual" && (
                                        <>
                                            <div className="text-4xl font-bold">
                                                {fmt(
                                                    irisSuite.plans.individual
                                                        .annual,
                                                )}
                                                <span className="text-xl font-normal">
                                                    /yr
                                                </span>
                                            </div>
                                            <div className="text-indigo-200 text-sm mt-1">
                                                or{" "}
                                                {fmt(
                                                    irisSuite.plans.individual
                                                        .oneTime,
                                                )}{" "}
                                                one-time
                                            </div>
                                        </>
                                    )}
                                    {selectedIrisPlan === "professional" && (
                                        <>
                                            <div className="text-4xl font-bold">
                                                {fmt(
                                                    irisSuite.plans.professional
                                                        .annual,
                                                )}
                                                <span className="text-xl font-normal">
                                                    /yr
                                                </span>
                                            </div>
                                            <div className="text-indigo-200 text-sm mt-1">
                                                {
                                                    irisSuite.plans.professional
                                                        .seats
                                                }{" "}
                                                seat · priority support
                                            </div>
                                        </>
                                    )}
                                    {selectedIrisPlan === "enterprise" && (
                                        <>
                                            <div className="text-4xl font-bold">
                                                {fmt(
                                                    irisSuite.plans.enterprise
                                                        .annual,
                                                )}
                                                <span className="text-xl font-normal">
                                                    /yr
                                                </span>
                                            </div>
                                            <div className="text-indigo-200 text-sm mt-1">
                                                {
                                                    irisSuite.plans.enterprise
                                                        .seats
                                                }{" "}
                                                seats · SLA included
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Tools list */}
                        <div className="p-8">
                            <p
                                className={`text-sm font-semibold ${theme.textSecondary} uppercase tracking-wide mb-4`}
                            >
                                Included tools
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {irisSuite.tools.map((tool) => (
                                    <div
                                        key={tool.name}
                                        className={`rounded-xl p-4 border ${theme.border} ${theme.hoverBg} transition`}
                                    >
                                        <div className="flex items-center justify-between mb-1">
                                            <span
                                                className={`font-semibold ${theme.text} text-sm`}
                                            >
                                                {tool.name}
                                            </span>
                                            <span
                                                className={`text-xs ${theme.textTertiary}`}
                                            >
                                                {tool.status}
                                            </span>
                                        </div>
                                        <p
                                            className={`text-xs ${theme.textSecondary}`}
                                        >
                                            {tool.tagline}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap items-center gap-6 mb-8">
                                <div className="flex items-center gap-2">
                                    <Lock className="w-4 h-4 text-indigo-500" />
                                    <span
                                        className={`text-sm ${theme.textSecondary}`}
                                    >
                                        Fully offline
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Shield className="w-4 h-4 text-indigo-500" />
                                    <span
                                        className={`text-sm ${theme.textSecondary}`}
                                    >
                                        No telemetry
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-indigo-500" />
                                    <span
                                        className={`text-sm ${theme.textSecondary}`}
                                    >
                                        Offline activation
                                    </span>
                                </div>
                            </div>

                            <button
                                onClick={() =>
                                    alert(
                                        `Checkout coming soon!\n\nInterested in ${irisSuite.name}?\nContact us at contact@nf-software.com`,
                                    )
                                }
                                className={`w-full py-4 bg-gradient-to-r ${irisSuite.gradient} text-white font-semibold rounded-full hover:shadow-xl transition cursor-pointer`}
                            >
                                Get Iris Suite
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── NF Lab (IAP) ─────────────────────────────────────── */}
            <section className="relative pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-10">
                        <div
                            className={`flex-1 h-px ${theme.border} border-t`}
                        />
                        <div className="flex items-center gap-3">
                            <GraduationCap className="w-5 h-5 text-emerald-500" />
                            <h2
                                className={`text-2xl font-bold ${theme.text} whitespace-nowrap`}
                            >
                                NF Lab
                            </h2>
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
                                In-App Purchase
                            </span>
                        </div>
                        <div
                            className={`flex-1 h-px ${theme.border} border-t`}
                        />
                    </div>

                    <p
                        className={`text-center ${theme.textSecondary} mb-10 max-w-xl mx-auto`}
                    >
                        Each app is purchased individually through its platform
                        store. No subscriptions — you own it.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {labSuite.tools.map((tool) => (
                            <div
                                key={tool.name}
                                data-animate
                                className={`${theme.cardBg} rounded-2xl p-6 border ${theme.border} hover:border-emerald-500/40 transition-all duration-300`}
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h3
                                            className={`font-bold ${theme.text}`}
                                        >
                                            {tool.name}
                                        </h3>
                                        <p
                                            className={`text-xs ${theme.textSecondary} mt-0.5`}
                                        >
                                            {tool.tagline}
                                        </p>
                                    </div>
                                    <span
                                        className={`text-xs px-2 py-1 rounded-full ${
                                            tool.status === "Beta"
                                                ? "bg-yellow-500/20 text-yellow-500"
                                                : tool.status === "Alpha"
                                                  ? "bg-purple-500/20 text-purple-500"
                                                  : "bg-blue-500/20 text-blue-500"
                                        }`}
                                    >
                                        {tool.status}
                                    </span>
                                </div>
                                <p
                                    className={`text-sm ${theme.textSecondary} mb-4`}
                                >
                                    {tool.description}
                                </p>
                                <div className="flex flex-wrap gap-1 mb-4">
                                    {(tool.tech ?? []).map((t) => (
                                        <span
                                            key={t}
                                            className={`px-2 py-0.5 text-xs rounded border ${theme.border} ${theme.textTertiary}`}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div
                                    className={`pt-4 border-t ${theme.border} flex items-center justify-between`}
                                >
                                    <span
                                        className={`text-xs ${theme.textSecondary}`}
                                    >
                                        In-App Purchase
                                    </span>
                                    <span
                                        className={`text-xl font-bold ${theme.text}`}
                                    >
                                        {fmt(tool.plan?.oneTime)}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Custom Work ──────────────────────────────────────── */}
            <section className="relative pb-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-10">
                        <div
                            className={`flex-1 h-px ${theme.border} border-t`}
                        />
                        <div className="flex items-center gap-3">
                            <Wrench className="w-5 h-5 text-blue-500" />
                            <h2
                                className={`text-2xl font-bold ${theme.text} whitespace-nowrap`}
                            >
                                Custom Work
                            </h2>
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/30">
                                Project-Based
                            </span>
                        </div>
                        <div
                            className={`flex-1 h-px ${theme.border} border-t`}
                        />
                    </div>

                    <div
                        data-animate
                        className={`${theme.cardBg} rounded-3xl border ${theme.border} overflow-hidden`}
                    >
                        <div
                            className={`bg-gradient-to-r ${theme.gradientPrimary} p-8 text-white`}
                        >
                            <h3 className="text-3xl font-bold mb-2">
                                NF Software Studio
                            </h3>
                            <p className="text-blue-100 max-w-2xl">
                                Independent studio taking on focused software
                                projects. From a small CLI tool to a full iOS
                                app — project-based pricing, no retainer
                                required.
                            </p>
                        </div>

                        <div className="p-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                                {customServices.map((service) => (
                                    <div
                                        key={service.title}
                                        className={`flex gap-4 p-4 rounded-xl border ${theme.border} ${theme.hoverBg} transition`}
                                    >
                                        <div
                                            className={`w-10 h-10 rounded-lg bg-gradient-to-r ${theme.gradientPrimary} flex items-center justify-center flex-shrink-0`}
                                        >
                                            <service.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h4
                                                className={`font-semibold ${theme.text} mb-1`}
                                            >
                                                {service.title}
                                            </h4>
                                            <p
                                                className={`text-sm ${theme.textSecondary}`}
                                            >
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div
                                className={`flex flex-wrap items-center gap-6 mb-8 p-4 rounded-xl ${darkMode ? "bg-white/5" : "bg-black/3"} border ${theme.border}`}
                            >
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-green-500" />
                                    <span
                                        className={`text-sm ${theme.textSecondary}`}
                                    >
                                        Fixed-scope quotes
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-green-500" />
                                    <span
                                        className={`text-sm ${theme.textSecondary}`}
                                    >
                                        No retainer required
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-green-500" />
                                    <span
                                        className={`text-sm ${theme.textSecondary}`}
                                    >
                                        Source code included
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-green-500" />
                                    <span
                                        className={`text-sm ${theme.textSecondary}`}
                                    >
                                        Auto-entrepreneur registered (FR)
                                    </span>
                                </div>
                            </div>

                            <Link
                                to="/contact"
                                className={`inline-flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r ${theme.gradientPrimary} text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-[1.02]`}
                            >
                                <Mail className="w-5 h-5" />
                                Discuss Your Project
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Pricing;
