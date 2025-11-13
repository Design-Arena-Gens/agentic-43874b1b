'use client';

import { useMemo, useState } from "react";

const GREETINGS = [
  "Hi there!",
  "Hello!",
  "Hey friend!",
  "Welcome!",
  "Bonjour!",
  "Hola!",
  "Ciao!",
  "G'day!",
  "Howdy!",
];

function getRandomGreeting(exclude: string) {
  const filtered = GREETINGS.filter((greeting) => greeting !== exclude);
  return filtered[Math.floor(Math.random() * filtered.length)];
}

export function GreetingCard() {
  const defaultGreeting = useMemo(
    () => GREETINGS[Math.floor(Math.random() * GREETINGS.length)],
    []
  );
  const [greeting, setGreeting] = useState(defaultGreeting);

  return (
    <div className="w-full max-w-xl rounded-3xl border border-zinc-100/80 bg-white/80 p-10 shadow-2xl shadow-zinc-900/5 backdrop-blur dark:border-white/10 dark:bg-zinc-900/80">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
        Feel-Good Greeting
      </p>
      <h1 className="mt-6 text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
        {greeting}
      </h1>
      <p className="mt-4 text-lg leading-7 text-zinc-600 dark:text-zinc-300">
        A tiny splash of positivity for your day. Tap the button to shuffle the
        vibe and discover another friendly hello.
      </p>
      <button
        type="button"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
        onClick={() => setGreeting(getRandomGreeting(greeting))}
      >
        Shuffle greeting
        <span aria-hidden className="text-base">
          ↻
        </span>
      </button>
    </div>
  );
}
