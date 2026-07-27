"use client";

import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useState } from "react";
import { useMounted } from "@/hooks/use-mounted";

const stats = [
  { value: 14, suffix: "", label: "Components", description: "Production-ready UI components", accent: true },
  { value: 6, suffix: "", label: "Foundations", description: "Design tokens and guidelines", accent: false },
  { value: 100, suffix: "%", label: "Accessible", description: "WCAG AA compliant by default", accent: false },
  { value: 2, suffix: "", label: "Themes", description: "Light + Dark mode support", accent: false },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState("0");
  const mounted = useMounted();

  useEffect(() => {
    if (!mounted) return;
    const controls = animate(count, target, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
    });
    const unsubscribe = rounded.on("change", (v) => {
      setDisplay(v + suffix);
    });
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [target, suffix, count, rounded, mounted]);

  if (!mounted) return <>{target}{suffix}</>;

  return <>{display}</>;
}

export function Stats() {
  return (
    <section className="border-b border-border py-20">
      <div className="container-main">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-2xl border p-6 lg:p-8 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.02] ${
                stat.accent
                  ? "border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5"
                  : "border-border bg-card"
              }`}
            >
              <div className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground tabular-nums">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-sm font-semibold text-foreground">{stat.label}</div>
              <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{stat.description}</div>
              {stat.accent && (
                <div className="absolute -top-px -right-px size-16 rounded-bl-3xl rounded-tr-2xl bg-gradient-to-bl from-primary/20 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}