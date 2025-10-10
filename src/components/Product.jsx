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
    Shield,
    Target,
    Award,
    Users,
    ChevronRight,
    CheckCircle,
    Star,
    Rocket,
    Download,
    Menu,
    X,
    Filter,
    Bell,
    Book,
    Terminal,
    Cpu,
    GitBranch,
    Search,
    Gamepad2,
    GraduationCap,
    BarChart3,
} from "lucide-react";

// SEO Meta (for documentation):
// <title>Products - NF Software | Professional Developer Tools</title>
// <meta name="description" content="Explore our suite of professional software products: AI assistants, system monitors, git tools, code search, and more. Built for developers who demand excellence." />

const ProductsPage = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState("All");

    // Angled wedge clip paths
    const RIGHT_SLASH = "polygon(60% 0, 100% 0, 100% 100%, 50% 100%)";
    const LEFT_BACKSL = "polygon(0 0, 40% 0, 50% 100%, 0 100%)";

    const products = [
        {
            title: "Iris",
            tagline: "The AI assistant, reimagined",
            description:
                "A local-first, modular AI assistant that runs offline and adapts to you. No cloud dependencies, complete privacy, and seamless system integration.",
            features: [
                "Fully local & private - Your data never leaves your machine",
                "Modular agent system - Extend functionality with custom agents",
                "Voice + terminal control - Natural interaction, power-user efficiency",
            ],
            image: "https://images.unsplash.com/photo-1727434032773-af3cd98375ba?q=80&w=3132&auto=format&fit=crop",
            gradient: "from-indigo-600 to-purple-600",
            technologies: ["Golang", "whisper.cpp", "llama.cpp", "coqui"],
            status: "In Development",
            icon: Sparkles,
            audience: "Privacy-conscious developers and power users",
            github: true,
        },
        {
            title: "Sysmon-CLI",
            tagline: "Performance monitoring, reimagined",
            description:
                "Real-time system metrics with sub-millisecond latency. Built in Rust for professionals who demand precision without compromise.",
            features: [
                "Sub-millisecond latency - See changes as they happen",
                "Minimal system impact - Less than 0.1% CPU overhead",
                "Cross-platform support - Linux, macOS, Windows, BSD",
            ],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
            gradient: "from-blue-500 to-cyan-500",
            technologies: ["Rust", "Terminal UI", "WebAssembly"],
            status: "Live",
            icon: Cpu,
            audience: "DevOps engineers and system administrators",
            github: true,
        },
        {
            title: "Zvezda",
            tagline: "Git, but intelligent",
            description:
                "Transform your workflow with AI-powered commit assistance and repository insights. Smart analytics that adapt to your team's patterns.",
            features: [
                "AI commit messages - Context-aware, consistent, professional",
                "Smart analytics dashboard - Visualize patterns and bottlenecks",
                "Team collaboration insights - Optimize workflow and code review",
            ],
            image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1200&q=80",
            gradient: "from-violet-500 to-purple-500",
            technologies: ["Golang", "Charm stack", "ollama", "CLI"],
            status: "Beta",
            icon: GitBranch,
            audience: "Development teams and solo developers",
            github: true,
        },
        {
            title: "CodeGrep",
            tagline: "Search code like you think",
            description:
                "Semantic code search powered by AST parsing. Find what you mean, not just what you type. Navigate massive codebases in seconds.",
            features: [
                "AST-aware search - Understand structure, not just text",
                "Lightning fast indexing - 100K+ files in under a second",
                "Smart filtering - By language, scope, complexity, or context",
            ],
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
            gradient: "from-emerald-500 to-teal-500",
            technologies: ["Go", "Tree-sitter", "SQLite"],
            status: "Live",
            icon: Search,
            audience: "Engineers working with large codebases",
            github: true,
        },
        {
            title: "ShadowedHunter",
            tagline: "Adventure awaits in the shadows",
            description:
                "A metroidvania experience where procedural generation meets handcrafted design. Atmospheric exploration with precision combat.",
            features: [
                "Procedural generation - Infinite replayability, curated feel",
                "Fluid combat mechanics - Responsive, skill-based encounters",
                "Rich environmental storytelling - Show, don't tell",
            ],
            image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&q=80",
            gradient: "from-orange-500 to-red-500",
            technologies: ["Unity", "C#", "Spine"],
            status: "In Development",
            icon: Gamepad2,
            audience: "Players who love exploration and challenge",
            github: false,
        },
        {
            title: "BitVoyager",
            tagline: "Learn to code by doing",
            description:
                "Interactive programming education that feels like play. Gamified learning paths with real-time feedback and personalized progression.",
            features: [
                "Interactive coding lessons - Write code, see results instantly",
                "Real-time feedback system - Hints that guide without spoiling",
                "Personalized progress tracking - Adaptive difficulty and pacing",
            ],
            image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&q=80",
            gradient: "from-pink-500 to-rose-500",
            technologies: ["React", "Monaco Editor", "Docker"],
            status: "Beta",
            icon: GraduationCap,
            audience: "Aspiring developers and coding bootcamps",
            github: false,
        },
        {
            title: "SysDash Ultra",
            tagline: "Your system, visualized",
            description:
                "Advanced monitoring meets predictive analytics. See the future of your infrastructure with ML-powered insights and custom dashboards.",
            features: [
                "Predictive AI alerts - Know about issues before they happen",
                "Beautiful custom dashboards - Drag, drop, configure, done",
                "Deep performance insights - Root cause analysis in seconds",
            ],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
            gradient: "from-indigo-500 to-blue-500",
            technologies: ["Vue.js", "Python", "TimescaleDB"],
            status: "Live",
            icon: BarChart3,
            audience: "SREs and infrastructure teams",
            github: true,
        },
    ];

    const filters = ["All", "Live", "Beta", "In Development"];

    const filteredProducts =
        activeFilter === "All"
            ? products
            : products.filter((p) => p.status === activeFilter);

    useEffect(() => {
        const preferred = matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
        setDarkMode(preferred === "dark");
    }, []);

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

    useEffect(() => {
        let raf = 0;
        const onScroll = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                const y = window.scrollY || 0;
                document.documentElement.style.setProperty("--sy", String(y));
            });
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

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

    const slugify = (str) =>
        str
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, "");

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

    const getStatusColor = (status) => {
        switch (status) {
            case "Live":
                return "border-green-500/50 text-green-500";
            case "Beta":
                return "border-yellow-500/50 text-yellow-500";
            case "In Development":
                return "border-blue-500/50 text-blue-500";
            default:
                return "border-gray-500/50 text-gray-500";
        }
    };

    const getCTAButtons = (product) => {
        const buttons = [];

        if (product.status === "Live") {
            buttons.push(
                <button
                    key="download"
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${product.gradient} text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                >
                    <Download className="w-5 h-5" />
                    Download
                </button>,
            );
            buttons.push(
                <a
                    key="docs"
                    href="#"
                    className={`inline-flex items-center gap-2 px-6 py-3 ${theme.cardBg} border ${theme.border} font-semibold rounded-full hover:border-blue-500/50 transition-all duration-300`}
                >
                    <Book className="w-5 h-5" />
                    Documentation
                </a>,
            );
        } else if (product.status === "Beta") {
            buttons.push(
                <button
                    key="waitlist"
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${product.gradient} text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                >
                    <Bell className="w-5 h-5" />
                    Join Waitlist
                </button>,
            );
            buttons.push(
                <a
                    key="learn"
                    href="#"
                    className={`inline-flex items-center gap-2 px-6 py-3 ${theme.cardBg} border ${theme.border} font-semibold rounded-full hover:border-blue-500/50 transition-all duration-300`}
                >
                    <ArrowRight className="w-5 h-5" />
                    Learn More
                </a>,
            );
        } else {
            buttons.push(
                <button
                    key="notify"
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${product.gradient} text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                >
                    <Bell className="w-5 h-5" />
                    Notify Me
                </button>,
            );
            buttons.push(
                <a
                    key="learn"
                    href="#"
                    className={`inline-flex items-center gap-2 px-6 py-3 ${theme.cardBg} border ${theme.border} font-semibold rounded-full hover:border-blue-500/50 transition-all duration-300`}
                >
                    <ArrowRight className="w-5 h-5" />
                    Learn More
                </a>,
            );
        }

        if (product.github) {
            buttons.push(
                <a
                    key="github"
                    href="https://github.com/NoamFav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 ${theme.cardBg} border ${theme.border} font-semibold rounded-full hover:border-blue-500/50 transition-all duration-300`}
                >
                    <Github className="w-5 h-5" />
                    GitHub
                </a>,
            );
        }

        return buttons;
    };

    return (
        <div
            className={`${theme.bg} ${theme.text} transition-colors duration-500 overflow-hidden`}
        >
            {/* Navigation */}
            <nav
                className={`fixed top-0 left-0 right-0 z-50 ${theme.navBg} backdrop-blur-2xl border-b ${theme.border} transition-all duration-300`}
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <Code className="w-6 h-6" />
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition" />
                        </div>
                        <span className="font-semibold text-lg">
                            NF Software
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <a
                            href="/about"
                            className={`text-sm ${theme.textSecondary} hover:${theme.text} transition`}
                        >
                            About
                        </a>
                        <a
                            href="#products"
                            className={`text-sm ${theme.text} font-medium transition`}
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
                                href="/about"
                                className={`block text-sm ${theme.textSecondary}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                About
                            </a>
                            <a
                                href="#products"
                                className={`block text-sm ${theme.text} font-medium`}
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
                            <Rocket className="w-4 h-4 text-blue-500" />
                            <span className="text-sm font-medium">
                                7 Products, Built for Professionals
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
                            Each product is crafted with precision, designed for
                            performance, and built to last. No compromises on
                            quality, speed, or user experience.
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
                        <Filter className="w-5 h-5 text-gray-500" />
                        {filters.map((filter) => (
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
                                            products.filter(
                                                (p) => p.status === filter,
                                            ).length
                                        }
                                        )
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Sections */}
            <section className="relative">
                {filteredProducts.map((product, index) => {
                    const textOnLeft = index % 2 === 0;
                    const clip = textOnLeft ? RIGHT_SLASH : LEFT_BACKSL;

                    return (
                        <section
                            key={product.title}
                            id={slugify(product.title)}
                            data-animate
                            className="relative min-h-screen flex items-center overflow-hidden"
                        >
                            {/* Angled Image Background */}
                            <div className="absolute inset-0 pointer-events-none">
                                <div
                                    className="absolute inset-0 will-change-[clip-path]"
                                    style={{
                                        clipPath: clip,
                                    }}
                                >
                                    <img
                                        src={product.image}
                                        alt={`${product.title} - ${product.tagline}`}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                </div>
                            </div>

                            {/* Content */}
                            <div
                                className={`relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full ${
                                    textOnLeft ? "" : "lg:flex-row-reverse"
                                }`}
                            >
                                {/* Text Side */}
                                <div
                                    className={`space-y-8 ${
                                        textOnLeft
                                            ? "lg:pr-16"
                                            : "lg:pl-16 lg:order-2"
                                    }`}
                                >
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 flex-wrap">
                                            <div
                                                className={`inline-flex items-center gap-2 px-4 py-1 bg-gradient-to-r ${product.gradient} rounded-full text-white text-sm font-semibold`}
                                            >
                                                <product.icon className="w-4 h-4" />
                                                {product.title}
                                            </div>
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(product.status)}`}
                                            >
                                                {product.status}
                                            </span>
                                        </div>

                                        <h2
                                            className={`text-4xl md:text-5xl font-bold ${theme.text} leading-tight`}
                                        >
                                            {product.tagline}
                                        </h2>

                                        <p
                                            className={`text-lg ${theme.textSecondary} leading-relaxed`}
                                        >
                                            {product.description}
                                        </p>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-4">
                                        {product.features.map((feature, i) => (
                                            <div
                                                key={i}
                                                className="flex items-start gap-3 group"
                                            >
                                                <div
                                                    className={`w-6 h-6 rounded-full bg-gradient-to-r ${product.gradient} flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}
                                                >
                                                    <CheckCircle className="w-4 h-4 text-white" />
                                                </div>
                                                <div>
                                                    <span
                                                        className={`text-base font-medium ${theme.text}`}
                                                    >
                                                        {
                                                            feature.split(
                                                                " - ",
                                                            )[0]
                                                        }
                                                    </span>
                                                    {feature.includes(
                                                        " - ",
                                                    ) && (
                                                        <span
                                                            className={`text-sm ${theme.textSecondary} ml-2`}
                                                        >
                                                            {
                                                                feature.split(
                                                                    " - ",
                                                                )[1]
                                                            }
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Audience */}
                                    <div
                                        className={`flex items-center gap-3 px-4 py-3 ${theme.cardBg} rounded-lg border ${theme.border}`}
                                    >
                                        <Users className="w-5 h-5 text-blue-500" />
                                        <div>
                                            <div
                                                className={`text-xs ${theme.textTertiary} uppercase tracking-wider`}
                                            >
                                                Built For
                                            </div>
                                            <div
                                                className={`text-sm font-medium ${theme.text}`}
                                            >
                                                {product.audience}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {product.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className={`px-3 py-1 ${theme.cardBg} rounded-lg text-sm ${theme.textSecondary} border ${theme.border}`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* CTA Buttons */}
                                    <div className="flex flex-wrap gap-4 pt-4">
                                        {getCTAButtons(product)}
                                    </div>
                                </div>

                                {/* Spacer */}
                                <div
                                    className={`hidden lg:block ${
                                        textOnLeft
                                            ? "lg:pl-16"
                                            : "lg:pr-16 lg:order-1"
                                    }`}
                                />
                            </div>
                        </section>
                    );
                })}
            </section>

            {/* Comparison Grid */}
            <section
                data-animate
                className="relative py-32 px-6 overflow-hidden"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center space-y-6 mb-16">
                        <h2
                            className={`text-4xl md:text-5xl font-bold ${theme.text}`}
                        >
                            Compare Products
                        </h2>
                        <p
                            className={`text-lg ${theme.textSecondary} max-w-2xl mx-auto`}
                        >
                            Find the right tool for your needs. Each product
                            excels in its domain.
                        </p>
                    </div>

                    <div
                        className={`${theme.cardBg} rounded-2xl border ${theme.border} overflow-x-auto`}
                    >
                        <table className="w-full">
                            <thead>
                                <tr
                                    className={`border-b ${theme.border} ${theme.text}`}
                                >
                                    <th className="text-left p-6 font-semibold">
                                        Product
                                    </th>
                                    <th className="text-left p-6 font-semibold">
                                        Status
                                    </th>
                                    <th className="text-left p-6 font-semibold">
                                        Best For
                                    </th>
                                    <th className="text-left p-6 font-semibold">
                                        Key Strength
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr
                                        key={product.title}
                                        className={`border-b ${theme.border} last:border-0 ${theme.hoverBg} transition`}
                                    >
                                        <td className="p-6">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`w-10 h-10 rounded-lg bg-gradient-to-r ${product.gradient} flex items-center justify-center`}
                                                >
                                                    <product.icon className="w-5 h-5 text-white" />
                                                </div>
                                                <div>
                                                    <div
                                                        className={`font-semibold ${theme.text}`}
                                                    >
                                                        {product.title}
                                                    </div>
                                                    <div
                                                        className={`text-sm ${theme.textSecondary}`}
                                                    >
                                                        {product.tagline}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-6">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(product.status)}`}
                                            >
                                                {product.status}
                                            </span>
                                        </td>
                                        <td className="p-6">
                                            <span
                                                className={`text-sm ${theme.textSecondary}`}
                                            >
                                                {product.audience}
                                            </span>
                                        </td>
                                        <td className="p-6">
                                            <span
                                                className={`text-sm ${theme.text}`}
                                            >
                                                {
                                                    product.features[0].split(
                                                        " - ",
                                                    )[0]
                                                }
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-32 px-6">
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
                                    Start Building Today
                                </span>
                            </div>

                            <h2
                                className={`text-4xl md:text-6xl font-bold ${theme.text} mb-6`}
                            >
                                Ready to elevate your workflow?
                            </h2>

                            <p
                                className={`text-lg md:text-xl ${theme.textSecondary} max-w-2xl mx-auto mb-8`}
                            >
                                Join thousands of developers and teams who trust
                                NF Software for their mission-critical tools.
                                Download now or get in touch.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center">
                                <a
                                    href="https://github.com/NoamFav"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                                >
                                    <Github className="w-5 h-5" />
                                    Explore on GitHub
                                </a>
                                <a
                                    href="mailto:contact@nf-software.com"
                                    className={`inline-flex items-center gap-2 px-8 py-4 ${theme.cardBg} border ${theme.border} font-semibold rounded-full hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105`}
                                >
                                    <Mail className="w-5 h-5" />
                                    Contact Sales
                                </a>
                            </div>

                            {/* Quick Stats */}
                            <div className="flex flex-wrap items-center justify-center gap-8 pt-12">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span
                                        className={`text-sm ${theme.textSecondary}`}
                                    >
                                        Open Source
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-500" />
                                    <span
                                        className={`text-sm ${theme.textSecondary}`}
                                    >
                                        Community Driven
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-blue-500" />
                                    <span
                                        className={`text-sm ${theme.textSecondary}`}
                                    >
                                        Enterprise Ready
                                    </span>
                                </div>
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
                                <a
                                    href="mailto:contact@nf-software.com"
                                    className={`${theme.textSecondary} hover:${theme.text} transition`}
                                    aria-label="Email"
                                >
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Products Column */}
                        <div>
                            <h3 className={`font-semibold ${theme.text} mb-4`}>
                                Products
                            </h3>
                            <ul className="space-y-2">
                                {products.slice(0, 4).map((product) => (
                                    <li key={product.title}>
                                        <a
                                            href={`#${slugify(product.title)}`}
                                            className={`text-sm ${theme.textSecondary} hover:${theme.text} transition`}
                                        >
                                            {product.title}
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
                                        href="/about"
                                        className={`text-sm ${theme.textSecondary} hover:${theme.text} transition`}
                                    >
                                        About
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
                                <li>
                                    <a
                                        href="#"
                                        className={`text-sm ${theme.textSecondary} hover:${theme.text} transition`}
                                    >
                                        Careers
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

            {/* Scroll to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className={`fixed bottom-8 right-8 p-4 ${darkMode ? "bg-white text-black" : "bg-black text-white"} rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50 opacity-0 pointer-events-none`}
                style={{
                    opacity:
                        typeof window !== "undefined" && window.scrollY > 500
                            ? 1
                            : 0,
                    pointerEvents:
                        typeof window !== "undefined" && window.scrollY > 500
                            ? "auto"
                            : "none",
                }}
                aria-label="Scroll to top"
            >
                <ChevronRight className="w-6 h-6 -rotate-90" />
            </button>

            <style jsx>{`
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

                .animate-blob {
                    animation: blob 7s infinite;
                }

                .animation-delay-2000 {
                    animation-delay: 2s;
                }

                [data-animate] {
                    opacity: 0;
                    transform: translateY(30px);
                    transition:
                        opacity 0.6s ease-out,
                        transform 0.6s ease-out;
                }

                [data-animate].is-visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                @media (prefers-reduced-motion: reduce) {
                    [data-animate] {
                        opacity: 1;
                        transform: none;
                        transition: none;
                    }
                    .animate-blob {
                        animation: none;
                    }
                }
            `}</style>
        </div>
    );
};

export default ProductsPage;
