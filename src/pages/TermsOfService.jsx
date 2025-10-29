import React from "react";
import { Mail, Scale, ChevronRight } from "lucide-react";
import { getTheme } from "../utils/theme";
import { useDarkMode } from "../hooks/useDarkMode";
import { sections } from "../data/terms";

const TermsOfService = () => {
    const { darkMode } = useDarkMode();
    const theme = getTheme(darkMode);
    const [scrollY, setScrollY] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`min-h-screen ${theme.bg} ${theme.text} transition-colors duration-300`}
        >
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center px-6 pt-32 pb-20">
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-30"
                        style={{
                            backgroundImage: `radial-gradient(circle at 50% 50%, ${darkMode ? "rgba(99, 102, 241, 0.15)" : "rgba(99, 102, 241, 0.08)"}, transparent 50%)`,
                        }}
                    />
                    <div
                        className={`absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse`}
                    />
                    <div
                        className={`absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse`}
                        style={{ animationDelay: "2s" }}
                    />
                </div>

                <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-6">
                        <Scale className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-medium">
                            Legal Terms & Conditions
                        </span>
                    </div>

                    <h1
                        className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight ${theme.text}`}
                    >
                        Terms of Service
                    </h1>

                    <div className="space-y-3 pt-4">
                        <p className={`text-lg ${theme.textSecondary}`}>
                            <strong>Last Updated:</strong> October 29, 2025
                        </p>
                        <p className={`text-lg ${theme.textSecondary}`}>
                            <strong>Owner:</strong> NF Software — operated by
                            Noam Favier
                        </p>
                        <a
                            href="mailto:contact@nf-software.com"
                            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                            contact@nf-software.com
                        </a>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="relative py-20 px-6">
                <div className="max-w-4xl mx-auto space-y-16">
                    {sections.map((section) => (
                        <div
                            key={section.number}
                            className={`${theme.cardBg} rounded-2xl p-8 md:p-12 border ${section.important ? "border-red-500/50" : theme.border} hover:border-blue-500/50 transition-all duration-300 ${section.important ? "ring-2 ring-red-500/20" : ""}`}
                        >
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0">
                                    <div
                                        className={`w-12 h-12 rounded-full ${section.important ? "bg-gradient-to-r from-red-600 to-orange-600" : "bg-gradient-to-r from-blue-600 to-purple-600"} flex items-center justify-center`}
                                    >
                                        <section.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                <div className="flex-1 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <span
                                            className={`text-sm font-bold ${section.important ? "text-red-500" : "text-blue-500"}`}
                                        >
                                            {section.number}.
                                        </span>
                                        <h2
                                            className={`text-2xl md:text-3xl font-bold ${theme.text}`}
                                        >
                                            {section.title}
                                        </h2>
                                    </div>

                                    <p
                                        className={`text-base leading-relaxed ${theme.textSecondary}`}
                                    >
                                        {section.content}
                                    </p>

                                    {section.subtitle && (
                                        <p
                                            className={`font-semibold ${theme.text} mt-4`}
                                        >
                                            {section.subtitle}
                                        </p>
                                    )}

                                    {section.list && (
                                        <ul className="space-y-2 mt-4">
                                            {section.list.map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-3"
                                                >
                                                    <span className="text-blue-500 mt-1">
                                                        •
                                                    </span>
                                                    <span
                                                        className={
                                                            theme.textSecondary
                                                        }
                                                    >
                                                        {item}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {section.negativeList && (
                                        <div className="mt-6 space-y-3">
                                            <p
                                                className={`font-semibold ${theme.text}`}
                                            >
                                                {section.negativeList.title}
                                            </p>
                                            <ul className="space-y-2">
                                                {section.negativeList.items.map(
                                                    (item, i) => (
                                                        <li
                                                            key={i}
                                                            className="flex items-start gap-3"
                                                        >
                                                            <span className="text-red-500 mt-1">
                                                                ✗
                                                            </span>
                                                            <span
                                                                className={
                                                                    theme.textSecondary
                                                                }
                                                            >
                                                                {item}
                                                            </span>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>
                                    )}

                                    {section.note && (
                                        <div
                                            className={`mt-4 p-4 rounded-lg border-l-4 ${section.important ? "border-red-500 bg-red-500/10" : "border-blue-500 bg-blue-500/10"}`}
                                        >
                                            <p
                                                className={`text-sm ${theme.textSecondary}`}
                                            >
                                                {section.note}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer CTA */}
            <section className="relative py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div
                        className={`${theme.cardBg} rounded-3xl p-12 text-center space-y-6 border ${theme.border} relative overflow-hidden`}
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
                            <h3
                                className={`text-3xl font-bold ${theme.text} mb-4`}
                            >
                                Questions About These Terms?
                            </h3>
                            <p
                                className={`${theme.textSecondary} mb-8 max-w-2xl mx-auto`}
                            >
                                If you have any questions about our terms of
                                service or licensing, feel free to reach out.
                            </p>
                            <a
                                href="mailto:contact@nf-software.com"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                            >
                                <Mail className="w-5 h-5" />
                                Contact Us
                            </a>
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
                    className={`fixed bottom-8 right-8 p-4 ${theme.bgPrimary} text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50`}
                    aria-label="Scroll to top"
                >
                    <ChevronRight className="w-6 h-6 -rotate-90" />
                </button>
            )}
        </div>
    );
};

export default TermsOfService;
