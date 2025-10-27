// ============================================================================
// FILE: src/hooks/useDarkMode.js
// ============================================================================
import { useState, useEffect } from "react";

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const preferred =
            localStorage.theme ??
            (matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light");
        setDarkMode(preferred === "dark");
    }, []);

    useEffect(() => {
        localStorage.theme = darkMode ? "dark" : "light";
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    return { darkMode, toggleDarkMode };
};
