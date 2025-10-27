// ============================================================================
// FILE: src/hooks/useMouseTracking.js
// ============================================================================
import { useEffect } from "react";

export const useMouseTracking = () => {
    useEffect(() => {
        let raf = 0;
        const onMove = (e) => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                document.documentElement.style.setProperty(
                    "--mx",
                    `${e.clientX}px`,
                );
                document.documentElement.style.setProperty(
                    "--my",
                    `${e.clientY}px`,
                );
            });
        };
        window.addEventListener("mousemove", onMove, { passive: true });
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("mousemove", onMove);
        };
    }, []);
};
