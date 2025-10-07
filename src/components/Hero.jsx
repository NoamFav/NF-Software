import React, { useState, useEffect, useRef } from "react";
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
    Linkedin,
    Twitter,
    CheckCircle,
    Star,
    Rocket,
    Download,
    Play,
    Menu,
    X,
} from "lucide-react";

const Hero = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [, setActiveSection] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [, setIsVisible] = useState({});
    const observerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);

            // Update active section
            const sections = [
                "hero",
                "about",
                "products",
                "stats",
                "testimonials",
                "cta",
            ];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);

        // Intersection Observer for animations
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible((prev) => ({
                            ...prev,
                            [entry.target.id]: true,
                        }));
                    }
                });
            },
            { threshold: 0.1 },
        );

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const elements = document.querySelectorAll("[data-animate]");
        elements.forEach((el) => observerRef.current?.observe(el));
    }, []);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    const products = [
        {
            title: "Iris",
            tagline: "The AI assistant, reimagined",
            description:
                "A local-first, modular AI assistant that runs offline, adapts to you, and integrates seamlessly into your system. Built with privacy and performance at its core.",
            features: [
                "Fully local & private",
                "Modular agent system",
                "Voice + terminal control",
            ],
            image: "https://images.unsplash.com/photo-1727434032773-af3cd98375ba?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            gradient: "from-indigo-600 to-purple-600",
            technologies: ["Golang", "whisper.cpp", "llama.cpp", "coqui"],
            status: "In Development",
        },
        {
            title: "Sysmon-CLI",
            tagline: "Performance monitoring, reimagined",
            description:
                "Real-time system metrics at your fingertips. Built for professionals who demand precision and speed. Monitor CPU, memory, network, and more with minimal overhead.",
            features: [
                "Sub-millisecond latency",
                "Minimal system impact",
                "Cross-platform support",
            ],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
            gradient: "from-blue-500 to-cyan-500",
            technologies: ["Rust", "Terminal UI", "WebAssembly"],
            status: "Live",
        },
        {
            title: "Zvezda",
            tagline: "Git, but intelligent",
            description:
                "Transform your workflow with AI-powered commit assistance and repository insights that adapt to your team. Smart analytics meet seamless integration.",
            features: [
                "AI commit messages",
                "Smart analytics dashboard",
                "Team collaboration insights",
            ],
            image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1200&q=80",
            gradient: "from-violet-500 to-purple-500",
            technologies: ["Golang", "Charm stack", "ollama", "CLI"],
            status: "Beta",
        },
        {
            title: "CodeGrep",
            tagline: "Search code like you think",
            description:
                "Semantic code search powered by AST parsing. Find what you mean, not just what you type. Navigate massive codebases with ease and precision.",
            features: [
                "AST-aware search",
                "Lightning fast indexing",
                "Smart filtering",
            ],
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
            gradient: "from-emerald-500 to-teal-500",
            technologies: ["Go", "Tree-sitter", "SQLite"],
            status: "Live",
        },
        {
            title: "ShadowedHunter",
            tagline: "Adventure awaits in the shadows",
            description:
                "A metroidvania experience crafted with precision. Procedural worlds meet handcrafted gameplay in this atmospheric action-adventure.",
            features: [
                "Procedural generation",
                "Fluid combat mechanics",
                "Rich environmental storytelling",
            ],
            image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&q=80",
            gradient: "from-orange-500 to-red-500",
            technologies: ["Unity", "C#", "Spine"],
            status: "In Development",
        },
        {
            title: "BitVoyager",
            tagline: "Learn to code by doing",
            description:
                "Interactive programming education that feels like play. Gamified learning paths that stick. Master coding through hands-on challenges.",
            features: [
                "Interactive coding lessons",
                "Real-time feedback system",
                "Personalized progress tracking",
            ],
            image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&q=80",
            gradient: "from-pink-500 to-rose-500",
            technologies: ["React", "Monaco Editor", "Docker"],
            status: "Beta",
        },
        {
            title: "SysDash Ultra",
            tagline: "Your system, visualized",
            description:
                "Advanced monitoring meets predictive analytics. See the future of your infrastructure before it happens with ML-powered insights.",
            features: [
                "Predictive AI alerts",
                "Beautiful custom dashboards",
                "Deep performance insights",
            ],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
            gradient: "from-indigo-500 to-blue-500",
            technologies: ["Vue.js", "Python", "TimescaleDB"],
            status: "Live",
        },
    ];

    const stats = [
        { label: "Projects Delivered", value: "50+", icon: Rocket },
        { label: "Lines of Code", value: "500K+", icon: Code },
        { label: "Active Users", value: "10K+", icon: Users },
        { label: "GitHub Stars", value: "2.5K+", icon: Star },
    ];

    const testimonials = [
        {
            name: "Sarah Chen",
            role: "CTO at TechCorp",
            content:
                "The quality of work and attention to detail is exceptional. NF-Softwares's tools have transformed how our team operates.",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
        },
        {
            name: "Marcus Rodriguez",
            role: "Lead Developer",
            content:
                "Sysmon-CLI has become an essential part of our DevOps toolkit. The performance is unmatched.",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
        },
        {
            name: "Emily Watson",
            role: "Product Manager",
            content:
                "Working with NF-Softwares was seamless. They understood our vision and delivered beyond expectations.",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
        },
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
                    left: mousePosition.x - 192,
                    top: mousePosition.y - 192,
                    background: `radial-gradient(circle, ${darkMode ? "rgba(99, 102, 241, 0.15)" : "rgba(99, 102, 241, 0.08)"} 0%, transparent 70%)`,
                    opacity: scrollY < 100 ? 1 : 0,
                }}
            />

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
                            href="#about"
                            className={`text-sm ${theme.textSecondary} hover:${theme.text} transition`}
                        >
                            About
                        </a>
                        <a
                            href="#products"
                            className={`text-sm ${theme.textSecondary} hover:${theme.text} transition`}
                        >
                            Products
                        </a>
                        <a
                            href="#testimonials"
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
                                href="#about"
                                className={`block text-sm ${theme.textSecondary}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                About
                            </a>
                            <a
                                href="#products"
                                className={`block text-sm ${theme.textSecondary}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Products
                            </a>
                            <a
                                href="#testimonials"
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
                            Innovating Software Solutions Since 2020
                        </span>
                    </div>

                    <h1
                        className={`text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight ${theme.text} animate-fade-in-up`}
                    >
                        We build tools
                        <br />
                        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                            that matter
                        </span>
                    </h1>

                    <p
                        className={`text-xl md:text-2xl ${theme.textSecondary} max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200`}
                    >
                        Professional software solutions designed for developers,
                        enterprises, and innovators who refuse to compromise on
                        quality, performance, and user experience.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center pt-8 animate-fade-in-up animation-delay-400">
                        <a
                            href="#products"
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

                    {/* Social Proof */}
                    <div className="flex flex-wrap items-center justify-center gap-8 pt-12 animate-fade-in animation-delay-600">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className={`text-sm ${theme.textSecondary}`}>
                                Trusted by 100+ teams
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Star className="w-5 h-5 text-yellow-500" />
                            <span className={`text-sm ${theme.textSecondary}`}>
                                2.5K+ GitHub stars
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Award className="w-5 h-5 text-blue-500" />
                            <span className={`text-sm ${theme.textSecondary}`}>
                                Award-winning design
                            </span>
                        </div>
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

            {/* About Section */}
            <section id="about" data-animate className="relative py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center space-y-6 mb-20">
                        <h2
                            className={`text-5xl md:text-6xl font-bold ${theme.text}`}
                        >
                            Innovation at Scale
                        </h2>
                        <p
                            className={`text-xl ${theme.textSecondary} max-w-3xl mx-auto`}
                        >
                            We combine cutting-edge technology with elegant
                            design to create software that doesn't just work—it
                            excels.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className={`${theme.cardBg} rounded-2xl p-8 text-center border ${theme.border} hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
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

            {/* Products Showcase */}
            <section id="products" className="relative">
                <div className="text-center py-20 px-6">
                    <h2
                        className={`text-5xl md:text-6xl font-bold ${theme.text} mb-6`}
                    >
                        Our Products
                    </h2>
                    <p
                        className={`text-xl ${theme.textSecondary} max-w-2xl mx-auto`}
                    >
                        Each product is crafted with precision, designed for
                        performance, and built to last.
                    </p>
                </div>

                {products.map((product, index) => (
                    <div
                        key={product.title}
                        data-animate
                        className={`relative min-h-screen flex items-center ${index % 2 === 0 ? "" : "flex-row-reverse"}`}
                    >
                        {/* Diagonal Split Background */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div
                                className={`absolute inset-0 ${index % 2 === 0 ? "origin-bottom-left" : "origin-bottom-right"}`}
                                style={{
                                    background: darkMode
                                        ? "#0a0a0a"
                                        : "#fafafa",
                                    clipPath:
                                        index % 2 === 0
                                            ? "polygon(0 0, 60% 0, 50% 100%, 0 100%)"
                                            : "polygon(40% 0, 100% 0, 100% 100%, 50% 100%)",
                                }}
                            />
                        </div>

                        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                            {/* Content Side */}
                            <div
                                className={`space-y-8 ${index % 2 === 0 ? "lg:pr-16" : "lg:pl-16 lg:order-2"}`}
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <div
                                            className={`inline-block px-4 py-1 bg-gradient-to-r ${product.gradient} rounded-full text-white text-sm font-semibold`}
                                        >
                                            {product.title}
                                        </div>
                                        <span
                                            className={`px-3 py-1 ${theme.cardBg} rounded-full text-xs font-medium ${theme.textSecondary} border ${theme.border}`}
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
                                <div className="space-y-3">
                                    {product.features.map((feature, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-3 group"
                                        >
                                            <div
                                                className={`w-8 h-8 rounded-full bg-gradient-to-r ${product.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                                            >
                                                {i === 0 && (
                                                    <Zap className="w-4 h-4 text-white" />
                                                )}
                                                {i === 1 && (
                                                    <Shield className="w-4 h-4 text-white" />
                                                )}
                                                {i === 2 && (
                                                    <Target className="w-4 h-4 text-white" />
                                                )}
                                            </div>
                                            <span
                                                className={`text-base font-medium ${theme.text}`}
                                            >
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
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

                                <div className="flex gap-4 pt-4">
                                    <button
                                        className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${product.gradient} text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 transformhover:scale-105`}
                                    >
                                        Learn More
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                    {product.status === "Live" && (
                                        <button
                                            className={`inline-flex items-center gap-2 px-6 py-3 ${theme.cardBg} border ${theme.border} font-semibold rounded-full hover:border-blue-500/50 transition-all duration-300`}
                                        >
                                            <Download className="w-5 h-5" />
                                            Download
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Image Side */}
                            <div
                                className={`${index % 2 === 0 ? "lg:pl-16" : "lg:pr-16 lg:order-1"}`}
                            >
                                <div
                                    className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-700 group"
                                    style={{
                                        transform: `translateY(${scrollY * 0.03}px)`,
                                    }}
                                >
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
                                    />
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-[500px] object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="px-6 py-3 bg-white text-black font-semibold rounded-full flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-transform">
                                            <Play className="w-5 h-5" />
                                            View Demo
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Testimonials Section */}
            <section
                id="testimonials"
                data-animate
                className="relative py-32 px-6"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center space-y-6 mb-20">
                        <h2
                            className={`text-5xl md:text-6xl font-bold ${theme.text}`}
                        >
                            Loved by Developers
                        </h2>
                        <p
                            className={`text-xl ${theme.textSecondary} max-w-3xl mx-auto`}
                        >
                            Hear from the teams and individuals who trust our
                            software every day.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.name}
                                className={`${theme.cardBg} rounded-2xl p-8 border ${theme.border} hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-5 h-5 fill-yellow-500 text-yellow-500"
                                        />
                                    ))}
                                </div>
                                <p
                                    className={`${theme.textSecondary} mb-6 text-base leading-relaxed`}
                                >
                                    "{testimonial.content}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <div
                                            className={`font-semibold ${theme.text}`}
                                        >
                                            {testimonial.name}
                                        </div>
                                        <div
                                            className={`text-sm ${theme.textSecondary}`}
                                        >
                                            {testimonial.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="cta" className="relative py-32 px-6">
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
                                <Rocket className="w-4 h-4 text-blue-500" />
                                <span className="text-sm font-medium">
                                    Let's Build Together
                                </span>
                            </div>

                            <h2
                                className={`text-4xl md:text-6xl font-bold ${theme.text} mb-6`}
                            >
                                Ready to innovate?
                            </h2>

                            <p
                                className={`text-lg md:text-xl ${theme.textSecondary} max-w-2xl mx-auto mb-8`}
                            >
                                Let's collaborate on building exceptional
                                software solutions that push boundaries and
                                create lasting impact.
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
                                    href="https://github.com/NoamFav"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-2 px-8 py-4 ${theme.cardBg} border ${theme.border} font-semibold rounded-full hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105`}
                                >
                                    <Github className="w-5 h-5" />
                                    Explore Projects
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
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-2 ${theme.textSecondary} hover:${theme.text} transition`}
                                >
                                    <Linkedin className="w-5 h-5" />
                                    <span className="text-sm">LinkedIn</span>
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-2 ${theme.textSecondary} hover:${theme.text} transition`}
                                >
                                    <Twitter className="w-5 h-5" />
                                    <span className="text-sm">Twitter</span>
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
                                    NF-Software
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
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${theme.textSecondary} hover:${theme.text} transition`}
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${theme.textSecondary} hover:${theme.text} transition`}
                                    aria-label="Twitter"
                                >
                                    <Twitter className="w-5 h-5" />
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
                                            href={`#${product.toLowerCase()}`}
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
                                        href="#about"
                                        className={`text-sm ${theme.textSecondary} hover:${theme.text} transition`}
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#testimonials"
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
                            © 2025 NF-Software. All rights reserved.
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
                            <a
                                href="#"
                                className={`text-sm ${theme.textSecondary} hover:${theme.text} transition`}
                            >
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Scroll to Top Button */}
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
            `}</style>
        </div>
    );
};

export default Hero;
