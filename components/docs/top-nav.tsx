"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Search } from "lucide-react";
import { SearchCommand } from "@/components/docs/search-command";
import { useState } from "react";

export function TopNav() {
	const [searchOpen, setSearchOpen] = useState(false);

	return (
		<>
			<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
				<div className="container-main flex h-14 items-center justify-between">
					<div className="flex items-center gap-6">
						<Link
							href="/"
							className="flex items-center gap-2 font-semibold text-lg"
						>
							<span className="text-primary font-bold">✦</span>
							<span>Design System</span>
						</Link>
					</div>
					<div className="flex items-center gap-3">
						<button
							onClick={() => setSearchOpen(true)}
							className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
						>
							<Search className="size-4" />
							<span className="hidden sm:inline">Search...</span>
							<kbd className="hidden md:inline-flex rounded border bg-muted px-1.5 text-[10px] text-muted-foreground">
								⌘K
							</kbd>
						</button>
						<ThemeToggle />
					</div>
				</div>
			</header>
			{searchOpen && (
				<SearchCommand onClose={() => setSearchOpen(false)} />
			)}
		</>
	);
}
