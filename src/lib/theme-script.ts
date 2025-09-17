import {
    THEME_CLASS_PREFIX,
    DEFAULT_THEME,
  } from "./theme-config";
  
  // Function that will be stringified
  function themeInit() {
    try {
      const prefix = "__THEME_PREFIX__";
      const defaultTheme = "__DEFAULT_THEME__";
  
      let theme = localStorage.getItem("theme");
      if (!theme) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          theme = "dark";
        } else {
          theme = defaultTheme;
        }
      }
  
      const root = document.documentElement;
  
      // Clean old classes
      root.classList.forEach((c) => {
        if (c === "dark" || c.startsWith(prefix)) {
          root.classList.remove(c);
        }
      });
  
      // Apply
      if (theme !== "light") root.classList.add(theme);
      root.setAttribute("data-theme", theme);
  
    } catch {
      // ignore errors safely
    }
  }
  
  // Build script string
  export const themeInitScript = `(${themeInit.toString()})();`
    .replace("__THEME_PREFIX__", THEME_CLASS_PREFIX)
    .replace("__DEFAULT_THEME__", DEFAULT_THEME);
  