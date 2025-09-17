"use client";

import { useEffect, useState } from "react";
import availableThemesJson from "@/generated/available-themes.json";

type ThemeName = (typeof availableThemesJson)[number];

function removeAllThemeClasses(root: HTMLElement) {
  root.classList.remove("dark");
  Array.from(root.classList)
    .filter((c) => c.startsWith("theme-"))
    .forEach((c) => root.classList.remove(c));
}

function applyTheme(theme: ThemeName) {
  const root = document.documentElement;
  removeAllThemeClasses(root);
  if (theme !== "light") root.classList.add(theme);
  root.setAttribute("data-theme", theme);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeName>("light");
  const [availableThemes] = useState<ThemeName[]>(availableThemesJson);

  // Sync theme from DOM
  useEffect(() => {
    const root = document.documentElement;
    const domTheme =
      Array.from(root.classList).find(
        (c) => c === "dark" || c.startsWith("theme-"),
      ) ||
      root.getAttribute("data-theme") ||
      "light";

    setTheme(domTheme as ThemeName);
  }, []);

  const toggleTheme = () => {
    const list = availableThemes;
    const currentIndex = Math.max(0, list.indexOf(theme));
    const nextTheme = list[(currentIndex + 1) % list.length] || "light";
    applyTheme(nextTheme);
    setTheme(nextTheme);
    try {
      localStorage.setItem("theme", nextTheme);
    } catch {}
  };

  return (
    <button
      type="button"
      aria-label={`Switch theme (current: ${theme})`}
      onClick={toggleTheme}
      className="bg-primary fixed right-4 bottom-4 z-50 rounded-full px-4 py-2 text-white shadow-md"
    >
      {theme === "dark" ? "☀️" : theme.startsWith("theme-") ? "🎨" : "🌙"}
    </button>
  );
}
