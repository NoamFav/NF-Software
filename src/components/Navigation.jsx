// ============================================================================
// FILE: src/components/Navigation.jsx
// ============================================================================
import { useState } from "react";
import { Code, Sun, Moon, Menu, X } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const Navigation = ({ darkMode, toggleDarkMode, theme }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 ${theme.navBg} backdrop-blur-2xl border-b ${theme.border} transition-all duration-300`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <div className="relative">
                        <Code className="w-6 h-6" />
                        <div
                            className={`absolute -inset-1 bg-gradient-to-r ${theme.gradientPrimary} rounded-lg blur opacity-20 group-hover:opacity-40 transition`}
                        />
                    </div>
                    <span className="font-semibold text-lg">NF Software</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        to="/about"
                        className={`text-sm ${
                            isActive("/about")
                                ? theme.text + " font-medium"
                                : theme.textSecondary + " hover:" + theme.text
                        } transition`}
                    >
                        About
                    </Link>
                    <Link
                        to="/products"
                        className={`text-sm ${
                            isActive("/products")
                                ? theme.text + " font-medium"
                                : theme.textSecondary + " hover:" + theme.text
                        } transition`}
                    >
                        Products
                    </Link>
                    <Link
                        to="/pricing"
                        className={`text-sm ${
                            isActive("/pricing")
                                ? theme.text + " font-medium"
                                : theme.textSecondary + " hover:" + theme.text
                        } transition`}
                    >
                        Pricing
                    </Link>
                    <Link
                        to="/blog"
                        className={`text-sm ${
                            isActive("/blog")
                                ? theme.text + " font-medium"
                                : theme.textSecondary + " hover:" + theme.text
                        } transition`}
                    >
                        Blog
                    </Link>
                    <Link
                        to="/contact"
                        className={`text-sm ${
                            isActive("/contact")
                                ? theme.text + " font-medium"
                                : theme.textSecondary + " hover:" + theme.text
                        } transition`}
                    >
                        Start
                    </Link>
                    <button
                        onClick={toggleDarkMode}
                        className={`p-2 rounded-full ${theme.bgButton} transition ${theme.hoverBg}`}
                        aria-label="Toggle theme"
                    >
                        {darkMode ? (
                            <Sun className="w-4 h-4" />
                        ) : (
                            <Moon className="w-4 h-4" />
                        )}
                    </button>
                    <a
                        href="mailto:contact@nf-software.com"
                        className={`px-6 py-2.5 ${theme.bgPrimary} ${theme.textPrimary} rounded-full text-sm font-medium hover:opacity-90 transition transform hover:scale-105`}
                    >
                        Contact
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2"
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div
                    className={`md:hidden ${theme.cardBg} border-t ${theme.border}`}
                >
                    <div className="px-6 py-4 space-y-4">
                        <Link
                            to="/about"
                            className={`block text-sm ${theme.textSecondary}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            to="/products"
                            className={`block text-sm ${theme.textSecondary}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Products
                        </Link>
                        <Link
                            to="/pricing"
                            className={`block text-sm ${theme.textSecondary}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Pricing
                        </Link>
                        <Link
                            to="/blog"
                            className={`block text-sm ${theme.textSecondary}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Blog
                        </Link>
                        <Link
                            to="/contact"
                            className={`block text-sm ${theme.textSecondary}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Start
                        </Link>
                        <button
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-full ${theme.bgButton} transition ${theme.hoverBg}`}
                            aria-label="Toggle theme"
                        >
                            {darkMode ? (
                                <Sun className="w-4 h-4" />
                            ) : (
                                <Moon className="w-4 h-4" />
                            )}
                        </button>
                        <a
                            href="mailto:contact@nf-software.com"
                            className={`block w-full text-center px-6 py-2.5 ${theme.bgPrimary} ${theme.textPrimary} rounded-full text-sm font-medium`}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
