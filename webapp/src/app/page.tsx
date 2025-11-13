import { GreetingCard } from "@/components/GreetingCard";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-amber-100 via-sky-100 to-emerald-100 px-6 py-24 font-sans text-zinc-900 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 dark:text-zinc-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.25),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(244,114,182,0.2),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(45,212,191,0.25),transparent_45%)]" />
      <main className="relative z-10 flex w-full flex-col items-center gap-10 text-center sm:gap-14">
        <GreetingCard />
        <p className="max-w-md text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
          Built with Next.js, Tailwind CSS, and a sprinkle of joy.
        </p>
      </main>
    </div>
  );
}
