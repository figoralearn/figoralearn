import {
    THEME_CLASS_PREFIX,
    DEFAULT_THEME,
  } from "./theme-config";
  
  function themeInit() {
    try {
      const prefix = "__THEME_PREFIX__";
      const defaultTheme = "__DEFAULT_THEME__";
  
      function getCookie(name:string) {
        const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
        return match ? decodeURIComponent(match[2]) : null;
      }
  
      let theme = getCookie("theme");
  
      if (!theme) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          theme = "dark";
        } else {
          theme = defaultTheme;
        }
        // set cookie for next SSR
        document.cookie = "theme=" + encodeURIComponent(theme) + "; path=/; max-age=31536000";
      }
  
      const root = document.documentElement;
      root.classList.forEach((c) => {
        if (c === "dark" || c.startsWith(prefix)) root.classList.remove(c);
      });
  
      if (theme !== "light") root.classList.add(theme);
      root.setAttribute("data-theme", theme);
    } catch {
      // ignore
    }
  }
  
  export const themeInitScript = `(${themeInit.toString()})();`
    .replace("__THEME_PREFIX__", THEME_CLASS_PREFIX)
    .replace("__DEFAULT_THEME__", DEFAULT_THEME);
  