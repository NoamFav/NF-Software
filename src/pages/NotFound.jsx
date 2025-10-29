import React from "react";
import {
    Home,
    Search,
    ArrowLeft,
    AlertTriangle,
    Code,
    Compass,
} from "lucide-react";
import { Link } from "react-router-dom";
import { getTheme } from "../utils/theme";
import { useDarkMode } from "../hooks/useDarkMode";

const NotFound = () => {
    const { darkMode } = useDarkMode();
    const theme = getTheme(darkMode);
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

    React.useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const suggestions = [
        { label: "Home", href: "/", icon: Home },
        { label: "Products", href: "/products", icon: Code },
        { label: "About", href: "/about", icon: Compass },
    ];

    return (
        <div
            className={`min-h-screen ${theme.bg} ${theme.text} transition-colors duration-300 flex items-center justify-center px-6 relative overflow-hidden`}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `radial-gradient(circle at 50% 50%, ${darkMode ? "rgba(99, 102, 241, 0.15)" : "rgba(99, 102, 241, 0.08)"}, transparent 50%)`,
                    }}
                />
                <div
                    className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
                    style={{
                        left: `${mousePosition.x - 192}px`,
                        top: `${mousePosition.y - 192}px`,
                        transition: "left 0.3s ease-out, top 0.3s ease-out",
                    }}
                />
                <div
                    className={`absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse`}
                    style={{ animationDelay: "2s" }}
                />
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
                {/* 404 Animation */}
                <div className="relative">
                    <div className="inline-flex items-center justify-center gap-4">
                        <AlertTriangle
                            className={`w-16 h-16 text-yellow-500 animate-pulse`}
                        />
                    </div>
                    <h1
                        className={`text-[10rem] md:text-[12rem] font-bold tracking-tight ${theme.text} leading-none mb-0 bg-gradient-to-r ${theme.gradientPrimary} bg-clip-text text-transparent`}
                    >
                        404
                    </h1>
                </div>

                {/* Message */}
                <div className="space-y-4">
                    <h2
                        className={`text-3xl md:text-4xl font-bold ${theme.text}`}
                    >
                        Page Not Found
                    </h2>
                    <p
                        className={`text-lg md:text-xl ${theme.textSecondary} max-w-2xl mx-auto`}
                    >
                        The page you're looking for has wandered off into the
                        digital void. It might have been moved, deleted, or
                        never existed in the first place.
                    </p>
                </div>

                {/* Error Code Card */}
                <div
                    className={`${theme.cardBg} rounded-2xl p-6 border ${theme.border} max-w-md mx-auto`}
                >
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <Code className="w-5 h-5 text-blue-500" />
                        <span
                            className={`font-mono text-sm ${theme.textSecondary}`}
                        >
                            ERROR_CODE
                        </span>
                    </div>
                    <p className={`font-mono text-2xl font-bold ${theme.text}`}>
                        HTTP 404
                    </p>
                    <p className={`text-sm ${theme.textSecondary} mt-2`}>
                        Resource not found on this server
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 justify-center pt-8">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                    >
                        <Home className="w-5 h-5" />
                        Go Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className={`inline-flex items-center gap-2 px-8 py-4 ${theme.cardBg} border ${theme.border} font-semibold rounded-full hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105`}
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Go Back
                    </button>
                </div>

                {/* Suggestions */}
                <div className="pt-12">
                    <p className={`text-sm ${theme.textSecondary} mb-6`}>
                        Try one of these popular pages:
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {suggestions.map((suggestion) => (
                            <Link
                                key={suggestion.label}
                                to={suggestion.href}
                                className={`inline-flex items-center gap-2 px-6 py-3 ${theme.cardBg} border ${theme.border} rounded-full hover:border-blue-500/50 transition-all duration-300 text-sm font-medium`}
                            >
                                <suggestion.icon className="w-4 h-4" />
                                {suggestion.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Fun Message */}
                <div className="pt-8">
                    <p className={`text-xs ${theme.textSecondary} italic`}>
                        "In the vast universe of code, sometimes we get lost.
                        That's okay."
                        <span className="ml-2">✨</span>
                    </p>
                </div>
            </div>

            {/* Floating Elements */}
            <div
                className="absolute top-20 left-10 animate-bounce"
                style={{ animationDelay: "1s" }}
            >
                <div
                    className={`w-12 h-12 rounded-full ${theme.cardBg} border ${theme.border} flex items-center justify-center`}
                >
                    <Search className="w-6 h-6 text-blue-500" />
                </div>
            </div>
            <div
                className="absolute bottom-20 right-10 animate-bounce"
                style={{ animationDelay: "2s" }}
            >
                <div
                    className={`w-12 h-12 rounded-full ${theme.cardBg} border ${theme.border} flex items-center justify-center`}
                >
                    <Code className="w-6 h-6 text-purple-500" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;
