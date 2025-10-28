// ============================================================================
// FILE: src/data/products.js - UPDATED WITH ALL PRODUCTS
// ============================================================================
import {
    Code,
    Cpu,
    Brain,
    GraduationCap,
    GitBranch,
    Search,
    Terminal,
    BarChart3,
    Network,
    Mic,
    Factory,
    Database,
    FolderTree,
    Sparkles,
} from "lucide-react";

export const suites = [
    {
        id: "dev",
        name: "NF Dev Suite",
        tagline: "Complete developer automation toolkit",
        description:
            "Full developer automation toolkit integrating all Git, repo, and productivity utilities.",
        gradient: "from-blue-500 to-cyan-500",
        icon: "Code",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
        pricing: {
            individual: { annual: 39, oneTime: 129 },
            professional: { annual: 59 },
            enterprise: { annual: 249, users: 5 },
        },
        tools: [
            {
                name: "auto-commit",
                tagline: "AI-Powered Git Automation",
                description:
                    "High-performance automation tool managing commits, pushes, and repository cleanup with AI-generated conventional commit messages.",
                features: [
                    "AI commit messages - Context-aware and consistent",
                    "Batch operations - Multi-repo support",
                    "Zvezda integration - Seamless workflow",
                ],
                tech: ["Go", "Python", "OpenAI API"],
                status: "Live",
                individual: { annual: 9, oneTime: 19 },
                github: true,
            },
            {
                name: "zvezda",
                tagline: "Visual DevOps CLI",
                description:
                    "Modern terminal interface built on Charm stack providing real-time repository analytics and interactive dashboards.",
                features: [
                    "Terminal UI - Beautiful Bubble Tea interface",
                    "Repo analytics - Real-time insights",
                    "GitHub integration - Native API support",
                ],
                tech: ["Go", "Bubble Tea", "Lipgloss"],
                status: "Beta",
                individual: { annual: 12, oneTime: 29 },
                github: true,
            },
            {
                name: "repoops",
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
                individual: { annual: 10, oneTime: 24 },
                github: true,
            },
            {
                name: "CodeGrep",
                tagline: "Syntax-Aware Code Search",
                description:
                    "High-performance code search using Tree-sitter for syntax-aware, context-rich code discovery.",
                features: [
                    "AST parsing - Understands code structure",
                    "Multi-language - Supports 40+ languages",
                    "Fast indexing - 100K+ files in seconds",
                ],
                tech: ["Rust", "Tree-sitter", "Regex"],
                status: "Beta",
                individual: { annual: 7, oneTime: 15 },
                github: true,
            },
            {
                name: "NFvim Suite",
                tagline: "Neovim Workflow Environment",
                description:
                    "Curated Neovim setup with custom plugins including Apple Music control and Cyberpunk theme.",
                features: [
                    "LSP integration - Full language support",
                    "Custom plugins - apple_music.nvim & 2077 theme",
                    "Optimized config - Professional workflow",
                ],
                tech: ["Lua", "VimScript", "Tree-sitter"],
                status: "Live",
                individual: { annual: 5, oneTime: 9 },
                github: true,
            },
        ],
    },
    {
        id: "sys",
        name: "NF Sys Suite",
        tagline: "System telemetry and visualization",
        description:
            "Real-time system telemetry, dashboards, and network visualization for performance monitoring.",
        gradient: "from-purple-500 to-pink-500",
        icon: "Cpu",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
        pricing: {
            individual: { annual: 29, oneTime: 99 },
            professional: { annual: 49 },
            enterprise: { annual: 199, users: 5 },
        },
        tools: [
            {
                name: "Sysmon-CLI",
                tagline: "Terminal System Monitor",
                description:
                    "Cross-platform command-line system monitor with minimal overhead and maximum insight.",
                features: [
                    "Real-time metrics - CPU, RAM, disk, network",
                    "Low overhead - Less than 0.1% CPU usage",
                    "Cross-platform - Linux, macOS, Windows, BSD",
                ],
                tech: ["C", "POSIX", "IOKit", "procfs"],
                status: "Live",
                individual: { annual: 7, oneTime: 15 },
                github: true,
            },
            {
                name: "SysDash Ultra",
                tagline: "Intelligent Performance Dashboard",
                description:
                    "Graphical monitoring suite with predictive analytics and interactive visualizations.",
                features: [
                    "Predictive analytics - AI-powered alerts",
                    "Real-time charts - Interactive dashboards",
                    "GPU metrics - Complete system view",
                ],
                tech: ["Rust", "SwiftUI", "WebGL"],
                status: "Beta",
                individual: { annual: 12, oneTime: 25 },
                github: true,
            },
            {
                name: "NetViz Pro",
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
                individual: { annual: 14, oneTime: 29 },
                github: true,
            },
        ],
    },
    {
        id: "iris",
        name: "NF Iris Suite",
        tagline: "Local-first AI platform",
        description:
            "AI assistant platform with local voice, contextual memory, and modular agents - fully offline.",
        gradient: "from-indigo-500 to-purple-500",
        icon: "Brain",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
        pricing: {
            individual: { annual: 49, oneTime: 149 },
            professional: { annual: 69 },
            enterprise: { annual: 299, users: 5 },
        },
        tools: [
            {
                name: "Iris Core",
                tagline: "Local-First AI Assistant",
                description:
                    "Multimodal assistant with speech recognition, NLU, and agent-based automation - operates fully offline.",
                features: [
                    "Offline operation - Complete privacy",
                    "Voice control - Whisper.cpp & Coqui TTS",
                    "Contextual memory - Learns your workflow",
                ],
                tech: ["Rust", "Go", "Whisper.cpp", "Coqui TTS"],
                status: "Beta",
                individual: { annual: 19, oneTime: 39 },
                github: true,
            },
            {
                name: "Iris Voice CLI",
                tagline: "Push-to-Talk AI Interface",
                description:
                    "Lightweight CLI enabling real-time voice communication with Iris using hotkey activation.",
                features: [
                    "Hotkey activation - Instant access",
                    "Local ASR - Privacy-first transcription",
                    "Developer integration - Terminal-native",
                ],
                tech: ["Rust"],
                status: "In Development",
                individual: { annual: 12, oneTime: 25 },
                github: true,
            },
            {
                name: "Iris Factory",
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
                individual: { annual: 9, oneTime: 19 },
                github: true,
            },
            {
                name: "Iris Memory",
                tagline: "Graph-Based Context Database",
                description:
                    "Hybrid database storing interconnected data about user habits and preferences.",
                features: [
                    "Graph database - Connected knowledge",
                    "Context recall - Session continuity",
                    "User adaptation - Personalized AI",
                ],
                tech: ["MongoDB", "Go"],
                status: "Beta",
                individual: { annual: 9, oneTime: 19 },
                github: true,
            },
        ],
    },
    {
        id: "lab",
        name: "NF Lab Suite",
        tagline: "Experimental tools and learning platforms",
        description:
            "Experimental and educational tools for learning, visualization, and research.",
        gradient: "from-emerald-500 to-teal-500",
        icon: "GraduationCap",
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&q=80",
        pricing: {
            individual: { annual: 19, oneTime: 59 },
            professional: { annual: 29 },
            enterprise: { annual: 149, users: 5 },
        },
        tools: [
            {
                name: "BitVoyager",
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
                individual: { annual: 6, oneTime: 14 },
                github: false,
            },
            {
                name: "Thynkly",
                tagline: "AI Knowledge Mapping",
                description:
                    "Knowledge management blending note-taking, mind mapping, and AI-assisted flashcard generation.",
                features: [
                    "Mind mapping - Visual knowledge graphs",
                    "AI assistance - Smart content generation",
                    "Spaced repetition - Optimized learning",
                ],
                tech: ["React", "Flask", "Python", "SQLite"],
                status: "Beta",
                individual: { annual: 8, oneTime: 19 },
                github: false,
            },
            {
                name: "WorkTime",
                tagline: "Intelligent Productivity Tracker",
                description:
                    "iOS app automatically tracking productive time through app usage and motion data analysis.",
                features: [
                    "Auto-tracking - Passive monitoring",
                    "Analytics - Detailed insights",
                    "Screen Time API - Native integration",
                ],
                tech: ["Swift", "SwiftUI", "CoreData"],
                status: "Beta",
                individual: { annual: 4, oneTime: 9 },
                github: false,
            },
        ],
    },
];

export const standaloneTools = [
    {
        name: "AutoSort",
        tagline: "Automated File Organization",
        description:
            "Background service continuously monitoring and organizing files with OCR recognition and intelligent renaming.",
        features: [
            "Auto-organization - Rule-based sorting",
            "OCR renaming - Intelligent file naming",
            "Metadata extraction - Smart categorization",
        ],
        tech: ["Go", "fsnotify", "YAML", "Tesseract OCR"],
        status: "Live",
        gradient: "from-orange-500 to-red-500",
        icon: "FolderTree",
        individual: { annual: 5, oneTime: 12 },
        github: true,
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
    suite.tools.map((tool) => ({
        ...tool,
        suite: suite.name,
        suiteId: suite.id,
        suiteGradient: suite.gradient,
        image: suite.image,
    })),
);
