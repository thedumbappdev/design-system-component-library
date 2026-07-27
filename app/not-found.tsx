import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80dvh] flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="mt-4 text-lg text-muted-foreground">Page not found</p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        Go home
      </Link>
    </div>
  );
}
