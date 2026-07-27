export type PropDef = {
  name: string;
  type: string;
  default: string;
  description: string;
};

export function PropsTable({ props }: { props: PropDef[] }) {
  return (
    <div className="my-8 overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th className="px-4 py-3 text-left font-medium text-foreground">Prop</th>
            <th className="px-4 py-3 text-left font-medium text-foreground">Type</th>
            <th className="px-4 py-3 text-left font-medium text-foreground">Default</th>
            <th className="px-4 py-3 text-left font-medium text-foreground">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name} className="border-b border-border last:border-0">
              <td className="px-4 py-3 font-mono text-xs text-primary">{prop.name}</td>
              <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{prop.type}</td>
              <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{prop.default}</td>
              <td className="px-4 py-3 text-muted-foreground">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
