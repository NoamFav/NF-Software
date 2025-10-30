// ============================================================================
// FILE: src/pages/Contact.jsx
// ============================================================================
import React, { useState, useEffect } from "react";
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
    Code,
    X,
} from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";
import { getTheme } from "../utils/theme";
import {
    projectTypes,
    commonFeatures,
    teamSizes,
    timeframes,
    budgetRanges,
    designOptions,
    hostingOptions,
    faqData,
    contactInfo,
    FORM_ENDPOINT,
} from "../data/contact";

const STORAGE_KEY = "contact_form_draft";
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const MAX_FILES = 8;
const MAX_FIELD_SIZE = 256 * 1024; // 256KB

// Field character limits
const LIMITS = {
    name: 100,
    email: 150,
    phone: 30,
    company: 150,
    website: 200,
    industry: 100,
    description: 5000,
    goals: 3000,
    targetAudience: 2000,
    technicalRequirements: 3000,
    designPreferences: 2000,
};

const InputField = React.memo(function InputField({
    icon: Icon,
    label,
    name,
    type = "text",
    required = false,
    placeholder,
    maxLength,
    theme,
    value,
    onChange,
    error,
}) {
    return (
        <div>
            <label className={`block text-sm font-medium mb-2 ${theme.text}`}>
                {label} {required && <span className="text-red-400">*</span>}
            </label>
            <div className="relative">
                <Icon
                    className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.textSecondary}`}
                />
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    maxLength={maxLength}
                    className={`w-full pl-12 pr-4 py-4 ${theme.inputBg} border ${error ? "border-red-500" : theme.border} rounded-xl ${theme.text} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                    placeholder={placeholder}
                />
            </div>
            {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
            {maxLength && (
                <p className={`mt-1 text-xs ${theme.textSecondary}`}>
                    {(value ?? "").length}/{maxLength}
                </p>
            )}
        </div>
    );
});

const TextAreaField = React.memo(function TextAreaField({
    icon: Icon,
    label,
    name,
    rows = 4,
    required = false,
    placeholder,
    maxLength,
    theme,
    value,
    onChange,
    error,
}) {
    return (
        <div>
            <label className={`block text-sm font-medium mb-2 ${theme.text}`}>
                {label} {required && <span className="text-red-400">*</span>}
            </label>
            <div className="relative">
                <Icon
                    className={`absolute left-4 top-4 w-5 h-5 ${theme.textSecondary}`}
                />
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    maxLength={maxLength}
                    rows={rows}
                    className={`w-full pl-12 pr-4 py-4 ${theme.inputBg} border ${error ? "border-red-500" : theme.border} rounded-xl ${theme.text} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition`}
                    placeholder={placeholder}
                />
            </div>
            {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
            {maxLength && (
                <p className={`mt-1 text-xs ${theme.textSecondary}`}>
                    {(value ?? "").length}/{maxLength}
                </p>
            )}
        </div>
    );
});

const Contact = () => {
    const { darkMode } = useDarkMode();
    const theme = getTheme(darkMode);

    const initialFormData = {
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
    };

    const [formData, setFormData] = useState(initialFormData);
    const [status, setStatus] = useState({ type: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [errors, setErrors] = useState({});

    // Load saved form data on mount
    useEffect(() => {
        try {
            const savedData = localStorage.getItem(STORAGE_KEY);
            if (savedData) {
                const parsed = JSON.parse(savedData);
                setFormData({ ...initialFormData, ...parsed, attachments: [] });
                setCurrentStep(parsed.currentStep || 1);
            }
        } catch (error) {
            console.error("Error loading saved form data:", error);
        }
    }, []);

    // Save form data on change (debounced)
    useEffect(() => {
        const timer = setTimeout(() => {
            try {
                const dataToSave = { ...formData, currentStep };
                localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
            } catch (error) {
                console.error("Error saving form data:", error);
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [formData, currentStep]);

    const F = ({
        icon,
        label,
        name,
        type = "text",
        required = false,
        placeholder,
        maxLength,
    }) => (
        <InputField
            icon={icon}
            label={label}
            name={name}
            type={type}
            required={required}
            placeholder={placeholder}
            maxLength={maxLength}
            theme={theme}
            value={formData[name] ?? ""}
            onChange={handleChange}
            error={errors[name]}
        />
    );

    const T = ({
        icon,
        label,
        name,
        rows = 4,
        required = false,
        placeholder,
        maxLength,
    }) => (
        <TextAreaField
            icon={icon}
            label={label}
            name={name}
            rows={rows}
            required={required}
            placeholder={placeholder}
            maxLength={maxLength}
            theme={theme}
            value={formData[name] ?? ""}
            onChange={handleChange}
            error={errors[name]}
        />
    );

    const validateField = (name, value) => {
        if (LIMITS[name] && value.length > LIMITS[name]) {
            return `Maximum ${LIMITS[name]} characters`;
        }
        if (
            name === "email" &&
            value &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ) {
            return "Invalid email format";
        }
        if (name === "website" && value && !/^https?:\/\/.+/.test(value)) {
            return "Must start with http:// or https://";
        }
        return null;
    };

    const validateStep = (step) => {
        const newErrors = {};

        if (step === 1) {
            if (!formData.name.trim()) newErrors.name = "Name is required";
            if (!formData.email.trim()) newErrors.email = "Email is required";
            const emailError = validateField("email", formData.email);
            if (emailError) newErrors.email = emailError;
        } else if (step === 2) {
            if (!formData.description.trim())
                newErrors.description = "Description is required";
            if (!formData.timeframe)
                newErrors.timeframe = "Timeframe is required";
            if (!formData.budget) newErrors.budget = "Budget is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Character limit check
        if (LIMITS[name] && value.length > LIMITS[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: `Maximum ${LIMITS[name]} characters`,
            }));
            return;
        }

        // Field size check (bytes)
        if (new Blob([value]).size > MAX_FIELD_SIZE) {
            setErrors((prev) => ({
                ...prev,
                [name]: "Field content too large",
            }));
            return;
        }

        setFormData((prev) => ({ ...prev, [name]: value }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
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
        const validFiles = [];
        const fileErrors = [];

        // Check total file count
        if (formData.attachments.length + files.length > MAX_FILES) {
            setStatus({
                type: "error",
                message: `Maximum ${MAX_FILES} files allowed`,
            });
            return;
        }

        // Validate each file
        files.forEach((file) => {
            if (file.size > MAX_FILE_SIZE) {
                fileErrors.push(`${file.name} exceeds 10MB limit`);
            } else {
                validFiles.push(file);
            }
        });

        if (fileErrors.length > 0) {
            setStatus({
                type: "error",
                message: fileErrors.join(", "),
            });
        }

        if (validFiles.length > 0) {
            setFormData((prev) => ({
                ...prev,
                attachments: [...prev.attachments, ...validFiles],
            }));
        }
    };

    const removeFile = (index) => {
        setFormData((prev) => ({
            ...prev,
            attachments: prev.attachments.filter((_, i) => i !== index),
        }));
    };

    const clearDraft = () => {
        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch (error) {
            console.error("Error clearing draft:", error);
        }
    };

    const handleStepChange = (nextStep) => {
        if (nextStep > currentStep) {
            if (!validateStep(currentStep)) {
                setStatus({
                    type: "error",
                    message: "Please fill in all required fields correctly",
                });
                return;
            }
        }
        setCurrentStep(nextStep);
        setStatus({ type: "", message: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (e.target.company_website.value) return; // Honeypot

        if (!validateStep(currentStep)) {
            setStatus({
                type: "error",
                message: "Please fill in all required fields correctly",
            });
            return;
        }

        setIsSubmitting(true);
        setStatus({ type: "", message: "" });

        try {
            const submitData = new FormData();

            // Add form fields
            Object.keys(formData).forEach((key) => {
                if (key === "attachments") return;
                if (key === "features") {
                    submitData.append(key, JSON.stringify(formData[key]));
                } else {
                    submitData.append(key, formData[key]);
                }
            });

            // Add files
            formData.attachments.forEach((file, index) => {
                submitData.append(`attachment_${index}`, file);
            });

            const response = await fetch(FORM_ENDPOINT, {
                method: "POST",
                body: submitData,
            });

            if (response.ok) {
                setStatus({
                    type: "success",
                    message:
                        "Thank you! Your detailed project inquiry has been received. I'll review everything and get back to you within 24-48 hours with a comprehensive proposal.",
                });

                // Clear form and draft
                setFormData(initialFormData);
                setCurrentStep(1);
                clearDraft();

                const fileInput = document.getElementById("file-upload");
                if (fileInput) fileInput.value = "";
            } else {
                throw new Error("Failed to submit form");
            }
        } catch (error) {
            setStatus({
                type: "error",
                message: `Sorry, there was an error submitting your form. Please try again or email me directly at ${contactInfo.email}`,
            });
            console.error("Form submission error:", error);
        } finally {
            setIsSubmitting(false);
        }
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
                        className={`absolute bottom-1/4 left-1/2 w-96 h-96 ${theme.blobPink} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000`}
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
                        Every project begins with a clear conversation. Tell me
                        what you're looking to build, and I’ll provide a
                        detailed estimate with timeline, deliverables, and
                        pricing. I take on everything from small automation
                        tools (€20+) to full-scale systems and long-term
                        development partnerships.
                    </p>
                </div>
            </section>

            {/* Quick Contact Cards */}
            <section className="px-6 pb-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Mail,
                                title: "Email",
                                content: contactInfo.email,
                                color: "blue",
                                href: `mailto:${contactInfo.email}`,
                            },
                            {
                                icon: Clock,
                                title: "Response Time",
                                content: contactInfo.responseTime,
                                color: "purple",
                            },
                            {
                                icon: Globe,
                                title: "Location",
                                content: contactInfo.location,
                                color: "pink",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className={`${theme.cardBg} rounded-2xl p-6 border ${theme.border} hover:border-${item.color}-500/50 transition-all duration-300 group`}
                            >
                                <item.icon
                                    className={`w-10 h-10 text-${item.color}-400 mb-4 group-hover:scale-110 transition-transform`}
                                />
                                <h3
                                    className={`text-lg font-semibold mb-2 ${theme.text}`}
                                >
                                    {item.title}
                                </h3>
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        className={`text-sm ${theme.textSecondary} hover:text-${item.color}-400 transition`}
                                    >
                                        {item.content}
                                    </a>
                                ) : (
                                    <p
                                        className={`text-sm ${theme.textSecondary}`}
                                    >
                                        {item.content}
                                    </p>
                                )}
                            </div>
                        ))}
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
                                            className={`flex-1 h-1 mx-4 ${currentStep > step.number ? `bg-gradient-to-r ${theme.gradientPrimary}` : theme.bgButton}`}
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
                                        Tell me where to reach you.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {F({
                                        icon: User,
                                        label: "Full Name",
                                        name: "name",
                                        required: true,
                                        placeholder: "John Doe",
                                        maxLength: LIMITS.name,
                                    })}
                                    {F({
                                        icon: Mail,
                                        label: "Email Address",
                                        name: "email",
                                        required: true,
                                        type: "email",
                                        placeholder: "john@example.com",
                                        maxLength: LIMITS.email,
                                    })}
                                    {F({
                                        icon: Phone,
                                        label: "Phone Number (Optional)",
                                        name: "phone",
                                        type: "tel",
                                        placeholder: "+31 6 1234 5678",
                                        maxLength: LIMITS.phone,
                                    })}
                                    {F({
                                        icon: Building,
                                        label: "Company Name (Optional)",
                                        name: "company",
                                        placeholder: "Your Company",
                                        maxLength: LIMITS.company,
                                    })}
                                    <div className="md:col-span-2">
                                        {F({
                                            icon: Globe,
                                            label: "Website (Optional)",
                                            name: "website",
                                            type: "url",
                                            placeholder:
                                                "https://yourcompany.com",
                                            maxLength: LIMITS.website,
                                        })}
                                    </div>{" "}
                                </div>

                                <button
                                    type="button"
                                    onClick={() => handleStepChange(2)}
                                    className={`w-full py-4 px-6 bg-gradient-to-r ${theme.gradientPrimary} text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-[1.02]`}
                                >
                                    Next Step → Project Details
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
                                    {F({
                                        icon: Building,
                                        label: "Industry/Sector (Optional)",
                                        name: "industry",
                                        placeholder:
                                            "e.g., E-commerce, Healthcare",
                                        maxLength: LIMITS.industry,
                                    })}

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
                                            {teamSizes.map((size) => (
                                                <option
                                                    key={size.value}
                                                    value={size.value}
                                                >
                                                    {size.label}
                                                </option>
                                            ))}
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
                                                className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.textSecondary} pointer-events-none`}
                                            />
                                            <select
                                                name="timeframe"
                                                value={formData.timeframe}
                                                onChange={handleChange}
                                                required
                                                className={`w-full pl-12 pr-4 py-4 ${theme.selectBg} border ${errors.timeframe ? "border-red-500" : theme.border} rounded-xl ${theme.text} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none`}
                                            >
                                                {timeframes.map((tf) => (
                                                    <option
                                                        key={tf.value}
                                                        value={tf.value}
                                                    >
                                                        {tf.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        {errors.timeframe && (
                                            <p className="mt-1 text-xs text-red-400">
                                                {errors.timeframe}
                                            </p>
                                        )}
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
                                                className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.textSecondary} pointer-events-none`}
                                            />
                                            <select
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                                required
                                                className={`w-full pl-12 pr-4 py-4 ${theme.selectBg} border ${errors.budget ? "border-red-500" : theme.border} rounded-xl ${theme.text} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none`}
                                            >
                                                {budgetRanges.map((budget) => (
                                                    <option
                                                        key={budget.value}
                                                        value={budget.value}
                                                    >
                                                        {budget.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        {errors.budget && (
                                            <p className="mt-1 text-xs text-red-400">
                                                {errors.budget}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {T({
                                    icon: FileText,
                                    label: "Project Description",
                                    name: "description",
                                    required: true,
                                    rows: 6,
                                    placeholder: "Describe your project…",
                                    maxLength: LIMITS.description,
                                })}

                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        onClick={() => handleStepChange(1)}
                                        className={`flex-1 py-4 px-6 ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-200 hover:bg-gray-300"} ${theme.text} font-semibold rounded-xl transition-all duration-300`}
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleStepChange(3)}
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

                                {T({
                                    icon: Target,
                                    label: "Project Goals & Success Metrics",
                                    name: "goals",
                                    placeholder:
                                        "Objectives and how you'll measure success",
                                    maxLength: LIMITS.goals,
                                })}

                                {T({
                                    icon: Users,
                                    label: "Target Audience",
                                    name: "targetAudience",
                                    rows: 3,
                                    placeholder: "Who will use this?",
                                    maxLength: LIMITS.targetAudience,
                                })}

                                {T({
                                    icon: Code,
                                    label: "Technical Requirements & Integrations",
                                    name: "technicalRequirements",
                                    placeholder:
                                        "Stripe, AWS, frameworks, etc.",
                                    maxLength: LIMITS.technicalRequirements,
                                })}

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
                                            {designOptions.map((option) => (
                                                <option
                                                    key={option.value}
                                                    value={option.value}
                                                >
                                                    {option.label}
                                                </option>
                                            ))}
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
                                            {hostingOptions.map((option) => (
                                                <option
                                                    key={option.value}
                                                    value={option.value}
                                                >
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        onClick={() => handleStepChange(2)}
                                        className={`flex-1 py-4 px-6 ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-200 hover:bg-gray-300"} ${theme.text} font-semibold rounded-xl transition-all duration-300`}
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleStepChange(4)}
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

                                {T({
                                    icon: FileText,
                                    label: "Design Preferences & Inspiration",
                                    name: "designPreferences",
                                    placeholder:
                                        "e.g., 'Modern and minimal like Stripe'",
                                    maxLength: LIMITS.designPreferences,
                                })}

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
                                                Max {MAX_FILES} files, 10MB each
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
                                        {[
                                            "I'll review your requirements in detail (24-48 hours)",
                                            "You'll receive a comprehensive proposal with timeline, milestones, and pricing in EUR",
                                            "We can schedule a call to discuss any questions or refinements",
                                            "Once approved, we'll kick off with a detailed project roadmap",
                                        ].map((item, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-2"
                                            >
                                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        onClick={() => handleStepChange(3)}
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
                        {faqData.map((faq, index) => (
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
                                Still unsure where your project fits?
                            </p>
                            <a
                                href={`mailto:${contactInfo.email}`}
                                className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${theme.gradientPrimary} text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105`}
                            >
                                <Mail className="w-5 h-5" />
                                Send a message!
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
