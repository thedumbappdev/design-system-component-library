"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, GitCommit } from "lucide-react";

const entries = [
  { version: "0.1.0", date: "July 2026", items: ["14 components", "6 foundation pages", "Light + Dark theme"] },
];

export function ChangelogPreview() {
  return (
    <section className="py-20">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between mb-8"
        >
          <h2 className="text-2xl font-bold tracking-tight">Recent Updates</h2>
          <Link
            href="/changelog"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all duration-300 hover:text-primary/80"
          >
            View all <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-border/50 bg-card p-6 lg:p-8 transition-all duration-500 hover:shadow-[0_0_40px_-12px_rgba(79,70,229,0.1)]"
        >
          {entries.map((entry) => (
            <div key={entry.version} className="flex flex-col sm:flex-row items-start gap-5">
              <div className="shrink-0 flex sm:flex-col items-center sm:items-start gap-3 sm:gap-2">
                <div className="inline-flex items-center gap-2 rounded-xl bg-primary/10 px-4 py-2 border border-primary/10">
                  <GitCommit className="size-3.5 text-primary" />
                  <span className="text-sm font-semibold text-foreground">v{entry.version}</span>
                </div>
                <div className="text-xs text-muted-foreground sm:text-center sm:w-full">{entry.date}</div>
              </div>
              <div className="flex-1">
                <ul className="grid sm:grid-cols-3 gap-3">
                  {entry.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground rounded-xl border border-border/50 bg-muted/30 p-3 transition-colors hover:bg-muted/50">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Sparkles className="size-3 text-primary" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}