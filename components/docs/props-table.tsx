export type PropDef = {
  name: string;
  type: string;
  default: string;
  description: string;
};

export function PropsTable({ props }: { props: PropDef[] }) {
  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-border shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th className="px-5 py-3.5 text-left font-semibold text-foreground text-xs uppercase tracking-wider">Prop</th>
            <th className="px-5 py-3.5 text-left font-semibold text-foreground text-xs uppercase tracking-wider">Type</th>
            <th className="px-5 py-3.5 text-left font-semibold text-foreground text-xs uppercase tracking-wider">Default</th>
            <th className="px-5 py-3.5 text-left font-semibold text-foreground text-xs uppercase tracking-wider">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name} className="border-b border-border last:border-0 transition-colors hover:bg-muted/30">
              <td className="px-5 py-3.5 font-mono text-xs font-medium text-primary">{prop.name}</td>
              <td className="px-5 py-3.5 font-mono text-xs text-muted-foreground">{prop.type}</td>
              <td className="px-5 py-3.5 font-mono text-xs text-muted-foreground">{prop.default}</td>
              <td className="px-5 py-3.5 text-muted-foreground">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
