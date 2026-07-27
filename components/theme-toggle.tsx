"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) return <div className={cn("size-5", className)} />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "inline-flex items-center justify-center rounded-md p-2",
        "text-muted-foreground hover:text-foreground hover:bg-muted",
        "transition-colors duration-150",
        className,
      )}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </button>
  );
}
