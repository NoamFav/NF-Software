export const getTheme = (darkMode) => ({
    // Backgrounds
    bg: darkMode ? "bg-black" : "bg-zinc-50",
    cardBg: darkMode ? "bg-gray-900" : "bg-white shadow-sm ring-1 ring-black/5",
    navBg: darkMode ? "bg-black/80" : "bg-white/80",
    hoverBg: darkMode ? "hover:bg-gray-800" : "hover:bg-black/5",

    // Text colors
    text: darkMode ? "text-white" : "text-gray-700",
    textSecondary: darkMode ? "text-gray-400" : "text-gray-600",
    textTertiary: "text-gray-500",

    // Borders
    border: darkMode ? "border-gray-800" : "border-black/10",

    // Input/Form elements
    bgInput: darkMode ? "bg-black" : "bg-white",

    // Buttons
    bgButton: darkMode ? "bg-gray-800" : "bg-gray-100",
    borderButton: darkMode ? "border-gray-700" : "border-black/10",

    // Primary button
    bgPrimary: darkMode ? "bg-white" : "bg-neutral-900",
    textPrimary: darkMode ? "text-black" : "text-white",

    // Gradient blobs (decorative backgrounds)
    blobBlue: "bg-blue-500",
    blobPurple: "bg-purple-500",
    blobPink: "bg-pink-500",

    textBlue: "text-blue-500",

    // Cursor glow gradient
    cursorGlow: darkMode ? "rgba(99,102,241,.15)" : "rgba(99,102,241,.08)",

    // Primary gradients (commonly used)
    gradientPrimary: "from-blue-500 to-purple-500",
    ligthGradientPrimary: "from-blue-500/20 to-purple-500/20",
    lightGradient: "from-blue-400 to-purple-400",
    gradientSecondary: "from-purple-500 to-pink-500",
    gradientAccent: "from-blue-500 via-purple-500 to-pink-500",
    lightGradientAccent: "from-blue-400 via-purple-400 to-pink-400",
    gradientThirdary: "from-purple-400 to-pink-400",
    gradientQuaterly: "from-pink-400 to-orange-400",
    gradientQuintly: "from-orange-400 to-red-400",
    // Badge/Tag gradients
    badgeGradient: "from-blue-500/10 to-purple-500/10",
    secondBadgeGradient: "from-blue-500/5 to-purple-500/5",
    selectBg: darkMode ? "bg-black" : "bg-white",
    hoverBorder: darkMode ? "hover:border-gray-600" : "hover:border-gray-300",
});
