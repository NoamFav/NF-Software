// ============================================================================
// FILE: src/components/Footer.jsx
// ============================================================================
import { Code, Mail } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Link } from "react-router-dom";

const Footer = ({ theme }) => {
    const footerLinks = {
        products: ["Iris", "Sysmon-CLI", "Zvezda", "CodeGrep"],
        company: [
            { label: "About", href: "/about" },
            { label: "Products", href: "/products" },
            { label: "Pricing", href: "/pricings" },
            { label: "Contact Me", href: "/contact" },
        ],
    };

    return (
        <footer className={`border-t ${theme.border} py-12 px-6`}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="md:col-span-2 space-y-4">
                        <div className="flex items-center gap-2">
                            <Code className="w-6 h-6" />
                            <span className="font-semibold text-lg">
                                NF Software
                            </span>
                        </div>
                        <p
                            className={`${theme.textSecondary} text-sm max-w-md`}
                        >
                            Building the future of software, one line of code at
                            a time. Trusted by developers and enterprises
                            worldwide.
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href="https://github.com/NoamFav"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${theme.textSecondary} hover:${theme.text} transition`}
                                aria-label="GitHub"
                            >
                                <SiGithub className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:contact@nf-software.com"
                                className={`${theme.textSecondary} hover:${theme.text} transition`}
                                aria-label="Email"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Products Column */}
                    <div>
                        <h3 className={`font-semibold ${theme.text} mb-4`}>
                            Products
                        </h3>
                        <ul className="space-y-2">
                            {footerLinks.products.map((product) => (
                                <li key={product}>
                                    <Link
                                        to={`/products#${product.toLowerCase()}`}
                                        className={`text-sm ${theme.textSecondary} hover:${theme.text} transition`}
                                    >
                                        {product}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className={`font-semibold ${theme.text} mb-4`}>
                            Company
                        </h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.href}
                                        className={`text-sm ${theme.textSecondary} hover:${theme.text} transition`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div
                    className={`border-t ${theme.border} pt-8 flex flex-col md:flex-row justify-between items-center gap-4`}
                >
                    <div className={`text-sm ${theme.textTertiary}`}>
                        © 2025 NF Software. All rights reserved.
                    </div>
                    <div className="flex items-center gap-6">
                        <Link
                            to="/privacy"
                            className={`text-sm ${theme.textSecondary} hover:${theme.text} transition`}
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            to="/terms"
                            className={`text-sm ${theme.textSecondary} hover:${theme.text} transition`}
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
