// ============================================================================
// FILE: src/utils/theme.js
// ============================================================================
export const getTheme = (darkMode) => ({
    bg: darkMode ? "bg-black" : "bg-white",
    text: darkMode ? "text-white" : "text-gray-900",
    textSecondary: darkMode ? "text-gray-400" : "text-gray-600",
    textTertiary: "text-gray-500",
    navBg: darkMode ? "bg-black/80" : "bg-white/80",
    border: darkMode ? "border-gray-800" : "border-gray-200",
    cardBg: darkMode ? "bg-gray-900" : "bg-gray-50",
    hoverBg: darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100",

    // brand accents
    accentText: "text-brand-500",
    accentBg: "bg-brand-500",
    accentRing: "ring-brand-500/40",
    successBadge: "border-leaf-500/50 text-leaf-500 bg-leaf-500/10",
    gradient: "from-brand-500 via-brand-400 to-brand-300",
    gradientDeep: "from-brand-700 to-brand-500",
});
