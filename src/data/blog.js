// ============================================================================
// FILE: src/data/blog.js
// ============================================================================

export const blogPosts = [
    {
        id: "building-iris-local-ai",
        title: "Building Iris: A Local-First AI Assistant",
        slug: "building-iris-local-ai",
        excerpt:
            "How we built Iris, a privacy-focused AI assistant that runs entirely on your machine. No cloud dependencies, no data collection.",
        content: `
# Building Iris: A Local-First AI Assistant

In an era where AI services increasingly depend on cloud infrastructure, we took a different approach. Iris is built with a local-first philosophy—your data never leaves your machine.

## The Challenge

Modern AI assistants require constant internet connectivity and send all your queries to remote servers. This creates several problems:

- **Privacy concerns**: Your conversations are stored on company servers
- **Latency**: Network round-trips add delay to every interaction
- **Costs**: Cloud processing isn't free at scale
- **Availability**: No internet means no assistant

## Our Solution

Iris uses local models and runs entirely on your hardware. Here's what makes it special:

### Privacy by Design
All processing happens on your machine. We literally can't see your data because it never reaches us.

### Lightning Fast
No network latency. Responses are instant because everything runs locally.

### Offline Capable
Work anywhere—on a plane, in a coffee shop, or in your basement. Internet optional.

### Cost Effective
Pay once, use forever. No subscription fees or API costs.

## Technical Architecture

Iris is built with:
- **Go** for the core engine (fast, efficient, cross-platform)
- **Python** for ML model integration
- **OpenAI API** compatibility layer for easy integration

The architecture allows you to swap models, customize behavior, and extend functionality without vendor lock-in.

## What's Next

We're working on:
- More model support
- Better context management
- Plugin system for extensibility
- Mobile apps

Iris is currently in alpha. Join our waitlist to be among the first testers.
        `,
        author: "Noam Favier",
        date: "2024-12-15",
        readTime: "5 min read",
        category: "Product",
        tags: ["AI", "Privacy", "Local-First", "Open Source"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&q=80&fit=crop",
        featured: true,
    },
    {
        id: "why-local-first-software",
        title: "Why Local-First Software Matters",
        slug: "why-local-first-software",
        excerpt:
            "The case for building software that prioritizes local execution over cloud dependency. Better performance, privacy, and user control.",
        content: `
# Why Local-First Software Matters

The pendulum has swung too far toward cloud-centric architectures. It's time to bring computing back to the edge.

## The Cloud-First Problem

Over the last decade, we've moved everything to the cloud:
- Documents (Google Docs, Office 365)
- Photos (iCloud, Google Photos)
- Development tools (GitHub Codespaces, GitPod)
- Even our text editors (VS Code Server)

This creates problems:
- **Performance**: Network is always slower than local disk
- **Privacy**: Your data is on someone else's computer
- **Cost**: Monthly fees add up
- **Reliability**: Service outages affect everyone

## Local-First Advantages

### Speed
RAM and SSD access measured in nanoseconds. Network requests in milliseconds. That's 6 orders of magnitude difference.

### Privacy
Your files stay on your machine. No telemetry, no tracking, no data mining.

### Ownership
You paid for your computer. Use it. Don't rent someone else's.

### Resilience
Your tools work offline. No internet outage can stop you.

## The Best of Both Worlds

Local-first doesn't mean "never cloud." It means:
- Local by default
- Cloud when beneficial
- User controls sync
- Works offline

Tools like Sysmon-CLI embody this: monitoring runs locally, but you can export to your preferred cloud service.

## Building Local-First

At NF Software, we're committed to:
- Native applications over web apps when appropriate
- Local data storage
- Optional sync, never required
- Open file formats

The future of software is local-first. Join us.
        `,
        author: "Noam Favier",
        date: "2024-11-28",
        readTime: "4 min read",
        category: "Philosophy",
        tags: ["Local-First", "Privacy", "Performance"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&q=80&fit=crop",
        featured: true,
    },
    {
        id: "sysmon-cli-architecture",
        title: "Sysmon-CLI: Building a Cross-Platform System Monitor",
        slug: "sysmon-cli-architecture",
        excerpt:
            "Deep dive into the architecture of Sysmon-CLI and how we achieved cross-platform system monitoring with minimal overhead.",
        content: `
# Sysmon-CLI: Building a Cross-Platform System Monitor

System monitoring is harder than it looks. Different OSes expose metrics differently. Polling too often wastes CPU. Too slow misses spikes.

## Design Goals

For Sysmon-CLI, we set clear goals:
- **Lightweight**: <10MB memory footprint
- **Fast**: <1% CPU usage during monitoring
- **Cross-platform**: Windows, macOS, Linux
- **Real-time**: Updates every second
- **Accurate**: No dropped metrics

## Architecture

### The Core Engine (Go)
We chose Go for several reasons:
- Great cross-platform support
- Excellent concurrency primitives
- Fast compilation
- Small binaries

### Platform-Specific Collection
Each OS requires different syscalls:
- Linux: \`/proc\` filesystem
- macOS: \`sysctlbyname\`
- Windows: Performance Data Helper (PDH)

We abstracted these into a unified interface.

### Efficient Polling
Instead of naive polling, we use:
- Event-driven collection where possible
- Batched metric reads
- Goroutines for concurrent collection
- Ring buffers for history

### Export Flexibility
Sysmon-CLI can export to:
- CSV files
- JSON streams
- Prometheus format
- Custom webhooks

## Performance

On a typical system:
- 8MB RAM
- 0.3% CPU
- <1ms metric collection time

This lets you monitor continuously without impacting workload.

## What's Coming

We're adding:
- GPU monitoring
- Network flow tracking
- Process-level metrics
- Alert rules

Sysmon-CLI is open source. Contributions welcome!
        `,
        author: "Noam Favier",
        date: "2024-11-10",
        readTime: "6 min read",
        category: "Technical",
        tags: ["Go", "Systems Programming", "Performance"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&q=80&fit=crop",
        featured: false,
    },
    {
        id: "announcing-zvezda-git-manager",
        title: "Announcing Zvezda: Git Repository Manager",
        slug: "announcing-zvezda-git-manager",
        excerpt:
            "Introducing Zvezda, a powerful CLI for managing multiple Git repositories. Batch operations, insights, and automation.",
        content: `
# Announcing Zvezda: Git Repository Manager

If you work with multiple Git repositories, you know the pain. Keeping them updated, finding files across repos, running commands everywhere—it's tedious.

## Enter Zvezda

Zvezda is a Git repository manager built for developers who juggle many projects.

### Key Features

**Batch Operations**
Run commands across all repos:
\`\`\`bash
zvezda exec "git pull"
zvezda exec "npm update"
\`\`\`

**Cross-Repo Search**
Find files or code across all your projects:
\`\`\`bash
zvezda search "TODO" --type js
\`\`\`

**Repository Insights**
See stats across your entire codebase:
- Lines of code by language
- Commit activity
- Branch health
- Dependency versions

**Smart Sync**
Keep everything up to date automatically:
\`\`\`bash
zvezda sync --auto-stash
\`\`\`

## Why We Built It

As we developed multiple suites at NF Software, managing repos became a bottleneck. We tried existing tools but they were either:
- Too heavy (full GUI apps)
- Too limited (basic scripts)
- Too opinionated (forced workflows)

So we built Zvezda: powerful, fast, and flexible.

## Architecture

Built with:
- **Go**: Fast, single-binary distribution
- **GitHub API**: Native integration
- **SQLite**: Local repo metadata
- **Cobra**: CLI framework

## Get Started

Zvezda is in beta. Install:
\`\`\`bash
brew install nf-software/tap/zvezda
\`\`\`

Or grab binaries from our releases page.

## Roadmap

Coming soon:
- GitLab/Bitbucket support
- Team collaboration features
- CI/CD integration
- Visual repo graphs

Try Zvezda today and let us know what you think!
        `,
        author: "Noam Favier",
        date: "2024-10-22",
        readTime: "4 min read",
        category: "Product",
        tags: ["Git", "CLI", "Developer Tools"],
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1200&h=600&q=80&fit=crop",
        featured: false,
    },
    {
        id: "developer-productivity-tools",
        title: "Essential Developer Productivity Tools",
        slug: "developer-productivity-tools",
        excerpt:
            "A curated list of tools that actually improve developer productivity. No fluff, just tools we use daily.",
        content: `
# Essential Developer Productivity Tools

After years of development, here are the tools that actually made us more productive.

## CLI Tools

### bat
Better \`cat\` with syntax highlighting:
\`\`\`bash
bat src/main.go
\`\`\`

### ripgrep (rg)
Insanely fast code search:
\`\`\`bash
rg "TODO" --type rust
\`\`\`

### fzf
Fuzzy finder for everything:
\`\`\`bash
git checkout \$(git branch | fzf)
\`\`\`

### jq
JSON processing:
\`\`\`bash
curl api.example.com | jq '.data.users'
\`\`\`

## Development Environment

### tmux
Terminal multiplexer. Run multiple sessions, detach/reattach:
\`\`\`bash
tmux new -s dev
\`\`\`

### neovim
Modern Vim with LSP support. Lightning fast.

### VS Code
When you need a full IDE. Great debugging, extensions.

## Automation

### Make
Simple task automation:
\`\`\`makefile
build:
    go build -o bin/app

test:
    go test ./...
\`\`\`

### Just
Better task runner than Make for project commands.

## Monitoring

### htop
Better \`top\` for process monitoring.

### ncdu
Disk usage analyzer.

### Sysmon-CLI (shameless plug)
Real-time system monitoring with export capabilities.

## Version Control

### lazygit
TUI for Git operations. Makes rebasing easy.

### tig
Text-mode interface for Git.

### Zvezda (another plug)
Manage multiple repos efficiently.

## Principles

The best tools:
- **Do one thing well**
- **Compose with others**
- **Are fast**
- **Work offline**
- **Have great docs**

## Your Stack?

What tools make you more productive? Let us know on GitHub or Twitter.
        `,
        author: "Noam Favier",
        date: "2024-10-05",
        readTime: "5 min read",
        category: "Resources",
        tags: ["Productivity", "CLI", "Developer Tools"],
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=600&q=80&fit=crop",
        featured: false,
    },
];

export const categories = [
    "All",
    "Product",
    "Technical",
    "Philosophy",
    "Resources",
];
