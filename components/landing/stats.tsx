const stats = [
  { value: "14", label: "Components", description: "Production-ready UI components" },
  { value: "6", label: "Foundations", description: "Design tokens and guidelines" },
  { value: "100%", label: "Accessible", description: "WCAG AA compliant by default" },
  { value: "2", label: "Themes", description: "Light + Dark mode support" },
];

export function Stats() {
  return (
    <section className="border-b border-border py-16">
      <div className="container-main">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold tracking-tight text-foreground">{stat.value}</div>
              <div className="mt-1 text-sm font-medium text-foreground">{stat.label}</div>
              <div className="mt-0.5 text-xs text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
