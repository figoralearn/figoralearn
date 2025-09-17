// scripts/scan-themes.ts
import fs from "node:fs";
import path from "node:path";
import {
  THEME_CLASS_PREFIX,
  THEME_CSS_RELATIVE_PATH,
  DEFAULT_THEMES,
} from "../src/lib/theme-config";

function scanThemeClassesFromCss(cssContent: string, prefix: string): string[] {
  const themeClassRegex = new RegExp(`\\.${prefix}[a-zA-Z0-9_-]+\\b`, "g");
  const matches = cssContent.match(themeClassRegex) || [];
  return Array.from(new Set(matches.map((m) => m.replace(/^\./, ""))));
}

function getAvailableThemes(): string[] {
  try {
    const cssPath = path.join(process.cwd(), THEME_CSS_RELATIVE_PATH);
    const content = fs.readFileSync(cssPath, "utf8");
    const scanned = scanThemeClassesFromCss(content, THEME_CLASS_PREFIX);
    return Array.from(new Set([...DEFAULT_THEMES, ...scanned]));
  } catch {
    return DEFAULT_THEMES;
  }
}

const themes = getAvailableThemes();
const outPath = path.join(process.cwd(), "src/generated/available-themes.json");

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(themes, null, 2));

console.log("✅ Themes written to", outPath, "\n", themes);
