"use client";

import { useThemeStore } from "@/store/themeStore";

export function ThemeToggleButton() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button onClick={toggleTheme} className="p-2 border rounded">
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
