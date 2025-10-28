// ============================================================================
// FILE: src/pages/Hero.jsx
// ============================================================================
import React from "react";
import {
    ArrowRight,
    Mail,
    Sparkles,
    Zap,
    Shield,
    Target,
    CheckCircle,
    Star,
    Award,
    Rocket,
    Download,
    Code,
    Users,
    ChevronRight,
} from "lucide-react";
import { SiX, SiGithub } from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";
import { getTheme } from "../utils/theme";
import { suites } from "../data/products";
import { testimonials } from "../data/testimonials";

const Hero = () => {
    const { darkMode } = useDarkMode();
    const theme = getTheme(darkMode);
    const [scrollY, setScrollY] = React.useState(0);

    const RIGHT_SLASH = "polygon(60% 0, 100% 0, 100% 100%, 50% 100%)";
    const LEFT_BACKSL = "polygon(0 0, 40% 0, 50% 100%, 0 100%)";

    React.useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const stats = [
        { label: "Projects Delivered", value: "10+", icon: Rocket },
        { label: "Lines of Code", value: "100K+", icon: Code },
        { label: "Active Users", value: "20+", icon: Users },
        { label: "GitHub Stars", value: "20+", icon: Star },
    ];

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
                            className={`inline-flex items-center gap-2 px-8 py-4 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-200"} border font-semibold rounded-full hover:border-gray-400 transition-all duration-300 transform hover:scale-105`}
                        >
                            <SiGithub className="w-5 h-5" />
                            View on GitHub
                        </a>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-8 pt-12 animate-fade-in animation-delay-600">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className={`text-sm ${theme.textSecondary}`}>
                                Trusted by 10+ teams
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Star className="w-5 h-5 text-yellow-500" />
                            <span className={`text-sm ${theme.textSecondary}`}>
                                20+ GitHub stars
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
                {suites.map((suite, sIdx) => (
                    <div key={suite.id} className="relative">
                        {/* Suite header */}
                        <section
                            id={suite.id}
                            className="relative min-h-[60vh] flex items-center overflow-hidden"
                            data-animate
                        >
                            <div className="absolute inset-0">
                                <img
                                    src={suite.image}
                                    alt=""
                                    aria-hidden="true"
                                    decoding="async"
                                    fetchpriority={
                                        sIdx === 0 ? "high" : undefined
                                    }
                                    loading={sIdx === 0 ? undefined : "lazy"}
                                    sizes="(min-width: 1024px) 100vw, 100vw"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40" />
                            </div>

                            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                                <div
                                    className="inline-block px-4 py-1 bg-gradient-to-r rounded-full text-white text-sm font-semibold
                        from-gray-900/40 to-gray-900/20 border border-white/10 backdrop-blur"
                                >
                                    Suite
                                </div>
                                <h2
                                    className={`mt-4 text-4xl md:text-5xl font-bold ${theme.text}`}
                                >
                                    {suite.name}
                                </h2>
                                <p
                                    className={`mt-3 text-lg max-w-2xl ${theme.textSecondary}`}
                                >
                                    {suite.tagline}
                                </p>
                                <p
                                    className={`mt-1 text-base max-w-3xl ${theme.textSecondary}`}
                                >
                                    {suite.description}
                                </p>
                            </div>
                        </section>

                        {/* Suite tools */}
                        {(suite?.tools ?? []).slice(0, 3).map((tool, tIdx) => {
                            const index = sIdx * 100 + tIdx;
                            const textOnLeft = index % 2 === 0;
                            const clip = textOnLeft ? RIGHT_SLASH : LEFT_BACKSL;

                            const slug = `${suite.id}-${(tool?.name ?? "tool")
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`;

                            return (
                                <section
                                    key={`${suite.id}-${tool?.name}`}
                                    id={slug}
                                    data-animate
                                    className="relative min-h-screen flex items-center overflow-hidden"
                                >
                                    <div className="absolute inset-0 pointer-events-none">
                                        <div
                                            className="absolute inset-0 will-change-[clip-path]"
                                            style={{ clipPath: clip }}
                                        >
                                            <img
                                                src={suite.image}
                                                alt=""
                                                aria-hidden="true"
                                                decoding="async"
                                                loading="lazy"
                                                sizes="(min-width: 1024px) 100vw, 100vw"
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                        </div>
                                    </div>

                                    <div
                                        className={`relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full ${
                                            textOnLeft
                                                ? ""
                                                : "lg:flex-row-reverse"
                                        }`}
                                    >
                                        <div
                                            className={`space-y-8 ${textOnLeft ? "lg:pr-16" : "lg:pl-16 lg:order-2"}`}
                                        >
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-3 flex-wrap">
                                                    <div
                                                        className={`inline-block px-4 py-1 bg-gradient-to-r ${suite.gradient} rounded-full text-white text-sm font-semibold`}
                                                    >
                                                        {tool?.name}
                                                    </div>

                                                    <span
                                                        className={`px-3 py-1 rounded-full text-xs font-medium border ${theme.textSecondary} ${theme.cardBg} ${theme.border}`}
                                                    >
                                                        {tool?.status}
                                                    </span>

                                                    <span
                                                        className={`px-3 py-1 rounded-full text-xs font-medium border ${theme.textSecondary} ${theme.cardBg} ${theme.border}`}
                                                    >
                                                        {suite.name}
                                                    </span>
                                                </div>

                                                <h3
                                                    className={`text-4xl md:text-5xl font-bold ${theme.text} leading-tight`}
                                                >
                                                    {tool?.tagline}
                                                </h3>

                                                <p
                                                    className={`text-lg ${theme.textSecondary} leading-relaxed`}
                                                >
                                                    {tool?.description}
                                                </p>
                                            </div>

                                            <div className="space-y-3">
                                                {(tool?.features ?? []).map(
                                                    (feature, i) => (
                                                        <div
                                                            key={i}
                                                            className="flex items-center gap-3 group"
                                                        >
                                                            <div
                                                                className={`w-8 h-8 rounded-full bg-gradient-to-r ${suite.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
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
                                                    ),
                                                )}
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                {(tool?.tech ?? []).map(
                                                    (tech) => (
                                                        <span
                                                            key={tech}
                                                            className={`px-3 py-1 ${theme.cardBg} rounded-lg text-sm ${theme.textSecondary} border ${theme.border}`}
                                                        >
                                                            {tech}
                                                        </span>
                                                    ),
                                                )}
                                            </div>

                                            <div className="flex flex-wrap gap-4 pt-4">
                                                {tool?.status === "Live" ? (
                                                    <>
                                                        <button
                                                            className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${suite.gradient} text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                                                        >
                                                            <Download className="w-5 h-5" />
                                                            Download
                                                        </button>
                                                        <button
                                                            className={`inline-flex items-center gap-2 px-6 py-3 ${theme.cardBg} border ${theme.border} font-semibold rounded-full hover:border-blue-500/50 transition-all duration-300`}
                                                        >
                                                            Learn More
                                                            <ArrowRight className="w-5 h-5" />
                                                        </button>
                                                        {tool?.github && (
                                                            <a
                                                                href={`https://github.com/NoamFav/${tool.name}`}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className={`inline-flex items-center gap-2 px-6 py-3 ${theme.cardBg} border ${theme.border} font-semibold rounded-full hover:border-blue-500/50 transition-all duration-300`}
                                                            >
                                                                GitHub
                                                                <ArrowRight className="w-5 h-5" />
                                                            </a>
                                                        )}
                                                    </>
                                                ) : tool?.status === "Beta" ? (
                                                    <>
                                                        <button
                                                            className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${suite.gradient} text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                                                        >
                                                            <Star className="w-5 h-5" />
                                                            Join Beta
                                                        </button>
                                                        <button
                                                            className={`inline-flex items-center gap-2 px-6 py-3 ${theme.cardBg} border ${theme.border} font-semibold rounded-full hover:border-blue-500/50 transition-all duration-300`}
                                                        >
                                                            Learn More
                                                            <ArrowRight className="w-5 h-5" />
                                                        </button>
                                                        {tool?.github && (
                                                            <a
                                                                href={`https://github.com/NoamFav/${tool.name}`}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className={`inline-flex items-center gap-2 px-6 py-3 ${theme.cardBg} border ${theme.border} font-semibold rounded-full hover:border-blue-500/50 transition-all duration-300`}
                                                            >
                                                                GitHub
                                                                <ArrowRight className="w-5 h-5" />
                                                            </a>
                                                        )}
                                                    </>
                                                ) : (
                                                    <button
                                                        className={`inline-flex items-center gap-2 px-6 py-3 ${theme.cardBg} border ${theme.border} font-semibold rounded-full cursor-default opacity-75`}
                                                    >
                                                        <Sparkles className="w-5 h-5" />
                                                        Coming Soon
                                                    </button>
                                                )}
                                            </div>
                                        </div>

                                        <div
                                            className={`hidden lg:block ${textOnLeft ? "lg:pl-16" : "lg:pr-16 lg:order-1"}`}
                                        />
                                    </div>
                                </section>
                            );
                        })}
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
                        {testimonials.slice(0, 3).map((testimonial, index) => (
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
                                        alt={`${testimonial.name} avatar`}
                                        loading="lazy"
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
                                    <SiGithub className="w-5 h-5" />
                                    Explore Projects
                                </a>
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
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-2 ${theme.textSecondary} hover:${theme.text} transition`}
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin className="w-5 h-5" />
                                    <span className="text-sm">LinkedIn</span>
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-2 ${theme.textSecondary} hover:${theme.text} transition`}
                                    aria-label="Twitter"
                                >
                                    <SiX className="w-5 h-5" />
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
        </>
    );
};

export default Hero;
