import React, { useEffect } from "react";
import {
    Star,
    Users,
    Award,
    ArrowRight,
    Github,
    Mail,
    CheckCircle,
    TrendingUp,
    Code,
    Lock,
    Gauge,
} from "lucide-react";

const TestimonialsPage = () => {
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

    const testimonials = [
        {
            name: "Sarah Chen",
            role: "CTO at TechCorp",
            content:
                "The quality of work and attention to detail is exceptional. NF Software's tools have transformed how our team operates.",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&q=80&fit=crop",
            featured: true,
        },
        {
            name: "Marcus Rodriguez",
            role: "Lead Developer",
            content:
                "Sysmon-CLI has become an essential part of our DevOps toolkit. The performance is unmatched.",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&q=80&fit=crop",
            featured: true,
        },
        {
            name: "Emily Watson",
            role: "Product Manager",
            content:
                "Working with NF Software was seamless. They understood our vision and delivered beyond expectations.",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&q=80&fit=crop",
            featured: true,
        },
        {
            name: "David Kim",
            role: "SRE at CloudScale",
            content:
                "CodeGrep cut our codebase search time by 80%. The AST-aware search finds exactly what we need, even in our 2M+ line monorepo.",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&q=80&fit=crop",
        },
        {
            name: "Priya Sharma",
            role: "DevOps Engineer",
            content:
                "Zvezda's AI commit messages save our team 2 hours daily. The context awareness is impressive—it actually understands what changed.",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&q=80&fit=crop",
        },
        {
            name: "Alex Thompson",
            role: "Independent Developer",
            content:
                "As a solo dev, Iris changed my workflow completely. Local AI that actually works offline is a game-changer for privacy-conscious projects.",
            avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&q=80&fit=crop",
        },
        {
            name: "Jordan Lee",
            role: "Data Engineer",
            content:
                "SysDash Ultra's predictive alerts caught our disk space issue 48 hours before it would've caused downtime. That's production-saving intelligence.",
            avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&q=80&fit=crop",
        },
        {
            name: "Carlos Mendez",
            role: "Security Engineer",
            content:
                "The local-first architecture means we can audit everything. No data leaves our infrastructure—exactly what enterprise security needs.",
            avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&q=80&fit=crop",
        },
        {
            name: "Rachel Green",
            role: "Tech Lead at FinServe",
            content:
                "Migrated from commercial monitoring to Sysmon-CLI. Sub-millisecond overhead means we can monitor everything without performance anxiety.",
            avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&q=80&fit=crop",
        },
    ];

    const caseStudies = [
        {
            company: "CloudScale Infrastructure",
            challenge:
                "Managing 200+ microservices with inconsistent monitoring led to missed incidents and alert fatigue.",
            solution:
                "Deployed SysDash Ultra with custom dashboards and ML-powered anomaly detection across their entire fleet.",
            result: "Reduced mean time to detection by 73% and cut false positives by 85% in the first quarter.",
            metric: "73% faster incident detection",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
            gradient: "from-blue-500 to-cyan-500",
            icon: Gauge,
        },
        {
            company: "DevTools Startup",
            challenge:
                "Their 50-person engineering team spent 15+ hours weekly writing commit messages and searching legacy code.",
            solution:
                "Integrated Zvezda for intelligent commits and CodeGrep for semantic search across their 1.8M line codebase.",
            result: "Team velocity increased 22% as developers spent less time on tooling friction and more time shipping features.",
            metric: "22% velocity increase",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
            gradient: "from-violet-500 to-purple-500",
            icon: TrendingUp,
        },
        {
            company: "FinServe Security",
            challenge:
                "Compliance requirements prohibited cloud-based AI tools, blocking productivity gains from modern AI assistants.",
            solution:
                "Deployed Iris as a fully local AI assistant running on-premise with zero external data transmission.",
            result: "Achieved SOC 2 compliance while giving developers AI-powered coding assistance. Security audits confirmed zero data leakage.",
            metric: "100% compliance maintained",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
            gradient: "from-emerald-500 to-teal-500",
            icon: Lock,
        },
    ];

    const stats = [
        { label: "Teams Trust Us", value: "100+", icon: Users },
        { label: "GitHub Stars", value: "2.5K+", icon: Star },
        { label: "Award Recognition", value: "12+", icon: Award },
    ];

    const clientLogos = [
        { name: "TechCorp", gradient: "from-blue-500 to-cyan-500" },
        { name: "CloudScale", gradient: "from-purple-500 to-pink-500" },
        { name: "FinServe", gradient: "from-emerald-500 to-teal-500" },
        { name: "DevTools Inc", gradient: "from-orange-500 to-red-500" },
        { name: "DataStream", gradient: "from-indigo-500 to-purple-500" },
        { name: "SecureNet", gradient: "from-violet-500 to-fuchsia-500" },
    ];

    return (
        <div className="bg-black text-white min-h-screen">
            {/* Hero Section */}
            <section className="relative py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15), transparent 50%)",
                        }}
                    />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center space-y-8 mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20">
                            <Users className="w-4 h-4 text-blue-500" />
                            <span className="text-sm font-medium">
                                Trusted by Development Teams Worldwide
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
                            Built for developers,
                            <br />
                            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                loved by teams
                            </span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Real feedback from engineers, CTOs, and teams who
                            use our tools in production every day. No fluff,
                            just measurable impact.
                        </p>
                    </div>

                    {/* Social Proof Stats */}
                    <div
                        data-animate
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
                    >
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className="bg-gray-900 rounded-2xl p-8 text-center border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <stat.icon className="w-10 h-10 mx-auto mb-4 text-blue-500" />
                                <div className="text-4xl font-bold mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-400">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div data-animate className="text-center space-y-4 mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            What Developers Say
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            From solo developers to enterprise teams, here's how
                            our tools make a difference.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.name}
                                data-animate
                                className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                {testimonial.featured && (
                                    <div className="flex items-center gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-4 h-4 fill-yellow-500 text-yellow-500"
                                            />
                                        ))}
                                    </div>
                                )}
                                <p className="text-gray-300 mb-6 text-base leading-relaxed">
                                    "{testimonial.content}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonial.avatar}
                                        alt={`${testimonial.name}, ${testimonial.role}`}
                                        width="48"
                                        height="48"
                                        className="w-12 h-12 rounded-full object-cover"
                                        loading="lazy"
                                    />
                                    <div>
                                        <div className="font-semibold">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-sm text-gray-400">
                                            {testimonial.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div data-animate className="text-center space-y-4 mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Success Stories
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Real teams, real challenges, measurable results.
                        </p>
                    </div>

                    <div className="space-y-24">
                        {caseStudies.map((study, index) => {
                            const textOnLeft = index % 2 === 0;
                            const clipPath = textOnLeft
                                ? "polygon(60% 0, 100% 0, 100% 100%, 50% 100%)"
                                : "polygon(0 0, 40% 0, 50% 100%, 0 100%)";

                            return (
                                <div
                                    key={study.company}
                                    data-animate
                                    className="relative min-h-[500px] flex items-center overflow-hidden rounded-3xl"
                                >
                                    {/* Angled Image Background */}
                                    <div className="absolute inset-0 pointer-events-none">
                                        <div
                                            className="absolute inset-0"
                                            style={{ clipPath }}
                                        >
                                            <img
                                                src={study.image}
                                                alt={`${study.company} case study background`}
                                                width="1200"
                                                height="600"
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 w-full px-8 py-12 md:px-16">
                                        <div
                                            className={`max-w-xl ${
                                                textOnLeft
                                                    ? ""
                                                    : "ml-auto text-right"
                                            }`}
                                        >
                                            <div
                                                className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${study.gradient} rounded-full text-white text-sm font-semibold mb-6`}
                                            >
                                                <study.icon className="w-4 h-4" />
                                                {study.metric}
                                            </div>

                                            <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                                {study.company}
                                            </h3>

                                            <div className="space-y-4 text-gray-300">
                                                <div>
                                                    <span className="font-semibold text-white">
                                                        Challenge:
                                                    </span>{" "}
                                                    {study.challenge}
                                                </div>
                                                <div>
                                                    <span className="font-semibold text-white">
                                                        Solution:
                                                    </span>{" "}
                                                    {study.solution}
                                                </div>
                                                <div>
                                                    <span className="font-semibold text-white">
                                                        Result:
                                                    </span>{" "}
                                                    {study.result}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Client Logos */}
            <section data-animate className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-sm text-gray-500 uppercase tracking-wider mb-8">
                            Trusted by teams at
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-12">
                            {clientLogos.map((client) => (
                                <div
                                    key={client.name}
                                    className="group"
                                    aria-label={`Client logo: ${client.name}`}
                                >
                                    <div
                                        className={`w-32 h-16 rounded-lg bg-gradient-to-br ${client.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300 flex items-center justify-center`}
                                    >
                                        <div className="w-24 h-12 bg-gray-900 rounded flex items-center justify-center">
                                            <span className="text-xs font-semibold text-gray-500">
                                                {client.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section data-animate className="py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-gray-900 rounded-3xl p-12 md:p-20 text-center space-y-8 border border-gray-800 relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage:
                                        "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
                                    backgroundSize: "32px 32px",
                                }}
                            />
                        </div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-6">
                                <CheckCircle className="w-4 h-4 text-blue-500" />
                                <span className="text-sm font-medium">
                                    Join 100+ Teams
                                </span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Ready to see the difference?
                            </h2>

                            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                                Experience the tools that developers trust for
                                production-grade performance and reliability.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center">
                                <a
                                    href="mailto:contact@nf-software.com"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                                >
                                    <Mail className="w-5 h-5" />
                                    Contact Us
                                </a>
                                <a
                                    href="/products"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 border border-gray-700 font-semibold rounded-full hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
                                >
                                    <Code className="w-5 h-5" />
                                    Explore Products
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>

                            {/* Quick Links */}
                            <div className="flex flex-wrap items-center justify-center gap-6 pt-12">
                                <a
                                    href="https://github.com/NoamFav"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                                >
                                    <Github className="w-5 h-5" />
                                    <span className="text-sm">GitHub</span>
                                </a>
                                <a
                                    href="/about"
                                    className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                                >
                                    <Users className="w-5 h-5" />
                                    <span className="text-sm">About Us</span>
                                </a>
                                <a
                                    href="mailto:contact@nf-software.com"
                                    className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                                >
                                    <Mail className="w-5 h-5" />
                                    <span className="text-sm">Email</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
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

                [data-animate] {
                    opacity: 0;
                    transform: translateY(20px);
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
                }
            `}</style>
        </div>
    );
};

export default TestimonialsPage;
