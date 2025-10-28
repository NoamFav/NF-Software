// ============================================================================
// FILE: src/pages/About.jsx
// ============================================================================
import {
    ArrowRight,
    Mail,
    Sparkles,
    Zap,
    Lock,
    Gauge,
    Layers,
    GitBranch,
    Lightbulb,
    Target,
    Users,
    Telescope,
    Wrench,
    Package,
    Star,
    CheckCircle,
    ExternalLink,
} from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Link } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";
import { getTheme } from "../utils/theme";
import { stats, timeline, principles, process } from "../data/siteData";

const About = () => {
    const { darkMode } = useDarkMode();
    const theme = getTheme(darkMode);

    const RIGHT_SLASH = "polygon(60% 0, 100% 0, 100% 100%, 50% 100%)";
    const LEFT_BACKSL = "polygon(0 0, 40% 0, 50% 100%, 0 100%)";

    const iconMap = {
        "Privacy by Default": Lock,
        "Performance Matters": Gauge,
        "Craft Over Scale": Layers,
        "Open by Design": GitBranch,
        "AI as Augmentation": Lightbulb,
        Research: Telescope,
        Prototype: Wrench,
        "Performance Pass": Zap,
        Polish: Sparkles,
    };

    const principlesWithIcons = principles.map((p) => ({
        ...p,
        icon: iconMap[p.title],
    }));

    const processWithIcons = process.map((p) => ({
        ...p,
        icon: iconMap[p.title],
    }));

    return (
        <>
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
                        <Link
                            to="/products"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
                        >
                            Explore Products
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <a
                            href="https://github.com/NoamFav"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-8 py-4 ${theme.bgButton} border ${theme.borderButton} border font-semibold rounded-full hover:border-gray-400 transition-all duration-300 transform hover:scale-105`}
                        >
                            <SiGithub className="w-5 h-5" />
                            View on GitHub
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
                    <div
                        className={`w-6 h-10 rounded-full border-2 ${theme.border} flex items-start justify-center p-2`}
                    >
                        <div
                            className={`w-1.5 h-1.5 ${theme.bgPrimary} rounded-full animate-pulse`}
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
                <div className="absolute inset-0 pointer-events-none">
                    <div
                        className="absolute inset-0"
                        style={{ clipPath: RIGHT_SLASH }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
                            alt=""
                            aria-hidden="true"
                            decoding="async"
                            loading="lazy"
                            sizes="(min-width: 1024px) 100vw, 100vw"
                            className="w-full h-full object-cover"
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
                        {principlesWithIcons.map((principle, index) => (
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
                        {processWithIcons.map((step, index) => (
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
                <div className="absolute inset-0 pointer-events-none">
                    <div
                        className="absolute inset-0"
                        style={{ clipPath: LEFT_BACKSL }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80"
                            alt=""
                            aria-hidden="true"
                            decoding="async"
                            loading="lazy"
                            sizes="(min-width: 1024px) 100vw, 100vw"
                            className="w-full h-full object-cover"
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

                        <div className={`pt-8 border-t ${theme.border}`}>
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
                                    className={`px-3 py-1 ${theme.bgButton} rounded-lg text-sm ${theme.textSecondary}`}
                                >
                                    Rust
                                </span>
                                <span
                                    className={`px-3 py-1 ${theme.bgButton} rounded-lg text-sm ${theme.textSecondary}`}
                                >
                                    Go
                                </span>
                                <span
                                    className={`px-3 py-1 ${theme.bgButton} rounded-lg text-sm ${theme.textSecondary}`}
                                >
                                    React
                                </span>
                                <span
                                    className={`px-3 py-1 ${theme.bgButton} rounded-lg text-sm ${theme.textSecondary}`}
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
                            <SiGithub className="w-5 h-5" />
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
                                <Link
                                    to="/products"
                                    className={`inline-flex items-center gap-2 px-8 py-4 ${theme.cardBg} border ${theme.border} font-semibold rounded-full hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105`}
                                >
                                    <Package className="w-5 h-5" />
                                    Explore Products
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>

                            <div className="flex flex-wrap items-center justify-center gap-6 pt-12">
                                <a
                                    href="https://github.com/NoamFav"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-2 ${theme.textSecondary} hover:${theme.text} transition`}
                                    aria-label="GitHub"
                                >
                                    <SiGithub className="w-5 h-5" />
                                    <span className="text-sm">GitHub</span>
                                </a>
                                <Link
                                    to="/testimonials"
                                    className={`flex items-center gap-2 ${theme.textSecondary} hover:${theme.text} transition`}
                                >
                                    <Star className="w-5 h-5" />
                                    <span className="text-sm">
                                        Testimonials
                                    </span>
                                </Link>
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
        </>
    );
};

export default About;
