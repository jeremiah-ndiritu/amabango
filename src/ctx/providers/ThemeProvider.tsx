import { useLayoutEffect, useState, type ReactNode } from "react";
import { ThemeContext, type Theme } from "../contexts/ThemeContentext";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("site-theme");
    if (saved === "light" || saved === "dark") {
      return saved as Theme;
    }
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    if (prefersDark) return "dark";
    else return "light";
  });
  useLayoutEffect(() => {
    document.documentElement.style.colorScheme = theme;
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("site-theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
