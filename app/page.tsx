import { Hero } from "@/components/landing/hero";
import { Stats } from "@/components/landing/stats";
import { FeaturedSections } from "@/components/landing/featured-sections";
import { ComponentShowcase } from "@/components/landing/component-showcase";
import { ChangelogPreview } from "@/components/landing/changelog-preview";

export default function Home() {
	return (
		<>
			<div className="pt-0">
				<Hero />
				<Stats />
				<FeaturedSections />
				<ComponentShowcase />
				<ChangelogPreview />
			</div>
			<footer className="border-t border-border py-14 text-center text-sm text-muted-foreground">
				<div className="container-main">
					<div className="mx-auto max-w-md space-y-3">
						<div className="flex items-center justify-center gap-2.5">
							<span className="flex size-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-700 to-rose-700 dark:from-primary dark:to-accent text-[10px] font-bold text-white shadow-lg shadow-primary/25">
								DS
							</span>
							<span className="font-semibold text-foreground">
								Design System
							</span>
						</div>
						<p>Built with Next.js · Tailwind CSS · shadcn/ui</p>
					</div>
				</div>
			</footer>
		</>
	);
}
