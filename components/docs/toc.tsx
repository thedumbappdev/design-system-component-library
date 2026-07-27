"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Heading = { id: string; text: string; level: number };

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3")).map((el) => ({
      id: el.id,
      text: el.textContent || "",
      level: Number(el.tagName[1]),
    }));
    setHeadings(elements);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -80% 0px" },
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-20">
      <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        On this page
      </h4>
      <ul className="space-y-1">
        {headings.map((h) => (
          <li key={h.id} style={{ paddingLeft: h.level === 3 ? "1rem" : "0" }}>
            <a
              href={`#${h.id}`}
              className={cn(
                "block text-sm transition-colors py-1",
                activeId === h.id
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
