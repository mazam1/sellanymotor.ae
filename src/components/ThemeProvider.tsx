"use client";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import React, { useEffect } from "react";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Apply transitions only after hydration to avoid transition flashing on page load
  useEffect(() => {
    document.body.classList.add('transition-ready');
    
    // Check for saved theme preference in localStorage
    const savedTheme = localStorage.getItem('theme-preference');
    if (savedTheme) {
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Set default theme based on system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', prefersDark);
      localStorage.setItem('theme-preference', prefersDark ? 'dark' : 'light');
    }
  }, []);

  return (
    <NextThemeProvider 
      attribute="class" 
      defaultTheme="light" 
      enableSystem
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemeProvider>
  );
}