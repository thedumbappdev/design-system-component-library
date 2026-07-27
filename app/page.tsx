import { Hero } from "@/components/landing/hero";
import { Stats } from "@/components/landing/stats";
import { FeaturedSections } from "@/components/landing/featured-sections";
import { ChangelogPreview } from "@/components/landing/changelog-preview";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedSections />
      <ChangelogPreview />
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <div className="container-main">
          Design System · Built with Next.js + Tailwind CSS + shadcn/ui
        </div>
      </footer>
    </>
  );
}
