import { CheckCircle2, XCircle } from "lucide-react";

export function UsageGuidelines({ do: doList, dont: dontList }: { do: string[]; dont: string[] }) {
  return (
    <div className="my-8 grid gap-6 sm:grid-cols-2">
      <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 dark:border-emerald-900 dark:bg-emerald-950/20 p-5">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400 mb-3">
          <CheckCircle2 className="size-4" />
          Use when
        </h3>
        <ul className="space-y-2">
          {doList.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
              <span className="mt-1.5 size-1.5 rounded-full bg-emerald-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-red-200 bg-red-50/50 dark:border-red-900 dark:bg-red-950/20 p-5">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-red-600 dark:text-red-400 mb-3">
          <XCircle className="size-4" />
          Don't use when
        </h3>
        <ul className="space-y-2">
          {dontList.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
              <span className="mt-1.5 size-1.5 rounded-full bg-red-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
