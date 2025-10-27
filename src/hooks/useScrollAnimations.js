// ============================================================================
// FILE: src/hooks/useScrollAnimations.js
// ============================================================================
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollAnimations = () => {
    const location = useLocation();

    useEffect(() => {
        // Small delay to ensure DOM is updated after route change
        const timeoutId = setTimeout(() => {
            const els = document.querySelectorAll("[data-animate]");
            if (!els.length) return;

            const io = new IntersectionObserver(
                (entries, obs) => {
                    for (const e of entries) {
                        if (e.isIntersecting) {
                            e.target.classList.add("is-visible");
                            obs.unobserve(e.target);
                        }
                    }
                },
                { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
            );
            els.forEach((el) => io.observe(el));

            return () => io.disconnect();
        }, 50);

        return () => clearTimeout(timeoutId);
    }, [location.pathname]); // Re-run when route changes
};
