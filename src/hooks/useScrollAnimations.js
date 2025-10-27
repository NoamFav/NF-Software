// ============================================================================
// FILE: src/hooks/useScrollAnimations.js
// ============================================================================
import { useEffect } from "react";

export const useScrollAnimations = () => {
    useEffect(() => {
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
    }, []);
};
