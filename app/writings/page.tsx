import type { Metadata } from "next";

import WritingCard from "@/app/components/WritingCard";
import { getWritings } from "@/lib/data";
import { people } from "@/lib/data";

export const metadata: Metadata = {
  title: "Writings",
  description: `Articles and essays by ${people.name} on software engineering, cloud, and web development.`,
};

export default async function WritingsPage() {
  const writings = await getWritings();

  return (
    <>

      <main className="flex-1">

        <section className="pt-20 pb-12 md:pt-28 md:pb-16 border-b border-neutral-100 dark:border-neutral-800">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <p className="text-[12px] font-mono font-medium uppercase tracking-[0.65px] text-neutral-500 dark:text-neutral-400 mb-3">
              Writing
            </p>
            <h1
              className="text-[36px] md:text-[48px] font-semibold text-neutral-900 dark:text-neutral-100 mb-4"
              style={{ letterSpacing: "-0.8px" }}
            >
              All Writings
            </h1>
            <p className="text-[16px] text-neutral-500 dark:text-neutral-400 max-w-xl">
              Articles, deep dives, and notes on software engineering, backend systems, and the web.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {writings.map((writing) => (
                <WritingCard key={writing.id} writing={writing} />
              ))}
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
