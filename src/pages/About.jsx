// ============================================================================
// FILE: src/pages/About.jsx
// ============================================================================
import {
    ArrowRight,
    Mail,
    Sparkles,
    Lock,
    Gauge,
    Layers,
    GitBranch,
    Lightbulb,
    Code,
    Rocket,
    Star,
    Package,
} from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Link } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";
import { getTheme } from "../utils/theme";
import { stats, timeline, principles } from "../data/siteData";

const About = () => {
    const { darkMode } = useDarkMode();
    const theme = getTheme(darkMode);

    const iconMap = {
        "Privacy by Default": Lock,
        "Performance Matters": Gauge,
        "Craft Over Scale": Layers,
        "Open by Design": GitBranch,
        "AI as Augmentation": Lightbulb,
    };

    const statsIcons = [Code, Star, Rocket, Sparkles];

    return (
        <>
            {/* ── Hero ─────────────────────────────────────────────── */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div
                        className="absolute inset-0 opacity-30"
                        style={{
                            backgroundImage: `radial-gradient(circle at 50% 40%, ${darkMode ? "rgba(99,102,241,.15)" : "rgba(99,102,241,.08)"}, transparent 55%)`,
                        }}
                    />
                    <div
                        className={`absolute top-1/4 left-1/4 w-80 h-80 ${theme.blobBlue} rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob`}
                    />
                    <div
                        className={`absolute top-1/3 right-1/4 w-80 h-80 ${theme.blobPurple} rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000`}
                    />
                </div>

                <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
                    <div
                        className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${theme.badgeGradient} rounded-full border ${theme.blobBlue}/20 animate-fade-in`}
                    >
                        <Sparkles
                            className={`w-4 h-4 ${theme.textBlue} animate-pulse`}
                        />
                        <span className="text-sm font-medium">
                            NF Software Studio · Est. 2023
                        </span>
                    </div>

                    <h1
                        className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight ${theme.text} animate-fade-in-up`}
                    >
                        Craft meets
                        <br />
                        <span
                            className={`bg-gradient-to-r ${theme.gradientAccent} bg-clip-text text-transparent animate-gradient`}
                        >
                            performance
                        </span>
                    </h1>

                    <p
                        className={`text-lg md:text-xl ${theme.textSecondary} max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200`}
                    >
                        Independent software studio focused on developer tools,
                        open source, and custom software built for speed and
                        clarity.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center pt-4 animate-fade-in-up animation-delay-400">
                        <Link
                            to="/products"
                            className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${theme.gradientPrimary} text-white font-semibold rounded-full hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105`}
                        >
                            Explore Products
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a
                            href="https://github.com/NoamFav"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-6 py-3 ${theme.bgButton} border ${theme.borderButton} font-semibold rounded-full hover:border-gray-400 transition-all duration-300 transform hover:scale-105`}
                        >
                            <SiGithub className="w-4 h-4" />
                            GitHub
                        </a>
                    </div>
                </div>
            </section>

            {/* ── About + Stats ────────────────────────────────────── */}
            <section className="relative py-20 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* About text */}
                    <div className="space-y-5">
                        <h2 className={`text-3xl font-bold ${theme.text}`}>
                            About the studio
                        </h2>
                        <p className={`${theme.textSecondary} leading-relaxed`}>
                            I'm Noam — a solo developer building NF Software as
                            an independent studio. I started in 2023 with a
                            simple goal: build the tools I actually want to use.
                            Fast, minimal, privacy-first, no tracking.
                        </p>
                        <p className={`${theme.textSecondary} leading-relaxed`}>
                            NF Dev Suite and NF Sys Suite are fully open source
                            under Apache 2.0 — use them, fork them, contribute.
                            Iris Suite stays premium because local AI
                            infrastructure takes real work to maintain. NF Lab
                            apps are on the App Store with one-time purchases.
                        </p>
                        <p className={`${theme.textSecondary} leading-relaxed`}>
                            Alongside the products, I take on custom software
                            projects — CLI tools, automation pipelines, mobile
                            apps, developer tooling. I'm registering as an
                            auto-entrepreneur in France to formalize the studio
                            side of things.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            {["Go", "Rust", "Swift", "Lua", "TypeScript", "C", "Python"].map(
                                (lang) => (
                                    <span
                                        key={lang}
                                        className={`px-3 py-1 text-sm rounded-lg ${theme.bgButton} border ${theme.borderButton} ${theme.textSecondary}`}
                                    >
                                        {lang}
                                    </span>
                                ),
                            )}
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, i) => {
                            const Icon = statsIcons[i] ?? Sparkles;
                            return (
                                <div
                                    key={stat.label}
                                    className={`${theme.cardBg} rounded-2xl p-6 border ${theme.border} hover:border-blue-500/40 transition-all duration-300`}
                                >
                                    <Icon className="w-8 h-8 text-blue-500 mb-3" />
                                    <div
                                        className={`text-3xl font-bold ${theme.text} mb-1`}
                                    >
                                        {stat.value}
                                    </div>
                                    <div
                                        className={`text-sm ${theme.textSecondary}`}
                                    >
                                        {stat.label}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Principles ───────────────────────────────────────── */}
            <section className="relative py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-10">
                        <h2 className={`text-3xl font-bold ${theme.text} mb-2`}>
                            What I believe
                        </h2>
                        <p className={`${theme.textSecondary}`}>
                            Five principles that shape how I build and what I
                            ship.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {principles.map((principle) => {
                            const Icon = iconMap[principle.title] ?? Sparkles;
                            return (
                                <div
                                    key={principle.title}
                                    className={`${theme.cardBg} rounded-2xl p-6 border ${theme.border} hover:border-blue-500/40 transition-all duration-300`}
                                >
                                    <Icon className="w-8 h-8 text-blue-500 mb-3" />
                                    <h3
                                        className={`font-bold ${theme.text} mb-2`}
                                    >
                                        {principle.title}
                                    </h3>
                                    <p
                                        className={`text-sm ${theme.textSecondary} leading-relaxed`}
                                    >
                                        {principle.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Timeline ─────────────────────────────────────────── */}
            <section className="relative py-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="mb-10">
                        <h2 className={`text-3xl font-bold ${theme.text} mb-2`}>
                            The story so far
                        </h2>
                        <p className={`${theme.textSecondary}`}>
                            Two years of building, shipping, and learning in
                            public.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Vertical line */}
                        <div
                            className={`absolute left-[22px] top-0 bottom-0 w-px ${theme.border} border-l`}
                        />

                        <div className="space-y-6">
                            {timeline.map((milestone, index) => (
                                <div
                                    key={`${milestone.year}-${index}`}
                                    className="relative flex gap-6 pl-12"
                                >
                                    {/* Dot */}
                                    <div
                                        className={`absolute left-0 w-11 h-11 rounded-full bg-gradient-to-r ${theme.gradientPrimary} flex items-center justify-center flex-shrink-0 text-white text-xs font-bold`}
                                    >
                                        {milestone.year.slice(2)}
                                    </div>

                                    <div
                                        className={`${theme.cardBg} rounded-xl p-5 border ${theme.border} flex-1 hover:border-blue-500/40 transition-all duration-300`}
                                    >
                                        <h3
                                            className={`font-bold ${theme.text} mb-1`}
                                        >
                                            {milestone.title}
                                        </h3>
                                        <p
                                            className={`text-sm ${theme.textSecondary} leading-relaxed`}
                                        >
                                            {milestone.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ──────────────────────────────────────────────── */}
            <section className="relative py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div
                        className={`${theme.cardBg} rounded-3xl p-10 md:p-16 text-center space-y-6 border ${theme.border} relative overflow-hidden`}
                    >
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: `radial-gradient(circle at 2px 2px, ${darkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)"} 1px, transparent 0)`,
                                    backgroundSize: "32px 32px",
                                }}
                            />
                        </div>

                        <div className="relative z-10">
                            <h2
                                className={`text-3xl md:text-5xl font-bold ${theme.text} mb-4`}
                            >
                                Want to build something?
                            </h2>
                            <p
                                className={`${theme.textSecondary} max-w-xl mx-auto mb-8`}
                            >
                                I take on custom projects and love hearing about
                                interesting problems. Drop me a line.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center">
                                <Link
                                    to="/contact"
                                    className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${theme.gradientPrimary} text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105`}
                                >
                                    <Mail className="w-5 h-5" />
                                    Get in Touch
                                </Link>
                                <Link
                                    to="/products"
                                    className={`inline-flex items-center gap-2 px-8 py-4 ${theme.cardBg} border ${theme.border} font-semibold rounded-full hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105`}
                                >
                                    <Package className="w-5 h-5" />
                                    Explore Products
                                </Link>
                            </div>

                            <div className="flex items-center justify-center gap-6 pt-8">
                                <a
                                    href="https://github.com/NoamFav"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-2 text-sm ${theme.textSecondary} hover:${theme.text} transition`}
                                >
                                    <SiGithub className="w-4 h-4" />
                                    GitHub
                                </a>
                                <a
                                    href="mailto:contact@nf-software.com"
                                    className={`flex items-center gap-2 text-sm ${theme.textSecondary} hover:${theme.text} transition`}
                                >
                                    <Mail className="w-4 h-4" />
                                    contact@nf-software.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
