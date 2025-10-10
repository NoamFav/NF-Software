import React, { useState, useEffect } from "react";
import {
    Code,
    ArrowRight,
    Github,
    Mail,
    Sun,
    Moon,
    Sparkles,
    Zap,
    Target,
    Users,
    Lightbulb,
    Layers,
    Gauge,
    Lock,
    GitBranch,
    Star,
    Package,
    Telescope,
    Wrench,
    CheckCircle,
    ExternalLink,
    Menu,
    X,
} from "lucide-react";

const AboutPage = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Angled clip paths
    const RIGHT_SLASH = "polygon(60% 0, 100% 0, 100% 100%, 50% 100%)";
    const LEFT_BACKSL = "polygon(0 0, 40% 0, 50% 100%, 0 100%)";

    // Dark mode initialization
    useEffect(() => {
        const preferred =
            localStorage.theme ??
            (matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light");
        setDarkMode(preferred === "dark");
    }, []);

    useEffect(() => {
        localStorage.theme = darkMode ? "dark" : "light";
    }, [darkMode]);

    // Mouse position tracking via CSS variables
    useEffect(() => {
        let raf = 0;
        const onMove = (e) => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                document.documentElement.style.setProperty(
                    "--mx",
                    `${e.clientX}px`,
                );
                document.documentElement.style.setProperty(
                    "--my",
                    `${e.clientY}px`,
                );
            });
        };
        window.addEventListener("mousemove", onMove, { passive: true });
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("mousemove", onMove);
        };
    }, []);

    // Intersection Observer for reveal animations
    useEffect(() => {
        const els = document.querySelectorAll("[data-animate]");
        if (!els.length) return;
        const io = new IntersectionObserver(
            (entries, obs) => {
                for (const e of entries) {
                    if (e.isIntersecting) {
                        e.target.classList.add("is-visible");
                        obs.unobserve(e.target);
                    }
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    const principles = [
        {
            icon: Lock,
            title: "Privacy by Default",
            description:
                "Your data belongs to you. We build local-first software that respects your privacy without compromise.",
        },
        {
            icon: Gauge,
            title: "Performance Matters",
            description:
                "Every millisecond counts. We optimize relentlessly, measure obsessively, and ship software that feels instant.",
        },
        {
            icon: Layers,
            title: "Craft Over Scale",
            description:
                "Small, focused tools that excel at their purpose. We value elegance and precision over feature bloat.",
        },
        {
            icon: GitBranch,
            title: "Open by Design",
            description:
                "Transparency builds trust. We share our code, document our decisions, and learn in public.",
        },
        {
            icon: Lightbulb,
            title: "AI as Augmentation",
            description:
                "Intelligence should empower, not replace. We build AI tools that enhance human capability without sacrificing control.",
        },
    ];

    const process = [
        {
            icon: Telescope,
            title: "Research",
            description:
                "Deep dive into the problem space. Talk to users, study existing solutions, understand the real need.",
        },
        {
            icon: Wrench,
            title: "Prototype",
            description:
                "Build fast, fail faster. Validate core assumptions with minimal viable implementations.",
        },
        {
            icon: Zap,
            title: "Performance Pass",
            description:
                "Measure, profile, optimize. No feature ships until it meets our latency and resource budgets.",
        },
        {
            icon: Sparkles,
            title: "Polish",
            description:
                "Sweat the details. Refine interactions, perfect animations, ensure every pixel serves a purpose.",
        },
    ];

    const timeline = [
        {
            year: "2020",
            title: "Foundation",
            description:
                "Started with a simple belief: developer tools should be fast, private, and delightful.",
        },
        {
            year: "2021",
            title: "First Release",
            description:
                "Launched Sysmon-CLI. Sub-millisecond system monitoring adopted by 1,000+ developers.",
        },
        {
            year: "2022",
            title: "Growing the Stack",
            description:
                "Shipped CodeGrep and began work on AI-powered tooling with privacy at the core.",
        },
        {
            year: "2023",
            title: "Community Momentum",
            description:
                "Reached 2,500+ GitHub stars. Introduced Zvezda to help teams understand their repositories.",
        },
        {
            year: "2024",
            title: "AI Without Compromise",
            description:
                "Iris development begins: local-first AI assistance that respects your privacy and runs offline.",
        },
        {
            year: "2025",
            title: "Building Forward",
            description:
                "Expanding our toolkit with SysDash Ultra, BitVoyager, and continued innovation in privacy-first AI.",
        },
    ];

    const stats = [
        { label: "Open Source Projects", value: "7" },
        { label: "GitHub Stars", value: "2.5K+" },
        { label: "Active Users", value: "10K+" },
        { label: "Years Building", value: "5+" },
    ];

    const theme = {
        bg: darkMode ? "bg-black" : "bg-white",
        text: darkMode ? "text-white" : "text-gray-900",
        textSecondary: darkMode ? "text-gray-400" : "text-gray-600",
        textTertiary: darkMode ? "text-gray-500" : "text-gray-500",
        navBg: darkMode ? "bg-black/80" : "bg-white/80",
        border: darkMode ? "border-gray-800" : "border-gray-200",
        cardBg: darkMode ? "bg-gray-900" : "bg-gray-50",
        hoverBg: darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100",
    };

    return (
        <div
            className={`${theme.bg} ${theme.text} transition-colors duration-500 overflow-hidden`}
        >
            {/* Cursor Glow Effect */}
            <div
                className="fixed w-96 h-96 rounded-full pointer-events-none z-50 transition-opacity duration-300"
                style={{
                    left: "calc(var(--mx) - 192px)",
                    top: "calc(var(--my) - 192px)",
                    background: `radial-gradient(circle, ${darkMode ? "rgba(99,102,241,.15)" : "rgba(99,102,241,.08)"} 0%, transparent 70%)`,
                }}
            />

            {/* Navigation */}
            <nav
                className={`fixed top-0 left-0 right-0 z-50 ${theme.navBg} backdrop-blur-2xl border-b ${theme.border} transition-all duration-300`}
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <a href="/" className="flex items-center gap-2">
                        <div className="relative">
                            <Code className="w-6 h-6" />
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition" />
                        </div>
                        <span className="font-semibold text-lg">
                            NF Software
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <a
                            href="/"
                            className={`text-sm ${theme.textSecondary} hover:${theme.text} transition`}
                        >
                            Home
                        </a>
                        <a
                            href="/products"
                            className={`text-sm ${theme.textSecondary} hover:${theme.text} transition`}
                        >
                            Products
                        </a>
                        <a
                            href="/testimonials"
                            className={`text-sm ${theme.textSecondary} hover:${theme.text} transition`}
                        >
                            Testimonials
                        </a>
                        <button
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-full ${darkMode ? "bg-gray-800" : "bg-gray-100"} transition ${theme.hoverBg}`}
                            aria-label="Toggle theme"
                        >
                            {darkMode ? (
                                <Sun className="w-4 h-4" />
                            ) : (
                                <Moon className="w-4 h-4" />
                            )}
                        </button>
                        <a
                            href="mailto:contact@nf-software.com"
                            className={`px-6 py-2.5 ${darkMode ? "bg-white text-black" : "bg-black text-white"} rounded-full text-sm font-medium hover:opacity-90 transition transform hover:scale-105`}
                        >
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div
                        className={`md:hidden ${theme.cardBg} border-t ${theme.border}`}
                    >
                        <div className="px-6 py-4 space-y-4">
                            <a
                                href="/"
                                className={`block text-sm ${theme.textSecondary}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Home
                            </a>
                            <a
                                href="/products"
                                className={`block text-sm ${theme.textSecondary}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Products
                            </a>
                            <a
                                href="/testimonials"
                                className={`block text-sm ${theme.textSecondary}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Testimonials
                            </a>
                            <a
                                href="mailto:contact@nf-software.com"
                                className={`block w-full text-center px-6 py-2.5 ${darkMode ? "bg-white text-black" : "bg-black text-white"} rounded-full text-sm font-medium`}
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section
                id="hero"
                className="relative min-h-screen flex items-center justify-center px-6 pt-20"
            >
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-30"
                        style={{
                            backgroundImage: `radial-gradient(circle at 50% 50%, ${darkMode ? "rgba(99, 102, 241, 0.15)" : "rgba(99, 102, 241, 0.08)"}, transparent 50%)`,
                        }}
                    />
                    {/* Animated Gradient Orbs */}
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
                    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
                    <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
                </div>

                <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-6 animate-fade-in">
                        <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
                        <span className="text-sm font-medium">
                            Building Since 2020
                        </span>
                    </div>

                    <h1
                        className={`text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight ${theme.text} animate-fade-in-up`}
                    >
                        Craft meets
                        <br />
                        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                            performance
                        </span>
                    </h1>

                    <p
                        className={`text-xl md:text-2xl ${theme.textSecondary} max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200`}
                    >
                        We're a team obsessed with building developer tools that
                        respect your privacy, optimize for speed, and feel
                        delightful to use every single day.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center pt-8 animate-fade-in-up animation-delay-400">
                        <a
                            href="/products"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
                        >
                            Explore Products
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="https://github.com/NoamFav"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-8 py-4 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-200"} border font-semibold rounded-full hover:border-gray-400 transition-all duration-300 transform hover:scale-105`}
                        >
                            <Github className="w-5 h-5" />
                            View on GitHub
                        </a>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
                    <div
                        className={`w-6 h-10 rounded-full border-2 ${theme.border} flex items-start justify-center p-2`}
                    >
                        <div
                            className={`w-1.5 h-1.5 ${darkMode ? "bg-white" : "bg-black"} rounded-full animate-pulse`}
                        />
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section id="mission" data-animate className="relative py-32 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2
                        className={`text-4xl md:text-5xl font-bold ${theme.text}`}
                    >
                        We build tools that matter
                    </h2>
                    <p
                        className={`text-lg md:text-xl ${theme.textSecondary} leading-relaxed`}
                    >
                        Since 2020, we've focused on one thing: creating
                        developer tools that combine exceptional performance
                        with privacy-first design. No tracking, no bloat, no
                        compromises—just software that works the way you expect
                        it to.
                    </p>
                    <p
                        className={`text-lg md:text-xl ${theme.textSecondary} leading-relaxed`}
                    >
                        Our tools run locally when possible, optimize for every
                        millisecond, and integrate AI as augmentation—not
                        replacement. We believe the best software feels
                        invisible until you need it, then becomes indispensable.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section data-animate className="relative py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className={`${theme.cardBg} rounded-2xl p-8 text-center border ${theme.border} hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div
                                    className={`text-4xl font-bold ${theme.text} mb-2`}
                                >
                                    {stat.value}
                                </div>
                                <div
                                    className={`text-sm ${theme.textSecondary}`}
                                >
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Principles Section with Angled Background */}
            <section
                id="principles"
                data-animate
                className="relative min-h-screen flex items-center py-32 px-6"
            >
                {/* Angled Background Image */}
                <div className="absolute inset-0 pointer-events-none">
                    <div
                        className="absolute inset-0"
                        style={{
                            clipPath: RIGHT_SLASH,
                        }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
                            alt="Technology abstract background"
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center space-y-6 mb-20">
                        <h2
                            className={`text-5xl md:text-6xl font-bold ${theme.text}`}
                        >
                            What We Believe
                        </h2>
                        <p
                            className={`text-xl ${theme.textSecondary} max-w-3xl mx-auto`}
                        >
                            Five principles that guide every line of code we
                            write and every product we ship.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {principles.map((principle, index) => (
                            <div
                                key={principle.title}
                                className={`${theme.cardBg} rounded-2xl p-8 border ${theme.border} hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <principle.icon className="w-12 h-12 text-blue-500 mb-4" />
                                <h3
                                    className={`text-xl font-bold ${theme.text} mb-3`}
                                >
                                    {principle.title}
                                </h3>
                                <p
                                    className={`${theme.textSecondary} leading-relaxed`}
                                >
                                    {principle.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section id="process" data-animate className="relative py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center space-y-6 mb-20">
                        <h2
                            className={`text-5xl md:text-6xl font-bold ${theme.text}`}
                        >
                            How We Build
                        </h2>
                        <p
                            className={`text-xl ${theme.textSecondary} max-w-3xl mx-auto`}
                        >
                            Our process balances speed with rigor. We move fast,
                            but we never ship without measuring performance and
                            polishing the experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {process.map((step, index) => (
                            <div
                                key={step.title}
                                className={`${theme.cardBg} rounded-2xl p-6 border ${theme.border} hover:border-purple-500/50 transition-all duration-300`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                                        <step.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <h3
                                        className={`text-lg font-bold ${theme.text}`}
                                    >
                                        {step.title}
                                    </h3>
                                </div>
                                <p
                                    className={`text-sm ${theme.textSecondary} leading-relaxed`}
                                >
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section with Angled Background */}
            <section
                id="timeline"
                data-animate
                className="relative min-h-screen flex items-center py-32 px-6"
            >
                {/* Angled Background Image */}
                <div className="absolute inset-0 pointer-events-none">
                    <div
                        className="absolute inset-0"
                        style={{
                            clipPath: LEFT_BACKSL,
                        }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80"
                            alt="Team collaboration background"
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                </div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="text-center space-y-6 mb-20">
                        <h2
                            className={`text-5xl md:text-6xl font-bold ${theme.text}`}
                        >
                            Our Journey
                        </h2>
                        <p
                            className={`text-xl ${theme.textSecondary} max-w-3xl mx-auto`}
                        >
                            Five years of building, learning, and growing with
                            our community.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {timeline.map((milestone, index) => (
                            <div
                                key={milestone.year}
                                className={`${theme.cardBg} rounded-2xl p-8 border ${theme.border} hover:border-blue-500/50 transition-all duration-300 transform hover:translate-x-2`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">
                                                {milestone.year}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3
                                            className={`text-2xl font-bold ${theme.text} mb-2`}
                                        >
                                            {milestone.title}
                                        </h3>
                                        <p
                                            className={`${theme.textSecondary} leading-relaxed`}
                                        >
                                            {milestone.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" data-animate className="relative py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center space-y-6 mb-20">
                        <h2
                            className={`text-5xl md:text-6xl font-bold ${theme.text}`}
                        >
                            Small Team, Big Impact
                        </h2>
                        <p
                            className={`text-xl ${theme.textSecondary} max-w-3xl mx-auto`}
                        >
                            We're a lean, focused team of engineers and
                            designers who care deeply about the tools we build
                            and the developers who use them.
                        </p>
                    </div>

                    <div
                        className={`${theme.cardBg} rounded-2xl p-12 border ${theme.border} space-y-6`}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                                <h3
                                    className={`text-lg font-bold ${theme.text} mb-2`}
                                >
                                    Engineering
                                </h3>
                                <p className={`text-sm ${theme.textSecondary}`}>
                                    Performance-obsessed developers who measure
                                    every millisecond and optimize every
                                    algorithm.
                                </p>
                            </div>
                            <div className="text-center">
                                <Target className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                                <h3
                                    className={`text-lg font-bold ${theme.text} mb-2`}
                                >
                                    Product
                                </h3>
                                <p className={`text-sm ${theme.textSecondary}`}>
                                    Focused on solving real problems with
                                    elegant, minimal solutions that feel
                                    effortless.
                                </p>
                            </div>
                            <div className="text-center">
                                <Sparkles className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                                <h3
                                    className={`text-lg font-bold ${theme.text} mb-2`}
                                >
                                    Design
                                </h3>
                                <p className={`text-sm ${theme.textSecondary}`}>
                                    Crafting interfaces that balance aesthetics
                                    with usability, motion with performance.
                                </p>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-gray-800">
                            <p
                                className={`text-center ${theme.textSecondary} leading-relaxed`}
                            >
                                We believe in working in the open, sharing our
                                learnings, and building tools that we ourselves
                                want to use. Every team member contributes to
                                code, design, and product decisions—we move fast
                                because we trust each other.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Source Section */}
            <section
                id="opensource"
                data-animate
                className="relative py-32 px-6"
            >
                <div className="max-w-5xl mx-auto">
                    <div className="text-center space-y-6 mb-20">
                        <h2
                            className={`text-5xl md:text-6xl font-bold ${theme.text}`}
                        >
                            Open Source at Our Core
                        </h2>
                        <p
                            className={`text-xl ${theme.textSecondary} max-w-3xl mx-auto`}
                        >
                            Transparency builds trust. We share our code,
                            document our decisions, and learn from our
                            community.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div
                            className={`${theme.cardBg} rounded-2xl p-8 border ${theme.border} hover:border-blue-500/50 transition-all duration-300`}
                        >
                            <Package className="w-12 h-12 text-blue-500 mb-4" />
                            <h3
                                className={`text-2xl font-bold ${theme.text} mb-4`}
                            >
                                7 Open Source Projects
                            </h3>
                            <p
                                className={`${theme.textSecondary} mb-6 leading-relaxed`}
                            >
                                From system monitoring to AI-powered Git tools,
                                our projects are built in public and available
                                for anyone to use, modify, and learn from.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span
                                    className={`px-3 py-1 ${darkMode ? "bg-gray-800" : "bg-gray-200"} rounded-lg text-sm ${theme.textSecondary}`}
                                >
                                    Rust
                                </span>
                                <span
                                    className={`px-3 py-1 ${darkMode ? "bg-gray-800" : "bg-gray-200"} rounded-lg text-sm ${theme.textSecondary}`}
                                >
                                    Go
                                </span>
                                <span
                                    className={`px-3 py-1 ${darkMode ? "bg-gray-800" : "bg-gray-200"} rounded-lg text-sm ${theme.textSecondary}`}
                                >
                                    React
                                </span>
                                <span
                                    className={`px-3 py-1 ${darkMode ? "bg-gray-800" : "bg-gray-200"} rounded-lg text-sm ${theme.textSecondary}`}
                                >
                                    C#
                                </span>
                            </div>
                        </div>

                        <div
                            className={`${theme.cardBg} rounded-2xl p-8 border ${theme.border} hover:border-purple-500/50 transition-all duration-300`}
                        >
                            <Star className="w-12 h-12 text-yellow-500 mb-4" />
                            <h3
                                className={`text-2xl font-bold ${theme.text} mb-4`}
                            >
                                2.5K+ GitHub Stars
                            </h3>
                            <p
                                className={`${theme.textSecondary} mb-6 leading-relaxed`}
                            >
                                Our community has grown organically through
                                developers who value privacy, performance, and
                                quality software.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span
                                        className={`text-sm ${theme.textSecondary}`}
                                    >
                                        Active maintenance
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span
                                        className={`text-sm ${theme.textSecondary}`}
                                    >
                                        Regular updates
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <a
                            href="https://github.com/NoamFav"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
                        >
                            <Github className="w-5 h-5" />
                            Explore on GitHub
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="cta" data-animate className="relative py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <div
                        className={`${theme.cardBg} rounded-3xl p-12 md:p-20 text-center space-y-8 border ${theme.border} relative overflow-hidden`}
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: `radial-gradient(circle at 2px 2px, ${darkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)"} 1px, transparent 0)`,
                                    backgroundSize: "32px 32px",
                                }}
                            />
                        </div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-6">
                                <Sparkles className="w-4 h-4 text-blue-500" />
                                <span className="text-sm font-medium">
                                    Let's Connect
                                </span>
                            </div>

                            <h2
                                className={`text-4xl md:text-6xl font-bold ${theme.text} mb-6`}
                            >
                                Want to work with us?
                            </h2>

                            <p
                                className={`text-lg md:text-xl ${theme.textSecondary} max-w-2xl mx-auto mb-8`}
                            >
                                Whether you're interested in collaborating,
                                contributing to our open source projects, or
                                just want to say hello—we'd love to hear from
                                you.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center">
                                <a
                                    href="mailto:contact@nf-software.com"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                                >
                                    <Mail className="w-5 h-5" />
                                    Get in Touch
                                </a>
                                <a
                                    href="/products"
                                    className={`inline-flex items-center gap-2 px-8 py-4 ${theme.cardBg} border ${theme.border} font-semibold rounded-full hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105`}
                                >
                                    <Package className="w-5 h-5" />
                                    Explore Products
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>

                            {/* Contact Methods */}
                            <div className="flex flex-wrap items-center justify-center gap-6 pt-12">
                                <a
                                    href="https://github.com/NoamFav"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-2 ${theme.textSecondary} hover:${theme.text} transition`}
                                >
                                    <Github className="w-5 h-5" />
                                    <span className="text-sm">GitHub</span>
                                </a>
                                <a
                                    href="/testimonials"
                                    className={`flex items-center gap-2 ${theme.textSecondary} hover:${theme.text} transition`}
                                >
                                    <Star className="w-5 h-5" />
                                    <span className="text-sm">
                                        Testimonials
                                    </span>
                                </a>
                                <a
                                    href="mailto:contact@nf-software.com"
                                    className={`flex items-center gap-2 ${theme.textSecondary} hover:${theme.text} transition`}
                                >
                                    <Mail className="w-5 h-5" />
                                    <span className="text-sm">Email</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className={`border-t ${theme.border} py-12 px-6`}>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        {/* Brand Column */}
                        <div className="md:col-span-2 space-y-4">
                            <div className="flex items-center gap-2">
                                <Code className="w-6 h-6" />
                                <span className="font-semibold text-lg">
                                    NF Software
                                </span>
                            </div>
                            <p
                                className={`${theme.textSecondary} text-sm max-w-md`}
                            >
                                Building the future of software, one line of
                                code at a time. Trusted by developers and
                                enterprises worldwide.
                            </p>
                            <div className="flex items-center gap-4">
                                <a
                                    href="https://github.com/NoamFav"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${theme.textSecondary} hover:${theme.text} transition`}
                                    aria-label="GitHub"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Products Column */}
                        <div>
                            <h3 className={`font-semibold ${theme.text} mb-4`}>
                                Products
                            </h3>
                            <ul className="space-y-2">
                                {[
                                    "Iris",
                                    "Sysmon-CLI",
                                    "Zvezda",
                                    "CodeGrep",
                                ].map((product) => (
                                    <li key={product}>
                                        <a
                                            href={`/products#${product.toLowerCase()}`}
                                            className={`text-sm ${theme.textSecondary} hover:${theme.text} transition`}
                                        >
                                            {product}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company Column */}
                        <div>
                            <h3 className={`font-semibold ${theme.text} mb-4`}>
                                Company
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="/"
                                        className={`text-sm ${theme.textSecondary} hover:${theme.text} transition`}
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/testimonials"
                                        className={`text-sm ${theme.textSecondary} hover:${theme.text} transition`}
                                    >
                                        Testimonials
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:contact@nf-software.com"
                                        className={`text-sm ${theme.textSecondary} hover:${theme.text} transition`}
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div
                        className={`border-t ${theme.border} pt-8 flex flex-col md:flex-row justify-between items-center gap-4`}
                    >
                        <div className={`text-sm ${theme.textTertiary}`}>
                            © 2025 NF Software. All rights reserved.
                        </div>
                        <div className="flex items-center gap-6">
                            <a
                                href="#"
                                className={`text-sm ${theme.textSecondary} hover:${theme.text} transition`}
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className={`text-sm ${theme.textSecondary} hover:${theme.text} transition`}
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Global Styles */}
            <style jsx>{`
                @keyframes gradient {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }

                @keyframes blob {
                    0%,
                    100% {
                        transform: translate(0, 0) scale(1);
                    }
                    25% {
                        transform: translate(20px, -50px) scale(1.1);
                    }
                    50% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                    75% {
                        transform: translate(50px, 50px) scale(1.05);
                    }
                }

                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }

                .animate-blob {
                    animation: blob 7s infinite;
                }

                .animation-delay-2000 {
                    animation-delay: 2s;
                }

                .animation-delay-4000 {
                    animation-delay: 4s;
                }

                .animate-fade-in {
                    animation: fade-in 1s ease-out;
                }

                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-out;
                }

                .animation-delay-200 {
                    animation-delay: 0.2s;
                    animation-fill-mode: backwards;
                }

                .animation-delay-400 {
                    animation-delay: 0.4s;
                    animation-fill-mode: backwards;
                }

                .animation-delay-600 {
                    animation-delay: 0.6s;
                    animation-fill-mode: backwards;
                }

                [data-animate] {
                    opacity: 0;
                    transform: translateY(30px);
                    transition:
                        opacity 0.8s ease-out,
                        transform 0.8s ease-out;
                }

                [data-animate].is-visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                @media (prefers-reduced-motion: reduce) {
                    *,
                    *::before,
                    *::after {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                    }

                    [data-animate] {
                        opacity: 1;
                        transform: none;
                    }
                }
            `}</style>
        </div>
    );
};

export default AboutPage;
