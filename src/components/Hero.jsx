import React, { useState, useEffect } from "react";
import {
    Code,
    Sparkles,
    ArrowRight,
    Github,
    Mail,
    ExternalLink,
    Layers,
    Zap,
    Shield,
    ChevronDown,
    Terminal,
    Gamepad2,
    Database,
    GraduationCap,
    Monitor,
} from "lucide-react";

const NfSoftwareHero = () => {
    const [scrollY, setScrollY] = useState(0);
    const [activeCategory, setActiveCategory] = useState("all");

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const categories = [
        { id: "all", label: "All Projects", icon: Layers },
        { id: "system", label: "System Tools", icon: Monitor },
        { id: "dev", label: "Dev Tools", icon: Terminal },
        { id: "games", label: "Games", icon: Gamepad2 },
        { id: "education", label: "Education", icon: GraduationCap },
        { id: "data", label: "Data & Research", icon: Database },
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
                "Lightweight terminal system monitor for Mac & Linux with real-time metrics",
            category: "System Utilities & Monitoring",
            status: "active",
            progress: 30,
            tech: ["C", "POSIX"],
            color: "from-cyan-500 to-blue-600",
        },
        {
            title: "SysDash Ultra",
            description:
                "Advanced monitoring dashboard with predictive analytics",
            category: "System Utilities & Monitoring",
            status: "active",
            progress: 25,
            tech: ["Rust", "Swift"],
            color: "from-purple-500 to-pink-600",
        },
        {
            title: "NetViz Pro",
            description: "3D network traffic visualizer with anomaly detection",
            category: "System Utilities & Monitoring",
            status: "planning",
            progress: 20,
            tech: ["Rust", "TypeScript"],
            color: "from-emerald-500 to-teal-600",
        },
        {
            title: "CodeGrep",
            description: "Syntax-aware code search using AST parsing",
            category: "Developer Tools & Productivity",
            status: "active",
            progress: 60,
            tech: ["Rust", "Tree-sitter"],
            color: "from-orange-500 to-red-600",
        },
        {
            title: "2077.nvim",
            description: "Cyberpunk-inspired Neovim theme",
            category: "Developer Tools & Productivity",
            status: "completed",
            progress: 100,
            tech: ["Lua"],
            color: "from-yellow-500 to-orange-600",
        },
        {
            title: "Zvezda",
            description: "Terminal Git dashboard with AI commit suggestions",
            category: "Developer Tools & Productivity",
            status: "active",
            progress: 70,
            tech: ["Go", "Bubble Tea"],
            color: "from-indigo-500 to-purple-600",
        },
        {
            title: "QueryCrust",
            description: "Web-based database query management tool",
            category: "Developer Tools & Productivity",
            status: "completed",
            progress: 100,
            tech: ["React", "Python"],
            color: "from-blue-500 to-cyan-600",
        },
        {
            title: "ShadowedHunter",
            description: "Metroidvania game with advanced mechanics",
            category: "Games & Interactive Entertainment",
            status: "active",
            progress: 35,
            tech: ["C#", "Unity"],
            color: "from-red-500 to-pink-600",
        },
        {
            title: "Pot Pot Golf",
            description: "Physics-based 2D mini-golf with AI opponents",
            category: "Games & Interactive Entertainment",
            status: "completed",
            progress: 100,
            tech: ["Java", "Box2D"],
            color: "from-green-500 to-emerald-600",
        },
        {
            title: "Frisia",
            description: "Multiplayer Frisian Draughts with AI",
            category: "Games & Interactive Entertainment",
            status: "active",
            progress: 45,
            tech: ["Rust", "WebSockets"],
            color: "from-amber-500 to-orange-600",
        },
        {
            title: "BitVoyager",
            description: "Gamified programming education platform",
            category: "Educational Technology",
            status: "active",
            progress: 55,
            tech: ["TypeScript", "WebAssembly"],
            color: "from-violet-500 to-purple-600",
        },
        {
            title: "Thynkly",
            description: "AI-powered knowledge management platform",
            category: "Knowledge Management & Learning",
            status: "active",
            progress: 20,
            tech: ["React", "AI"],
            color: "from-pink-500 to-rose-600",
        },
        {
            title: "EnronBox",
            description: "Email dataset analysis with semantic search",
            category: "Data Analysis & Research",
            status: "active",
            progress: 40,
            tech: ["Python", "Go"],
            color: "from-slate-500 to-gray-600",
        },
    ];

    const filteredProjects =
        activeCategory === "all"
            ? projects
            : projects.filter(
                  (p) => categoryMap[p.category] === activeCategory,
              );

    const stats = [
        { label: "Active Projects", value: "13+", icon: Zap },
        { label: "Technologies", value: "20+", icon: Code },
        { label: "Years Building", value: "5+", icon: Sparkles },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"
                    style={{ animationDuration: "8s" }}
                />
                <div
                    className="absolute w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl top-1/2 -right-48 animate-pulse"
                    style={{ animationDuration: "10s", animationDelay: "2s" }}
                />
                <div
                    className="absolute w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl bottom-0 left-1/3 animate-pulse"
                    style={{ animationDuration: "12s", animationDelay: "4s" }}
                />

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"
                    style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                />
            </div>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="text-center mb-16 space-y-8">
                        {/* Logo/Badge */}
                        <div
                            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10
                          backdrop-blur-xl rounded-full border border-white/10"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 blur-md opacity-50" />
                                <Code className="w-5 h-5 relative text-cyan-400" />
                            </div>
                            <span className="font-mono text-sm tracking-wider">
                                NF-SOFTWARE
                            </span>
                            <Sparkles className="w-4 h-4 text-purple-400" />
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h1 className="text-6xl md:text-8xl font-black tracking-tight">
                                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    Building Tomorrow's
                                </span>
                            </h1>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tight">
                                <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                    Software Tools
                                </span>
                            </h2>
                        </div>

                        {/* Description */}
                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            An independent software studio crafting innovative
                            solutions across{" "}
                            <span className="text-cyan-400 font-semibold">
                                system utilities
                            </span>
                            ,{" "}
                            <span className="text-purple-400 font-semibold">
                                developer tools
                            </span>
                            , and{" "}
                            <span className="text-pink-400 font-semibold">
                                interactive experiences
                            </span>
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 justify-center pt-8">
                            <a
                                href="#projects"
                                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold
                          hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105
                          flex items-center gap-2"
                            >
                                Explore Projects
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="mailto:contact@nf-software.com"
                                className="px-8 py-4 bg-white/5 backdrop-blur-xl rounded-xl font-semibold border border-white/10
                          hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                            >
                                <Mail className="w-5 h-5" />
                                Get in Touch
                            </a>
                            <a
                                href="https://github.com/NoamFav"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-white/5 backdrop-blur-xl rounded-xl font-semibold border border-white/10
                          hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                            >
                                <Github className="w-5 h-5" />
                                GitHub
                            </a>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={index}
                                    className="relative group"
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                    }}
                                >
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                    <div
                                        className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10
                                hover:border-white/20 transition-all duration-300"
                                    >
                                        <Icon className="w-8 h-8 text-cyan-400 mb-4" />
                                        <div className="text-4xl font-black mb-2 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                            {stat.value}
                                        </div>
                                        <div className="text-slate-400 font-medium">
                                            {stat.label}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
                        <ChevronDown className="w-8 h-8 text-slate-500" />
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="relative py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 space-y-4">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 backdrop-blur-xl rounded-full
                          border border-purple-500/20 mb-4"
                        >
                            <Layers className="w-4 h-4 text-purple-400" />
                            <span className="text-sm font-mono text-purple-400">
                                PROJECT PORTFOLIO
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black">
                            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                Our Creations
                            </span>
                        </h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            A collection of innovative tools, games, and
                            platforms built with cutting-edge technologies
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((cat) => {
                            const Icon = cat.icon;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2
                            ${
                                activeCategory === cat.id
                                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg shadow-cyan-500/30"
                                    : "bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10"
                            }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    {cat.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.title}
                                className="group relative"
                                style={{
                                    animation:
                                        "fadeInUp 0.6s ease-out forwards",
                                    animationDelay: `${index * 0.1}s`,
                                    opacity: 0,
                                }}
                            >
                                <div
                                    className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-2xl blur-xl
                              opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                                />
                                <div
                                    className="relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10
                              hover:border-white/20 transition-all duration-300 h-full flex flex-col"
                                >
                                    {/* Status Bar */}
                                    <div
                                        className={`h-1 bg-gradient-to-r ${project.color}`}
                                    />

                                    <div className="p-6 flex-1 flex flex-col">
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-4">
                                            <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors">
                                                {project.title}
                                            </h3>
                                            {project.status === "completed" ? (
                                                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-semibold">
                                                    ✓ Complete
                                                </span>
                                            ) : project.status === "active" ? (
                                                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-semibold flex items-center gap-1">
                                                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                                                    Active
                                                </span>
                                            ) : (
                                                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-semibold">
                                                    Planning
                                                </span>
                                            )}
                                        </div>

                                        {/* Description */}
                                        <p className="text-slate-400 mb-4 flex-1">
                                            {project.description}
                                        </p>

                                        {/* Progress Bar */}
                                        <div className="mb-4">
                                            <div className="flex justify-between text-sm mb-2">
                                                <span className="text-slate-500 font-medium">
                                                    Progress
                                                </span>
                                                <span className="text-slate-400 font-bold">
                                                    {project.progress}%
                                                </span>
                                            </div>
                                            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full bg-gradient-to-r ${project.color} transition-all duration-500`}
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
                                                    className="px-3 py-1 bg-white/5 rounded-lg text-xs font-mono text-slate-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="relative py-32 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 backdrop-blur-xl rounded-full
                        border border-cyan-500/20 mb-4"
                    >
                        <Shield className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm font-mono text-cyan-400">
                            INDEPENDENT & INNOVATIVE
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-black">
                        <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                            Ready to Collaborate?
                        </span>
                    </h2>

                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        NoamFav-Software is open to partnerships, custom
                        development, and innovative project collaborations
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center pt-8">
                        <a
                            href="mailto:contact@nf-software.com"
                            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold
                        hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105
                        flex items-center gap-2"
                        >
                            Start a Conversation
                            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </div>

                    {/* Footer Note */}
                    <p className="text-sm text-slate-500 pt-12">
                        © {new Date().getFullYear()} NoamFav-Software. All
                        projects and trademarks pending.
                        <br />
                        <span className="text-slate-600">
                            Building the future, one commit at a time.
                        </span>
                    </p>
                </div>
            </section>

            <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
};

export default NfSoftwareHero;
