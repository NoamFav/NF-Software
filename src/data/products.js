// ============================================================================
// FILE: src/data/products.js
// ============================================================================
export const products = [
    {
        title: "Iris",
        tagline: "The AI assistant, reimagined",
        description:
            "A local-first, modular AI assistant that runs offline, adapts to you, and integrates seamlessly into your system. Built with privacy and performance at its core.",
        features: [
            "Fully local & private - Your data never leaves your machine",
            "Modular agent system - Extend functionality with custom agents",
            "Voice + terminal control - Natural interaction, power-user efficiency",
        ],
        image: "https://images.unsplash.com/photo-1727434032773-af3cd98375ba?q=80&w=3132&auto=format&fit=crop",
        gradient: "from-indigo-600 to-purple-600",
        technologies: ["Golang", "whisper.cpp", "llama.cpp", "coqui"],
        status: "In Development",
        audience: "Privacy-conscious developers and power users",
        github: true,
    },
    {
        title: "Sysmon-CLI",
        tagline: "Performance monitoring, reimagined",
        description:
            "Real-time system metrics at your fingertips. Built for professionals who demand precision and speed. Monitor CPU, memory, network, and more with minimal overhead.",
        features: [
            "Sub-millisecond latency - See changes as they happen",
            "Minimal system impact - Less than 0.1% CPU overhead",
            "Cross-platform support - Linux, macOS, Windows, BSD",
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
        gradient: "from-blue-500 to-cyan-500",
        technologies: ["Rust", "Terminal UI", "WebAssembly"],
        status: "Live",
        audience: "DevOps engineers and system administrators",
        github: true,
    },
    {
        title: "Zvezda",
        tagline: "Git, but intelligent",
        description:
            "Transform your workflow with AI-powered commit assistance and repository insights that adapt to your team. Smart analytics meet seamless integration.",
        features: [
            "AI commit messages - Context-aware, consistent, professional",
            "Smart analytics dashboard - Visualize patterns and bottlenecks",
            "Team collaboration insights - Optimize workflow and code review",
        ],
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1200&q=80",
        gradient: "from-violet-500 to-purple-500",
        technologies: ["Golang", "Charm stack", "ollama", "CLI"],
        status: "Beta",
        audience: "Development teams and solo developers",
        github: true,
    },
    {
        title: "CodeGrep",
        tagline: "Search code like you think",
        description:
            "Semantic code search powered by AST parsing. Find what you mean, not just what you type. Navigate massive codebases with ease and precision.",
        features: [
            "AST-aware search - Understand structure, not just text",
            "Lightning fast indexing - 100K+ files in under a second",
            "Smart filtering - By language, scope, complexity, or context",
        ],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
        gradient: "from-emerald-500 to-teal-500",
        technologies: ["Go", "Tree-sitter", "SQLite"],
        status: "Live",
        audience: "Engineers working with large codebases",
        github: true,
    },
    {
        title: "ShadowedHunter",
        tagline: "Adventure awaits in the shadows",
        description:
            "A metroidvania experience crafted with precision. Procedural worlds meet handcrafted gameplay in this atmospheric action-adventure.",
        features: [
            "Procedural generation - Infinite replayability, curated feel",
            "Fluid combat mechanics - Responsive, skill-based encounters",
            "Rich environmental storytelling - Show, don't tell",
        ],
        image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&q=80",
        gradient: "from-orange-500 to-red-500",
        technologies: ["Unity", "C#", "Spine"],
        status: "In Development",
        audience: "Players who love exploration and challenge",
        github: false,
    },
    {
        title: "BitVoyager",
        tagline: "Learn to code by doing",
        description:
            "Interactive programming education that feels like play. Gamified learning paths that stick. Master coding through hands-on challenges.",
        features: [
            "Interactive coding lessons - Write code, see results instantly",
            "Real-time feedback system - Hints that guide without spoiling",
            "Personalized progress tracking - Adaptive difficulty and pacing",
        ],
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&q=80",
        gradient: "from-pink-500 to-rose-500",
        technologies: ["React", "Monaco Editor", "Docker"],
        status: "Beta",
        audience: "Aspiring developers and coding bootcamps",
        github: false,
    },
    {
        title: "SysDash Ultra",
        tagline: "Your system, visualized",
        description:
            "Advanced monitoring meets predictive analytics. See the future of your infrastructure before it happens with ML-powered insights.",
        features: [
            "Predictive AI alerts - Know about issues before they happen",
            "Beautiful custom dashboards - Drag, drop, configure, done",
            "Deep performance insights - Root cause analysis in seconds",
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
        gradient: "from-indigo-500 to-blue-500",
        technologies: ["Vue.js", "Python", "TimescaleDB"],
        status: "Live",
        audience: "SREs and infrastructure teams",
        github: true,
    },
];
