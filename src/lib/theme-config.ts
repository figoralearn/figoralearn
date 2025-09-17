// src/lib/theme-config.ts

export const THEME_CLASS_PREFIX =
  process.env.THEME_CLASS_PREFIX || "theme-";

export const THEME_CSS_RELATIVE_PATH =
  process.env.THEME_CSS_PATH || "src/app/css/themes.css";

export const DEFAULT_THEMES = ["light", "dark"];

export const DEFAULT_THEME =
  process.env.DEFAULT_THEME || "light"; // Optional override
