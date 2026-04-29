import Link from "next/link";
import type { Writing } from "@/lib/data";
import StatusBadge from "./StatusBadge";

export default function WritingCard({ writing }: { writing: Writing }) {
  const date = new Date(writing.dateCreate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link href={`/writings/${writing.id}`} className="group block">
      <article className="card-hover rounded-2xl bg-white p-6 h-full flex flex-col gap-4">
        {/* Top meta */}
        <div className="flex items-center gap-2 text-[12px] text-[#888888] font-mono uppercase tracking-[0.6px]">
          <span>{date}</span>
          <span>·</span>
          <span>Writing</span>
        </div>

        {/* Title */}
        <div className="flex-1">
          <h3 className="font-semibold text-[17px] text-[#0d0d0d] tracking-[-0.2px] leading-snug mb-2 group-hover:text-[#18E299] transition-colors duration-200">
            {writing.name}
          </h3>
          <p className="text-[14px] text-[#666666] leading-relaxed line-clamp-3">
            {writing.shortDescription}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-1 border-t border-[rgba(0,0,0,0.05)]">
          <StatusBadge status={writing.status} size="sm" />
          <span className="text-[12px] font-medium text-[#18E299] group-hover:underline">
            {writing.status === "Completed" && writing.urlFile ? "Read →" : "Coming soon"}
          </span>
        </div>
      </article>
    </Link>
  );
}
