import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import StatusBadge from "@/app/components/StatusBadge";
import { getWritingById, getWritings } from "@/lib/data";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const writings = await getWritings();
  return writings.map((w) => ({ id: w.id }));
}

export const dynamicParams = true;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const writing = await getWritingById(id);
  if (!writing) return { title: "Writing Not Found" };
  return {
    title: writing.name,
    description: writing.shortDescription,
  };
}

export default async function WritingDetailPage({ params }: Props) {
  const { id } = await params;
  const writing = await getWritingById(id);
  if (!writing) notFound();

  const date = new Date(writing.dateCreate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const hasLink = writing.status === "Completed" && writing.urlFile;

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="hero-gradient pt-20 pb-12 md:pt-28 md:pb-16 border-b border-[rgba(0,0,0,0.05)]">
          <div className="max-w-3xl mx-auto px-6 md:px-8">
            <Link
              href="/writings"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#888888] hover:text-[#18E299] transition-colors duration-200 mb-6"
            >
              ← Back to Writings
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <StatusBadge status={writing.status} />
              <span className="text-[13px] font-mono text-[#888888]">{date}</span>
            </div>

            <h1
              className="text-[30px] md:text-[42px] font-semibold text-[#0d0d0d] mb-5 leading-tight"
              style={{ letterSpacing: "-0.8px" }}
            >
              {writing.name}
            </h1>
            <p className="text-[17px] text-[#666666] leading-relaxed">
              {writing.shortDescription}
            </p>
          </div>
        </section>

        {/* Content link */}
        <section className="py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-6 md:px-8">
            {hasLink ? (
              <div className="rounded-2xl border border-[rgba(0,0,0,0.05)] bg-[#fafafa] p-8 md:p-10 text-center shadow-[rgba(0,0,0,0.03)_0px_2px_4px]">
                <div className="w-12 h-12 rounded-2xl bg-[#d4fae8] flex items-center justify-center mx-auto mb-5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#0fa76e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <p className="text-[14px] font-mono uppercase tracking-[0.6px] text-[#888888] mb-3">
                  Full Article
                </p>
                <p className="text-[16px] text-[#333333] mb-6 max-w-sm mx-auto">
                  This article is published externally. Click below to read the full content.
                </p>
                <a
                  href={writing.urlFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`read-article-${writing.id}`}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#0d0d0d] text-white text-[15px] font-medium hover:opacity-90 transition-opacity duration-200"
                >
                  Read Full Article →
                </a>
              </div>
            ) : (
              <div className="rounded-2xl border border-[rgba(0,0,0,0.05)] bg-[#fafafa] p-8 md:p-10 text-center shadow-[rgba(0,0,0,0.03)_0px_2px_4px]">
                <div className="w-12 h-12 rounded-2xl bg-[#FEF9C3] flex items-center justify-center mx-auto mb-5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#a16207" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <p className="text-[14px] font-mono uppercase tracking-[0.6px] text-[#888888] mb-3">
                  Coming Soon
                </p>
                <p className="text-[16px] text-[#333333] max-w-sm mx-auto">
                  This article is still being written. Check back soon!
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
