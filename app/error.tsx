"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="py-24 text-center">
      <h1 className="text-3xl font-semibold">Something went wrong</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">An unexpected error occurred. You can try again.</p>
      {error?.digest && (
        <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">Ref: {error.digest}</p>
      )}
      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-background hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full border px-6 py-3 hover:bg-black/5 dark:hover:bg-white/10"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}