// ============================================================================
// FILE: src/pages/Products.jsx - COMPLETE VERSION
// ============================================================================
import React, { useState } from "react";
import {
    ArrowRight,
    Github,
    Mail,
    Sparkles,
    CheckCircle,
    Shield,
    Star,
    Rocket,
    Download,
    Filter,
    Bell,
    Book,
    ChevronRight,
    Users,
} from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";
import { getTheme } from "../utils/theme";
import { products } from "../data/products";
import {
    Sparkles as SparklesIcon,
    Cpu,
    GitBranch,
    Search,
    Gamepad2,
    GraduationCap,
    BarChart3,
} from "lucide-react";

const Products = () => {
    const { darkMode } = useDarkMode();
    const theme = getTheme(darkMode);
    const [activeFilter, setActiveFilter] = useState("All");
    const [scrollY, setScrollY] = useState(0);

    const RIGHT_SLASH = "polygon(60% 0, 100% 0, 100% 100%, 50% 100%)";
    const LEFT_BACKSL = "polygon(0 0, 40% 0, 50% 100%, 0 100%)";

    React.useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const iconMap = {
        Iris: SparklesIcon,
        "Sysmon-CLI": Cpu,
        Zvezda: GitBranch,
        CodeGrep: Search,
        ShadowedHunter: Gamepad2,
        BitVoyager: GraduationCap,
        "SysDash Ultra": BarChart3,
    };

    const productsWithIcons = products.map((product) => ({
        ...product,
        icon: iconMap[product.title] || SparklesIcon,
    }));

    const filters = ["All", "Live", "Beta", "In Development"];

    const filteredProducts =
        activeFilter === "All"
            ? productsWithIcons
            : productsWithIcons.filter((p) => p.status === activeFilter);

    const slugify = (str) =>
        str
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, "");

    const getStatusColor = (status) => {
        switch (status) {
            case "Live":
                return "border-green-500/50 text-green-500";
            case "Beta":
                return "border-yellow-500/50 text-yellow-500";
            case "In Development":
                return "border-blue-500/50 text-blue-500";
            default:
                return "border-gray-500/50 text-gray-500";
        }
    };

    const getCTAButtons = (product) => {
        const buttons = [];

        if (product.status === "Live") {
            buttons.push(
                <button
                    key="download"
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${product.gradient} text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                >
                    <Download className="w-5 h-5" />
                    Download
                </button>,
            );
            buttons.push(
                <a
                    key="docs"
                    href="#"
                    className={`inline-flex items-center gap-2 px-6 py-3 ${theme.cardBg} border ${theme.border} font-semibold rounded-full hover:border-blue-500/50 transition-all duration-300`}
                >
                    <Book className="w-5 h-5" />
                    Documentation
                </a>,
            );
        } else if (product.status === "Beta") {
            buttons.push(
                <button
                    key="waitlist"
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${product.gradient} text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                >
                    <Bell className="w-5 h-5" />
                    Join Waitlist
                </button>,
            );
            buttons.push(
                <a
                    key="learn"
                    href="#"
                    className={`inline-flex items-center gap-2 px-6 py-3 ${theme.cardBg} border ${theme.border} font-semibold rounded-full hover:border-blue-500/50 transition-all duration-300`}
                >
                    <ArrowRight className="w-5 h-5" />
                    Learn More
                </a>,
            );
        } else {
            buttons.push(
                <button
                    key="notify"
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${product.gradient} text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                >
                    <Bell className="w-5 h-5" />
                    Notify Me
                </button>,
            );
            buttons.push(
                <a
                    key="learn"
                    href="#"
                    className={`inline-flex items-center gap-2 px-6 py-3 ${theme.cardBg} border ${theme.border} font-semibold rounded-full hover:border-blue-500/50 transition-all duration-300`}
                >
                    <ArrowRight className="w-5 h-5" />
                    Learn More
                </a>,
            );
        }

        if (product.github) {
            buttons.push(
                <a
                    key="github"
                    href="https://github.com/NoamFav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 ${theme.cardBg} border ${theme.border} font-semibold rounded-full hover:border-blue-500/50 transition-all duration-300`}
                >
                    <Github className="w-5 h-5" />
                    GitHub
                </a>,
            );
        }

        return buttons;
    };

    return (
        <>
            {/* Header Section */}
            <section
                id="products"
                className="relative pt-32 pb-20 px-6 overflow-hidden"
            >
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
                    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center space-y-6 mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-6">
                            <Rocket className="w-4 h-4 text-blue-500" />
                            <span className="text-sm font-medium">
                                7 Products, Built for Professionals
                            </span>
                        </div>

                        <h1
                            className={`text-5xl md:text-6xl lg:text-7xl font-bold ${theme.text}`}
                        >
                            Professional Software
                            <br />
                            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                Built to Excel
                            </span>
                        </h1>

                        <p
                            className={`text-xl ${theme.textSecondary} max-w-3xl mx-auto`}
                        >
                            Each product is crafted with precision, designed for
                            performance, and built to last. No compromises on
                            quality, speed, or user experience.
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
                        <Filter className="w-5 h-5 text-gray-500" />
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                    activeFilter === filter
                                        ? `bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg`
                                        : `${theme.cardBg} ${theme.textSecondary} border ${theme.border} ${theme.hoverBg}`
                                }`}
                            >
                                {filter}
                                {filter !== "All" && (
                                    <span className="ml-2 opacity-60">
                                        (
                                        {
                                            productsWithIcons.filter(
                                                (p) => p.status === filter,
                                            ).length
                                        }
                                        )
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Sections */}
            <section className="relative">
                {filteredProducts.map((product, index) => {
                    const textOnLeft = index % 2 === 0;
                    const clip = textOnLeft ? RIGHT_SLASH : LEFT_BACKSL;

                    return (
                        <section
                            key={product.title}
                            id={slugify(product.title)}
                            data-animate
                            className="relative min-h-screen flex items-center overflow-hidden"
                        >
                            {/* Angled Image Background */}
                            <div className="absolute inset-0 pointer-events-none">
                                <div
                                    className="absolute inset-0 will-change-[clip-path]"
                                    style={{ clipPath: clip }}
                                >
                                    <img
                                        src={product.image}
                                        alt={`${product.title} - ${product.tagline}`}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                </div>
                            </div>

                            {/* Content */}
                            <div
                                className={`relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full ${
                                    textOnLeft ? "" : "lg:flex-row-reverse"
                                }`}
                            >
                                {/* Text Side */}
                                <div
                                    className={`space-y-8 ${
                                        textOnLeft
                                            ? "lg:pr-16"
                                            : "lg:pl-16 lg:order-2"
                                    }`}
                                >
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 flex-wrap">
                                            <div
                                                className={`inline-flex items-center gap-2 px-4 py-1 bg-gradient-to-r ${product.gradient} rounded-full text-white text-sm font-semibold`}
                                            >
                                                <product.icon className="w-4 h-4" />
                                                {product.title}
                                            </div>
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(product.status)}`}
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
                                    <div className="space-y-4">
                                        {product.features.map((feature, i) => (
                                            <div
                                                key={i}
                                                className="flex items-start gap-3 group"
                                            >
                                                <div
                                                    className={`w-6 h-6 rounded-full bg-gradient-to-r ${product.gradient} flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}
                                                >
                                                    <CheckCircle className="w-4 h-4 text-white" />
                                                </div>
                                                <div>
                                                    <span
                                                        className={`text-base font-medium ${theme.text}`}
                                                    >
                                                        {
                                                            feature.split(
                                                                " - ",
                                                            )[0]
                                                        }
                                                    </span>
                                                    {feature.includes(
                                                        " - ",
                                                    ) && (
                                                        <span
                                                            className={`text-sm ${theme.textSecondary} ml-2`}
                                                        >
                                                            {
                                                                feature.split(
                                                                    " - ",
                                                                )[1]
                                                            }
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Audience */}
                                    <div
                                        className={`flex items-center gap-3 px-4 py-3 ${theme.cardBg} rounded-lg border ${theme.border}`}
                                    >
                                        <Users className="w-5 h-5 text-blue-500" />
                                        <div>
                                            <div
                                                className={`text-xs ${theme.textTertiary} uppercase tracking-wider`}
                                            >
                                                Built For
                                            </div>
                                            <div
                                                className={`text-sm font-medium ${theme.text}`}
                                            >
                                                {product.audience}
                                            </div>
                                        </div>
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

                                    {/* CTA Buttons */}
                                    <div className="flex flex-wrap gap-4 pt-4">
                                        {getCTAButtons(product)}
                                    </div>
                                </div>

                                {/* Spacer */}
                                <div
                                    className={`hidden lg:block ${
                                        textOnLeft
                                            ? "lg:pl-16"
                                            : "lg:pr-16 lg:order-1"
                                    }`}
                                />
                            </div>
                        </section>
                    );
                })}
            </section>

            {/* Comparison Grid */}
            <section
                data-animate
                className="relative py-32 px-6 overflow-hidden"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center space-y-6 mb-16">
                        <h2
                            className={`text-4xl md:text-5xl font-bold ${theme.text}`}
                        >
                            Compare Products
                        </h2>
                        <p
                            className={`text-lg ${theme.textSecondary} max-w-2xl mx-auto`}
                        >
                            Find the right tool for your needs. Each product
                            excels in its domain.
                        </p>
                    </div>

                    <div
                        className={`${theme.cardBg} rounded-2xl border ${theme.border} overflow-x-auto`}
                    >
                        <table className="w-full">
                            <thead>
                                <tr
                                    className={`border-b ${theme.border} ${theme.text}`}
                                >
                                    <th className="text-left p-6 font-semibold">
                                        Product
                                    </th>
                                    <th className="text-left p-6 font-semibold">
                                        Status
                                    </th>
                                    <th className="text-left p-6 font-semibold">
                                        Best For
                                    </th>
                                    <th className="text-left p-6 font-semibold">
                                        Key Strength
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {productsWithIcons.map((product) => (
                                    <tr
                                        key={product.title}
                                        className={`border-b ${theme.border} last:border-0 ${theme.hoverBg} transition`}
                                    >
                                        <td className="p-6">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`w-10 h-10 rounded-lg bg-gradient-to-r ${product.gradient} flex items-center justify-center`}
                                                >
                                                    <product.icon className="w-5 h-5 text-white" />
                                                </div>
                                                <div>
                                                    <div
                                                        className={`font-semibold ${theme.text}`}
                                                    >
                                                        {product.title}
                                                    </div>
                                                    <div
                                                        className={`text-sm ${theme.textSecondary}`}
                                                    >
                                                        {product.tagline}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-6">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(product.status)}`}
                                            >
                                                {product.status}
                                            </span>
                                        </td>
                                        <td className="p-6">
                                            <span
                                                className={`text-sm ${theme.textSecondary}`}
                                            >
                                                {product.audience}
                                            </span>
                                        </td>
                                        <td className="p-6">
                                            <span
                                                className={`text-sm ${theme.text}`}
                                            >
                                                {
                                                    product.features[0].split(
                                                        " - ",
                                                    )[0]
                                                }
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-32 px-6">
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
                                    Start Building Today
                                </span>
                            </div>

                            <h2
                                className={`text-4xl md:text-6xl font-bold ${theme.text} mb-6`}
                            >
                                Ready to elevate your workflow?
                            </h2>

                            <p
                                className={`text-lg md:text-xl ${theme.textSecondary} max-w-2xl mx-auto mb-8`}
                            >
                                Join thousands of developers and teams who trust
                                NF Software for their mission-critical tools.
                                Download now or get in touch.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center">
                                <a
                                    href="https://github.com/NoamFav"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                                >
                                    <Github className="w-5 h-5" />
                                    Explore on GitHub
                                </a>
                                <a
                                    href="mailto:contact@nf-software.com"
                                    className={`inline-flex items-center gap-2 px-8 py-4 ${theme.cardBg} border ${theme.border} font-semibold rounded-full hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105`}
                                >
                                    <Mail className="w-5 h-5" />
                                    Contact Sales
                                </a>
                            </div>

                            <div className="flex flex-wrap items-center justify-center gap-8 pt-12">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span
                                        className={`text-sm ${theme.textSecondary}`}
                                    >
                                        Open Source
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-500" />
                                    <span
                                        className={`text-sm ${theme.textSecondary}`}
                                    >
                                        Community Driven
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-blue-500" />
                                    <span
                                        className={`text-sm ${theme.textSecondary}`}
                                    >
                                        Enterprise Ready
                                    </span>
                                </div>
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

export default Products;
