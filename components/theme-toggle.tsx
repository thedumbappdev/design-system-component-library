"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) return <div className={cn("size-9", className)} />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "inline-flex items-center justify-center rounded-full size-9",
        "border border-border bg-background/80 backdrop-blur-sm",
        "text-muted-foreground hover:text-foreground hover:border-primary/30",
        "transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
        "active:scale-[0.9]",
        className,
      )}
      aria-label="Toggle theme"
    >
      <span className="transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
        {theme === "dark" ? (
          <Sun className="size-4" />
        ) : (
          <Moon className="size-4" />
        )}
      </span>
    </button>
  );
}
