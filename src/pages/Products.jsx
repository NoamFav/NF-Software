// ============================================================================
// FILE: src/pages/Products.jsx - UPDATED WITH SUITE STRUCTURE
// ============================================================================
import { useState, useEffect } from "react";
import {
    ArrowRight,
    Github,
    CheckCircle,
    Filter,
    ChevronRight,
    Package,
    Code,
    Cpu,
    Brain,
    GraduationCap,
    FolderTree,
} from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";
import { getTheme } from "../utils/theme";
import { suites, standaloneTools } from "../data/products";

const Products = () => {
    const { darkMode } = useDarkMode();
    const theme = getTheme(darkMode);
    const [activeFilter, setActiveFilter] = useState("All");
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getIconComponent = (iconName) => {
        const icons = {
            Code,
            Cpu,
            Brain,
            GraduationCap,
            FolderTree,
        };
        return icons[iconName] || Code;
    };

    const allTools = suites.flatMap((suite) =>
        suite.tools.map((tool) => ({
            ...tool,
            suite: suite.name,
            suiteGradient: suite.gradient,
        })),
    );

    const getStatusColor = (status) => {
        switch (status) {
            case "Live":
                return "border-green-500/50 text-green-500 bg-green-500/10";
            case "Beta":
                return "border-yellow-500/50 text-yellow-500 bg-yellow-500/10";
            case "In Development":
                return "border-blue-500/50 text-blue-500 bg-blue-500/10";
            default:
                return "border-gray-500/50 text-gray-500 bg-gray-500/10";
        }
    };

    return (
        <>
            {/* Header Section */}
            <section
                id="products"
                className="relative pt-32 pb-20 px-6 overflow-hidden"
            >
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
                    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center space-y-6 mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-6">
                            <Package className="w-4 h-4 text-blue-500" />
                            <span className="text-sm font-medium">
                                4 Suites, 16+ Tools
                            </span>
                        </div>

                        <h1
                            className={`text-5xl md:text-6xl lg:text-7xl font-bold ${theme.text}`}
                        >
                            Professional Software
                            <br />
                            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                Built to Excel
                            </span>
                        </h1>

                        <p
                            className={`text-xl ${theme.textSecondary} max-w-3xl mx-auto`}
                        >
                            Four complete suites covering development, system
                            monitoring, AI assistance, and experimental tools.
                            Each tool is crafted with precision and built to
                            last.
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
                        <Filter className="w-5 h-5 text-gray-500" />
                        {["All", "Live", "Beta", "In Development"].map(
                            (filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                        activeFilter === filter
                                            ? `bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg`
                                            : `${theme.cardBg} ${theme.textSecondary} border ${theme.border} ${theme.hoverBg}`
                                    }`}
                                >
                                    {filter}
                                    {filter !== "All" && (
                                        <span className="ml-2 opacity-60">
                                            (
                                            {
                                                allTools.filter(
                                                    (p) => p.status === filter,
                                                ).length
                                            }
                                            )
                                        </span>
                                    )}
                                </button>
                            ),
                        )}
                    </div>
                </div>
            </section>

            {/* Suites Section */}
            <section className="relative pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    {suites.map((suite) => {
                        const IconComponent = getIconComponent(suite.icon);
                        const suiteTools =
                            activeFilter === "All"
                                ? suite.tools
                                : suite.tools.filter(
                                      (t) => t.status === activeFilter,
                                  );

                        if (suiteTools.length === 0 && activeFilter !== "All")
                            return null;

                        return (
                            <div
                                key={suite.id}
                                id={suite.id}
                                data-animate
                                className="mb-24"
                            >
                                {/* Suite Header Card */}
                                <div
                                    className={`${theme.cardBg} rounded-3xl p-8 border ${theme.border} mb-8 hover:border-blue-500/50 transition-all duration-300`}
                                >
                                    <div className="flex items-start justify-between flex-wrap gap-6">
                                        <div className="space-y-4 flex-1">
                                            <div className="flex items-center gap-3">
                                                <IconComponent className="w-12 h-12 text-blue-500" />
                                                <div>
                                                    <h2
                                                        className={`text-3xl font-bold ${theme.text}`}
                                                    >
                                                        {suite.name}
                                                    </h2>
                                                    <p
                                                        className={`${theme.textSecondary}`}
                                                    >
                                                        {suite.tagline}
                                                    </p>
                                                </div>
                                            </div>
                                            <p
                                                className={`text-lg ${theme.textSecondary}`}
                                            >
                                                {suite.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {suite.tools.map((tool) => (
                                                    <span
                                                        key={tool.name}
                                                        className={`px-3 py-1 ${theme.cardBg} border ${theme.border} rounded-lg text-sm`}
                                                    >
                                                        {tool.name}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div
                                            className={`${darkMode ? "bg-black" : "bg-white"} rounded-2xl p-6 border ${theme.border} min-w-[280px]`}
                                        >
                                            <div className="space-y-4">
                                                <div>
                                                    <div
                                                        className={`text-sm ${theme.textTertiary} mb-1`}
                                                    >
                                                        Individual (Annual)
                                                    </div>
                                                    <div
                                                        className={`text-3xl font-bold ${theme.text}`}
                                                    >
                                                        $
                                                        {
                                                            suite.pricing
                                                                .individual
                                                                .annual
                                                        }
                                                        /yr
                                                    </div>
                                                </div>
                                                <div>
                                                    <div
                                                        className={`text-sm ${theme.textTertiary} mb-1`}
                                                    >
                                                        One-Time License
                                                    </div>
                                                    <div
                                                        className={`text-2xl font-bold ${theme.text}`}
                                                    >
                                                        $
                                                        {
                                                            suite.pricing
                                                                .individual
                                                                .oneTime
                                                        }
                                                    </div>
                                                </div>
                                                <button
                                                    className={`w-full py-3 bg-gradient-to-r ${suite.gradient} text-white font-semibold rounded-full hover:shadow-xl transition`}
                                                >
                                                    Get Suite
                                                </button>
                                                <a
                                                    href="#/pricing"
                                                    className={`block text-center text-sm ${theme.textSecondary} hover:${theme.text} transition`}
                                                >
                                                    View all pricing options →
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tools Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {suiteTools.map((tool) => (
                                        <div
                                            key={tool.name}
                                            className={`${theme.cardBg} rounded-2xl p-6 border ${theme.border} hover:border-blue-500/50 transition-all duration-300 transform hover:scale-[1.02]`}
                                        >
                                            <div className="space-y-4">
                                                <div>
                                                    <div className="flex items-center justify-between mb-2">
                                                        <h3
                                                            className={`text-xl font-bold ${theme.text}`}
                                                        >
                                                            {tool.name}
                                                        </h3>
                                                        <span
                                                            className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(tool.status)}`}
                                                        >
                                                            {tool.status}
                                                        </span>
                                                    </div>
                                                    <p
                                                        className={`text-sm ${theme.textSecondary} mb-2`}
                                                    >
                                                        {tool.tagline}
                                                    </p>
                                                    <p
                                                        className={`text-sm ${theme.textSecondary}`}
                                                    >
                                                        {tool.description}
                                                    </p>
                                                </div>

                                                <div className="space-y-2">
                                                    {tool.features.map(
                                                        (feature, i) => (
                                                            <div
                                                                key={i}
                                                                className="flex items-start gap-2"
                                                            >
                                                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                                <span
                                                                    className={`text-sm ${theme.textSecondary}`}
                                                                >
                                                                    {
                                                                        feature.split(
                                                                            " - ",
                                                                        )[0]
                                                                    }
                                                                </span>
                                                            </div>
                                                        ),
                                                    )}
                                                </div>

                                                <div className="flex flex-wrap gap-2">
                                                    {tool.tech.map((t) => (
                                                        <span
                                                            key={t}
                                                            className={`px-2 py-1 rounded text-xs ${theme.textTertiary} border ${theme.border}`}
                                                        >
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div
                                                    className={`pt-4 border-t ${theme.border} space-y-2`}
                                                >
                                                    <div className="flex justify-between text-sm">
                                                        <span
                                                            className={
                                                                theme.textSecondary
                                                            }
                                                        >
                                                            Annual
                                                        </span>
                                                        <span
                                                            className={`font-semibold ${theme.text}`}
                                                        >
                                                            $
                                                            {
                                                                tool.individual
                                                                    .annual
                                                            }
                                                            /yr
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-between text-sm">
                                                        <span
                                                            className={
                                                                theme.textSecondary
                                                            }
                                                        >
                                                            One-Time
                                                        </span>
                                                        <span
                                                            className={`font-semibold ${theme.text}`}
                                                        >
                                                            $
                                                            {
                                                                tool.individual
                                                                    .oneTime
                                                            }
                                                        </span>
                                                    </div>
                                                </div>

                                                {tool.github && (
                                                    <a
                                                        href="https://github.com/NoamFav"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`flex items-center justify-center gap-2 px-4 py-2 ${theme.cardBg} border ${theme.border} rounded-lg text-sm font-medium hover:border-blue-500/50 transition`}
                                                    >
                                                        <Github className="w-4 h-4" />
                                                        View on GitHub
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}

                    {/* Standalone Tools */}
                    {(activeFilter === "All" ||
                        standaloneTools.some(
                            (t) => t.status === activeFilter,
                        )) &&
                        standaloneTools.length > 0 && (
                            <div data-animate className="mb-24">
                                <h2
                                    className={`text-3xl font-bold ${theme.text} mb-8`}
                                >
                                    Standalone Tools
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {standaloneTools
                                        .filter(
                                            (tool) =>
                                                activeFilter === "All" ||
                                                tool.status === activeFilter,
                                        )
                                        .map((tool) => {
                                            const IconComponent =
                                                getIconComponent(tool.icon);
                                            return (
                                                <div
                                                    key={tool.name}
                                                    className={`${theme.cardBg} rounded-2xl p-6 border ${theme.border} hover:border-orange-500/50 transition-all duration-300`}
                                                >
                                                    <IconComponent className="w-10 h-10 text-orange-500 mb-4" />
                                                    <div className="flex items-center justify-between mb-2">
                                                        <h3
                                                            className={`text-xl font-bold ${theme.text}`}
                                                        >
                                                            {tool.name}
                                                        </h3>
                                                        <span
                                                            className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(tool.status)}`}
                                                        >
                                                            {tool.status}
                                                        </span>
                                                    </div>
                                                    <p
                                                        className={`text-sm ${theme.textSecondary} mb-4`}
                                                    >
                                                        {tool.description}
                                                    </p>
                                                    <div className="space-y-2 mb-4">
                                                        {tool.features.map(
                                                            (f, i) => (
                                                                <div
                                                                    key={i}
                                                                    className="flex items-start gap-2"
                                                                >
                                                                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                                    <span
                                                                        className={`text-sm ${theme.textSecondary}`}
                                                                    >
                                                                        {
                                                                            f.split(
                                                                                " - ",
                                                                            )[0]
                                                                        }
                                                                    </span>
                                                                </div>
                                                            ),
                                                        )}
                                                    </div>
                                                    <div
                                                        className={`flex justify-between text-sm pt-4 border-t ${theme.border}`}
                                                    >
                                                        <span
                                                            className={
                                                                theme.textSecondary
                                                            }
                                                        >
                                                            $
                                                            {
                                                                tool.individual
                                                                    .annual
                                                            }
                                                            /yr
                                                        </span>
                                                        <span
                                                            className={
                                                                theme.textSecondary
                                                            }
                                                        >
                                                            $
                                                            {
                                                                tool.individual
                                                                    .oneTime
                                                            }{" "}
                                                            one-time
                                                        </span>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>
                        )}
                </div>
            </section>

            {/* CTA Section */}
            <section data-animate className="relative py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <div
                        className={`${theme.cardBg} rounded-3xl p-12 md:p-20 text-center space-y-8 border ${theme.border}`}
                    >
                        <h2
                            className={`text-4xl md:text-6xl font-bold ${theme.text} mb-6`}
                        >
                            Ready to elevate your workflow?
                        </h2>
                        <p
                            className={`text-lg md:text-xl ${theme.textSecondary} max-w-2xl mx-auto`}
                        >
                            Join developers who trust NF Software for their
                            mission-critical tools.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                href="#/pricing"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-2xl transition"
                            >
                                View Pricing
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a
                                href="https://github.com/NoamFav"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 px-8 py-4 ${theme.cardBg} border ${theme.border} font-semibold rounded-full hover:border-blue-500/50 transition`}
                            >
                                <Github className="w-5 h-5" />
                                Explore on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scroll to Top */}
            {scrollY > 500 && (
                <button
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className={`fixed bottom-8 right-8 p-4 ${darkMode ? "bg-white text-black" : "bg-black text-white"} rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50`}
                    aria-label="Scroll to top"
                >
                    <ChevronRight className="w-6 h-6 -rotate-90" />
                </button>
            )}
        </>
    );
};

export default Products;
