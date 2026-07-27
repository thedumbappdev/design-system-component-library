"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const showcaseRows = [
  {
    label: "Buttons",
    items: [
      <Button key="default" size="sm">Primary</Button>,
      <Button key="secondary" variant="secondary" size="sm">Secondary</Button>,
      <Button key="outline" variant="outline" size="sm">Outline</Button>,
      <Button key="ghost" variant="ghost" size="sm">Ghost</Button>,
    ],
  },
  {
    label: "Badges",
    items: [
      <Badge key="default" variant="default">Default</Badge>,
      <Badge key="secondary" variant="secondary">Secondary</Badge>,
      <Badge key="outline" variant="outline">Outline</Badge>,
      <Badge key="destructive" variant="destructive">Destructive</Badge>,
    ],
  },
  {
    label: "Cards",
    items: [
      <Card key="card1" className="w-44 shadow-sm">
        <CardHeader className="p-3 pb-0">
          <CardTitle className="text-sm">Card Title</CardTitle>
          <CardDescription className="text-xs">Card description here</CardDescription>
        </CardHeader>
        <CardContent className="p-3 pt-2">
          <Button size="sm" className="w-full">Action</Button>
        </CardContent>
      </Card>,
      <Card key="card2" className="w-44 shadow-sm">
        <CardHeader className="p-3 pb-0">
          <CardTitle className="text-sm">Settings</CardTitle>
          <CardDescription className="text-xs">Configure your pref</CardDescription>
        </CardHeader>
        <CardContent className="p-3 pt-2 flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">Cancel</Button>
          <Button size="sm" className="flex-1">Save</Button>
        </CardContent>
      </Card>,
    ],
  },
];

export function ComponentShowcase() {
  return (
    <section className="border-b border-border py-20">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
            <Sparkles className="size-3.5 text-primary" />
            Live preview
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Components in action
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Every component ships with multiple variants, states, and full keyboard support.
          </p>
        </motion.div>
        <div className="space-y-8">
          {showcaseRows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {row.label}
              </div>
              <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-border/50 bg-card p-5 lg:p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_30px_-12px_rgba(79,70,229,0.08)]">
                {row.items}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 text-center"
        >
          <Link href="/components">
            <Button>Browse all components <Sparkles className="size-4" /></Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}