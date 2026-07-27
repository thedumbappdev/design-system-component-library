"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigation, type NavItem as NavItemType } from "@/lib/navigation";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

function NavGroup({ item, pathname, depth = 0 }: { item: NavItemType; pathname: string; depth?: number }) {
  const [expanded, setExpanded] = useState(true);
  const hasChildren = item.children && item.children.length > 0;
  const isActive = item.href === pathname;
  const isChildActive = hasChildren && item.children!.some((c) => c.href === pathname);

  if (!hasChildren) {
    return (
      <Link
        href={item.href!}
        className={cn(
          "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
          isActive
            ? "bg-primary/10 text-primary font-medium"
            : "text-muted-foreground hover:text-foreground hover:bg-muted",
        )}
      >
        {item.title}
        {item.status && <StatusBadge status={item.status} />}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className={cn(
          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors",
          isChildActive ? "text-foreground" : "text-muted-foreground",
          "hover:text-foreground hover:bg-muted",
        )}
      >
        {item.title}
        <ChevronDown
          className={cn("size-4 transition-transform", expanded && "rotate-180")}
        />
      </button>
      {expanded && (
        <div className="ml-3 mt-1 space-y-1 border-l border-border pl-3">
          {item.children!.map((child) => (
            <NavGroup key={child.href || child.title} item={child} pathname={pathname} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    stable: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    beta: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    deprecated: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    new: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  };
  return (
    <span className={cn("ml-auto rounded px-1.5 py-0.5 text-[10px] font-medium uppercase", colors[status])}>
      {status}
    </span>
  );
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1 py-4">
      {navigation.map((item) => (
        <NavGroup key={item.title} item={item} pathname={pathname} />
      ))}
    </nav>
  );
}
