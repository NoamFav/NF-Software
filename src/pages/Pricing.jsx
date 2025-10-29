// ============================================================================
// FILE: src/pages/Pricing.jsx
// ============================================================================
import { useState, Fragment } from "react";
import {
    Check,
    Shield,
    Users,
    Download,
    ArrowRight,
    Code,
    Cpu,
    Brain,
    GraduationCap,
    FolderTree,
    Sparkles,
    DollarSign,
    Package,
} from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";
import { getTheme } from "../utils/theme";
import { suites, standaloneTools } from "../data/products";

const Pricing = () => {
    const { darkMode } = useDarkMode();
    const theme = getTheme(darkMode);
    const [selectedPlan, setSelectedPlan] = useState("individual");
    const fmt = (n) =>
        (n ?? n === 0)
            ? new Intl.NumberFormat(undefined, {
                  style: "currency",
                  currency: "EUR",
                  maximumFractionDigits: 0,
              }).format(n)
            : "—";
    const getIconComponent = (iconName) => {
        const icons = {
            Code: Code,
            Cpu: Cpu,
            Brain: Brain,
            GraduationCap: GraduationCap,
            FolderTree: FolderTree,
        };
        const IconComponent = icons[iconName];
        return IconComponent || icons.Code;
    };

    /*
    const getCheckoutHref = (sku) =>
        sku ? `/checkout?sku=${encodeURIComponent(sku)}` : "#";
    const suiteSkuFor = (suite, selectedPlan) => {
        if (selectedPlan === "individual")
            return suite.plans?.individual?.skuAnnual;
        if (selectedPlan === "professional")
            return suite.plans?.professional?.sku; // annual-only
        if (selectedPlan === "enterprise") return suite.plans?.enterprise?.sku; // annual-only
        return null;
    };
    */

    return (
        <>
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

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div
                            className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${theme.badgeGradient} rounded-full border ${theme.blobBlue}/20 mb-6 animate-fade-in`}
                        >
                            <DollarSign
                                className={`w-4 h-4 ${theme.textBlue} animate-pulse`}
                            />
                            <span className="text-sm font-medium">
                                Simple, Transparent Pricing
                            </span>
                        </div>
                        <h1
                            className={`text-5xl md:text-6xl font-bold ${theme.text} mb-6`}
                        >
                            Choose Your Plan
                        </h1>
                        <p
                            className={`text-xl ${theme.textSecondary} max-w-3xl mx-auto`}
                        >
                            Buy complete suites at discounted rates, or purchase
                            individual tools separately. All plans include
                            continuous updates.
                        </p>
                    </div>

                    {/* Plan Selector */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {[
                            { id: "individual", label: "Individual" },
                            { id: "professional", label: "Professional" },
                            { id: "enterprise", label: "Enterprise" },
                        ].map((plan) => (
                            <button
                                key={plan.id}
                                onClick={() => setSelectedPlan(plan.id)}
                                className={`px-8 py-3 rounded-full font-medium transition ${
                                    selectedPlan === plan.id
                                        ? `bg-gradient-to-r ${theme.gradientPrimary} text-white shadow-lg`
                                        : `${theme.cardBg} ${theme.textSecondary} border ${theme.border} ${theme.hoverBg}`
                                }`}
                            >
                                {plan.label}
                            </button>
                        ))}
                    </div>

                    {/* suite.plans Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {suites.map((suite) => {
                            const IconComponent = getIconComponent(suite.icon);
                            return (
                                <div
                                    key={suite.slug}
                                    data-animate
                                    className={`${theme.cardBg} rounded-3xl p-8 border ${theme.border} hover:border-blue-500/50 transition-all duration-300`}
                                >
                                    <IconComponent className="w-12 h-12 text-blue-500 mb-4" />
                                    <h3
                                        className={`text-2xl font-bold ${theme.text} mb-2`}
                                    >
                                        {suite.name}
                                    </h3>
                                    <p
                                        className={`text-sm ${theme.textSecondary} mb-6`}
                                    >
                                        {suite.tagline}
                                    </p>

                                    <div className="space-y-4 mb-6">
                                        {selectedPlan === "individual" && (
                                            <>
                                                <div>
                                                    <div
                                                        className={`text-sm ${theme.textTertiary} mb-1`}
                                                    >
                                                        Annual
                                                    </div>
                                                    <div
                                                        className={`text-4xl font-bold ${theme.text}`}
                                                    >
                                                        {fmt(
                                                            suite.plans
                                                                ?.individual
                                                                .annual,
                                                        )}
                                                        <span className="text-lg">
                                                            /yr
                                                        </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div
                                                        className={`text-sm ${theme.textTertiary} mb-1`}
                                                    >
                                                        One-Time
                                                    </div>
                                                    <div
                                                        className={`text-3xl font-bold ${theme.text}`}
                                                    >
                                                        {fmt(
                                                            suite.plans
                                                                ?.individual
                                                                .oneTime,
                                                        )}
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                        {selectedPlan === "professional" && (
                                            <div>
                                                <div
                                                    className={`text-sm ${theme.textTertiary} mb-1`}
                                                >
                                                    Annual
                                                </div>
                                                <div
                                                    className={`text-4xl font-bold ${theme.text}`}
                                                >
                                                    {fmt(
                                                        suite.plans
                                                            ?.professional
                                                            .annual,
                                                    )}
                                                    <span className="text-lg">
                                                        /yr
                                                    </span>
                                                </div>
                                                <div
                                                    className={`text-sm ${theme.textSecondary} mt-2`}
                                                >
                                                    + Priority support & 2
                                                    devices
                                                </div>
                                            </div>
                                        )}
                                        {selectedPlan === "enterprise" && (
                                            <div>
                                                <div
                                                    className={`text-sm ${theme.textTertiary} mb-1`}
                                                >
                                                    Annual (
                                                    {
                                                        suite.plans.enterprise
                                                            .seats
                                                    }{" "}
                                                    seats)
                                                </div>
                                                <div
                                                    className={`text-4xl font-bold ${theme.text}`}
                                                >
                                                    {fmt(
                                                        suite.plans?.enterprise
                                                            .annual,
                                                    )}
                                                    <span className="text-lg">
                                                        /yr
                                                    </span>
                                                </div>
                                                <div
                                                    className={`text-sm ${theme.textSecondary} mt-2`}
                                                >
                                                    Central license management +
                                                    SLA
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <button
                                        onClick={() => {
                                            const message = `Checkout coming soon!\n\nInterested in ${suite.name}?\nContact us at contact@nf-software.com`;
                                            alert(message);
                                        }}
                                        className={`block text-center w-full py-3 bg-gradient-to-r ${suite.gradient} text-white font-semibold rounded-full hover:shadow-xl transition mb-4 cursor-pointer`}
                                    >
                                        Get {suite.name}
                                    </button>

                                    <div className="space-y-2">
                                        <div
                                            className={`text-xs ${theme.textTertiary} mb-2`}
                                        >
                                            Includes:
                                        </div>
                                        {suite.tools.slice(0, 3).map((tool) => (
                                            <div
                                                key={tool.name}
                                                className="flex items-center gap-2"
                                            >
                                                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                <span
                                                    className={`text-sm ${theme.textSecondary}`}
                                                >
                                                    {tool.name}
                                                </span>
                                            </div>
                                        ))}
                                        {suite.tools.length > 3 && (
                                            <div
                                                className={`text-sm ${theme.textSecondary} pl-6`}
                                            >
                                                + {suite.tools.length - 3} more
                                                tools
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Comparison Table */}
                    <div
                        data-animate
                        className={`${theme.cardBg} rounded-3xl p-8 border ${theme.border} overflow-x-auto mb-16`}
                    >
                        <h2 className={`text-3xl font-bold ${theme.text} mb-8`}>
                            Full Pricing Breakdown
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[800px]">
                                <thead>
                                    <tr className={`border-b ${theme.border}`}>
                                        <th
                                            className={`text-left p-4 ${theme.text} font-semibold`}
                                        >
                                            Tool / Product
                                        </th>
                                        <th
                                            className={`text-left p-4 ${theme.text} font-semibold`}
                                        >
                                            Suite
                                        </th>
                                        <th
                                            className={`text-left p-4 ${theme.text} font-semibold`}
                                        >
                                            Annual
                                        </th>
                                        <th
                                            className={`text-left p-4 ${theme.text} font-semibold`}
                                        >
                                            One-Time
                                        </th>
                                        <th
                                            className={`text-left p-4 ${theme.text} font-semibold`}
                                        >
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {suites.map((suite) => {
                                        const IconComponent = getIconComponent(
                                            suite.icon,
                                        );
                                        return (
                                            <Fragment key={suite.slug}>
                                                {/* Suite Row */}
                                                <tr
                                                    className={`border-b ${theme.border} ${theme.hoverBg}`}
                                                >
                                                    <td className="p-4">
                                                        <div className="flex items-center gap-3">
                                                            <div
                                                                className={`w-10 h-10 rounded-lg bg-gradient-to-r ${suite.gradient} flex items-center justify-center`}
                                                            >
                                                                <IconComponent className="w-5 h-5 text-white" />
                                                            </div>
                                                            <div>
                                                                <div
                                                                    className={`font-semibold ${theme.text}`}
                                                                >
                                                                    {suite.name}
                                                                </div>
                                                                <div
                                                                    className={`text-sm ${theme.textSecondary}`}
                                                                >
                                                                    Complete
                                                                    suite
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="p-4">
                                                        <span
                                                            className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${suite.gradient} text-white`}
                                                        >
                                                            Bundle
                                                        </span>
                                                    </td>
                                                    <td className="p-4">
                                                        <span
                                                            className={`font-semibold ${theme.text}`}
                                                        >
                                                            {fmt(
                                                                suite.plans
                                                                    ?.individual
                                                                    .annual,
                                                            )}
                                                            /yr
                                                        </span>
                                                    </td>
                                                    <td className="p-4">
                                                        <span
                                                            className={`font-semibold ${theme.text}`}
                                                        >
                                                            {fmt(
                                                                suite.plans
                                                                    ?.individual
                                                                    .oneTime,
                                                            )}
                                                        </span>
                                                    </td>
                                                    <td className="p-4">
                                                        <span className="px-3 py-1 rounded-full text-xs border border-blue-500/50 text-blue-500">
                                                            Best Value
                                                        </span>
                                                    </td>
                                                </tr>
                                                {/* Tool Rows */}
                                                {suite.tools.map((tool) => (
                                                    <tr
                                                        key={
                                                            tool.slug ||
                                                            tool.name
                                                        }
                                                        className={`border-b ${theme.border} ${theme.hoverBg}`}
                                                    >
                                                        <td className="p-4 pl-16">
                                                            <div
                                                                className={`font-medium ${theme.text}`}
                                                            >
                                                                {tool.name}
                                                            </div>
                                                            <div
                                                                className={`text-sm ${theme.textSecondary}`}
                                                            >
                                                                {tool.tagline}
                                                            </div>
                                                        </td>
                                                        <td className="p-4">
                                                            <span
                                                                className={`text-sm ${theme.textSecondary}`}
                                                            >
                                                                {suite.name}
                                                            </span>
                                                        </td>
                                                        <td className="p-4">
                                                            <span
                                                                className={
                                                                    theme.text
                                                                }
                                                            >
                                                                {fmt(
                                                                    tool.plan
                                                                        ?.annual,
                                                                )}
                                                                /yr
                                                            </span>
                                                        </td>
                                                        <td className="p-4">
                                                            <span
                                                                className={
                                                                    theme.text
                                                                }
                                                            >
                                                                {fmt(
                                                                    tool.plan
                                                                        ?.oneTime,
                                                                )}
                                                            </span>
                                                        </td>
                                                        <td className="p-4">
                                                            <span
                                                                className={`px-2 py-1 rounded-full text-xs ${
                                                                    tool.status ===
                                                                    "Live"
                                                                        ? "bg-green-500/20 text-green-500"
                                                                        : tool.status ===
                                                                            "Beta"
                                                                          ? "bg-yellow-500/20 text-yellow-500"
                                                                          : "bg-blue-500/20 text-blue-500"
                                                                }`}
                                                            >
                                                                {tool.status}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </Fragment>
                                        );
                                    })}

                                    {/* Standalone Tools */}
                                    {standaloneTools.map((tool) => {
                                        const IconComponent = getIconComponent(
                                            tool.icon,
                                        );
                                        return (
                                            <tr
                                                key={tool.name}
                                                className={`border-b ${theme.border} ${theme.hoverBg}`}
                                            >
                                                <td className="p-4">
                                                    <div className="flex items-center gap-3">
                                                        <div
                                                            className={`w-10 h-10 rounded-lg bg-gradient-to-r ${tool.gradient} flex items-center justify-center`}
                                                        >
                                                            <IconComponent className="w-5 h-5 text-white" />
                                                        </div>
                                                        <div>
                                                            <div
                                                                className={`font-medium ${theme.text}`}
                                                            >
                                                                {tool.name}
                                                            </div>
                                                            <div
                                                                className={`text-sm ${theme.textSecondary}`}
                                                            >
                                                                {tool.tagline}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-4">
                                                    <span
                                                        className={`text-sm ${theme.textSecondary}`}
                                                    >
                                                        Standalone
                                                    </span>
                                                </td>
                                                <td className="p-4">
                                                    <span
                                                        className={theme.text}
                                                    >
                                                        {fmt(tool.plan?.annual)}
                                                        /yr
                                                    </span>
                                                </td>
                                                <td className="p-4">
                                                    <span
                                                        className={theme.text}
                                                    >
                                                        {fmt(
                                                            tool.plan?.oneTime,
                                                        )}
                                                    </span>
                                                </td>
                                                <td className="p-4">
                                                    <span
                                                        className={`px-2 py-1 rounded-full text-xs ${
                                                            tool.status ===
                                                            "Live"
                                                                ? "bg-green-500/20 text-green-500"
                                                                : tool.status ===
                                                                    "Beta"
                                                                  ? "bg-yellow-500/20 text-yellow-500"
                                                                  : "bg-blue-500/20 text-blue-500"
                                                        }`}
                                                    >
                                                        {tool.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* License Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div
                            data-animate
                            className={`${theme.cardBg} rounded-2xl p-8 border ${theme.border} hover:border-blue-500/50 transition`}
                        >
                            <Shield className="w-12 h-12 text-blue-500 mb-4" />
                            <h3
                                className={`text-xl font-bold ${theme.text} mb-3`}
                            >
                                Lifetime Updates
                            </h3>
                            <p className={`text-sm ${theme.textSecondary}`}>
                                All annual plans include continuous updates.
                                One-time licenses receive major version upgrades
                                at 40% off.
                            </p>
                        </div>
                        <div
                            data-animate
                            className={`${theme.cardBg} rounded-2xl p-8 border ${theme.border} hover:border-purple-500/50 transition`}
                        >
                            <Users className="w-12 h-12 text-purple-500 mb-4" />
                            <h3
                                className={`text-xl font-bold ${theme.text} mb-3`}
                            >
                                Team Plans
                            </h3>
                            <p className={`text-sm ${theme.textSecondary}`}>
                                Enterprise plans include central license
                                management, multi-user support, and priority
                                assistance.
                            </p>
                        </div>
                        <div
                            data-animate
                            className={`${theme.cardBg} rounded-2xl p-8 border ${theme.border} hover:border-green-500/50 transition`}
                        >
                            <Download className="w-12 h-12 text-green-500 mb-4" />
                            <h3
                                className={`text-xl font-bold ${theme.text} mb-3`}
                            >
                                Offline Activation
                            </h3>
                            <p className={`text-sm ${theme.textSecondary}`}>
                                All licenses support offline activation via
                                machine binding. Transfer licenses between
                                devices anytime.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section data-animate className="relative py-32 px-6">
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
                            <div
                                className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${theme.badgeGradient} rounded-full border border-blue-500/20 mb-6`}
                            >
                                <Sparkles className="w-4 h-4 text-blue-500" />
                                <span className="text-sm font-medium">
                                    Questions?
                                </span>
                            </div>

                            <h2
                                className={`text-4xl md:text-6xl font-bold ${theme.text} mb-6`}
                            >
                                Need a custom plan?
                            </h2>

                            <p
                                className={`text-lg md:text-xl ${theme.textSecondary} max-w-2xl mx-auto mb-8`}
                            >
                                For organizations with specific requirements or
                                larger teams, we offer custom enterprise
                                solutions.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center">
                                <a
                                    href="mailto:contact@nf-software.com"
                                    className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${theme.gradientPrimary} text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105`}
                                >
                                    Contact Sales
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                                <a
                                    href="#/products"
                                    className={`inline-flex items-center gap-2 px-8 py-4 ${theme.cardBg} border ${theme.border} font-semibold rounded-full hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105`}
                                >
                                    <Package className="w-5 h-5" />
                                    View Products
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Pricing;
