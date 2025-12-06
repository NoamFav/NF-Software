// ============================================================================
// FILE: src/components/Layout.jsx
// ============================================================================
import Navigation from "./Navigation";
import Footer from "./Footer";
import { useDarkMode } from "../hooks/useDarkMode";
import { useMouseTracking } from "../hooks/useMouseTracking";
import { useScrollAnimations } from "../hooks/useScrollAnimations";
import { getTheme } from "../utils/theme";
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children }) => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const theme = getTheme(darkMode);

    useMouseTracking();
    useScrollAnimations();

    return (
        <div
            className={`${theme.bg} ${theme.text} transition-colors duration-500 overflow-hidden`}
        >
            {/* Cursor Glow Effect */}
            <div
                className="fixed w-96 h-96 rounded-full pointer-events-none z-50 transition-opacity duration-300"
                style={{
                    left: "calc(var(--mx) - 192px)",
                    top: "calc(var(--my) - 192px)",
                    background: `radial-gradient(circle, ${darkMode ? "rgba(99,102,241,.15)" : "rgba(99,102,241,.08)"} 0%, transparent 70%)`,
                }}
            />
            <ScrollToTop />
            <Navigation
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
                theme={theme}
            />

            <main>{children}</main>

            <Footer theme={theme} />

            {/* Global Styles */}
            <style>{`
                @keyframes gradient {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }

                @keyframes blob {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    25% {
                        transform: translate(20px, -50px) scale(1.1);
                    }
                    50% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                    75% {
                        transform: translate(50px, 50px) scale(1.05);
                    }
                }

                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

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

                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }

                .animate-blob {
                    animation: blob 7s infinite;
                }

                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }

                .animate-fade-in {
                    animation: fade-in 1s ease-out;
                }

                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-out;
                }

                .animation-delay-200 {
                    animation-delay: 0.2s;
                    animation-fill-mode: backwards;
                }

                .animation-delay-400 {
                    animation-delay: 0.4s;
                    animation-fill-mode: backwards;
                }

                .animation-delay-600 {
                    animation-delay: 0.6s;
                    animation-fill-mode: backwards;
                }

                /* FIXED: Don't hide elements initially */
                [data-animate] {
                    opacity: 1;
                    transform: translateY(0);
                    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
                }

                /* Only apply hiding when not visible yet */
                [data-animate]:not(.is-visible) {
                    opacity: 0;
                    transform: translateY(30px);
                }

                [data-animate].is-visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                @media (prefers-reduced-motion: reduce) {
                    *, *::before, *::after {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                    }

                    [data-animate] {
                        opacity: 1 !important;
                        transform: none !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default Layout;
