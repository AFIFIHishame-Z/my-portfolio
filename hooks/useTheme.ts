import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<ThemeType>("dark");
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!theme) {
      const t = (localStorage.getItem("theme") as ThemeType) || "dark";
      setTheme(themes.includes(t) ? t : "dark");
      return;
    }

    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return {
    theme,
    setTheme,
  };
}

export const themes = ["light", "dark"] as const;
type ThemeType = typeof themes[number];
