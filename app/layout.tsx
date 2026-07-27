import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
	title: "Component Library — Design System",
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
			<body className="min-h-dvh antialiased">
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem={false}
				>
					{children}
					<Toaster richColors closeButton />
				</ThemeProvider>
			</body>
		</html>
	);
}
