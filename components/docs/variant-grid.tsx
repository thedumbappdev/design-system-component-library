export function VariantGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {children}
    </div>
  );
}

export function VariantCell({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-lg border border-border p-4">
      <div className="flex items-center justify-center min-h-[40px]">
        {children}
      </div>
      <span className="text-xs text-muted-foreground font-medium">{label}</span>
    </div>
  );
}
