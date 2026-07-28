"use client";

import { useState, useCallback, useRef } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const floatingComponents = [
	{
		id: 1,
		x: "8%",
		y: "12%",
		delay: 0,
		rotate: -3,
		children: (
			<div className="flex items-center gap-2 rounded-lg border border-border/60 bg-background px-3 py-2 shadow-sm">
				<Terminal className="size-3.5 text-primary" />
				<span className="text-xs font-medium">npm i</span>
			</div>
		),
	},
	{
		id: 2,
		x: "58%",
		y: "6%",
		delay: 0.2,
		rotate: 2,
		children: <Badge variant="default">14 Components</Badge>,
	},
	{
		id: 3,
		x: "68%",
		y: "48%",
		delay: 0.4,
		rotate: -1,
		children: (
			<Badge variant="secondary" className="gap-1.5">
				<Check className="size-3" /> WCAG AA
			</Badge>
		),
	},
	{
		id: 4,
		x: "12%",
		y: "58%",
		delay: 0.1,
		rotate: 4,
		children: (
			<Button variant="outline" size="sm">
				View Docs
			</Button>
		),
	},
	{
		id: 5,
		x: "42%",
		y: "68%",
		delay: 0.3,
		rotate: -2,
		children: (
			<Card className="w-44 shadow-sm">
				<CardContent className="p-3.5">
					<div className="mb-2 flex items-center gap-2">
						<span className="flex size-5 items-center justify-center rounded-full bg-primary/10 text-[9px] font-bold text-primary">
							DS
						</span>
						<span className="text-xs font-semibold">Card</span>
					</div>
					<div className="space-y-1.5">
						<div className="h-1.5 w-full rounded-full bg-muted-foreground/15" />
						<div className="h-1.5 w-3/4 rounded-full bg-muted-foreground/15" />
						<div className="h-1.5 w-1/2 rounded-full bg-muted-foreground/15" />
					</div>
				</CardContent>
			</Card>
		),
	},
	{
		id: 6,
		x: "28%",
		y: "28%",
		delay: 0.5,
		rotate: 1,
		children: (
			<div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 shadow-sm backdrop-blur-sm">
				<span className="flex size-4 items-center justify-center rounded-full bg-emerald-500/20">
					<Check className="size-2.5" />
				</span>
				All systems ready
			</div>
		),
	},
	{
		id: 7,
		x: "52%",
		y: "32%",
		delay: 0.15,
		rotate: -2,
		children: (
			<div className="rounded-lg border border-border/60 bg-background px-3 py-2 shadow-sm">
				<div className="flex items-center gap-2">
					<span className="size-2 rounded-full bg-accent" />
					<span className="size-2 rounded-full bg-amber-500" />
					<span className="size-2 rounded-full bg-emerald-500" />
				</div>
				<div className="mt-1.5 text-[10px] font-mono text-muted-foreground">
					$ build — 12 components
				</div>
			</div>
		),
	},
];

export function Hero() {
	const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
	const sectionRef = useRef<HTMLElement>(null);

	const handleMouseMove = useCallback((e: React.MouseEvent) => {
		const rect = sectionRef.current?.getBoundingClientRect();
		if (rect) {
			setMousePos({
				x: (e.clientX - rect.left) / rect.width,
				y: (e.clientY - rect.top) / rect.height,
			});
		}
	}, []);

	const headingWords = "A scalable component library built with".split(" ");
	const gradientWords = ["Tailwind", "CSS"];
	const suffixWord = "+ shadcn/ui";

	return (
		<section
			ref={sectionRef}
			onMouseMove={handleMouseMove}
			className="relative overflow-hidden border-b border-border min-h-[90dvh] flex justify-start items-start"
		>
			{/* Spotlight overlay following cursor */}
			<div
				className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-1000"
				style={{
					background: `radial-gradient(800px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(79,70,229,0.06) 0%, transparent 60%)`,
				}}
			/>

			{/* Subtle grid overlay */}
			<div
				className="pointer-events-none absolute inset-0 z-10 opacity-[0.03] dark:opacity-[0.04]"
				style={{
					backgroundImage: `
            linear-gradient(rgba(79,70,229,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79,70,229,0.3) 1px, transparent 1px)
          `,
					backgroundSize: "60px 60px",
				}}
			/>

			<div className="absolute top-0 inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.03]" />
			<motion.div
				className="absolute top-1/3 -right-16 size-[600px] rounded-full bg-primary/8 blur-[140px]"
				animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
				transition={{
					duration: 8,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
			<motion.div
				className="absolute -bottom-40 -left-40 size-[500px] rounded-full bg-accent/6 blur-[120px]"
				animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 1,
				}}
			/>
			<motion.div
				className="absolute top-1/2 left-1/3 size-[300px] rounded-full bg-primary/5 blur-[100px]"
				animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.6, 0.3] }}
				transition={{
					duration: 6,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 0.5,
				}}
			/>
			<div className="container-main py-20 lg:py-28 w-full">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
						className="max-w-xl"
					>
						<div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/80 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm shadow-sm">
							<span className="size-1.5 rounded-full bg-accent animate-pulse" />
							v0.1.0 — Beta release
						</div>
						<h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl text-balance leading-[1.05]">
							{headingWords.map((word, i) => (
								<motion.span
									key={word}
									className="inline-block mr-[0.15em]"
									initial={{ opacity: 0, y: 30, rotateX: -20 }}
									animate={{ opacity: 1, y: 0, rotateX: 0 }}
									transition={{ duration: 0.5, delay: 0.5 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
								>
									{word}
								</motion.span>
							))}
							{gradientWords.map((word, i) => (
								<motion.span
									key={word}
									className="inline-block mr-[0.15em] bg-gradient-to-r from-indigo-600 to-rose-600 dark:from-indigo-400 dark:to-rose-400 bg-clip-text text-transparent"
									initial={{ opacity: 0, y: 30, rotateX: -20 }}
									animate={{ opacity: 1, y: 0, rotateX: 0 }}
									transition={{ duration: 0.5, delay: 0.5 + (headingWords.length + i) * 0.06, ease: [0.16, 1, 0.3, 1] }}
								>
									{word}
								</motion.span>
							))}
							<motion.span
								className="inline-block"
								initial={{ opacity: 0, y: 30, rotateX: -20 }}
								animate={{ opacity: 1, y: 0, rotateX: 0 }}
								transition={{ duration: 0.5, delay: 0.5 + (headingWords.length + gradientWords.length) * 0.06, ease: [0.16, 1, 0.3, 1] }}
							>
								{suffixWord}
							</motion.span>
						</h1>
						<p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-[65ch] leading-relaxed">
							A centralized documentation hub for your design
							system — featuring 14 production-ready UI
							components, comprehensive design tokens for colors,
							typography, spacing, radius, and shadows, plus
							WCAG-compliant accessibility guidance. All
							components work seamlessly across light and dark
							themes.
						</p>
						<div className="mt-10 flex flex-wrap gap-4">
							<Link
								href="/components"
								className="group relative inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/25"
							>
								<span>View Components</span>
								<span className="inline-flex size-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
									<ArrowRight className="size-3.5" />
								</span>
							</Link>
							<Link
								href="/getting-started"
								className="group relative inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/80 px-7 py-3.5 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-primary/30 hover:bg-muted/50 active:scale-[0.98]"
							>
								Getting Started
							</Link>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							duration: 0.7,
							delay: 0.2,
							ease: [0.16, 1, 0.3, 1],
						}}
						className="relative hidden lg:block h-[500px] w-full"
					>
						<div className="absolute inset-0 rounded-3xl border border-border/40 bg-gradient-to-br from-primary/[0.02] to-accent/[0.02] backdrop-blur-sm">
							<div className="absolute top-4 left-4 text-xs font-mono text-muted-foreground/40 tracking-widest uppercase">
								Live Preview
							</div>
							{floatingComponents.map((item) => (
								<motion.div
									key={item.id}
									className="absolute"
									style={{ left: item.x, top: item.y }}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.6,
										delay: 0.4 + item.delay,
										ease: [0.16, 1, 0.3, 1],
									}}
									whileHover={{ scale: 1.08, rotate: 0 }}
								>
									<motion.div
										animate={{ y: [0, -6, 0] }}
										transition={{
											duration: 4 + item.delay * 2,
											repeat: Infinity,
											ease: "easeInOut",
										}}
										style={{ rotate: item.rotate }}
									>
										{item.children}
									</motion.div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</div>

			{/* Scroll indicator */}
			<motion.div
				className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
			>
				<span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/40">
					Scroll
				</span>
				<motion.div
					animate={{ y: [0, 6, 0] }}
					transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
				>
					<ChevronDown className="size-4 text-muted-foreground/30" />
				</motion.div>
			</motion.div>
		</section>
	);
}
