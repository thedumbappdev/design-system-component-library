import { cn } from "@/lib/utils";

export type Status = "stable" | "beta" | "deprecated" | "new";

const statusStyles: Record<Status, string> = {
  stable: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
  beta: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800",
  deprecated: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800",
  new: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800",
};

const statusDot: Record<Status, string> = {
  stable: "bg-emerald-500",
  beta: "bg-amber-500",
  deprecated: "bg-red-500",
  new: "bg-blue-500",
};

export function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium", statusStyles[status])}>
      <span className={cn("size-1.5 rounded-full", statusDot[status])} />
      {status}
    </span>
  );
}
