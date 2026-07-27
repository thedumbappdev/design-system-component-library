import { Breadcrumb } from "@/components/docs/breadcrumb";
import { StatusBadge } from "@/components/docs/status-badge";
import type { Status } from "@/components/docs/status-badge";

type DocShellProps = {
  title: string;
  description: string;
  status: Status;
  children: React.ReactNode;
};

export function DocShell({ title, description, status, children }: DocShellProps) {
  return (
    <article className="max-w-none">
      <Breadcrumb />
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 id={title.toLowerCase()} className="text-3xl font-bold tracking-tight text-foreground">
            {title}
          </h1>
          <StatusBadge status={status} />
        </div>
        <p className="text-lg text-muted-foreground max-w-[65ch]">{description}</p>
      </div>
      {children}
    </article>
  );
}
