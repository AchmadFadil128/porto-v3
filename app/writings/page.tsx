import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import WritingCard from "@/app/components/WritingCard";
import { getWritings } from "@/lib/data";

export const metadata: Metadata = {
  title: "Writings",
  description: "Articles and essays by Achmad Fadil on software engineering, Go, and web development.",
};

export default async function WritingsPage() {
  const writings = await getWritings();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Page header */}
        <section className="hero-gradient pt-20 pb-12 md:pt-28 md:pb-16 border-b border-[rgba(0,0,0,0.05)]">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <p className="text-[12px] font-mono font-medium uppercase tracking-[0.65px] text-[#888888] mb-3">
              Writing
            </p>
            <h1
              className="text-[36px] md:text-[48px] font-semibold text-[#0d0d0d] mb-4"
              style={{ letterSpacing: "-0.8px" }}
            >
              All Writings
            </h1>
            <p className="text-[16px] text-[#666666] max-w-xl">
              Articles, deep dives, and notes on software engineering, backend systems, and the web.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {writings.map((writing) => (
                <WritingCard key={writing.id} writing={writing} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
