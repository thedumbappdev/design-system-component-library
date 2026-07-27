"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search as SearchIcon } from "lucide-react";
import { navigation, type NavItem } from "@/lib/navigation";
import { cn } from "@/lib/utils";

function flattenNav(
	items: NavItem[],
): { title: string; href: string; status?: string }[] {
	const result: { title: string; href: string; status?: string }[] = [];
	for (const item of items) {
		if (item.href) {
			result.push({
				title: item.title,
				href: item.href,
				status: item.status,
			});
		}
		if (item.children) {
			result.push(...flattenNav(item.children));
		}
	}
	return result;
}

const pages = flattenNav(navigation);

export function SearchCommand({ onClose }: { onClose: () => void }) {
	const [query, setQuery] = useState("");
	const [selectedIndex, setSelectedIndex] = useState(0);
	const inputRef = useRef<HTMLInputElement>(null);
	const router = useRouter();

	const filtered = query.trim()
		? pages.filter((p) =>
				p.title.toLowerCase().includes(query.toLowerCase()),
			)
		: pages;

	useEffect(() => {
		setTimeout(() => inputRef.current?.focus(), 50);
		setQuery("");
		setSelectedIndex(0);
	}, []);

	const navigate = useCallback(
		(href: string) => {
			onClose();
			router.push(href);
		},
		[onClose, router],
	);

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "ArrowDown") {
			e.preventDefault();
			setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
		} else if (e.key === "ArrowUp") {
			e.preventDefault();
			setSelectedIndex((i) => Math.max(i - 1, 0));
		} else if (e.key === "Enter" && filtered[selectedIndex]) {
			navigate(filtered[selectedIndex].href);
		} else if (e.key === "Escape") {
			onClose();
		}
	};

	return (
		<div className="fixed inset-0 z-999 flex items-start justify-center pt-[15vh]">
			<div
				className="fixed inset-0 bg-black/25 backdrop-blur-sm"
				onClick={onClose}
			/>
			<div className="relative w-full max-w-lg">
				<div className="rounded-xl border border-border bg-background shadow-2xl overflow-hidden">
					<div className="flex items-center gap-3 border-b border-border px-4">
						<SearchIcon className="size-4 shrink-0 text-muted-foreground" />
						<input
							ref={inputRef}
							value={query}
							onChange={(e) => {
								setQuery(e.target.value);
								setSelectedIndex(0);
							}}
							onKeyDown={handleKeyDown}
							placeholder="Search pages..."
							className="flex h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
						/>
						<kbd className="hidden sm:inline-flex rounded border bg-muted px-1.5 text-[10px] text-muted-foreground">
							ESC
						</kbd>
					</div>
					<div className="max-h-80 overflow-y-auto p-2">
						{filtered.length === 0 && (
							<p className="p-4 text-center text-sm text-muted-foreground">
								No results found.
							</p>
						)}
						{filtered.map((page, i) => (
							<button
								key={page.href}
								onClick={() => navigate(page.href)}
								onMouseEnter={() => setSelectedIndex(i)}
								className={cn(
									"flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-left transition-colors",
									i === selectedIndex
										? "bg-primary/10 text-primary"
										: "text-muted-foreground hover:text-foreground hover:bg-muted",
								)}
							>
								<span className="font-medium">
									{page.title}
								</span>
								{page.status && (
									<span className="ml-auto rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-medium uppercase text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
										{page.status}
									</span>
								)}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
