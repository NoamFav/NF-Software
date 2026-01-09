// ============================================================================
// FILE: src/hooks/useScrollAnimations.js (FIXED)
// ============================================================================
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDarkMode } from "./useDarkMode";

export const useScrollAnimations = () => {
    const location = useLocation();
    const { darkMode } = useDarkMode();

    useEffect(() => {
        // Small delay to ensure DOM is updated after route change or theme change
        const timeoutId = setTimeout(() => {
            const els = document.querySelectorAll("[data-animate]");
            if (!els.length) return;

            // Reset all animations first
            els.forEach((el) => {
                el.classList.remove("is-visible");
            });

            const io = new IntersectionObserver(
                (entries) => {
                    for (const e of entries) {
                        if (e.isIntersecting) {
                            e.target.classList.add("is-visible");
                        }
                    }
                },
                { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
            );

            els.forEach((el) => io.observe(el));

            return () => io.disconnect();
        }, 50);

        return () => clearTimeout(timeoutId);
    }, [location.pathname, darkMode]); // Re-run when route changes OR theme changes
};
