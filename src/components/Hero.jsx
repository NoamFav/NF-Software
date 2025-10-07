import React, { useState, useEffect } from "react";
import {
    Code,
    ArrowRight,
    Github,
    Mail,
    Layers,
    Shield,
    Terminal,
    Database,
    CheckCircle,
    Clock,
    TrendingUp,
    Award,
    Target,
    Sun,
    Moon,
} from "lucide-react";

const Hero = () => {
    const [, setScrollY] = useState(0);
    const [activeCategory, setActiveCategory] = useState("all");
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);

        // Check for saved theme preference
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setDarkMode(true);
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        localStorage.setItem("theme", !darkMode ? "dark" : "light");
    };

    const categories = [
        { id: "all", label: "All Projects" },
        { id: "system", label: "System Tools" },
        { id: "dev", label: "Developer Tools" },
        { id: "games", label: "Games" },
        { id: "education", label: "Education" },
    ];

    const categoryMap = {
        "System Utilities & Monitoring": "system",
        "Developer Tools & Productivity": "dev",
        "Games & Interactive Entertainment": "games",
        "Educational Technology": "education",
        "Data Analysis & Research": "data",
        "Knowledge Management & Learning": "education",
        "Content Management & Organization": "system",
        "Portfolio & Personal Websites": "dev",
        "Self-Hosting & Infrastructure": "system",
        "Classified Research": "data",
    };

    const projects = [
        {
            title: "Sysmon-CLI",
            description:
                "Enterprise-grade terminal system monitor delivering real-time performance metrics with minimal resource overhead.",
            category: "System Utilities & Monitoring",
            status: "active",
            progress: 30,
            tech: ["C", "POSIX", "IOKit"],
            type: "System Utility",
        },
        {
            title: "SysDash Ultra",
            description:
                "Advanced monitoring dashboard featuring predictive analytics and comprehensive system visualization.",
            category: "System Utilities & Monitoring",
            status: "active",
            progress: 25,
            tech: ["Rust", "Swift", "SwiftUI"],
            type: "Dashboard",
        },
        {
            title: "NetViz Pro",
            description:
                "Network traffic analysis platform with 3D visualization and intelligent anomaly detection.",
            category: "System Utilities & Monitoring",
            status: "planning",
            progress: 20,
            tech: ["Rust", "TypeScript", "WebGL"],
            type: "Analytics",
        },
        {
            title: "CodeGrep",
            description:
                "Syntax-aware code search engine leveraging AST parsing for precise, semantic results.",
            category: "Developer Tools & Productivity",
            status: "active",
            progress: 60,
            tech: ["Rust", "Tree-sitter"],
            type: "Developer Tool",
        },
        {
            title: "Zvezda",
            description:
                "Intelligent Git repository manager with AI-powered commit assistance and analytics.",
            category: "Developer Tools & Productivity",
            status: "active",
            progress: 70,
            tech: ["Go", "Bubble Tea", "Git"],
            type: "Version Control",
        },
        {
            title: "ShadowedHunter",
            description:
                "Metroidvania-style game featuring advanced mechanics and procedural level design.",
            category: "Games & Interactive Entertainment",
            status: "active",
            progress: 35,
            tech: ["C#", "Unity", "DOTween"],
            type: "Game",
        },
        {
            title: "Pot Pot Golf",
            description:
                "Physics-based golf simulation with realistic ball dynamics and AI opponents.",
            category: "Games & Interactive Entertainment",
            status: "completed",
            progress: 100,
            tech: ["Java", "LWJGL", "Box2D"],
            type: "Simulation",
        },
        {
            title: "Frisia",
            description:
                "Multiplayer board game platform with advanced AI and real-time networking.",
            category: "Games & Interactive Entertainment",
            status: "active",
            progress: 45,
            tech: ["Rust", "WebSockets"],
            type: "Multiplayer",
        },
        {
            title: "BitVoyager",
            description:
                "Interactive programming education platform with gamified learning paths.",
            category: "Educational Technology",
            status: "active",
            progress: 55,
            tech: ["TypeScript", "WebAssembly"],
            type: "EdTech",
        },
        {
            title: "Thynkly",
            description:
                "AI-enhanced knowledge management system for information organization and retention.",
            category: "Knowledge Management & Learning",
            status: "active",
            progress: 20,
            tech: ["React", "AI/ML"],
            type: "Productivity",
        },
    ];

    const filteredProjects =
        activeCategory === "all"
            ? projects
            : projects.filter(
                  (p) => categoryMap[p.category] === activeCategory,
              );

    const stats = [
        {
            label: "Active Projects",
            value: "13",
            icon: TrendingUp,
            sublabel: "In Development",
        },
        {
            label: "Completed",
            value: "3",
            icon: CheckCircle,
            sublabel: "Production Ready",
        },
        {
            label: "Technologies",
            value: "20+",
            icon: Code,
            sublabel: "Stack Depth",
        },
        {
            label: "Years Experience",
            value: "3",
            icon: Award,
            sublabel: "Building Software",
        },
    ];

    const capabilities = [
        {
            icon: Terminal,
            title: "System-Level Engineering",
            description:
                "Performance-critical applications with direct system integration",
        },
        {
            icon: Layers,
            title: "Full-Stack Development",
            description:
                "End-to-end solutions from infrastructure to user interface",
        },
        {
            icon: Database,
            title: "Data Engineering",
            description: "Scalable data processing and analysis platforms",
        },
        {
            icon: Shield,
            title: "Security-First Design",
            description:
                "Built-in security considerations from architecture to deployment",
        },
    ];

    // Theme classes
    const theme = {
        bg: darkMode ? "bg-slate-950" : "bg-slate-50",
        bgAlt: darkMode ? "bg-slate-900" : "bg-white",
        bgCard: darkMode ? "bg-slate-900/50" : "bg-white",
        bgHover: darkMode ? "hover:bg-slate-800" : "hover:bg-slate-50",
        text: darkMode ? "text-white" : "text-slate-900",
        textSecondary: darkMode ? "text-slate-400" : "text-slate-600",
        textTertiary: darkMode ? "text-slate-500" : "text-slate-500",
        border: darkMode ? "border-slate-800" : "border-slate-200",
        borderHover: darkMode
            ? "hover:border-slate-700"
            : "hover:border-slate-300",
        navBg: darkMode ? "bg-slate-900/80" : "bg-white/80",
        buttonPrimary: darkMode
            ? "bg-white text-slate-900 hover:bg-slate-100"
            : "bg-slate-900 text-white hover:bg-slate-800",
        buttonSecondary: darkMode
            ? "bg-slate-800 text-white border-slate-700 hover:bg-slate-700"
            : "bg-white text-slate-900 border-slate-200 hover:border-slate-300",
        badge: darkMode ? "bg-slate-800" : "bg-slate-100",
        badgeText: darkMode ? "text-slate-300" : "text-slate-700",
        cardBorder: darkMode
            ? "border-slate-800 hover:border-slate-700"
            : "border-slate-200 hover:border-slate-300",
        progressBg: darkMode ? "bg-slate-800" : "bg-slate-100",
        progressBar: darkMode ? "bg-white" : "bg-slate-900",
        sectionBg: darkMode ? "bg-slate-900/30" : "bg-white",
        sectionBorder: darkMode ? "border-slate-800" : "border-slate-200",
        ctaBg: darkMode ? "bg-slate-900" : "bg-slate-900",
        footerBg: darkMode ? "bg-slate-950" : "bg-white",
    };

    return (
        <div className={`relative min-h-screen ${theme.bg} ${theme.text}`}>
            {/* Subtle Background Pattern */}
            <div
                className="pointer-events-none fixed inset-0 z-0 opacity-10"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, ${
                        darkMode ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.8)"
                    } 1px, transparent 0)`,
                    backgroundSize: "28px 28px",
                }}
            />{" "}
            {/* Navigation */}
            <nav
                className={`sticky top-0 z-50 ${theme.navBg} backdrop-blur-xl border-b ${theme.border} transition-colors duration-200`}
            >
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div
                                className={`w-10 h-10 ${darkMode ? "bg-white" : "bg-slate-900"} rounded-lg flex items-center justify-center transition-colors duration-200`}
                            >
                                <Code
                                    className={`w-6 h-6 ${darkMode ? "text-slate-900" : "text-white"}`}
                                />
                            </div>
                            <div>
                                <div
                                    className={`font-bold text-lg ${theme.text}`}
                                >
                                    NoamFav Software
                                </div>
                                <div
                                    className={`text-xs ${theme.textTertiary}`}
                                >
                                    Independent Software Studio
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <a
                                href="#projects"
                                className={`text-sm font-medium ${theme.textSecondary} hover:${theme.text} transition-colors`}
                            >
                                Projects
                            </a>
                            <a
                                href="#capabilities"
                                className={`text-sm font-medium ${theme.textSecondary} hover:${theme.text} transition-colors`}
                            >
                                Capabilities
                            </a>
                            <button
                                onClick={toggleDarkMode}
                                className={`p-2 rounded-lg ${theme.badge} ${theme.borderHover} transition-all duration-200`}
                                aria-label="Toggle dark mode"
                            >
                                {darkMode ? (
                                    <Sun className="w-5 h-5" />
                                ) : (
                                    <Moon className="w-5 h-5" />
                                )}
                            </button>
                            <a
                                href="mailto:contact@nf-software.com"
                                className={`px-5 py-2 ${theme.buttonPrimary} text-sm font-medium rounded-lg transition-colors`}
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Hero Section */}
            <section className="relative pt-24 pb-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div
                                className={`inline-flex items-center gap-2 px-4 py-2 ${theme.badge} rounded-full border ${theme.border}`}
                            >
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                <span
                                    className={`text-sm font-medium ${theme.badgeText}`}
                                >
                                    Available for Projects
                                </span>
                            </div>

                            <div className="space-y-4">
                                <h1
                                    className={`text-5xl md:text-6xl font-bold ${theme.text} leading-tight`}
                                >
                                    Building Professional Software Solutions
                                </h1>
                                <p
                                    className={`text-xl ${theme.textSecondary} leading-relaxed`}
                                >
                                    An independent software studio specializing
                                    in system utilities, developer tooling, and
                                    innovative applications built with
                                    industry-standard technologies.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#projects"
                                    className={`inline-flex items-center gap-2 px-6 py-3 ${theme.buttonPrimary} font-medium rounded-lg
                            transition-all duration-200 shadow-sm hover:shadow-md`}
                                >
                                    View Portfolio
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <a
                                    href="mailto:contact@nf-software.com"
                                    className={`inline-flex items-center gap-2 px-6 py-3 ${theme.buttonSecondary} font-medium rounded-lg
                            border transition-all duration-200`}
                                >
                                    <Mail className="w-4 h-4" />
                                    Get in Touch
                                </a>
                                <a
                                    href="https://github.com/NoamFav"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-2 px-6 py-3 ${theme.buttonSecondary} font-medium rounded-lg
                            border transition-all duration-200`}
                                >
                                    <Github className="w-4 h-4" />
                                    GitHub
                                </a>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <div
                                        key={index}
                                        className={`${theme.bgCard} rounded-xl p-6 border ${theme.cardBorder}
                                            transition-all duration-200 hover:shadow-md`}
                                    >
                                        <Icon
                                            className={`w-8 h-8 ${theme.textSecondary} mb-4`}
                                        />
                                        <div
                                            className={`text-3xl font-bold ${theme.text} mb-1`}
                                        >
                                            {stat.value}
                                        </div>
                                        <div
                                            className={`text-sm font-semibold ${theme.text} mb-1`}
                                        >
                                            {stat.label}
                                        </div>
                                        <div
                                            className={`text-xs ${theme.textTertiary}`}
                                        >
                                            {stat.sublabel}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
            {/* Capabilities Section */}
            <section
                id="capabilities"
                className={`relative py-24 px-6 ${theme.sectionBg} border-y ${theme.sectionBorder} transition-colors duration-200`}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <div
                            className={`inline-flex items-center gap-2 px-4 py-2 ${theme.badge} rounded-full`}
                        >
                            <Target
                                className={`w-4 h-4 ${theme.textSecondary}`}
                            />
                            <span
                                className={`text-sm font-medium ${theme.badgeText}`}
                            >
                                Core Competencies
                            </span>
                        </div>
                        <h2
                            className={`text-4xl md:text-5xl font-bold ${theme.text}`}
                        >
                            Technical Capabilities
                        </h2>
                        <p
                            className={`text-lg ${theme.textSecondary} max-w-2xl mx-auto`}
                        >
                            Specialized expertise across multiple domains of
                            software development
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {capabilities.map((capability, index) => {
                            const Icon = capability.icon;
                            return (
                                <div
                                    key={index}
                                    className={`${theme.bgCard} rounded-xl p-6 border ${theme.cardBorder}
                                          transition-all duration-200 hover:shadow-sm`}
                                >
                                    <div
                                        className={`w-12 h-12 ${darkMode ? "bg-white" : "bg-slate-900"} rounded-lg flex items-center justify-center mb-4 transition-colors duration-200`}
                                    >
                                        <Icon
                                            className={`w-6 h-6 ${darkMode ? "text-slate-900" : "text-white"}`}
                                        />
                                    </div>
                                    <h3
                                        className={`text-lg font-bold ${theme.text} mb-2`}
                                    >
                                        {capability.title}
                                    </h3>
                                    <p
                                        className={`text-sm ${theme.textSecondary} leading-relaxed`}
                                    >
                                        {capability.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            {/* Projects Section */}
            <section id="projects" className="relative py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <div
                            className={`inline-flex items-center gap-2 px-4 py-2 ${theme.badge} rounded-full`}
                        >
                            <Layers
                                className={`w-4 h-4 ${theme.textSecondary}`}
                            />
                            <span
                                className={`text-sm font-medium ${theme.badgeText}`}
                            >
                                Portfolio
                            </span>
                        </div>
                        <h2
                            className={`text-4xl md:text-5xl font-bold ${theme.text}`}
                        >
                            Featured Projects
                        </h2>
                        <p
                            className={`text-lg ${theme.textSecondary} max-w-2xl mx-auto`}
                        >
                            A selection of production-ready tools and
                            applications demonstrating technical expertise
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
                          ${
                              activeCategory === cat.id
                                  ? `${theme.buttonPrimary} shadow-sm`
                                  : `${theme.buttonSecondary} border`
                          }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.title}
                                className={`${theme.bgCard} rounded-xl border ${theme.cardBorder}
                            hover:shadow-lg transition-all duration-200 overflow-hidden group`}
                            >
                                {/* Header */}
                                <div className={`p-6 border-b ${theme.border}`}>
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex-1">
                                            <div
                                                className={`text-xs font-semibold ${theme.textTertiary} uppercase tracking-wider mb-2`}
                                            >
                                                {project.type}
                                            </div>
                                            <h3
                                                className={`text-xl font-bold ${theme.text} transition-colors`}
                                            >
                                                {project.title}
                                            </h3>
                                        </div>
                                        {project.status === "completed" ? (
                                            <span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-semibold">
                                                <CheckCircle className="w-3 h-3" />
                                                Complete
                                            </span>
                                        ) : project.status === "active" ? (
                                            <span className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-semibold">
                                                <Clock className="w-3 h-3" />
                                                Active
                                            </span>
                                        ) : (
                                            <span
                                                className={`px-3 py-1 ${theme.badge} ${theme.badgeText} rounded-full text-xs font-semibold`}
                                            >
                                                Planning
                                            </span>
                                        )}
                                    </div>

                                    <p
                                        className={`text-sm ${theme.textSecondary} leading-relaxed`}
                                    >
                                        {project.description}
                                    </p>
                                </div>

                                {/* Body */}
                                <div className="p-6 space-y-4">
                                    {/* Progress */}
                                    <div>
                                        <div className="flex justify-between text-xs font-medium mb-2">
                                            <span
                                                className={theme.textTertiary}
                                            >
                                                Development Progress
                                            </span>
                                            <span className={theme.text}>
                                                {project.progress}%
                                            </span>
                                        </div>
                                        <div
                                            className={`h-1.5 ${theme.progressBg} rounded-full overflow-hidden`}
                                        >
                                            <div
                                                className={`h-full ${theme.progressBar} transition-all duration-500`}
                                                style={{
                                                    width: `${project.progress}%`,
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className={`px-2.5 py-1 ${theme.badge} border ${theme.border} rounded text-xs font-medium ${theme.badgeText}`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* CTA Section */}
            <section
                className={`relative py-24 px-6 ${theme.ctaBg} ${darkMode ? "text-white" : "text-white"}`}
            >
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Let's Build Something Together
                    </h2>

                    <p
                        className={`text-xl ${darkMode ? "text-slate-300" : "text-slate-300"} max-w-2xl mx-auto leading-relaxed`}
                    >
                        Available for consulting, custom development, and
                        strategic partnerships. Let's discuss how we can work
                        together on your next project.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center pt-4">
                        <a
                            href="mailto:contact@nf-software.com"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg
                        hover:bg-slate-100 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            Start a Conversation
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="https://github.com/NoamFav"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg
                        border border-slate-700 hover:bg-slate-700 transition-all duration-200"
                        >
                            <Github className="w-5 h-5" />
                            View on GitHub
                        </a>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <footer
                className={`${theme.footerBg} border-t ${theme.border} py-12 px-6 transition-colors duration-200`}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-3">
                            <div
                                className={`w-10 h-10 ${darkMode ? "bg-white" : "bg-slate-900"} rounded-lg flex items-center justify-center transition-colors duration-200`}
                            >
                                <Code
                                    className={`w-6 h-6 ${darkMode ? "text-slate-900" : "text-white"}`}
                                />
                            </div>
                            <div>
                                <div className={`font-bold ${theme.text}`}>
                                    NoamFav Software
                                </div>
                                <div
                                    className={`text-sm ${theme.textTertiary}`}
                                >
                                    © {new Date().getFullYear()} All rights
                                    reserved
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <a
                                href="mailto:contact@nf-software.com"
                                className={`text-sm ${theme.textSecondary} hover:${theme.text} transition-colors`}
                            >
                                Contact
                            </a>
                            <a
                                href="https://github.com/NoamFav"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-sm ${theme.textSecondary} hover:${theme.text} transition-colors`}
                            >
                                GitHub
                            </a>
                            <span className={`text-sm ${theme.textTertiary}`}>
                                Trademark pending
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Hero;
