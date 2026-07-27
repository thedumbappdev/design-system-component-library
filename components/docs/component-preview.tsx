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
        "my-6 flex min-h-[200px] w-full items-center justify-center rounded-lg border border-border bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] p-10",
        "[background-size:16px_16px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
