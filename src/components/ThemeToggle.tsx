"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import React, { useEffect } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const isDark = (resolvedTheme ?? theme) === "dark";

  // Save theme preference to localStorage when it changes
  useEffect(() => {
    if (theme) {
      localStorage.setItem('theme-preference', theme);
    }
  }, [theme]);

  return (
    <button
      aria-label="Toggle theme"
      className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm font-medium transition-colors hover:bg-black/5 dark:hover:bg-white/10"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
      <span className="ml-2 sm:inline">Dark/Light Mode</span>
    </button>
  );
}