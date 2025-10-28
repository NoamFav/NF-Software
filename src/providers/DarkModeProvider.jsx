import { createContext, useLayoutEffect, useEffect, useState } from "react";

const Ctx = createContext({
    darkMode: false,
    theme: "light",
    toggleDarkMode: () => {},
});

export default function DarkModeProvider({ children }) {
    const [theme, setTheme] = useState(
        () =>
            localStorage.theme ??
            (matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light"),
    );
    useLayoutEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);
    useEffect(() => {
        localStorage.theme = theme;
    }, [theme]);
    const toggleDarkMode = () =>
        setTheme((t) => (t === "dark" ? "light" : "dark"));
    return (
        <Ctx.Provider
            value={{ darkMode: theme === "dark", theme, toggleDarkMode }}
        >
            {children}
        </Ctx.Provider>
    );
}

export { Ctx };
