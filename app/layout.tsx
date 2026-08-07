import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { TopNav } from "@/components/docs/top-nav";
import "./globals.css";

export const metadata: Metadata = {
	title: "Component Library - Design System",
	description:
		"A scalable component library built with Tailwind CSS + shadcn/ui for modern applications.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${GeistSans.variable} ${GeistMono.variable}`}
		>
			<body className="min-h-dvh antialiased relative">
				<div className="fixed inset-0 z-60 pointer-events-none opacity-[0.015]"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
						backgroundRepeat: "repeat",
						backgroundSize: "256px 256px",
					}}
				/>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem={false}
				>
					<TopNav />
					{children}
					<Toaster richColors closeButton />
				</ThemeProvider>
			</body>
		</html>
	);
}
