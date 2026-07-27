"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export function CodeBlock({ code, language = "tsx" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-8 rounded-xl border border-border overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="flex items-center justify-between bg-muted px-5 py-2.5 border-b border-border">
        <span className="text-xs text-muted-foreground font-mono">{language}</span>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          {copied ? (
            <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
              <Check className="size-3.5" /> Copied!
            </span>
          ) : (
            <span className="inline-flex items-center gap-1">
              <Copy className="size-3.5" /> Copy
            </span>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-5 text-sm leading-relaxed bg-card">
        <code className="font-mono">{code}</code>
      </pre>
    </div>
  );
}
