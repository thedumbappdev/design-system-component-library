export function VariantGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {children}
    </div>
  );
}

export function VariantCell({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_30px_-12px_rgba(79,70,229,0.1)]">
      <div className="flex items-center justify-center min-h-[44px] w-full">
        {children}
      </div>
      <span className="text-xs text-muted-foreground font-medium tracking-wide">{label}</span>
    </div>
  );
}
