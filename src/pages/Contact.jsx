import { useState } from "react";
import {
    Mail,
    Sparkles,
    Send,
    Building,
    User,
    Euro,
    Calendar,
    FileText,
    Upload,
    CheckCircle,
    AlertCircle,
    Loader,
    Clock,
    Phone,
    Globe,
    Target,
    Users,
    Zap,
    Code,
    Smartphone,
    Database,
    X,
} from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";
import { getTheme } from "../utils/theme";
const Contact = () => {
    const { darkMode } = useDarkMode();
    const theme = getTheme(darkMode);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        website: "",
        projectType: "web-app",
        industry: "",
        teamSize: "",
        timeframe: "",
        budget: "",
        description: "",
        goals: "",
        technicalRequirements: "",
        designPreferences: "",
        targetAudience: "",
        features: [],
        hasDesign: "no",
        needsHosting: "unsure",
        attachments: [],
    });
    const [status, setStatus] = useState({ type: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);

    const projectTypes = [
        { value: "web-app", label: "Web Application", icon: Globe },
        { value: "mobile-app", label: "Mobile App", icon: Smartphone },
        { value: "api", label: "API/Backend", icon: Database },
        { value: "fullstack", label: "Full-Stack Solution", icon: Code },
        { value: "other", label: "Other", icon: Zap },
    ];

    const commonFeatures = [
        "User Authentication",
        "Payment Integration",
        "Admin Dashboard",
        "Real-time Updates",
        "API Integration",
        "Database Design",
        "Cloud Deployment",
        "Mobile Responsive",
        "Analytics",
        "Email Notifications",
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFeatureToggle = (feature) => {
        setFormData((prev) => ({
            ...prev,
            features: prev.features.includes(feature)
                ? prev.features.filter((f) => f !== feature)
                : [...prev.features, feature],
        }));
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setFormData((prev) => ({
            ...prev,
            attachments: [...prev.attachments, ...files],
        }));
    };

    const removeFile = (index) => {
        setFormData((prev) => ({
            ...prev,
            attachments: prev.attachments.filter((_, i) => i !== index),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (e.target.company_website.value) return;

        setIsSubmitting(true);
        setStatus({ type: "", message: "" });

        setTimeout(() => {
            setStatus({
                type: "success",
                message:
                    "Thank you! Your detailed project inquiry has been received. I'll review everything and get back to you within 24-48 hours with a comprehensive proposal.",
            });
            setIsSubmitting(false);
            setCurrentStep(1);
            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                website: "",
                projectType: "web-app",
                industry: "",
                teamSize: "",
                timeframe: "",
                budget: "",
                description: "",
                goals: "",
                technicalRequirements: "",
                designPreferences: "",
                targetAudience: "",
                features: [],
                hasDesign: "no",
                needsHosting: "unsure",
                attachments: [],
            });
        }, 2000);
    };

    const steps = [
        { number: 1, title: "Contact Info" },
        { number: 2, title: "Project Details" },
        { number: 3, title: "Requirements" },
        { number: 4, title: "Additional Info" },
    ];

    return (
        <div className={`min-h-screen ${theme.bg} ${theme.text}`}>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-30"
                        style={{
                            backgroundImage: `radial-gradient(circle at 50% 50%, ${darkMode ? "rgba(99, 102, 241, 0.15)" : "rgba(99, 102, 241, 0.08)"}, transparent 50%)`,
                        }}
                    />
                    <div
                        className={`absolute top-1/4 left-1/4 w-96 h-96 ${theme.blobBlue} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob`}
                    />
                    <div
                        className={`absolute top-1/3 right-1/4 w-96 h-96 ${theme.blobPurple} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000`}
                    />
                    <div
                        className={`absolute bottom-1/4 left-1/2 w-96 h-96 ${theme.blobPink} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 `}
                    />
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div
                        className={`inline-flex items-center gap-2 px-4 py-2 ${darkMode ? `bg-gradient-to-r ${theme.ligthGradientPrimary} border-blue-500/30` : `bg-gradient-to-r ${theme.badgeGradient} border-blue-500/20`} rounded-full border mb-6`}
                    >
                        <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
                        <span className="text-sm font-medium">
                            Let's Build Something Amazing
                        </span>
                    </div>

                    <h1
                        className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r ${theme.lightGradientAccent} bg-clip-text text-transparent`}
                    >
                        Start Your Project
                    </h1>

                    <p
                        className={`text-xl ${theme.textSecondary} max-w-2xl mx-auto`}
                    >
                        Share your vision and requirements. I'll provide a
                        detailed estimate with timeline, deliverables, and
                        pricing in EUR.
                    </p>
                </div>
            </section>

            {/* Quick Contact Cards */}
            <section className="px-6 pb-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div
                            className={`${theme.cardBg} rounded-2xl p-6 border ${theme.border} hover:border-blue-500/50 transition-all duration-300 group`}
                        >
                            <Mail className="w-10 h-10 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                            <h3
                                className={`text-lg font-semibold mb-2 ${theme.text}`}
                            >
                                Email
                            </h3>
                            <a
                                href="mailto:contact@nf-software.com"
                                className={`text-sm ${theme.textSecondary} hover:text-blue-400 transition`}
                            >
                                contact@nf-software.com
                            </a>
                        </div>
                        <div
                            className={`${theme.cardBg} rounded-2xl p-6 border ${theme.border} hover:border-purple-500/50 transition-all duration-300 group`}
                        >
                            <Clock className="w-10 h-10 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                            <h3
                                className={`text-lg font-semibold mb-2 ${theme.text}`}
                            >
                                Response Time
                            </h3>
                            <p className={`text-sm ${theme.textSecondary}`}>
                                24-48 hours
                            </p>
                        </div>
                        <div
                            className={`${theme.cardBg} rounded-2xl p-6 border ${theme.border} hover:border-pink-500/50 transition-all duration-300 group`}
                        >
                            <Globe className="w-10 h-10 text-pink-400 mb-4 group-hover:scale-110 transition-transform" />
                            <h3
                                className={`text-lg font-semibold mb-2 ${theme.text}`}
                            >
                                Location
                            </h3>
                            <p className={`text-sm ${theme.textSecondary}`}>
                                Europe (CET/CEST)
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="px-6 pb-32">
                <div className="max-w-5xl mx-auto">
                    {/* Progress Steps */}
                    <div className="mb-12">
                        <div className="flex items-center justify-between max-w-3xl mx-auto">
                            {steps.map((step, index) => (
                                <div
                                    key={step.number}
                                    className="flex items-center flex-1"
                                >
                                    <div className="flex flex-col items-center">
                                        <div
                                            className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                                                currentStep >= step.number
                                                    ? `bg-gradient-to-r ${theme.gradientPrimary} text-white scale-110`
                                                    : `${darkMode ? "bg-gray-800 text-gray-500" : "bg-gray-200 text-gray-400"}`
                                            }`}
                                        >
                                            {step.number}
                                        </div>
                                        <span
                                            className={`text-xs mt-2 ${currentStep >= step.number ? theme.text : theme.textSecondary}`}
                                        >
                                            {step.title}
                                        </span>
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div
                                            className={`flex-1 h-1 mx-4 ${currentStep > step.number ? `bg-gradient-to-r ${theme.gradientPrimary}` : `${theme.bgButton}`}`}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className={`${theme.cardBg} rounded-3xl p-8 md:p-12 border ${theme.border}`}
                    >
                        <input
                            type="text"
                            name="company_website"
                            className="hidden"
                            tabIndex={-1}
                            autoComplete="off"
                        />

                        {status.message && (
                            <div
                                className={`mb-8 p-4 rounded-xl flex items-start gap-3 ${
                                    status.type === "success"
                                        ? `${darkMode ? "bg-green-500/10 border-green-500/30" : "bg-green-50 border-green-200"} border`
                                        : `${darkMode ? "bg-red-500/10 border-red-500/30" : "bg-red-50 border-red-200"} border`
                                }`}
                            >
                                {status.type === "success" ? (
                                    <CheckCircle
                                        className={`w-5 h-5 ${darkMode ? "text-green-400" : "text-green-600"} flex-shrink-0 mt-0.5`}
                                    />
                                ) : (
                                    <AlertCircle
                                        className={`w-5 h-5 ${darkMode ? "text-red-400" : "text-red-600"} flex-shrink-0 mt-0.5`}
                                    />
                                )}
                                <p
                                    className={`text-sm ${status.type === "success" ? (darkMode ? "text-green-400" : "text-green-700") : darkMode ? "text-red-400" : "text-red-700"}`}
                                >
                                    {status.message}
                                </p>
                            </div>
                        )}

                        {/* Step 1: Contact Information */}
                        {currentStep === 1 && (
                            <div className="space-y-8">
                                <div>
                                    <h3
                                        className={`text-3xl font-bold mb-2 bg-gradient-to-r ${theme.lightGradient} bg-clip-text text-transparent`}
                                    >
                                        Contact Information
                                    </h3>
                                    <p
                                        className={`${theme.textSecondary} mb-8`}
                                    >
                                        Let's start with your basic details
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            className={`block text-sm font-medium mb-2 ${theme.text}`}
                                        >
                                            Full Name{" "}
                                            <span className="text-red-400">
                                                *
                                            </span>
                                        </label>
                                        <div className="relative">
                                            <User
                                                className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.textSecondary}`}
                                            />
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className={`w-full pl-12 pr-4 py-4 ${theme.inputBg} border ${theme.border} rounded-xl ${theme.text} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                                                placeholder="John Doe"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            className={`block text-sm font-medium mb-2 ${theme.text}`}
                                        >
                                            Email Address{" "}
                                            <span className="text-red-400">
                                                *
                                            </span>
                                        </label>
                                        <div className="relative">
                                            <Mail
                                                className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.textSecondary}`}
                                            />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className={`w-full pl-12 pr-4 py-4 ${theme.inputBg} border ${theme.border} rounded-xl ${theme.text} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            className={`block text-sm font-medium mb-2 ${theme.text}`}
                                        >
                                            Phone Number (Optional)
                                        </label>
                                        <div className="relative">
                                            <Phone
                                                className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.textSecondary}`}
                                            />
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className={`w-full pl-12 pr-4 py-4 ${theme.inputBg} border ${theme.border} rounded-xl ${theme.text} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                                                placeholder="+31 6 1234 5678"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            className={`block text-sm font-medium mb-2 ${theme.text}`}
                                        >
                                            Company Name (Optional)
                                        </label>
                                        <div className="relative">
                                            <Building
                                                className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.textSecondary}`}
                                            />
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className={`w-full pl-12 pr-4 py-4 ${theme.inputBg} border ${theme.border} rounded-xl ${theme.text} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                                                placeholder="Your Company"
                                            />
                                        </div>
                                    </div>

                                    <div className="md:col-span-2">
                                        <label
                                            className={`block text-sm font-medium mb-2 ${theme.text}`}
                                        >
                                            Website (Optional)
                                        </label>
                                        <div className="relative">
                                            <Globe
                                                className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.textSecondary}`}
                                            />
                                            <input
                                                type="url"
                                                name="website"
                                                value={formData.website}
                                                onChange={handleChange}
                                                className={`w-full pl-12 pr-4 py-4 ${theme.inputBg} border ${theme.border} rounded-xl ${theme.text} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                                                placeholder="https://yourcompany.com"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setCurrentStep(2)}
                                    className={`w-full py-4 px-6 bg-gradient-to-r ${theme.gradientPrimary} text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-[1.02]`}
                                >
                                    Continue to Project Details
                                </button>
                            </div>
                        )}

                        {/* Step 2: Project Details */}
                        {currentStep === 2 && (
                            <div className="space-y-8">
                                <div>
                                    <h3
                                        className={`text-3xl font-bold mb-2 bg-gradient-to-r ${theme.gradientThirdary} bg-clip-text text-transparent`}
                                    >
                                        Project Details
                                    </h3>
                                    <p
                                        className={`${theme.textSecondary} mb-8`}
                                    >
                                        Tell me about your project vision
                                    </p>
                                </div>

                                <div>
                                    <label
                                        className={`block text-sm font-medium mb-4 ${theme.text}`}
                                    >
                                        Project Type{" "}
                                        <span className="text-red-400">*</span>
                                    </label>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {projectTypes.map((type) => {
                                            const Icon = type.icon;
                                            return (
                                                <button
                                                    key={type.value}
                                                    type="button"
                                                    onClick={() =>
                                                        setFormData((prev) => ({
                                                            ...prev,
                                                            projectType:
                                                                type.value,
                                                        }))
                                                    }
                                                    className={`p-4 rounded-xl border-2 transition-all ${
                                                        formData.projectType ===
                                                        type.value
                                                            ? "border-blue-500 bg-blue-500/10"
                                                            : `${theme.border} ${theme.inputBg} ${theme.hoverBorder}`
                                                    }`}
                                                >
                                                    <Icon
                                                        className={`w-8 h-8 mx-auto mb-2 ${formData.projectType === type.value ? "text-blue-400" : theme.textSecondary}`}
                                                    />
                                                    <p
                                                        className={`text-sm font-medium ${theme.text}`}
                                                    >
                                                        {type.label}
                                                    </p>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            className={`block text-sm font-medium mb-2 ${theme.text}`}
                                        >
                                            Industry/Sector (Optional)
                                        </label>
                                        <input
                                            type="text"
                                            name="industry"
                                            value={formData.industry}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-4 ${theme.inputBg} border ${theme.border} rounded-xl ${theme.text} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                                            placeholder="e.g., E-commerce, Healthcare, Finance"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            className={`block text-sm font-medium mb-2 ${theme.text}`}
                                        >
                                            Team Size (Optional)
                                        </label>
                                        <select
                                            name="teamSize"
                                            value={formData.teamSize}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-4 ${theme.selectBg} border ${theme.border} rounded-xl ${theme.text} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                                        >
                                            <option value="">
                                                Select team size
                                            </option>
                                            <option value="solo">
                                                Solo Founder
                                            </option>
                                            <option value="small">
                                                2-10 people
                                            </option>
                                            <option value="medium">
                                                11-50 people
                                            </option>
                                            <option value="large">
                                                50+ people
                                            </option>
                                        </select>
                                    </div>

                                    <div>
                                        <label
                                            className={`block text-sm font-medium mb-2 ${theme.text}`}
                                        >
                                            Expected Timeframe{" "}
                                            <span className="text-red-400">
                                                *
                                            </span>
                                        </label>
                                        <div className="relative">
                                            <Calendar
                                                className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.textSecondary}`}
                                            />
                                            <select
                                                name="timeframe"
                                                value={formData.timeframe}
                                                onChange={handleChange}
                                                required
                                                className={`w-full pl-12 pr-4 py-4 ${theme.selectBg} border ${theme.border} rounded-xl ${theme.text} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
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
                                                <option value="flexible">
                                                    Flexible
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            className={`block text-sm font-medium mb-2 ${theme.text}`}
                                        >
                                            Budget Range (EUR){" "}
                                            <span className="text-red-400">
                                                *
                                            </span>
                                        </label>
                                        <div className="relative">
                                            <Euro
                                                className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.textSecondary}`}
                                            />
                                            <select
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                                required
                                                className={`w-full pl-12 pr-4 py-4 ${theme.selectBg} border ${theme.border} rounded-xl ${theme.text} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                                            >
                                                <option value="">
                                                    Select budget range
                                                </option>
                                                <option value="small">
                                                    €1,000 - €5,000
                                                </option>
                                                <option value="medium">
                                                    €5,000 - €15,000
                                                </option>
                                                <option value="large">
                                                    €15,000 - €50,000
                                                </option>
                                                <option value="enterprise">
                                                    €50,000+
                                                </option>
                                                <option value="discuss">
                                                    Prefer to discuss
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label
                                        className={`block text-sm font-medium mb-2 ${theme.text}`}
                                    >
                                        Project Description{" "}
                                        <span className="text-red-400">*</span>
                                    </label>
                                    <div className="relative">
                                        <FileText
                                            className={`absolute left-4 top-4 w-5 h-5 ${theme.textSecondary}`}
                                        />
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className={`w-full pl-12 pr-4 py-4 ${theme.inputBg} border ${theme.border} rounded-xl ${theme.text} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition`}
                                            placeholder="Describe your project in detail. What problem does it solve? What are the key features? What makes it unique?"
                                        />
                                    </div>
                                    <p
                                        className={`mt-2 text-xs ${theme.textSecondary}`}
                                    >
                                        Be specific about your vision and
                                        requirements
                                    </p>
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setCurrentStep(1)}
                                        className={`flex-1 py-4 px-6 ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-200 hover:bg-gray-300"} ${theme.text} font-semibold rounded-xl transition-all duration-300`}
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setCurrentStep(3)}
                                        className={`flex-1 py-4 px-6 bg-gradient-to-r ${theme.gradientPrimary} text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-[1.02]`}
                                    >
                                        Continue to Requirements
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Requirements */}
                        {currentStep === 3 && (
                            <div className="space-y-8">
                                <div>
                                    <h3
                                        className={`text-3xl font-bold mb-2 bg-gradient-to-r ${theme.gradientQuaterly} bg-clip-text text-transparent`}
                                    >
                                        Technical Requirements
                                    </h3>
                                    <p
                                        className={`${theme.textSecondary} mb-8`}
                                    >
                                        Help me understand your technical needs
                                    </p>
                                </div>

                                <div>
                                    <label
                                        className={`block text-sm font-medium mb-4 ${theme.text}`}
                                    >
                                        Key Features{" "}
                                        <span className={theme.textSecondary}>
                                            (Select all that apply)
                                        </span>
                                    </label>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        {commonFeatures.map((feature) => (
                                            <button
                                                key={feature}
                                                type="button"
                                                onClick={() =>
                                                    handleFeatureToggle(feature)
                                                }
                                                className={`px-4 py-3 rounded-lg border transition-all text-sm ${
                                                    formData.features.includes(
                                                        feature,
                                                    )
                                                        ? "border-blue-500 bg-blue-500/10 text-blue-400"
                                                        : `${theme.border} ${theme.inputBg} ${theme.textSecondary} ${theme.hoverBorder}`
                                                }`}
                                            >
                                                {feature}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label
                                        className={`block text-sm font-medium mb-2 ${theme.text}`}
                                    >
                                        Project Goals & Success Metrics
                                    </label>
                                    <div className="relative">
                                        <Target
                                            className={`absolute left-4 top-4 w-5 h-5 ${theme.textSecondary}`}
                                        />
                                        <textarea
                                            name="goals"
                                            value={formData.goals}
                                            onChange={handleChange}
                                            rows={4}
                                            className={`w-full pl-12 pr-4 py-4 ${theme.inputBg} border ${theme.border} rounded-xl ${theme.text} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition`}
                                            placeholder="What are your main objectives? How will you measure success? (e.g., 10,000 users in 6 months, 95% uptime, etc.)"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        className={`block text-sm font-medium mb-2 ${theme.text}`}
                                    >
                                        Target Audience
                                    </label>
                                    <div className="relative">
                                        <Users
                                            className={`absolute left-4 top-4 w-5 h-5 ${theme.textSecondary}`}
                                        />
                                        <textarea
                                            name="targetAudience"
                                            value={formData.targetAudience}
                                            onChange={handleChange}
                                            rows={3}
                                            className={`w-full pl-12 pr-4 py-4 ${theme.inputBg} border ${theme.border} rounded-xl ${theme.text} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition`}
                                            placeholder="Who will use this? (e.g., age range, profession, technical expertise)"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        className={`block text-sm font-medium mb-2 ${theme.text}`}
                                    >
                                        Technical Requirements & Integrations
                                    </label>
                                    <div className="relative">
                                        <Code
                                            className={`absolute left-4 top-4 w-5 h-5 ${theme.textSecondary}`}
                                        />
                                        <textarea
                                            name="technicalRequirements"
                                            value={
                                                formData.technicalRequirements
                                            }
                                            onChange={handleChange}
                                            rows={4}
                                            className={`w-full pl-12 pr-4 py-4 ${theme.inputBg} border ${theme.border} rounded-xl ${theme.text} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition`}
                                            placeholder="Any specific technologies, platforms, or third-party integrations? (e.g., Stripe, AWS, specific frameworks)"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            className={`block text-sm font-medium mb-2 ${theme.text}`}
                                        >
                                            Do you have existing designs?
                                        </label>
                                        <select
                                            name="hasDesign"
                                            value={formData.hasDesign}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-4 ${theme.selectBg} border ${theme.border} rounded-xl ${theme.text} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                                        >
                                            <option value="no">
                                                No, need full design
                                            </option>
                                            <option value="partial">
                                                Have wireframes/mockups
                                            </option>
                                            <option value="yes">
                                                Complete design ready
                                            </option>
                                        </select>
                                    </div>

                                    <div>
                                        <label
                                            className={`block text-sm font-medium mb-2 ${theme.text}`}
                                        >
                                            Need hosting/deployment help?
                                        </label>
                                        <select
                                            name="needsHosting"
                                            value={formData.needsHosting}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-4 ${theme.selectBg} border ${theme.border} rounded-xl ${theme.text} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                                        >
                                            <option value="unsure">
                                                Not sure yet
                                            </option>
                                            <option value="yes">
                                                Yes, full deployment
                                            </option>
                                            <option value="no">
                                                No, I'll handle it
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setCurrentStep(2)}
                                        className={`flex-1 py-4 px-6 ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-200 hover:bg-gray-300"} ${theme.text} font-semibold rounded-xl transition-all duration-300`}
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setCurrentStep(4)}
                                        className={`flex-1 py-4 px-6 bg-gradient-to-r ${theme.gradientPrimary} text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-[1.02]`}
                                    >
                                        Continue to Final Details
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 4: Additional Info */}
                        {currentStep === 4 && (
                            <div className="space-y-8">
                                <div>
                                    <h3
                                        className={`text-3xl font-bold mb-2 bg-gradient-to-r ${theme.gradientQuintly} bg-clip-text text-transparent`}
                                    >
                                        Additional Information
                                    </h3>
                                    <p
                                        className={`${theme.textSecondary} mb-8`}
                                    >
                                        Final details to help me provide an
                                        accurate estimate
                                    </p>
                                </div>

                                <div>
                                    <label
                                        className={`block text-sm font-medium mb-2 ${theme.text}`}
                                    >
                                        Design Preferences & Inspiration
                                    </label>
                                    <textarea
                                        name="designPreferences"
                                        value={formData.designPreferences}
                                        onChange={handleChange}
                                        rows={4}
                                        className={`w-full px-4 py-4 ${theme.inputBg} border ${theme.border} rounded-xl ${theme.text} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition`}
                                        placeholder="Any design preferences, color schemes, or reference websites you like? (e.g., 'Modern and minimal like Stripe', 'Bold and colorful like Spotify')"
                                    />
                                </div>

                                <div>
                                    <label
                                        className={`block text-sm font-medium mb-4 ${theme.text}`}
                                    >
                                        Attachments (Optional)
                                    </label>
                                    <div
                                        className={`border-2 border-dashed ${theme.border} rounded-xl p-8 text-center ${theme.hoverBorder} transition`}
                                    >
                                        <input
                                            type="file"
                                            multiple
                                            onChange={handleFileChange}
                                            className="hidden"
                                            id="file-upload"
                                            accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.fig"
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
                                                Wireframes, mockups,
                                                specifications, or reference
                                                files
                                            </p>
                                            <p
                                                className={`text-xs ${theme.textSecondary}`}
                                            >
                                                Supported: Images, PDFs,
                                                Documents, Figma files (max 10MB
                                                each)
                                            </p>
                                        </label>
                                    </div>

                                    {formData.attachments.length > 0 && (
                                        <div className="mt-4 space-y-2">
                                            {formData.attachments.map(
                                                (file, index) => (
                                                    <div
                                                        key={index}
                                                        className={`flex items-center justify-between p-3 ${theme.inputBg} border ${theme.border} rounded-lg`}
                                                    >
                                                        <div className="flex items-center gap-3 flex-1 min-w-0">
                                                            <FileText className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                                            <div className="min-w-0 flex-1">
                                                                <p
                                                                    className={`text-sm ${theme.text} truncate`}
                                                                >
                                                                    {file.name}
                                                                </p>
                                                                <p
                                                                    className={`text-xs ${theme.textSecondary}`}
                                                                >
                                                                    {(
                                                                        file.size /
                                                                        1024 /
                                                                        1024
                                                                    ).toFixed(
                                                                        2,
                                                                    )}{" "}
                                                                    MB
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                removeFile(
                                                                    index,
                                                                )
                                                            }
                                                            className={`p-1 ${darkMode ? "hover:bg-red-500/10" : "hover:bg-red-50"} rounded-lg transition`}
                                                        >
                                                            <X className="w-5 h-5 text-red-400" />
                                                        </button>
                                                    </div>
                                                ),
                                            )}
                                        </div>
                                    )}
                                </div>

                                <div
                                    className={`${darkMode ? `bg-gradient-to-r ${theme.badgeGradient} border-blue-500/30` : `bg-gradient-to-r ${theme.secondBadgeGradient} border-blue-500/20`} border rounded-xl p-6`}
                                >
                                    <h4
                                        className={`font-semibold mb-3 flex items-center gap-2 ${theme.text}`}
                                    >
                                        <Sparkles className="w-5 h-5 text-blue-400" />
                                        What happens next?
                                    </h4>
                                    <ul
                                        className={`space-y-2 text-sm ${theme.textSecondary}`}
                                    >
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                            <span>
                                                I'll review your requirements in
                                                detail (24-48 hours)
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                            <span>
                                                You'll receive a comprehensive
                                                proposal with timeline,
                                                milestones, and pricing in EUR
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                            <span>
                                                We can schedule a call to
                                                discuss any questions or
                                                refinements
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                            <span>
                                                Once approved, we'll kick off
                                                with a detailed project roadmap
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setCurrentStep(3)}
                                        className={`flex-1 py-4 px-6 ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-200 hover:bg-gray-300"} ${theme.text} font-semibold rounded-xl transition-all duration-300`}
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`flex-1 py-4 px-6 bg-gradient-to-r ${theme.gradientPrimary} text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2`}
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
                                </div>

                                <p
                                    className={`text-xs ${theme.textSecondary} text-center`}
                                >
                                    By submitting, you agree to receive
                                    project-related communications. Your
                                    information will be kept confidential.
                                </p>
                            </div>
                        )}
                    </form>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="px-6 pb-32">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2
                            className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${theme.lightGradient} bg-clip-text text-transparent`}
                        >
                            Frequently Asked Questions
                        </h2>
                        <p className={`text-lg ${theme.textSecondary}`}>
                            Everything you need to know about working together
                        </p>
                    </div>

                    <div className="grid gap-6">
                        {[
                            {
                                question: "What's included in your proposal?",
                                answer: "You'll receive a detailed breakdown including project timeline with milestones, comprehensive feature list, technology stack recommendations, pricing in EUR (with payment schedule options), and estimated delivery dates. I also include potential challenges and how we'll address them.",
                            },
                            {
                                question: "How do you calculate pricing?",
                                answer: "Pricing is based on project complexity, required features, timeline, and ongoing support needs. I offer both fixed-price packages for well-defined projects and flexible hourly rates for evolving requirements. All prices are in EUR and include regular check-ins and revisions.",
                            },
                            {
                                question:
                                    "What information helps you provide the most accurate estimate?",
                                answer: "The more details, the better! Specific feature requirements, user flow descriptions, design references, technical constraints, target launch date, and any existing systems to integrate with. Wireframes or mockups are incredibly helpful but not required.",
                            },
                            {
                                question:
                                    "Do you work with startups on equity/revenue share?",
                                answer: "I primarily work on paid projects, but I'm open to discussing hybrid arrangements (partial payment + equity) for exceptional early-stage startups with strong potential. This is evaluated case-by-case.",
                            },
                            {
                                question: "What's your development process?",
                                answer: "I follow an agile approach with 1-2 week sprints, regular demos, and iterative feedback. You'll have access to staging environments, GitHub repositories, and regular progress updates. Communication is key - I use Slack, email, and video calls as needed.",
                            },
                            {
                                question: "Do you provide post-launch support?",
                                answer: "Yes! I offer flexible maintenance packages including bug fixes, security updates, performance optimization, and feature additions. We can discuss ongoing support needs during the proposal phase.",
                            },
                            {
                                question:
                                    "Can you work with my existing development team?",
                                answer: "Absolutely! I'm experienced in collaborating with in-house teams, providing technical leadership, code reviews, or handling specific components. I adapt to your team's workflow and tools.",
                            },
                            {
                                question:
                                    "What if my project requirements change?",
                                answer: "Change is natural in software development. For fixed-price projects, we'll discuss scope adjustments and pricing impacts. For hourly projects, you have full flexibility to pivot as needed. Clear communication ensures we stay aligned.",
                            },
                        ].map((faq, index) => (
                            <div
                                key={index}
                                className={`${theme.cardBg} rounded-xl p-6 border ${theme.border} ${theme.hoverBorder} transition-all`}
                            >
                                <h3
                                    className={`text-lg font-semibold mb-3 ${theme.text}`}
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

                    <div className="mt-12 text-center">
                        <div
                            className={`inline-block ${darkMode ? `bg-gradient-to-r ${theme.badgeGradient} border-blue-500/30` : `bg-gradient-to-r ${theme.secondBadgeGradient} border-blue-500/20`} border rounded-xl p-8`}
                        >
                            <p className={`${theme.textSecondary} mb-4`}>
                                Still have questions?
                            </p>
                            <a
                                href="mailto:contact@nf-software.com"
                                className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${theme.gradientPrimary} text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105`}
                            >
                                <Mail className="w-5 h-5" />
                                Email me directly
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
