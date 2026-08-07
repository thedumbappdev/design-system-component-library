"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Search } from "lucide-react";
import { navigation, type NavItem } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

const STATUS_COLORS: Record<string, { dot: string; label: string }> = {
  stable:     { dot: "bg-emerald-500", label: "text-emerald-700 dark:text-emerald-400" },
  beta:       { dot: "bg-amber-500",   label: "text-amber-700 dark:text-amber-400" },
  new:        { dot: "bg-blue-500",    label: "text-blue-700 dark:text-blue-400" },
  deprecated: { dot: "bg-red-400",     label: "text-red-600 dark:text-red-400" },
};

type FlatItem = { title: string; href: string; group: string; status?: string };
function flattenNav(items: NavItem[]): FlatItem[] {
  const result: FlatItem[] = [];
  for (const item of items) {
    if (item.href) {
      result.push({ title: item.title, href: item.href, group: "Top", status: item.status });
    }
    if (item.children) {
      for (const child of item.children) {
        if (child.href) {
          result.push({ title: child.title, href: child.href, group: item.title, status: child.status });
        }
      }
    }
  }
  return result;
}

const ALL_ITEMS = flattenNav(navigation);
const DRAWER_EASE = [0.32, 0.72, 0, 1] as const;

export function MobileNavOverlay({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = query.trim()
    ? ALL_ITEMS.filter((i) =>
        i.title.toLowerCase().includes(query.toLowerCase()) ||
        i.group.toLowerCase().includes(query.toLowerCase())
      )
    : null;

  useEffect(() => {
    if (open) {
      setQuery("");
      const t = setTimeout(() => inputRef.current?.focus(), 260);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleLinkClick = useCallback(() => onClose(), [onClose]);
  const groups   = navigation.filter((n) => n.children && n.children.length > 0);
  const topItems = navigation.filter((n) => n.href);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            aria-hidden
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          />

          {/* Sheet — explicit solid white/dark-surface via inline style to guarantee opacity */}
          <motion.div
            key="sheet"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4, ease: DRAWER_EASE }}
            style={{ backgroundColor: "var(--card, #ffffff)" }}
            className="fixed bottom-0 left-0 right-0 z-50 lg:hidden max-h-[90dvh] flex flex-col rounded-t-3xl border-t border-neutral-200 dark:border-neutral-800 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.25)] dark:shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.6)]"
          >
            {/* Drag handle */}
            <div className="flex justify-center pt-3 pb-1 shrink-0">
              <div className="w-10 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-2 pb-3 shrink-0">
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 select-none">
                Navigation
              </p>
              <button
                onClick={onClose}
                aria-label="Close navigation"
                className="flex items-center justify-center size-8 rounded-xl text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 active:scale-95 transition-all duration-150"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Search bar */}
            <div className="px-4 pb-3 shrink-0">
              <div className="flex items-center gap-2.5 rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-3.5 py-2.5 focus-within:border-indigo-500/50 dark:focus-within:border-indigo-400/50 focus-within:ring-2 focus-within:ring-indigo-500/10 dark:focus-within:ring-indigo-400/10 transition-all duration-200">
                <Search className="size-3.5 text-neutral-400 dark:text-neutral-500 shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Filter navigation…"
                  aria-label="Filter navigation"
                  className="flex-1 bg-transparent text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 outline-none"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                    className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
                  >
                    <X className="size-3" />
                  </button>
                )}
              </div>
            </div>

            {/* Scroll area */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-6">

              {filtered !== null ? (
                <div className="space-y-0.5">
                  {filtered.length === 0 ? (
                    <p className="py-8 text-center text-sm text-neutral-500 dark:text-neutral-400">
                      No results for &ldquo;{query}&rdquo;
                    </p>
                  ) : (
                    filtered.map((item, i) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.025, duration: 0.2, ease: "easeOut" }}
                      >
                        <NavLink item={item} pathname={pathname} onClick={handleLinkClick} showGroup />
                      </motion.div>
                    ))
                  )}
                </div>
              ) : (
                <div className="space-y-5">
                  {/* Top-level links */}
                  <section>
                    <div className="space-y-0.5">
                      {topItems.map((item, i) => (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.08 + i * 0.04, duration: 0.28, ease: "easeOut" }}
                        >
                          <NavLink
                            item={{ title: item.title, href: item.href!, group: "Top", status: item.status }}
                            pathname={pathname}
                            onClick={handleLinkClick}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </section>

                  {/* Groups */}
                  {groups.map((group, gi) => (
                    <motion.section
                      key={group.title}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.14 + gi * 0.06, duration: 0.28, ease: "easeOut" }}
                    >
                      <p className="mb-1.5 px-3 text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 select-none">
                        {group.title}
                      </p>
                      <div className="space-y-0.5">
                        {group.children!.map((child, ci) => (
                          <motion.div
                            key={child.href}
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.18 + gi * 0.06 + ci * 0.03, duration: 0.22, ease: "easeOut" }}
                          >
                            <NavLink
                              item={{ title: child.title, href: child.href!, group: group.title, status: child.status }}
                              pathname={pathname}
                              onClick={handleLinkClick}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </motion.section>
                  ))}
                </div>
              )}

              <div style={{ height: "env(safe-area-inset-bottom, 0px)" }} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function NavLink({
  item,
  pathname,
  onClick,
  showGroup = false,
}: {
  item: FlatItem;
  pathname: string;
  onClick: () => void;
  showGroup?: boolean;
}) {
  const isActive = item.href === pathname;
  const statusStyle = item.status ? STATUS_COLORS[item.status] : null;

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={cn(
        "group flex items-center justify-between rounded-xl px-3 py-2.5",
        "text-sm font-medium transition-all duration-150 active:scale-[0.98]",
        isActive
          ? "bg-indigo-50 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300"
          : "text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
      )}
    >
      <div className="flex items-center gap-2.5 min-w-0">
        {isActive && (
          <span className="size-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 shrink-0" />
        )}
        <span className="truncate">{item.title}</span>
        {showGroup && !isActive && (
          <span className="text-[10px] text-neutral-400 dark:text-neutral-500 font-normal shrink-0">
            {item.group}
          </span>
        )}
      </div>
      {statusStyle && item.status && (
        <span className={cn("flex items-center gap-1 text-[10px] font-semibold shrink-0", statusStyle.label)}>
          <span className={cn("size-1 rounded-full", statusStyle.dot)} />
          {item.status}
        </span>
      )}
    </Link>
  );
}
