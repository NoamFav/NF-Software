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
            "A practical guide to deciding between microservices and monolithic architectures. When each makes sense and what to consider.",
        content: `
# Microservices vs Monolith: Choosing the Right Architecture

The microservices vs monolith debate continues. But the answer isn't one-size-fits-all.

## The Monolith Case

Start with a monolith. Here's why:

### Simplicity
- Single codebase
- One deployment
- Easier debugging
- Simpler testing

### Performance
- No network overhead between components
- Faster inter-module communication
- Single database transaction

### Team Size
If you have fewer than 20 developers, a monolith is likely optimal. Conway's Law applies: your architecture mirrors your org structure.

## When Microservices Make Sense

Consider microservices when:

### Scale Requirements Differ
One component needs 100x more resources than others. Split it out.

### Team Independence
Multiple teams need to deploy independently without coordination overhead.

### Technology Diversity
Different components genuinely benefit from different tech stacks.

### Failure Isolation
Critical that one component's failure doesn't bring down everything.

## The Middle Ground: Modular Monolith

Before jumping to microservices, try a modular monolith:
- Clear module boundaries
- Well-defined interfaces
- Independent deployment of modules
- Extract to microservices later if needed

## Our Approach at NF Software

We build modular monoliths:
- Clear separation of concerns
- Interfaces designed for potential extraction
- Monitor which modules need scaling
- Extract only when necessary

## Common Microservices Pitfalls

### Premature Distribution
Most startups don't need microservices on day one. The complexity overhead is real.

### Distributed Monolith
Poorly bounded microservices that all call each other = worst of both worlds.

### Operational Overhead
Kubernetes, service mesh, distributed tracing, log aggregation—it adds up fast.

## Decision Framework

**Start with monolith if:**
- Small team (< 20 devs)
- MVP or early stage
- Uncertain about domain boundaries
- Limited ops resources

**Consider microservices if:**
- Large team (> 50 devs)
- Clear domain boundaries
- Different scaling needs
- Strong ops capability

## Conclusion

Architecture is about tradeoffs. Microservices solve real problems but introduce complexity. Start simple, evolve as needed.

Most importantly: you can change your mind. Build for easy refactoring.
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
            "Learn how to effectively debug production issues with limited information. Battle-tested techniques from real incidents.",
        content: `
# Debugging Production Issues: A Systematic Approach

Production bugs are different. No debugger, limited logs, users affected. Here's how to handle them.

## The Incident Response Framework

### 1. Assess and Triage
First, understand the scope:
- How many users affected?
- Is it getting worse?
- Can we rollback?

**Action**: Make a quick decision on severity. P0 means all hands on deck.

### 2. Gather Information
Collect data before diving in:
\`\`\`bash
# Check recent deployments
git log --since="2 hours ago" --oneline

# View error rates
grep "ERROR" /var/log/app.log | tail -100

# Check system metrics
sysmon-cli --last 2h
\`\`\`

### 3. Form Hypotheses
Based on data, list possible causes:
- Recent code changes
- Infrastructure issues
- Third-party service problems
- Data corruption

### 4. Test Systematically
Test one hypothesis at a time. Document what you try.

## Essential Debugging Techniques

### Read the Logs
Obvious but often skipped. Read the actual error messages:
\`\`\`bash
# Find the first occurrence
grep -n "ERROR" app.log | head -1

# Context around errors
grep -B 10 -A 10 "ERROR" app.log
\`\`\`

### Binary Search Deploys
If logs don't help, find the breaking commit:
\`\`\`bash
git bisect start
git bisect bad HEAD
git bisect good v1.2.0
\`\`\`

Deploy each bisect point to staging and test.

### Reproduce Locally
Try to recreate the issue:
- Use production data (anonymized)
- Match infrastructure versions
- Check environment variables

### Add Instrumentation
Can't see what's happening? Add logging:
\`\`\`go
log.Printf("DEBUG: user_id=%s, action=%s, result=%v",
    userID, action, result)
\`\`\`

Deploy, wait for logs, then remove debug statements.

## Production Debugging Tools

### Structured Logging
Use structured logs for easier filtering:
\`\`\`json
{
  "timestamp": "2025-01-05T10:30:00Z",
  "level": "error",
  "service": "api",
  "user_id": "123",
  "error": "connection timeout"
}
\`\`\`

### Distributed Tracing
For microservices, use tracing:
- Jaeger or Zipkin
- Track requests across services
- Identify bottlenecks

### Metrics and Monitoring
Set up alerts before incidents:
- Error rates
- Response times
- Resource usage

Sysmon-CLI helps with real-time system metrics.

## Common Production Issues

### Memory Leaks
Symptoms: Gradually increasing memory, eventual OOM
\`\`\`bash
# Monitor memory over time
watch -n 5 'ps aux | grep app'
\`\`\`

### Database Connection Exhaustion
Symptoms: "Too many connections" errors
\`\`\`sql
SHOW PROCESSLIST;
-- Look for stuck queries
\`\`\`

### Rate Limiting
Symptoms: Intermittent failures, 429 errors
Check external API usage, add backoff/retry logic.

## Post-Incident

### Write a Postmortem
Document:
- What happened
- Root cause
- How it was fixed
- How to prevent recurrence

**No blame**. Focus on systems and processes.

### Add Tests
Prevent regression:
\`\`\`go
func TestProductionBug_Issue123(t *testing.T) {
    // Reproduce the bug
    // Verify the fix
}
\`\`\`

### Improve Observability
Each incident should result in better monitoring.

## Prevention is Better

The best production bugs are the ones that never happen:
- Comprehensive testing
- Gradual rollouts
- Feature flags
- Monitoring and alerts
- Chaos engineering

## Tools We Use

At NF Software:
- **Logging**: Structured JSON logs
- **Monitoring**: Prometheus + Grafana
- **Tracing**: When needed for distributed systems
- **Sysmon-CLI**: System-level monitoring

## Remember

Stay calm. Production incidents are learning opportunities. Follow the process, document everything, and make systems more resilient.
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
            "Practical tips for optimizing Go applications. From profiling to concurrency patterns that actually improve performance.",
        content: `
# Go Performance Tips: Making Your Code Faster

Go is fast by default. But you can make it faster. Here's how.

## Rule 0: Measure First

Never optimize without data:
\`\`\`bash
go test -bench=. -benchmem
go test -cpuprofile=cpu.prof
go tool pprof cpu.prof
\`\`\`

Measure, optimize, measure again.

## Memory Allocation

Allocations are often the bottleneck.

### Preallocate Slices
Bad:
\`\`\`go
var results []string
for _, item := range items {
    results = append(results, process(item))
}
\`\`\`

Good:
\`\`\`go
results := make([]string, 0, len(items))
for _, item := range items {
    results = append(results, process(item))
}
\`\`\`

### Use sync.Pool for Temporary Objects
\`\`\`go
var bufferPool = sync.Pool{
    New: func() interface{} {
        return new(bytes.Buffer)
    },
}

func process(data []byte) {
    buf := bufferPool.Get().(*bytes.Buffer)
    defer bufferPool.Put(buf)
    buf.Reset()
    // use buf
}
\`\`\`

### Avoid String Concatenation in Loops
Bad:
\`\`\`go
var result string
for _, s := range strings {
    result += s // allocates every iteration
}
\`\`\`

Good:
\`\`\`go
var builder strings.Builder
for _, s := range strings {
    builder.WriteString(s)
}
result := builder.String()
\`\`\`

## Concurrency Patterns

### Use Worker Pools
Don't spawn unlimited goroutines:
\`\`\`go
func processWithPool(items []Item, workers int) {
    jobs := make(chan Item, len(items))
    results := make(chan Result, len(items))

    // Start workers
    for w := 0; w < workers; w++ {
        go worker(jobs, results)
    }

    // Send jobs
    for _, item := range items {
        jobs <- item
    }
    close(jobs)

    // Collect results
    for i := 0; i < len(items); i++ {
        <-results
    }
}
\`\`\`

### Use Buffered Channels
Reduce goroutine blocking:
\`\`\`go
// Better
ch := make(chan int, 100)
\`\`\`

### Avoid Goroutine Leaks
Always ensure goroutines can exit:
\`\`\`go
func worker(ctx context.Context, jobs <-chan Job) {
    for {
        select {
        case job := <-jobs:
            process(job)
        case <-ctx.Done():
            return // goroutine exits cleanly
        }
    }
}
\`\`\`

## I/O Optimization

### Batch Database Operations
Bad:
\`\`\`go
for _, user := range users {
    db.Insert(user) // N queries
}
\`\`\`

Good:
\`\`\`go
db.BulkInsert(users) // 1 query
\`\`\`

### Use Connection Pools
\`\`\`go
db.SetMaxOpenConns(25)
db.SetMaxIdleConns(5)
db.SetConnMaxLifetime(5 * time.Minute)
\`\`\`

### Buffer I/O
\`\`\`go
file, _ := os.Open("large.txt")
reader := bufio.NewReader(file)
// Much faster than file.Read()
\`\`\`

## CPU Optimization

### Avoid Reflection
Reflection is slow. Use code generation instead:
\`\`\`bash
go install github.com/mailru/easyjson/...
easyjson -all types.go
\`\`\`

### Use Integer Math
Floating-point math is slower:
\`\`\`go
// Store cents as int, not dollars as float64
price := 1999 // $19.99
\`\`\`

### Inline Hot Paths
Small, frequently-called functions get inlined:
\`\`\`go
//go:inline
func add(a, b int) int {
    return a + b
}
\`\`\`

## Profiling Deep Dive

### CPU Profile
\`\`\`bash
go test -cpuprofile=cpu.prof
go tool pprof -http=:8080 cpu.prof
\`\`\`

### Memory Profile
\`\`\`bash
go test -memprofile=mem.prof
go tool pprof -http=:8080 mem.prof
\`\`\`

### Trace
For concurrency issues:
\`\`\`bash
go test -trace=trace.out
go tool trace trace.out
\`\`\`

## Benchmarking Best Practices

\`\`\`go
func BenchmarkProcess(b *testing.B) {
    // Setup
    data := setupTestData()

    b.ResetTimer() // Don't measure setup

    for i := 0; i < b.N; i++ {
        process(data)
    }
}
\`\`\`

Run benchmarks:
\`\`\`bash
go test -bench=. -benchmem -benchtime=10s
\`\`\`

## Real-World Example: Sysmon-CLI

In Sysmon-CLI, we optimized metric collection:
- Preallocated buffers for metrics
- Worker pool for concurrent collection
- sync.Pool for temporary objects
- Result: <1% CPU usage, 8MB memory

## Common Mistakes

1. **Premature optimization**: Measure first
2. **Over-concurrency**: More goroutines ≠ faster
3. **Ignoring allocations**: Profile memory
4. **Not benchmarking**: Intuition is often wrong

## When to Optimize

Optimize when:
- Profiler shows clear hotspot
- Performance impacts users
- Cost savings justify engineering time

Don't optimize:
- Before measuring
- Code that runs once
- When readability matters more

## Tools

- **pprof**: Built-in profiler
- **benchstat**: Compare benchmark runs
- **Sysmon-CLI**: Monitor production performance
- **trace**: Analyze concurrency

## Conclusion

Go is fast. Make it faster by:
1. Measuring with pprof
2. Reducing allocations
3. Using concurrency wisely
4. Profiling continuously

Performance is a feature. Treat it as such.
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
            "Essential principles for designing REST APIs that are intuitive, consistent, and a joy to use. Lessons from building developer tools.",
        content: `
# API Design Principles: Building APIs Developers Love

Good API design is invisible. Developers just "get it." Here's how to achieve that.

## Core Principles

### 1. Consistency is King

Use the same patterns everywhere:
\`\`\`http
GET    /users
GET    /users/123
POST   /users
PUT    /users/123
DELETE /users/123

GET    /repos
GET    /repos/456
POST   /repos
PUT    /repos/456
DELETE /repos/456
\`\`\`

Same structure for every resource. No surprises.

### 2. Use Standard HTTP Methods

- **GET**: Retrieve data (safe, idempotent)
- **POST**: Create resource
- **PUT**: Update entire resource (idempotent)
- **PATCH**: Partial update
- **DELETE**: Remove resource (idempotent)

Don't invent custom methods.

### 3. Resource-Oriented Design

Think in resources, not actions:
\`\`\`
❌ POST /getUserData
✅ GET  /users/123

❌ POST /addToCart
✅ POST /cart/items

❌ GET  /deleteUser?id=123
✅ DELETE /users/123
\`\`\`

### 4. Use HTTP Status Codes Properly

- **200 OK**: Success
- **201 Created**: Resource created
- **204 No Content**: Success, no body
- **400 Bad Request**: Client error
- **401 Unauthorized**: Authentication required
- **403 Forbidden**: Authenticated but not allowed
- **404 Not Found**: Resource doesn't exist
- **500 Internal Server Error**: Server error

### 5. Versioning

Include version in URL:
\`\`\`
/v1/users
/v2/users
\`\`\`

Never break backward compatibility within a version.

## Request Design

### Use JSON

Unless you have a specific reason (binary data, streaming), use JSON:
\`\`\`json
{
  "user": {
    "id": 123,
    "email": "user@example.com",
    "name": "John Doe"
  }
}
\`\`\`

### Accept Flexible Input

Be liberal in what you accept:
\`\`\`json
// All valid date formats
"created_at": "2025-01-05"
"created_at": "2025-01-05T10:30:00Z"
"created_at": 1736071800
\`\`\`

### Validate Early

Return clear validation errors:
\`\`\`json
{
  "error": "validation_failed",
  "message": "Invalid request data",
  "details": [
    {
      "field": "email",
      "message": "Must be a valid email address"
    },
    {
      "field": "age",
      "message": "Must be at least 18"
    }
  ]
}
\`\`\`

## Response Design

### Return Useful Data

When creating a resource, return the full resource:
\`\`\`http
POST /users
{
  "email": "new@example.com",
  "name": "Jane"
}

201 Created
Location: /users/456
{
  "id": 456,
  "email": "new@example.com",
  "name": "Jane",
  "created_at": "2025-01-05T10:30:00Z"
}
\`\`\`

### Include Metadata for Lists

\`\`\`json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "per_page": 20,
    "total": 150,
    "total_pages": 8
  }
}
\`\`\`

### Error Responses

Consistent error format:
\`\`\`json
{
  "error": {
    "code": "resource_not_found",
    "message": "User with ID 123 not found",
    "request_id": "req_abc123"
  }
}
\`\`\`

## Pagination

Use cursor-based pagination for scale:
\`\`\`http
GET /users?cursor=abc123&limit=20

{
  "data": [...],
  "pagination": {
    "next_cursor": "def456",
    "has_more": true
  }
}
\`\`\`

Offset-based pagination is simpler but doesn't scale:
\`\`\`http
GET /users?page=2&per_page=20
\`\`\`

## Filtering and Sorting

Support common operations:
\`\`\`http
GET /users?status=active&role=admin
GET /users?sort=-created_at,name
GET /users?q=search+term
\`\`\`

## Rate Limiting

Communicate limits in headers:
\`\`\`http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 987
X-RateLimit-Reset: 1736071800

429 Too Many Requests
{
  "error": "rate_limit_exceeded",
  "message": "Rate limit exceeded. Retry after 60 seconds."
}
\`\`\`

## Authentication

Use standard schemes:
\`\`\`http
Authorization: Bearer <token>
\`\`\`

For API keys:
\`\`\`http
Authorization: ApiKey <key>
\`\`\`

## Webhooks

For events, offer webhooks:
\`\`\`json
POST https://your-app.com/webhooks
{
  "event": "user.created",
  "data": {
    "user": {...}
  },
  "timestamp": "2025-01-05T10:30:00Z"
}
\`\`\`

Include signature for verification:
\`\`\`http
X-Webhook-Signature: sha256=abc123...
\`\`\`

## Documentation

Good APIs have great docs:
- Interactive examples
- Sample requests/responses
- SDKs in major languages
- Changelog for breaking changes

Use OpenAPI/Swagger for machine-readable specs.

## Testing APIs

Provide sandbox environment:
\`\`\`
https://api.example.com      # Production
https://api-sandbox.example.com  # Testing
\`\`\`

## Real-World Example: Iris API

Iris local AI assistant exposes OpenAI-compatible API:
\`\`\`http
POST /v1/chat/completions
Authorization: Bearer local-only

{
  "model": "iris",
  "messages": [...]
}
\`\`\`

Compatibility means existing tools work immediately.

## Common Mistakes

1. **Inconsistent naming**: user_id vs userId vs id
2. **Missing status codes**: Everything returns 200
3. **Unclear errors**: "Error occurred"
4. **Breaking changes**: Without versioning
5. **No rate limiting**: API gets abused

## Best Practices Checklist

- [ ] Consistent resource naming
- [ ] Proper HTTP methods and status codes
- [ ] Clear error messages
- [ ] Pagination support
- [ ] Rate limiting
- [ ] API versioning
- [ ] Authentication/authorization
- [ ] Comprehensive documentation
- [ ] Sandbox environment
- [ ] SDKs for popular languages

## Conclusion

Great APIs are:
- **Intuitive**: Follows conventions
- **Consistent**: Same patterns everywhere
- **Forgiving**: Flexible input, clear errors
- **Well-documented**: Examples and guides
- **Stable**: Backward compatible

Design for your users. They'll thank you.
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
            "How to give and receive code reviews that improve code quality without slowing down development. Practical guidelines from our team.",
        content: `
# The Art of Effective Code Reviews

Code reviews are essential. But they can be painful. Here's how to make them valuable for everyone.

## Why Code Reviews Matter

Beyond catching bugs:
- **Knowledge sharing**: Everyone learns
- **Code consistency**: Maintain standards
- **Mentorship**: Junior devs improve
- **Collective ownership**: No silos

## For Reviewers

### Review Mindset

You're not the gatekeeper. You're a collaborator helping improve the code.

**Ask questions instead of giving orders:**
- ❌ "This is wrong"
- ✅ "Could we handle this edge case?"

**Praise good work:**
\`\`\`
Nice refactoring here! Much cleaner than before.
\`\`\`

**Distinguish must-fix from nice-to-have:**
\`\`\`
⚠️ BLOCKER: This will cause a memory leak
💡 NIT: Consider renaming for clarity
\`\`\`

### What to Look For

#### Correctness
- Does it solve the problem?
- Are edge cases handled?
- Will it break under load?

#### Design
- Is the approach sound?
- Does it fit the architecture?
- Is there a simpler way?

#### Tests
- Are there tests?
- Do they cover the important cases?
- Are they maintainable?

#### Readability
- Can you understand it?
- Are names clear?
- Is it overly clever?

#### Performance
- Are there obvious bottlenecks?
- Unnecessary allocations?
- N+1 queries?

#### Security
- Input validation?
- Authorization checks?
- Injection vulnerabilities?

### How to Review

#### Review Promptly
Don't make PRs sit for days. Review within 24 hours.

#### Review in Chunks
Big PRs are hard to review. Suggest splitting:
\`\`\`
This PR is pretty large. Could we split into:
1. Database schema changes
2. API implementation
3. Frontend updates
\`\`\`

#### Be Specific
❌ "This is confusing"
✅ "The variable name 'data' doesn't indicate this is user billing info. Consider 'billingRecords'?"

#### Suggest, Don't Demand
\`\`\`go
// Consider using a map for O(1) lookup instead:
userMap := make(map[int]*User)
for _, u := range users {
    userMap[u.ID] = u
}
\`\`\`

#### Focus on Important Issues
Don't nitpick formatting—use automated tools:
\`\`\`bash
go fmt
eslint --fix
\`\`\`

### Common Review Patterns

#### Approving with Comments
\`\`\`
Looks good! A few minor suggestions but nothing blocking.

LGTM (with comments) ✅
\`\`\`

#### Requesting Changes
\`\`\`
A few issues that should be addressed:
⚠️ Missing error handling on line 45
⚠️ Race condition in concurrent access
💡 Consider adding integration test
\`\`\`

#### Asking for More Context
\`\`\`
I'm not familiar with this part of the codebase.
Could you explain why we're caching here?
\`\`\`

## For Authors

### Before Requesting Review

#### Self-Review First
Review your own PR like someone else wrote it:
- Read the diff line by line
- Check for debug code
- Verify tests pass
- Run linters

#### Write a Good Description
\`\`\`markdown
## What
Implements user authentication with JWT tokens

## Why
Replace session-based auth to support mobile apps

## How
- Add JWT signing/validation middleware
- Update user model with refresh tokens
- Add /auth/refresh endpoint

## Testing
- Unit tests for JWT functions
- Integration test for auth flow
- Manual testing on staging

## Screenshots
[Include for UI changes]
\`\`\`

#### Keep PRs Small
Aim for < 400 lines changed. Easier to review = faster feedback.

### Responding to Feedback

#### Don't Take It Personally
Comments are about code, not you.

#### Ask Questions
If you don't understand feedback:
\`\`\`
Could you elaborate on the race condition?
I don't see where concurrent access happens.
\`\`\`

#### Explain Your Reasoning
\`\`\`
I considered using a map but we need to maintain
insertion order for the UI. That's why I used a slice.
\`\`\`

#### Accept Good Suggestions
\`\`\`
Great catch! Fixed in the latest commit.
\`\`\`

#### Push Back When Needed
\`\`\`
I disagree on extracting this into a separate function.
It's only used once and the inline version is clearer.
\`\`\`

### Updating the PR

#### Address Each Comment
Either fix it or explain why not:
- ✅ Fixed in abc123
- ✅ Added test in def456
- 💬 Explained above

#### Push Incremental Commits
Don't force push during review:
\`\`\`bash
git commit -m "Address review feedback"
git push
\`\`\`

Squash after approval.

#### Re-request Review
After addressing feedback:
\`\`\`
Updated based on your feedback. Ready for another look!
\`\`\`

## Team Guidelines

### Response Time
- Reviewers: Respond within 24 hours
- Authors: Address feedback within 48 hours

### Required Reviewers
- 1 approval for small changes
- 2 approvals for significant changes
- Domain expert for specialized code

### When to Auto-Approve
- Documentation fixes
- Minor typo corrections
- Automated dependency updates (after CI passes)

## Automated Checks

Use CI to catch mechanical issues:
\`\`\`yaml
# .github/workflows/pr.yml
- name: Lint
  run: golangci-lint run

- name: Test
  run: go test -race ./...

- name: Security
  run: gosec ./...
\`\`\`

This frees reviewers to focus on logic and design.

## Common Anti-Patterns

### Bikeshedding
Arguing about trivial details while missing major issues.

**Fix**: Establish style guides. Use formatters.

### Approval Without Reading
Rubber-stamping PRs.

**Fix**: Only approve if you actually reviewed.

### Death by a Thousand Nits
Overwhelming authors with minor comments.

**Fix**: Prioritize important issues. Use automated tools for style.

### Blocking on Preferences
"I would have done it differently" isn't a reason to block.

**Fix**: Only block on actual problems.

## Tools

At NF Software, we use:
- **GitHub**: PR reviews
- **golangci-lint**: Automated linting
- **CodeQL**: Security scanning
- **Codecov**: Coverage tracking

## Code Review Checklist

Before approving, verify:
- [ ] Code solves the stated problem
- [ ] Tests are present and pass
- [ ] No obvious bugs or edge cases
- [ ] Follows project conventions
- [ ] No security issues
- [ ] Documentation updated if needed
- [ ] Breaking changes are noted

## Conclusion

Great code reviews:
- **Improve code quality**
- **Share knowledge**
- **Build team culture**
- **Ship features faster** (yes, faster!)

Review with empathy. Write code reviewers will appreciate. Everyone wins.
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
            "What makes a CLI tool great? Insights from building cross-platform command-line applications that developers actually want to use.",
        content: `
# Building Great CLI Tools: Lessons from Sysmon and Zvezda

We've built multiple CLI tools at NF Software. Here's what we learned about making them great.

## Core Principles

### 1. Do One Thing Well

Unix philosophy applies:
- Sysmon-CLI: System monitoring
- Zvezda: Git repository management
- Iris: AI assistance

Each tool has a clear purpose.

### 2. Sensible Defaults

Tools should work with zero configuration:
\`\`\`bash
# Just works
sysmon-cli

# Advanced usage optional
sysmon-cli --interval 5s --export json
\`\`\`

### 3. Composable

Play nice with other tools:
\`\`\`bash
sysmon-cli --json | jq '.cpu.usage'
zvezda list | grep pending | wc -l
\`\`\`

Output formats that pipe well.

## Command Structure

### Clear Hierarchy

\`\`\`bash
tool [global-flags] command [command-flags] [args]

# Good structure:
zvezda --verbose sync --auto-stash
git --version log --oneline

# Bad structure:
tool -v -f file command -x -y
\`\`\`

### Verb-Noun Convention

\`\`\`bash
zvezda list repos
zvezda add repo
zvezda remove repo

iris chat start
iris model list
iris config set
\`\`\`

Verbs first, nouns second.

### Subcommands

Group related functionality:
\`\`\`bash
sysmon-cli             # Default action
sysmon-cli export      # Export data
sysmon-cli config      # Configuration
sysmon-cli version     # Version info
\`\`\`

## Flags and Options

### Use Standard Conventions

\`\`\`bash
-h, --help       # Help
-v, --version    # Version
-q, --quiet      # Quiet
-V, --verbose    # Verbose
-f, --force      # Force
-o, --output     # Output file
\`\`\`

### Long and Short Forms

\`\`\`bash
-o file.json
--output file.json
\`\`\`

Short for interactive, long for scripts.

### Boolean Flags

Don't require values:
\`\`\`bash
--verbose    # Not --verbose=true
--json       # Not --json true
\`\`\`

### Environment Variables

Support config via env:
\`\`\`bash
SYSMON_INTERVAL=5s sysmon-cli
ZVEZDA_REPOS_DIR=~/repos zvezda list
\`\`\`

Precedence: flags > env > config file > defaults

## Output

### Human-Readable by Default

\`\`\`bash
$ sysmon-cli
CPU Usage:    45.2%
Memory:       8.2 GB / 16 GB
Disk:         120 GB / 500 GB
Network In:   1.2 MB/s
Network Out:  0.8 MB/s
\`\`\`

### Machine-Readable Optional

\`\`\`bash
$ sysmon-cli --json
{
  "cpu": {"usage": 45.2},
  "memory": {"used": 8.2, "total": 16.0}
}

$ sysmon-cli --csv
timestamp,cpu_usage,memory_used
2025-01-05T10:30:00Z,45.2,8.2
\`\`\`

### Quiet Mode

For automation:
\`\`\`bash
if sysmon-cli check --quiet; then
    echo "System healthy"
fi
\`\`\`

### Progress Indicators

For long operations:
\`\`\`bash
Syncing repositories...
[=====>           ] 42% (15/36)
\`\`\`

Use TTY detection—don't show in pipes.

## Error Handling

### Exit Codes

\`\`\`bash
0   # Success
1   # General error
2   # Misuse (bad arguments)
130 # Terminated by Ctrl+C
\`\`\`

### Error Messages

Be specific:
\`\`\`
❌ Error: something went wrong

✅ Error: failed to connect to database
   Connection refused at localhost:5432

   Try:
   - Check if PostgreSQL is running
   - Verify connection settings
\`\`\`

### Colors for Clarity

\`\`\`bash
✓ Success messages in green
⚠ Warnings in yellow
✗ Errors in red
\`\`\`

But respect NO_COLOR environment variable.

## Help Text

### Good --help

\`\`\`bash
$ sysmon-cli --help
System monitoring tool

USAGE:
    sysmon-cli [OPTIONS] [COMMAND]

COMMANDS:
    export    Export metrics to file
    config    Configure sysmon-cli
    version   Show version info

OPTIONS:
    -i, --interval <DURATION>    Update interval [default: 1s]
    -j, --json                   Output as JSON
    -h, --help                   Print help
    -V, --version                Print version

EXAMPLES:
    sysmon-cli                           # Start monitoring
    sysmon-cli --interval 5s --json      # JSON output every 5s
    sysmon-cli export --output data.csv  # Export to CSV

For more info: https://docs.nfsoftware.dev/sysmon-cli
\`\`\`

### Command-Specific Help

\`\`\`bash
$ zvezda sync --help
Sync all repositories

USAGE:
    zvezda sync [OPTIONS]

OPTIONS:
    --auto-stash    Stash changes before sync
    --parallel <N>  Sync N repos in parallel [default: 4]
    --dry-run       Show what would be done
\`\`\`

## Configuration

### Layered Config

1. Command-line flags (highest priority)
2. Environment variables
3. Config file
4. Defaults (lowest priority)

### Config File Location

Follow conventions:
\`\`\`
~/.config/sysmon-cli/config.yaml    # Linux/macOS
%APPDATA%\\sysmon-cli\\config.yaml    # Windows
\`\`\`

### Config Commands

\`\`\`bash
sysmon-cli config set interval 5s
sysmon-cli config get interval
sysmon-cli config list
\`\`\`

## Installation

### Single Binary

Go tools compile to single binaries:
\`\`\`bash
curl -L github.com/nf-software/sysmon-cli/releases/latest/download/sysmon-cli-linux -o sysmon-cli
chmod +x sysmon-cli
mv sysmon-cli /usr/local/bin/
\`\`\`

### Package Managers

\`\`\`bash
# Homebrew
brew install nf-software/tap/sysmon-cli

# APT
curl -sL https://packagecloud.io/install/repositories/nf-software/sysmon-cli/script.deb.sh | bash
apt-get install sysmon-cli
\`\`\`

### Auto-Update

\`\`\`bash
sysmon-cli update --check
sysmon-cli update --install
\`\`\`

## Cross-Platform

### Handle Path Differences

\`\`\`go
import (
    "path/filepath"
    "os"
)

configPath := filepath.Join(os.UserConfigDir(), "sysmon-cli", "config.yaml")
\`\`\`

### Platform-Specific Builds

\`\`\`bash
GOOS=linux GOARCH=amd64 go build
GOOS=windows GOARCH=amd64 go build
GOOS=darwin GOARCH=arm64 go build
\`\`\`

### Test on All Platforms

CI for Windows, macOS, Linux.

## Testing

### Integration Tests

Test real command execution:
\`\`\`go
func TestCommand(t *testing.T) {
    cmd := exec.Command("sysmon-cli", "--json")
    output, err := cmd.Output()
    require.NoError(t, err)

    var result SystemStats
    json.Unmarshal(output, &result)
    assert.Greater(t, result.CPU.Usage, 0.0)
}
\`\`\`

### Test Help Text

\`\`\`go
func TestHelpText(t *testing.T) {
    cmd := exec.Command("sysmon-cli", "--help")
    output, _ := cmd.Output()

    assert.Contains(t, string(output), "USAGE:")
    assert.Contains(t, string(output), "OPTIONS:")
}
\`\`\`

## Documentation

### README

- Installation instructions
- Quick start
- Common use cases
- Link to full docs

### Man Pages

For Unix tools:
\`\`\`bash
man sysmon-cli
\`\`\`

### Online Docs

Comprehensive guide with examples.

## Our Tools

### Sysmon-CLI
Real-time system monitoring with export capabilities.

**What we got right:**
- Lightweight (<10MB memory)
- Works immediately, no config
- Cross-platform

### Zvezda
Git repository manager for multiple projects.

**What we got right:**
- Batch operations across repos
- Fast (Go with concurrency)
- Intuitive command structure

### Iris
Local-first AI assistant.

**What we got right:**
- OpenAI-compatible API
- Single binary, no dependencies
- Privacy-focused

## Checklist for Great CLI Tools

- [ ] Sensible defaults
- [ ] Clear command structure
- [ ] Comprehensive --help
- [ ] JSON/CSV output options
- [ ] Proper exit codes
- [ ] Cross-platform support
- [ ] Single binary distribution
- [ ] Package manager support
- [ ] Good error messages
- [ ] Examples in docs

## Conclusion

Great CLI tools:
- Work immediately
- Compose with others
- Feel natural
- Are well-documented
- Respect conventions

Build tools you'd want to use every day.
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
