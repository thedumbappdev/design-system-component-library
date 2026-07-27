"use client";

import { cn } from "@/lib/utils";

export function ComponentPreview({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "my-8 flex min-h-[240px] w-full items-center justify-center rounded-xl border border-border bg-[radial-gradient(#e7e5e4_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] p-10",
        "[background-size:20px_20px] shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}
