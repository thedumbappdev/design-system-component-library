"use client";

import { motion } from "motion/react";
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <Breadcrumb />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10"
      >
        <div className="flex items-center gap-3 mb-3">
          <h1 id={title.toLowerCase().replace(/\s+/g, "-")} className="text-3xl font-bold tracking-tight text-foreground">
            {title}
          </h1>
          <StatusBadge status={status} />
        </div>
        <p className="text-lg text-muted-foreground max-w-[65ch] leading-relaxed">{description}</p>
      </motion.div>
      <div className="space-y-10">
        {children}
      </div>
    </article>
  );
}
