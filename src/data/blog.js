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
    {
        id: "microservices-vs-monolith",
        title: "Microservices vs Monolith: Choosing the Right Architecture",
        slug: "microservices-vs-monolith",
        excerpt:
            "Stop cargo-culting microservices. Most projects should start with a monolith—here's when that changes and when it doesn't.",
        content: `
# Microservices vs Monolith: Choosing the Right Architecture

Everyone wants to talk microservices. Few people need them.

I've built tools that are single-binary executables (Sysmon-CLI, Iris) and tools that manage multiple repos (Zvezda). The pattern is clear: start simple, add complexity only when forced to.

## Just Use a Monolith

Seriously. One codebase, one binary, one deployment. No service mesh, no distributed tracing nightmare, no "which version of the API contract are we on?"

The wins are obvious:
- **Call a function**, don't make an HTTP request
- **Stack traces** that actually make sense
- **Transactions** that don't require distributed coordination
- **One thing to deploy**, one thing to monitor

When you're a solo dev or small team (< 10 people), microservices are pure overhead. You're solving organizational problems you don't have.

## When Microservices Actually Make Sense

Okay, sometimes you do need them. Not "we read about them on Hacker News" need them—actually need them.

**Wildly different scaling needs.** Your image processing service needs 50 boxes, your API needs 3. Split them. Otherwise you're scaling everything to match your hottest service.

**Team independence.** You have 5 teams and coordination is killing velocity. Fine—give them separate deploys. But you better have actual teams first, not 3 people LARPing as Netflix.

**Failure isolation.** If your billing service crashing takes down your entire platform, that's bad. But most services don't need this level of isolation—a good process supervisor works fine.

**Different tech stacks.** Rarely justified, but sometimes your ML team really needs Python and your API really needs Go. More often it's just resume-driven development.

## The Modular Monolith Compromise

Before you split into microservices, try this: build a monolith with clean module boundaries.

Zvezda does this—it's one binary, but the Git operations, search indexing, and CLI are separated by interfaces. If I needed to scale Git operations independently (I don't), extraction would be straightforward.

Same with Iris: the model inference, API server, and context management are distinct modules. Still one binary. Still fast.

## What "Microservices" Really Costs

Let's be honest about the tax:

**Network calls everywhere.** Every function call is now a network request with serialization, retries, timeouts, and circuit breakers. Your p99 latency goes to hell.

**Distributed state.** Transactions are now sagas. Debugging is now log correlation. Your simple bug is now a distributed systems puzzle.

**Operational complexity.** Kubernetes, Istio, Jaeger, Prometheus, Grafana, alert managers, log aggregation... each one is a maintenance burden.

**Development velocity.** Want to change something across two services? That's two PRs, two deploys, and coordination overhead. Refactoring becomes archaeology.

I've seen teams spend more time managing their service mesh than actually shipping features. That's not a win.

## My Decision Tree

**Solo or small team?** Monolith. Not even a question.

**Medium team (10-30)?** Modular monolith. Clean interfaces, testable boundaries, but don't pay the distributed tax yet.

**Large team (50+)?** Probably microservices, but only where team boundaries genuinely matter. Most companies at this scale still over-split.

**Unclear requirements?** Definitely monolith. You can't design good service boundaries until you understand your domain.

## Tooling for Either Approach

For monoliths: keep your build fast, tests fast, and dependencies minimal. Sysmon-CLI compiles in under a second. There's no excuse for slow builds.

For microservices: invest in observability from day one. Distributed tracing isn't optional—it's the only way you'll debug cross-service issues.

For both: write boring code. The architecture shouldn't be the interesting part—the problem you're solving should be.

## Final Thoughts

Microservices solve real problems for companies like Netflix and Amazon. You are probably not Netflix or Amazon.

Build a monolith. Make it fast. Keep modules clean. When you hit actual scaling limits or team coordination problems, then split things out.

And remember: the best architecture is the one that ships.
        `,
        author: "Noam Favier",
        date: "2025-01-05",
        readTime: "7 min read",
        category: "Technical",
        tags: ["Architecture", "Microservices", "Software Design"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&q=80&fit=crop",
        featured: false,
    },
    {
        id: "debugging-production-issues",
        title: "Debugging Production Issues: A Systematic Approach",
        slug: "debugging-production-issues",
        excerpt:
            "Production is where your assumptions go to die. Here's how I debug when users are yelling and logs are useless.",
        content: `
# Debugging Production Issues: A Systematic Approach

You deploy. Things break. Users complain. Your local environment works fine. Welcome to production debugging.

## Step 1: Stop Guessing

First rule: don't randomly change things hoping the problem goes away. I've watched people restart services, tweak config values, and deploy "fixes" without understanding the actual problem. That's how you make things worse.

Start by answering these:
- **How many people are affected?** One user with weird data, or everyone?
- **When did it start?** Right after a deploy, or random Tuesday at 3am?
- **Can we roll back?** If yes, do it. Fix forward later.

For Sysmon-CLI, I've had bugs that only showed up under sustained load—single-user testing was useless. For Zvezda, I've had issues that only triggered with specific Git configurations. Context matters.

## Gather Actual Data

Don't trust your memory of what the system should be doing. Check:

\`\`\`bash
# What changed recently?
git log --since="2 hours ago" --oneline

# What's actually in the logs?
grep "ERROR\\|WARN" /var/log/app.log | tail -100

# Is the system even healthy?
top  # or sysmon-cli if you have it
\`\`\`

Half the time, the "mysterious" issue is just high CPU or memory exhaustion. Check the obvious stuff first.

## The Bisect Trick

If the logs are garbage (they usually are), use git bisect to find the breaking commit:

\`\`\`bash
git bisect start
git bisect bad HEAD
git bisect good v1.2.0
\`\`\`

Then test each bisect point. This is slower than guessing but faster than being wrong.

## Reproduce It Locally

Can't fix what you can't reproduce. Try to match production:
- Same Go version, same OS, same dependencies
- Production data (sanitized if needed)
- Same environment variables

I had a Zvezda bug that only triggered when the Git config had `core.autocrlf=true`. Local repro was impossible until I actually looked at the user's Git config.

## Instrumentation When You're Blind

Sometimes logs don't tell you enough. Add more:

\`\`\`go
log.Printf("DEBUG: processing repo %s, commit %s", repo, commit)
\`\`\`

Yes, this means deploying to debug. That's fine. Just remove the debug logs after.

For Sysmon-CLI, I've added temporary metrics collection to understand exactly what system calls were being made. Can't optimize what you can't measure.

## Common Culprits

**Memory leaks.** Symptoms: memory usage creeps up, eventually OOM. Use \`pprof\` to find the leak:
\`\`\`bash
go tool pprof http://localhost:6060/debug/pprof/heap
\`\`\`

**Goroutine leaks.** Similar but with goroutines. Check \`/debug/pprof/goroutine\`.

**Database connection exhaustion.** Your connection pool is too small or you're leaking connections. Check:
\`\`\`sql
SHOW PROCESSLIST;  -- MySQL
SELECT * FROM pg_stat_activity;  -- Postgres
\`\`\`

**External API rate limits.** Intermittent 429s mean you're hitting someone's rate limit. Add backoff/retry logic.

## After the Fix

Write down what happened. Not for blame—for learning.

**Postmortem template:**
- What broke and when
- What we tried (even the wrong guesses)
- What actually fixed it
- How we prevent it next time

Then add a test:
\`\`\`go
func TestThatBugWeHadInProduction(t *testing.T) {
    // Reproduce the exact scenario
    // Verify it's fixed
}
\`\`\`

Regression tests are documentation of pain.

## Prevention

The best production bugs are the ones you catch before users do:

**Local tools that work.** If you can't reproduce prod issues locally, your dev environment sucks. Fix it.

**Gradual rollouts.** Deploy to 1% of traffic first. See if things explode.

**Actual monitoring.** Not just "is it up?" but "is it slow? is it leaking? is it erroring?"

For my tools, I use:
- Go's builtin pprof endpoints
- Structured logs (JSON)
- Basic Prometheus metrics when needed

You don't need a $10k/month observability platform. You need logs you can search and metrics you can graph.

## Tools I Actually Use

**pprof:** Go's profiler. CPU, memory, goroutines, everything.

**strace:** See what syscalls a process is making. Useful when things are mysteriously slow.

**tcpdump:** Network issues? Capture the packets.

**git bisect:** When you know it worked in the past.

**Sysmon-CLI:** Because sometimes you just need to see if CPU/memory is spiking. Shameless plug.

## The Uncomfortable Truth

Most production bugs are boring:
- Forgot to handle an error
- Race condition in concurrent code
- Assumption about data that's wrong
- External dependency is down

The hard part isn't fixing them—it's reproducing them. Invest in making prod behavior visible and local reproduction possible.

And remember: production bugs are proof you shipped something. That's better than perfect code that never deploys.
        `,
        author: "Noam Favier",
        date: "2024-12-28",
        readTime: "8 min read",
        category: "Technical",
        tags: ["Debugging", "DevOps", "Production", "Monitoring"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&q=80&fit=crop",
        featured: false,
    },
    {
        id: "go-performance-tips",
        title: "Go Performance Tips: Making Your Code Faster",
        slug: "go-performance-tips",
        excerpt:
            "Real performance tips from building Sysmon-CLI and Zvezda. No theory—just what actually made things faster.",
        content: `
# Go Performance Tips: Making Your Code Faster

Go is fast. But it's not magic—you can still write slow Go code. Here's what I learned optimizing Sysmon-CLI and Zvezda.

## Profile Before You Optimize

Your intuition about what's slow is wrong. Mine was wrong. Everyone's is wrong.

\`\`\`bash
go test -bench=. -benchmem
go test -cpuprofile=cpu.prof
go tool pprof cpu.prof
\`\`\`

For Sysmon-CLI, I spent a week optimizing metric collection before profiling showed that JSON serialization was the actual bottleneck. Whoops.

The pprof web interface (\`-http=:8080\`) is fantastic. Use it.

## Memory is Your Enemy

Allocations kill performance. The GC is good, but not allocating beats any GC.

**Preallocate slices when you know the size:**
\`\`\`go
// Don't do this
var results []string
for _, item := range items {
    results = append(results, process(item))
}

// Do this
results := make([]string, 0, len(items))
for _, item := range items {
    results = append(results, process(item))
}
\`\`\`

That tiny \`len(items)\` capacity hint prevents multiple allocations as the slice grows.

**Use sync.Pool for short-lived objects:**
\`\`\`go
var bufPool = sync.Pool{
    New: func() interface{} {
        return new(bytes.Buffer)
    },
}

func formatMetric(m Metric) string {
    buf := bufPool.Get().(*bytes.Buffer)
    buf.Reset()
    defer bufPool.Put(buf)

    // Use buf, then return it to pool
    return buf.String()
}
\`\`\`

In Sysmon-CLI, this cut allocations by 80% in the hot path.

**String concatenation in loops is terrible:**
\`\`\`go
// Allocates on every iteration
var result string
for _, s := range parts {
    result += s
}

// One allocation
var builder strings.Builder
builder.Grow(estimatedSize) // if you know approximate size
for _, s := range parts {
    builder.WriteString(s)
}
result := builder.String()
\`\`\`

## Goroutines Aren't Free

"Just spawn a goroutine" is bad advice. Goroutines are cheap but not free.

**Use worker pools for bounded concurrency:**
\`\`\`go
func processConcurrently(items []Item, workerCount int) {
    jobs := make(chan Item, len(items))
    var wg sync.WaitGroup

    // Fixed number of workers
    for i := 0; i < workerCount; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            for item := range jobs {
                process(item)
            }
        }()
    }

    // Feed work
    for _, item := range items {
        jobs <- item
    }
    close(jobs)
    wg.Wait()
}
\`\`\`

Zvezda uses this pattern when scanning multiple repos. 4-8 workers is usually optimal—more doesn't help.

**Don't leak goroutines:**
\`\`\`go
func worker(ctx context.Context, jobs <-chan Job) {
    for {
        select {
        case job, ok := <-jobs:
            if !ok {
                return // channel closed
            }
            process(job)
        case <-ctx.Done():
            return // context cancelled
        }
    }
}
\`\`\`

Leaked goroutines are memory leaks. They pile up. Use context for cancellation.

## I/O: Batch and Buffer

**Database operations should be batched:**
\`\`\`go
// Don't
for _, record := range records {
    db.Exec("INSERT INTO ...", record)
}

// Do
tx := db.Begin()
stmt, _ := tx.Prepare("INSERT INTO ...")
for _, record := range records {
    stmt.Exec(record)
}
tx.Commit()
\`\`\`

One transaction instead of N. Massive speedup.

**Buffer file I/O:**
\`\`\`go
file, _ := os.Open("large.log")
reader := bufio.NewReader(file)
// Now reads are buffered
\`\`\`

Unbuffered I/O is syscalls on every read. Buffered I/O batches them. Easy win.

## What Doesn't Matter (Usually)

**Reflection is slow.** True. But if you're doing it once at startup, who cares? Don't use code generation until profiling proves it's worth it.

**Function call overhead.** The compiler inlines aggressively. Small functions are fine. Don't flatten your code for "performance"—the compiler is smarter than you.

There's no \`//go:inline\` directive. The compiler decides. You can see what gets inlined with:
\`\`\`bash
go build -gcflags='-m' 2>&1 | grep inline
\`\`\`

**Integer vs float math.** Float operations are slightly slower, but unless you're doing millions of them in a tight loop, you won't notice.

## Profiling is Your Friend

**CPU profiling:**
\`\`\`bash
go test -cpuprofile=cpu.prof -bench=.
go tool pprof -http=:8080 cpu.prof
\`\`\`

**Memory profiling:**
\`\`\`bash
go test -memprofile=mem.prof -bench=.
go tool pprof -http=:8080 mem.prof
\`\`\`

**Trace for concurrency issues:**
\`\`\`bash
go test -trace=trace.out
go tool trace trace.out
\`\`\`

The trace tool shows goroutine scheduling, blocking, and contention. It's how I found that Zvezda was spending 40% of time waiting on a mutex.

## Benchmarking

Write benchmarks for your hot paths:
\`\`\`go
func BenchmarkMetricCollection(b *testing.B) {
    collector := NewCollector()
    b.ResetTimer()

    for i := 0; i < b.N; i++ {
        collector.Collect()
    }
}
\`\`\`

Run with:
\`\`\`bash
go test -bench=. -benchmem -benchtime=10s
\`\`\`

Compare before/after optimizations with \`benchstat\`.

## Sysmon-CLI Case Study

Sysmon-CLI collects system metrics every second. Initial version used 50MB RAM and 5% CPU.

After optimization:
- Preallocated metric buffers: -30MB
- sync.Pool for temp objects: -15MB
- Worker pool instead of goroutine-per-metric: -3% CPU
- Buffered channel for metric reporting: -1% CPU

Final: ~8MB RAM, <1% CPU on typical machines.

The key: profile, optimize the hot path, measure again. Repeat.

## When NOT to Optimize

Don't optimize if:
- It's not in your profiler's top 10
- It runs once at startup
- It makes the code unreadable
- You're guessing instead of measuring

Readability beats premature optimization. Always.

## The Tools I Use

**pprof**: CPU, memory, goroutine, mutex profiling. Built into Go.

**benchstat**: Compare benchmark results statistically.

**trace**: Visualize concurrency and scheduling.

**Sysmon-CLI**: Monitor the actual production system. CPU spikes? Memory leaks? You need to see them in real-time.

## Final Thoughts

Go is fast out of the box. Most code doesn't need optimization.

When you do need speed:
1. Profile first
2. Fix the hot path
3. Benchmark the change
4. Profile again

And remember: the fastest code is code you don't run. Sometimes the best optimization is algorithmic, not tactical.
        `,
        author: "Noam Favier",
        date: "2024-12-20",
        readTime: "10 min read",
        category: "Technical",
        tags: ["Go", "Performance", "Optimization", "Profiling"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&q=80&fit=crop",
        featured: false,
    },
    {
        id: "api-design-principles",
        title: "API Design Principles: Building APIs Developers Love",
        slug: "api-design-principles",
        excerpt:
            "Why Iris uses OpenAI's API spec and what I learned about API design building local-first tools. Compatibility beats purity every time.",
        content: `
# API Design: Compatibility Beats Purity

When I built Iris, I had a choice: design a perfect, clean API from scratch, or copy OpenAI's format exactly. I copied. Here's why that was the right call and what it taught me about API design.

## The OpenAI-Compatible Decision

Iris is a local AI assistant. Runs entirely on your machine. No cloud. No API keys. But it exposes this:

\`\`\`http
POST /v1/chat/completions
Authorization: Bearer local-only

{
  "model": "iris",
  "messages": [
    {"role": "user", "content": "What's the weather?"}
  ]
}
\`\`\`

That's OpenAI's API. Not "inspired by" or "similar to"—it's the exact same format. Point your OpenAI SDK at localhost:8080 and it works. No changes. No adapter layer.

Why? Because **every tool already supports it**. VSCode extensions, CLI tools, web apps—anything built for OpenAI works with Iris immediately. That's not elegance, that's leverage.

## What Actually Matters in API Design

Forget REST purity. Here's what makes APIs good or bad in practice:

### 1. Don't Make Me Read Docs

Good APIs are predictable. If you've seen one endpoint, you've seen them all. Sysmon-CLI's metrics API follows one pattern:

\`\`\`http
GET /metrics/cpu
GET /metrics/memory
GET /metrics/disk
GET /metrics/network
\`\`\`

Same response shape. Same query params. Same error format. You learn it once.

Bad APIs surprise you. Different endpoints need different auth headers. Error formats change. Status codes are creative interpretations of HTTP.

### 2. Compatibility > Clever Design

The OpenAI API isn't perfect. The \`messages\` array gets repetitive. The \`model\` field is redundant when you're hitting localhost. But changing it means every integration needs custom code.

I wanted to add a \`context_window\` param directly in the request. Cleaner. More obvious. But then I'd need to maintain SDK forks, browser extensions, and CLI wrappers. Not worth it.

**Boring and compatible wins**. Every time.

### 3. Errors Should Tell You What to Fix

Here's a bad error:
\`\`\`json
{"error": "Invalid request"}
\`\`\`

Here's what Zvezda returns when you mess up a Git remote URL:
\`\`\`json
{
  "error": {
    "code": "invalid_remote",
    "message": "Git remote URL must start with https:// or git@",
    "details": {
      "provided": "github.com/user/repo",
      "examples": [
        "https://github.com/user/repo.git",
        "git@github.com:user/repo.git"
      ]
    }
  }
}
\`\`\`

You know exactly what's wrong. You know how to fix it. No Googling. No guessing.

### 4. Status Codes: Use the Boring Ones

You need maybe 8 status codes:
- **200**: It worked
- **201**: Created something
- **400**: You sent bad data
- **401**: Missing/invalid auth
- **404**: Doesn't exist
- **429**: Slow down
- **500**: I broke something
- **503**: Temporarily down

That's it. Don't get creative. I've seen APIs return 418 (I'm a teapot) for rate limiting. Very funny. Also useless—most HTTP clients don't handle it.

## Real Examples from My Tools

### Iris: When to Ignore REST

Iris has a \`/v1/models\` endpoint that returns... one model. Always. It exists because OpenAI clients expect it, not because it's useful.

\`\`\`json
GET /v1/models
{
  "data": [
    {"id": "iris", "object": "model"}
  ]
}
\`\`\`

Is this wasteful? Yes. Does it matter? No. Compatibility is the feature.

### Sysmon-CLI: Keep It Simple

Sysmon-CLI exposes metrics over HTTP. I could've built a GraphQL API where you request exactly the fields you want. Or a sophisticated query language. Or subscriptions with SSE.

Instead:
\`\`\`http
GET /metrics/cpu?interval=1s
{
  "timestamp": "2025-01-09T10:30:00Z",
  "usage_percent": 23.4,
  "cores": [12.1, 34.2, 18.9, 29.3]
}
\`\`\`

JSON over HTTP. That's it. Works with \`curl\`. Works with \`fetch()\`. Works with every language's stdlib. No dependencies. No learning curve.

### Zvezda: Local-Only Auth

Zvezda manages Git repos. Runs on localhost. Needs auth so random scripts can't mess with your repos. But it's just you.

\`\`\`http
Authorization: Bearer zvezda-local-token
\`\`\`

That token? It's in \`~/.config/zvezda/token\`. Generated once. Never expires. Not JWT. Not OAuth. Just a random string that proves the request came from your machine.

Overengineering would be: OAuth2 flows, token refresh, PKCE, scopes, the works. For an API that only accepts connections from localhost.

## What I Avoid

**Custom HTTP verbs**. I've seen \`LINK\`, \`UNLINK\`, \`MERGE\`. Use POST. Everyone understands POST.

**Nested REST resources beyond 2 levels**. \`/users/123/repos/456/issues/789/comments/012\` is unreadable. Flatten it: \`/comments/012\`.

**Required versioning from day 1**. Iris started at \`/v1\` because OpenAI does. Sysmon-CLI doesn't version—it's not a public API, I can change it. Zvezda has no version. If I need breaking changes, I'll add \`/v2\` then.

**Pagination for small datasets**. Zvezda's repo list never exceeds 1000 entries. No pagination. Just return the array. When it becomes a problem, I'll fix it. YAGNI applies to APIs too.

## The One Rule

**Make it work with \`curl\` first.**

If your API needs a custom client to be usable, you're doing it wrong. Every endpoint should have a \`curl\` example that just works.

\`\`\`bash
# Good
curl http://localhost:8080/metrics/cpu

# Bad (needs custom client because WebSocket handshake)
wscat -c ws://localhost:8080/metrics
\`\`\`

REST is boring. JSON is boring. Bearer tokens are boring. Boring is good. Boring means it works everywhere with zero setup.

## When to Ignore All This

If you're building for scale—billions of requests, thousands of services, multi-region deployments—ignore everything I said. Use gRPC. Use Protobuf. Version everything. Design for backwards compatibility from day 1.

But if you're building tools for developers? Local-first apps? CLI utilities? Keep it simple. Copy what works. Compatibility beats purity.

Iris didn't need to reinvent chat APIs. Sysmon-CLI didn't need GraphQL. Zvezda didn't need OAuth2.

They needed to work. With \`curl\`. Right now. That's the entire design spec.
        `,
        author: "Noam Favier",
        date: "2024-12-12",
        readTime: "9 min read",
        category: "Technical",
        tags: ["API Design", "REST", "Software Architecture", "Best Practices"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&q=80&fit=crop",
        featured: false,
    },
    {
        id: "effective-code-reviews",
        title: "The Art of Effective Code Reviews",
        slug: "effective-code-reviews",
        excerpt:
            "I work solo on most projects. Here's what I learned about reviewing my own code and what actually matters when someone does look at it.",
        content: `
# Code Reviews When You're the Whole Team

Most blog posts about code reviews assume you work at a company with a team, PR culture, and dedicated reviewers. I don't. I'm one person shipping Sysmon-CLI, Zvezda, and Iris.

Here's what code review looks like when you're the whole team—and what actually matters when someone does review your work.

## The Reality of Solo Development

No one reviews my code before it ships. I merge to main. I deploy. Users find bugs. I fix them.

This sounds chaotic. It's not. I've shipped three production tools this way. They work. But I still "review" my code—just differently.

## Self-Review: What Actually Works

### The 24-Hour Rule

I don't merge code the same day I write it. I wait. Sleep on it. Come back tomorrow.

Why? Because fresh eyes catch stupid mistakes. Yesterday I thought this was brilliant:

\`\`\`go
func GetMetrics() map[string]interface{} {
    return map[string]interface{}{
        "cpu": getCPU(),
        "mem": getMem(),
        "disk": getDisk(),
    }
}
\`\`\`

Today I see it's \`map[string]interface{}\` hell. Needs a struct. Type safety matters.

### The Diff Review

Before committing, I review my own diff. Not in the editor—in \`git diff\` or GitHub's draft PR view. Different context reveals different problems.

Things I catch:
- Debug prints I forgot to remove
- Commented-out code that should be deleted
- TODOs that need doing now, not later
- Variables named \`temp\`, \`data\`, \`result\`

If I can't explain the diff to myself, it's not ready.

### The "Why" Test

Every commit message gets a "why":

\`\`\`
❌ Update metrics collection
✅ Switch to buffered channel to prevent blocking

❌ Fix bug
✅ Handle SIGTERM during shutdown to flush metrics
\`\`\`

If I can't articulate why I'm making a change, I probably shouldn't make it.

## When Someone Actually Reviews Your Code

Occasionally someone opens an issue or PR on Sysmon-CLI or Zvezda. Here's what I've learned about receiving feedback.

### Most Feedback is Noise

"You should rewrite this in Rust" is not feedback. It's an opinion. Ignore it.

"This panics when config file is missing" is feedback. That's a bug. Fix it.

The signal:
- Bug reports with reproduction steps
- Performance issues with benchmarks
- Security concerns with specific attack vectors
- UX problems with actual workflows

The noise:
- "I would've used X instead of Y" (cool story)
- "Have you considered rewriting in Z?" (no)
- "You should add feature F" (open a PR)

### Good Feedback is Specific

I got an issue on Zvezda: "It's slow." Useless. Can't fix "slow."

Then I got: "Listing 500 repos takes 12 seconds. Here's \`pprof\` output showing 80% of time in JSON parsing."

Fixed in 30 minutes. The problem was re-parsing the entire repo list on every request instead of caching. Specific feedback = actionable fix.

### When to Push Back

Someone wanted Sysmon-CLI to support Windows Event Log collection. Sounds reasonable. But:
- Adds 2000 lines of Windows-specific code
- Needs CGO for the API calls
- Breaks "single binary, no deps" promise
- I don't use Windows

I said no. My tool, my rules. They're welcome to fork it.

**You don't owe anyone features.** Especially in open source. Especially in solo projects.

## What I Look For When Reviewing Others

I've reviewed PRs on other projects. Here's what actually matters:

### Does It Work?

Not "is it elegant" or "does it follow best practices." Does it solve the stated problem?

I've seen beautiful, idiomatic, perfectly tested code that didn't fix the bug. I've seen ugly hacks that worked perfectly. Ship the hack. Clean it up later if needed.

### Will It Break Something?

The only blocker is: does this break existing functionality?

Everything else—performance, style, architecture—can be fixed incrementally. Breaking changes can't.

### Can I Understand It?

If I can't figure out what the code does by reading it, that's a problem. Not because "clean code" matters, but because I might need to fix it later.

I don't care about variable names, comments, or formatting. I care about: can I trace the execution path?

## The Tools I Actually Use

No fancy PR workflows. No automated review bots. Just:

### CI/CD

\`\`\`yaml
# .github/workflows/test.yml
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - run: go test -race ./...
      - run: golangci-lint run
\`\`\`

If tests pass and linter is happy, it's probably fine. If not, fix it before merging. That's the gate.

### Local Checks

Before pushing:
\`\`\`bash
go test -race ./...
go build
./sysmon-cli --version  # smoke test
\`\`\`

If it builds and runs, good enough. Perfect is the enemy of shipped.

## What Doesn't Matter

All the corporate code review advice is irrelevant for solo projects:

**Response time SLAs**: You're reviewing your own code. It's done when it's done.

**Required approvals**: You're the only approval. Approve your own PR if you want ceremony.

**Review checklists**: If you need a checklist to remember to write tests, bigger problems.

**Consensus building**: You decide. Ship it or don't. No committee.

**Team culture**: You're the team. Your culture is "does it work?"

## When Code Review Actually Helps

I'm not anti-review. I'm anti-process-for-the-sake-of-process.

Code review helps when:
- You're making a big architectural change and want a sanity check
- You're new to a language/framework and want expert eyes
- You're working on security-critical code
- Someone found a bug and you want to make sure the fix doesn't break other things

Code review doesn't help when:
- It's a 5-line typo fix
- You're just moving code around
- The tests cover it completely
- No one on your "team" understands the domain

## The Real Review: Production

The best code review is production. Users find bugs you missed. Logs show performance issues. Crashes reveal edge cases.

Sysmon-CLI had a memory leak. Took 3 weeks for someone to report it. No code review would've caught it—it only triggered under 24+ hour continuous operation.

Zvezda had a race condition. Found it via crash reports, not review. Added \`go test -race\`, fixed it, added regression test. Done.

**Production is the reviewer.** Everything else is just preparation.

## If You're Actually on a Team

If you're not solo, here's what matters:

1. **Automate style, bike-shedding, and formatting**. Never discuss tabs vs spaces in a PR.
2. **Only block on correctness**. "I would've done it differently" is not a blocker.
3. **Review for bugs, not beauty**. Code can be ugly and correct.
4. **Keep PRs small**. 50 lines = 10 minutes. 500 lines = "LGTM" without reading.
5. **Self-review before requesting review**. Don't waste their time on stuff you'd catch yourself.

## Bottom Line

Code review for solo developers:
- Review your own diffs
- Wait 24 hours before merging big changes
- Let CI catch mechanical issues
- Let production catch everything else
- Ignore opinions, fix bugs
- Ship when it works, not when it's perfect

Code review for teams:
- Automate the boring parts
- Focus on correctness, not style
- Keep PRs small
- Don't block on preferences
- Treat your reviewer's time as expensive

Everything else is cargo-culting enterprise processes that don't apply to small teams shipping real software.
        `,
        author: "Noam Favier",
        date: "2024-11-15",
        readTime: "9 min read",
        category: "Philosophy",
        tags: ["Code Review", "Software Engineering", "Best Practices", "Team Culture"],
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&q=80&fit=crop",
        featured: false,
    },
    {
        id: "cli-tools-best-practices",
        title: "Building Great CLI Tools: Lessons from Sysmon and Zvezda",
        slug: "cli-tools-best-practices",
        excerpt:
            "Three CLI tools, three different problems, same lesson: if it doesn't work immediately, no one uses it. Here's what actually matters.",
        content: `
# Building CLI Tools That People Actually Use

I've built three CLI tools: Sysmon-CLI, Zvezda, and Iris. Different purposes, same constraints: if it takes more than 10 seconds to understand, people bounce.

Here's what worked, what didn't, and why most CLI design advice is wrong.

## The Real First Rule: It Must Work Immediately

Not "run the installer, edit the config, set up your environment, then run it." Just download and run.

\`\`\`bash
$ sysmon-cli
CPU: 23%  Memory: 8.2 GB  Disk: 120 GB  Network: ↓ 1.2 MB/s ↑ 0.8 MB/s
\`\`\`

That's it. No setup. No config. No "getting started" guide. It does the obvious thing.

Zvezda same deal:
\`\`\`bash
$ zvezda list
~/code/sysmon-cli        main  ✓
~/code/zvezda            main  2 ahead
~/code/iris              dev   uncommitted changes
\`\`\`

First run. No config file. It found my repos, checked their status, showed me what I need to know.

**Most CLI tools fail here.** They require configuration before they're useful. Wrong. Sensible defaults beat customization.

## Single Binary or It's Not Portable

Sysmon-CLI is one file. 12 MB. No dependencies. Copy it anywhere, it runs.

Compare to tools that need:
- Python interpreter (which version?)
- Node.js runtime (and 400 MB of node_modules)
- System libraries (good luck on Alpine)
- Config files in specific directories

I've had users run Sysmon-CLI on:
- Raspberry Pis
- Docker containers
- macOS, Linux, Windows
- Air-gapped servers

One binary. Works everywhere. Go makes this easy. That's why I use Go for CLI tools.

## Commands Should Be Obvious

Zvezda manages Git repos. The commands are:
\`\`\`bash
zvezda list      # show repos
zvezda sync      # pull all repos
zvezda status    # check all repos for changes
\`\`\`

I don't need documentation to guess what those do. That's the point.

Bad CLI design:
\`\`\`bash
zvezda repo-management list-all --format=table
\`\`\`

Why? Verbosity isn't clarity. \`list\` is enough. Everyone knows what "list" means.

### Subcommands When Needed, Not Always

Sysmon-CLI doesn't have subcommands for everything. Default behavior: show metrics. That's what you want 90% of the time.

\`\`\`bash
sysmon-cli               # show metrics
sysmon-cli --json        # JSON output
sysmon-cli --interval 5s # custom interval
\`\`\`

Subcommands when functionality is distinct:
\`\`\`bash
sysmon-cli export --output metrics.csv
\`\`\`

Don't make users type \`sysmon-cli metrics show\` when \`sysmon-cli\` is clearer.

## Output: Humans First, Machines Second

Default output is for humans:
\`\`\`bash
$ zvezda status
✓ sysmon-cli   clean
✗ zvezda       uncommitted changes
⚠ iris         2 commits ahead of origin
\`\`\`

Colors, symbols, readable text. Not JSON. Not CSV. Not "machine-parseable format."

But when you need machine output:
\`\`\`bash
$ zvezda status --json
[
  {"name": "sysmon-cli", "status": "clean"},
  {"name": "zvezda", "status": "dirty"},
  {"name": "iris", "status": "ahead", "commits": 2}
]
\`\`\`

Same data, different format. Flag-controlled. Don't make me pipe through \`jq\` to get basic info.

### Pipeable by Default

Zvezda's list command outputs one repo per line. Why? So this works:
\`\`\`bash
zvezda list | grep pending | wc -l
\`\`\`

Unix pipes are still the best composition tool. Don't break them with fancy formatting.

Progress bars? Only show them if stdout is a TTY:
\`\`\`go
if isatty.IsTerminal(os.Stdout.Fd()) {
    // show progress bar
} else {
    // just output results
}
\`\`\`

## Errors: Say What Went Wrong and How to Fix It

Bad error:
\`\`\`
Error: operation failed
\`\`\`

Sysmon-CLI error:
\`\`\`
Error: failed to collect CPU metrics

Caused by: permission denied reading /proc/stat

Fix: run with sudo or add user to 'perf' group
  sudo usermod -a -G perf $USER
\`\`\`

You know what broke. You know how to fix it. That's the standard.

### Exit Codes That Actually Mean Something

\`\`\`bash
0   - success
1   - general error
2   - invalid arguments
130 - killed by Ctrl+C
\`\`\`

Zvezda uses exit codes so you can:
\`\`\`bash
if zvezda sync --quiet; then
    echo "All repos synced"
else
    echo "Sync failed"
    exit 1
fi
\`\`\`

Automation depends on this. Don't return 0 when things fail.

## Configuration: Layers, Not Requirements

Sysmon-CLI has a config file. You'll probably never use it. Because defaults are good enough.

Priority order:
1. **CLI flags** (immediate override)
2. **Environment variables** (session-specific)
3. **Config file** (persistent preferences)
4. **Defaults** (sane choices)

Example:
\`\`\`bash
# Use default interval (1s)
sysmon-cli

# Override for this run
sysmon-cli --interval 5s

# Override for this session
SYSMON_INTERVAL=5s sysmon-cli

# Set permanently
echo "interval: 5s" > ~/.config/sysmon-cli/config.yaml
\`\`\`

Most users stick with defaults. Power users customize. Everyone's happy.

## Cross-Platform Is Non-Negotiable

Sysmon-CLI works on Linux, macOS, Windows. Same binary design, different builds.

Zvezda same. Iris same.

This requires thinking about:
- **File paths**: use \`filepath.Join()\`, never hardcode \`/\`
- **Config locations**: \`os.UserConfigDir()\` handles platform differences
- **Line endings**: don't assume \`\\n\`
- **Executables**: \`.exe\` on Windows, nothing elsewhere

Go makes cross-compilation trivial:
\`\`\`bash
GOOS=linux GOARCH=amd64 go build -o sysmon-cli-linux
GOOS=darwin GOARCH=arm64 go build -o sysmon-cli-macos
GOOS=windows GOARCH=amd64 go build -o sysmon-cli.exe
\`\`\`

Ship all three. Users download the right one.

## What I Learned From Mistakes

### Mistake: Too Many Flags

Early Zvezda had 20+ flags. Confusing. No one used most of them.

Now: 5 flags you'll actually use. Everything else has sane defaults.

### Mistake: Fancy UI

I tried adding a TUI (terminal UI) to Sysmon-CLI. Looked cool. Broke piping. Broke SSH sessions with limited terminfo.

Removed it. Plain text output works everywhere.

### Mistake: Requiring Config

First version of Zvezda needed a \`repos.yaml\` config listing all repos. No one set it up.

Now: scans \`~/code\` automatically. Finds Git repos. Just works.

## Help Text That Actually Helps

\`\`\`bash
$ sysmon-cli --help
sysmon-cli - system monitoring

USAGE:
  sysmon-cli [flags]

FLAGS:
  -i, --interval duration   update interval (default 1s)
  -j, --json                output JSON
  -o, --output file         export to file
  -h, --help                show help

EXAMPLES:
  sysmon-cli                     # start monitoring
  sysmon-cli --json              # JSON output
  sysmon-cli -o metrics.csv      # export to CSV
\`\`\`

Short. Examples. No walls of text. If they want more, there's a GitHub README.

## Distribution: Make It Easy to Install

### Homebrew (macOS/Linux)
\`\`\`bash
brew install nf-software/tap/sysmon-cli
\`\`\`

### GitHub Releases (all platforms)
\`\`\`bash
curl -L https://github.com/nf-software/sysmon-cli/releases/latest/download/sysmon-cli-linux -o sysmon-cli
chmod +x sysmon-cli
\`\`\`

### Go Install (if you have Go)
\`\`\`bash
go install github.com/nf-software/sysmon-cli@latest
\`\`\`

Multiple options. Single binary makes this easy.

## Testing: The Boring Stuff Matters

I test:
- CLI args parsing
- Output formats (human, JSON, CSV)
- Exit codes
- Cross-platform builds

I don't test:
- UI colors (who cares)
- Help text formatting (as long as it's readable)
- Feature requests no one asked for

Integration tests run the actual binary:
\`\`\`go
func TestCLI(t *testing.T) {
    cmd := exec.Command("./sysmon-cli", "--json")
    output, err := cmd.Output()
    require.NoError(t, err)

    var metrics SystemMetrics
    json.Unmarshal(output, &metrics)
    assert.Greater(t, metrics.CPU, 0.0)
}
\`\`\`

If the binary works, tests pass. That's the contract.

## What Actually Matters

Building CLI tools for 3 years taught me:

1. **It must work immediately** - no setup, no config required
2. **Single binary beats everything** - distribution, deployment, debugging
3. **Obvious commands** - don't make me read docs to guess \`list\` or \`sync\`
4. **Human output by default** - JSON when asked
5. **Helpful errors** - tell me what broke and how to fix it
6. **Cross-platform from day 1** - don't "add Windows support later"
7. **Sane defaults** - most users never touch config

Everything else is details.

## What Doesn't Matter

Don't obsess over:
- Perfect flag naming (good enough beats perfect)
- Every edge case (ship, then fix)
- UI frameworks (plain text works everywhere)
- Plugin systems (YAGNI until proven otherwise)
- Config file format (YAML, TOML, JSON—no one cares)

Ship something that works. Iterate based on real usage. Most "best practices" are someone's preference, not requirements.

Sysmon-CLI is 3000 lines. Zvezda is 2000 lines. Iris is 4000 lines. Small, focused, shipped. That's the goal.
        `,
        author: "Noam Favier",
        date: "2024-11-02",
        readTime: "11 min read",
        category: "Technical",
        tags: ["CLI", "Developer Tools", "Go", "Software Design"],
        image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1200&h=600&q=80&fit=crop",
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
