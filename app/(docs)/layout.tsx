import { Sidebar } from "@/components/docs/sidebar";
import { TopNav } from "@/components/docs/top-nav";
import { TableOfContents } from "@/components/docs/toc";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh]">
      <TopNav />
      <div className="container-main flex">
        <aside className="hidden lg:block w-64 shrink-0 border-r border-border">
          <Sidebar />
        </aside>
        <main className="flex-1 min-w-0 py-8 px-6 lg:px-10">
          {children}
        </main>
        <aside className="hidden xl:block w-56 shrink-0">
          <div className="pl-6 py-8">
            <TableOfContents />
          </div>
        </aside>
      </div>
    </div>
  );
}
