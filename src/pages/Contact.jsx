// ============================================================================
// FILE: src/pages/Contact.jsx
// ============================================================================
import { useState } from "react";
import {
    Mail,
    Sparkles,
    Send,
    Building,
    User,
    DollarSign,
    Calendar,
    FileText,
    Upload,
    CheckCircle,
    AlertCircle,
    Loader,
    Clock,
} from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { useDarkMode } from "../hooks/useDarkMode";
import { getTheme } from "../utils/theme";

const Contact = () => {
    const { darkMode } = useDarkMode();
    const theme = getTheme(darkMode);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        projectType: "personal",
        timeframe: "",
        budget: "",
        description: "",
        attachments: [],
    });
    const [status, setStatus] = useState({ type: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setFormData((prev) => ({ ...prev, attachments: files }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check honeypot
        if (e.target.company_website.value) {
            return; // Likely spam
        }

        setIsSubmitting(true);
        setStatus({ type: "", message: "" });

        setTimeout(() => {
            setStatus({
                type: "success",
                message:
                    "Thank you! Your project inquiry has been received. I'll get back to you within 24-48 hours with a detailed estimate.",
            });
            setIsSubmitting(false);

            setFormData({
                name: "",
                email: "",
                company: "",
                projectType: "personal",
                timeframe: "",
                budget: "",
                description: "",
                attachments: [],
            });

            const fileInput = document.getElementById("file-upload");
            if (fileInput) fileInput.value = "";
        }, 2000);
    };

    return (
        <>
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
                    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-6 animate-fade-in">
                        <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
                        <span className="text-sm font-medium">
                            Let's Build Together
                        </span>
                    </div>

                    <h1
                        className={`text-5xl md:text-6xl font-bold ${theme.text} mb-6 animate-fade-in-up`}
                    >
                        Start Your Project
                    </h1>

                    <p
                        className={`text-xl ${theme.textSecondary} max-w-2xl mx-auto animate-fade-in-up animation-delay-200`}
                    >
                        Tell me about your project and I'll provide a detailed
                        estimate with timeline, deliverables, and pricing
                        tailored to your needs.
                    </p>
                </div>
            </section>

            <section className="relative px-6 pb-20" data-animate>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div
                            className={`${theme.cardBg} rounded-2xl p-6 border ${theme.border} hover:border-blue-500/50 transition-all duration-300`}
                        >
                            <Mail className="w-10 h-10 text-blue-500 mb-4" />
                            <h3
                                className={`text-lg font-semibold ${theme.text} mb-2`}
                            >
                                Email
                            </h3>
                            <a
                                href="mailto:contact@nf-software.com"
                                className={`text-sm ${theme.textSecondary} hover:${theme.text} transition`}
                            >
                                contact@nf-software.com
                            </a>
                        </div>
                        <div
                            className={`${theme.cardBg} rounded-2xl p-6 border ${theme.border} hover:border-purple-500/50 transition-all duration-300`}
                        >
                            <SiGithub className="w-10 h-10 text-purple-500 mb-4" />
                            <h3
                                className={`text-lg font-semibold ${theme.text} mb-2`}
                            >
                                GitHub
                            </h3>
                            <a
                                href="https://github.com/NoamFav"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-sm ${theme.textSecondary} hover:${theme.text} transition`}
                            >
                                github.com/NoamFav
                            </a>
                        </div>
                        <div
                            className={`${theme.cardBg} rounded-2xl p-6 border ${theme.border} hover:border-pink-500/50 transition-all duration-300`}
                        >
                            <Clock className="w-10 h-10 text-pink-500 mb-4" />
                            <h3
                                className={`text-lg font-semibold ${theme.text} mb-2`}
                            >
                                Response Time
                            </h3>
                            <p className={`text-sm ${theme.textSecondary}`}>
                                24-48 hours
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative px-6 pb-32" data-animate>
                <div className="max-w-4xl mx-auto">
                    <form
                        onSubmit={handleSubmit}
                        className={`${theme.cardBg} rounded-3xl p-8 md:p-12 border ${theme.border}`}
                        aria-busy={isSubmitting}
                    >
                        {/* Honeypot field */}
                        <input
                            type="text"
                            name="company_website"
                            className="hidden"
                            tabIndex={-1}
                            autoComplete="off"
                        />

                        {status.message && (
                            <div
                                className={`mb-8 p-4 rounded-lg flex items-start gap-3 ${
                                    status.type === "success"
                                        ? "bg-green-500/10 border border-green-500/20"
                                        : "bg-red-500/10 border border-red-500/20"
                                }`}
                            >
                                {status.type === "success" ? (
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                ) : (
                                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                )}
                                <p
                                    className={`text-sm ${status.type === "success" ? "text-green-500" : "text-red-500"}`}
                                >
                                    {status.message}
                                </p>
                            </div>
                        )}

                        <div className="mb-8">
                            <h3
                                className={`text-2xl font-bold ${theme.text} mb-6`}
                            >
                                Personal Information
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="full-name"
                                        className={`block text-sm font-medium ${theme.text} mb-2`}
                                    >
                                        Full Name{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <User
                                            className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.textSecondary}`}
                                        />
                                        <input
                                            type="text"
                                            id="full-name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            aria-required="true"
                                            aria-invalid={
                                                !formData.name
                                                    ? "true"
                                                    : "false"
                                            }
                                            className={`w-full pl-11 pr-4 py-3 ${darkMode ? "bg-black" : "bg-white"} border ${theme.border} rounded-lg ${theme.text} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="email-address"
                                        className={`block text-sm font-medium ${theme.text} mb-2`}
                                    >
                                        Email Address{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Mail
                                            className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.textSecondary}`}
                                        />
                                        <input
                                            type="email"
                                            id="email-address"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            aria-required="true"
                                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                            aria-invalid={
                                                !formData.email
                                                    ? "true"
                                                    : "false"
                                            }
                                            className={`w-full pl-11 pr-4 py-3 ${darkMode ? "bg-black" : "bg-white"} border ${theme.border} rounded-lg ${theme.text} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="project-type"
                                        className={`block text-sm font-medium ${theme.text} mb-2`}
                                    >
                                        Project Type{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="project-type"
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleChange}
                                        required
                                        aria-required="true"
                                        className={`w-full px-4 py-3 ${theme.bgInput} border ${theme.border} rounded-lg ${theme.text} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                                    >
                                        <option value="personal">
                                            Personal Project
                                        </option>
                                        <option value="business">
                                            Business/Company
                                        </option>
                                        <option value="startup">Startup</option>
                                        <option value="enterprise">
                                            Enterprise
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        htmlFor="company-name"
                                        className={`block text-sm font-medium ${theme.text} mb-2`}
                                    >
                                        Company Name (Optional)
                                    </label>
                                    <div className="relative">
                                        <Building
                                            className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.textSecondary}`}
                                        />
                                        <input
                                            type="text"
                                            id="company-name"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className={`w-full pl-11 pr-4 py-3 ${darkMode ? "bg-black" : "bg-white"} border ${theme.border} rounded-lg ${theme.text} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                                            placeholder="Your Company"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3
                                className={`text-2xl font-bold ${theme.text} mb-6`}
                            >
                                Project Details
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="timeframe"
                                        className={`block text-sm font-medium ${theme.text} mb-2`}
                                    >
                                        Expected Timeframe{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Calendar
                                            className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.textSecondary}`}
                                        />
                                        <select
                                            id="timeframe"
                                            name="timeframe"
                                            value={formData.timeframe}
                                            onChange={handleChange}
                                            required
                                            aria-required="true"
                                            className={`w-full pl-11 pr-4 py-3 ${darkMode ? "bg-black" : "bg-white"} border ${theme.border} rounded-lg ${theme.text} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                                        >
                                            <option value="">
                                                Select timeframe
                                            </option>
                                            <option value="urgent">
                                                ASAP (1-2 weeks)
                                            </option>
                                            <option value="short">
                                                Short-term (1-2 months)
                                            </option>
                                            <option value="medium">
                                                Medium-term (3-6 months)
                                            </option>
                                            <option value="long">
                                                Long-term (6+ months)
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="budget"
                                        className={`block text-sm font-medium ${theme.text} mb-2`}
                                    >
                                        Budget Range{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <DollarSign
                                            className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.textSecondary}`}
                                        />
                                        <select
                                            id="budget"
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            required
                                            aria-required="true"
                                            className={`w-full pl-11 pr-4 py-3 ${darkMode ? "bg-black" : "bg-white"} border ${theme.border} rounded-lg ${theme.text} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                                        >
                                            <option value="">
                                                Select budget range
                                            </option>
                                            <option value="small">
                                                $1,000 - $5,000
                                            </option>
                                            <option value="medium">
                                                $5,000 - $15,000
                                            </option>
                                            <option value="large">
                                                $15,000 - $50,000
                                            </option>
                                            <option value="enterprise">
                                                $50,000+
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-8">
                            <label
                                htmlFor="description"
                                className={`block text-sm font-medium ${theme.text} mb-2`}
                            >
                                Project Description{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <FileText
                                    className={`absolute left-3 top-3 w-5 h-5 ${theme.textSecondary}`}
                                />
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                    aria-required="true"
                                    rows={8}
                                    className={`w-full pl-11 pr-4 py-3 ${darkMode ? "bg-black" : "bg-white"} border ${theme.border} rounded-lg ${theme.text} focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition`}
                                    placeholder="Tell me about your project, goals, key features, technical requirements, and any specific challenges you're facing..."
                                />
                            </div>
                            <p
                                className={`mt-2 text-xs ${theme.textSecondary}`}
                            >
                                Be as detailed as possible to help me provide an
                                accurate estimate
                            </p>
                        </div>

                        <div className="mb-8">
                            <label
                                className={`block text-sm font-medium ${theme.text} mb-2`}
                            >
                                Attachments (Optional)
                            </label>
                            <div
                                className={`border-2 border-dashed ${theme.border} rounded-lg p-8 text-center ${theme.hoverBg} transition cursor-pointer`}
                            >
                                <input
                                    type="file"
                                    multiple
                                    onChange={handleFileChange}
                                    className="hidden"
                                    id="file-upload"
                                    accept="image/*,.pdf,.doc,.docx"
                                    aria-label="Upload files"
                                />
                                <label
                                    htmlFor="file-upload"
                                    className="cursor-pointer block"
                                >
                                    <Upload
                                        className={`w-12 h-12 ${theme.textSecondary} mx-auto mb-4`}
                                    />
                                    <p
                                        className={`text-sm ${theme.text} mb-2 font-medium`}
                                    >
                                        Click to upload or drag and drop
                                    </p>
                                    <p
                                        className={`text-xs ${theme.textSecondary} mb-4`}
                                    >
                                        Images, PDFs, or documents (max 10MB
                                        each)
                                    </p>
                                    {formData.attachments.length > 0 && (
                                        <div
                                            className={`mt-4 p-3 ${theme.cardBg} rounded-lg border ${theme.border}`}
                                        >
                                            <p
                                                className={`text-sm ${theme.text} font-medium`}
                                            >
                                                {formData.attachments.length}{" "}
                                                file(s) selected:
                                            </p>
                                            <div className="mt-2 space-y-1">
                                                {formData.attachments.map(
                                                    (file, index) => (
                                                        <p
                                                            key={index}
                                                            className={`text-xs ${theme.textSecondary}`}
                                                        >
                                                            {file.name}
                                                        </p>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2`}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader className="w-5 h-5 animate-spin" />
                                    Submitting...
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    Submit Project Inquiry
                                </>
                            )}
                        </button>

                        <p
                            className={`text-xs ${theme.textSecondary} text-center mt-4`}
                        >
                            I typically respond within 24-48 hours with a
                            detailed estimate including timeline, milestones,
                            and pricing
                        </p>
                    </form>
                </div>
            </section>

            <section className="relative px-6 pb-32" data-animate>
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2
                            className={`text-3xl md:text-4xl font-bold ${theme.text} mb-4`}
                        >
                            Frequently Asked Questions
                        </h2>
                        <p className={`text-lg ${theme.textSecondary}`}>
                            Everything you need to know about the project
                            process
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                question:
                                    "What happens after I submit this form?",
                                answer: "I'll review your project details and respond within 24-48 hours with a comprehensive proposal including timeline, milestones, deliverables, and pricing. We can then schedule a call to discuss any questions.",
                            },
                            {
                                question:
                                    "What information do you need for an accurate estimate?",
                                answer: "The more details you provide about your project goals, technical requirements, desired features, and constraints, the more accurate my estimate will be. Wireframes, design mockups, or reference examples are also very helpful.",
                            },
                            {
                                question:
                                    "Do you work on fixed-price or hourly projects?",
                                answer: "I offer both options depending on the project scope. Fixed-price works well for clearly defined projects, while hourly is better for ongoing work or projects with evolving requirements.",
                            },
                            {
                                question:
                                    "What's your typical project timeline?",
                                answer: "It varies based on complexity, but most projects range from 1-6 months. Rush projects (1-2 weeks) are possible for smaller scopes. I'll provide a detailed timeline in my proposal.",
                            },
                            {
                                question:
                                    "Do you provide ongoing maintenance and support?",
                                answer: "Yes! I offer maintenance packages for bug fixes, updates, and feature additions. This can be discussed during our initial consultation.",
                            },
                        ].map((faq, index) => (
                            <div
                                key={index}
                                className={`${theme.cardBg} rounded-xl p-6 border ${theme.border}`}
                            >
                                <h3
                                    className={`text-lg font-semibold ${theme.text} mb-3`}
                                >
                                    {faq.question}
                                </h3>
                                <p
                                    className={`text-sm ${theme.textSecondary} leading-relaxed`}
                                >
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
