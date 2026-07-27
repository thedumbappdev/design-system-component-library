"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Search } from "lucide-react";
import { SearchCommand } from "@/components/docs/search-command";
import { useState } from "react";

export function TopNav() {
	const [searchOpen, setSearchOpen] = useState(false);

	return (
		<>
			<header className="sticky top-4 z-50 mx-auto w-[calc(100%-2rem)] max-w-[1400px]">
				<div className="rounded-2xl border border-border/50 bg-background/80 px-4 sm:px-6 backdrop-blur-xl supports-backdrop-filter:bg-background/60 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_-12px_rgba(0,0,0,0.3)]">
					<div className="flex h-14 items-center justify-between">
						<div className="flex items-center gap-6">
							<Link
								href="/"
								className="flex items-center gap-2.5 font-semibold text-lg"
							>
								<span className="flex size-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-700 to-rose-700 dark:from-primary dark:to-accent text-[10px] font-bold text-white shadow-lg shadow-primary/25">
									DS
								</span>
								<span className="text-foreground">Design System</span>
							</Link>
						</div>
						<div className="flex items-center gap-3">
							<button
								onClick={() => setSearchOpen(true)}
								className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/30 px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-muted/50 transition-all duration-300"
							>
								<Search className="size-4" />
								<span className="hidden sm:inline">Search...</span>
								<kbd className="hidden md:inline-flex rounded-md border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
									⌘K
								</kbd>
							</button>
							<ThemeToggle />
						</div>
					</div>
				</div>
			</header>
			{searchOpen && (
				<SearchCommand onClose={() => setSearchOpen(false)} />
			)}
		</>
	);
}
