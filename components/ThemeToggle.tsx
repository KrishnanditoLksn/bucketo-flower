"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // Memastikan komponen hanya dirender di sisi client setelah mount
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Placeholder button saat proses SSR / hidrasi awal (mencegah Layout Shift)
  if (!mounted) {
    return (
      <button
        aria-hidden="true"
        tabIndex={-1}
        className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 dark:border-white/20 transition-colors"
      >
        <span className="h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}