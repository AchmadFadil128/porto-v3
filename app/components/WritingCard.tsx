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
      <article className="card-hover rounded-2xl bg-white dark:bg-neutral-900 p-6 h-full flex flex-col gap-4">
        <div className="flex items-center gap-2 text-[12px] text-neutral-400 dark:text-neutral-500 font-mono uppercase tracking-[0.6px]">
          <span>{date}</span>
          <span>·</span>
          <span>Writing</span>
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-[17px] text-neutral-900 dark:text-neutral-100 tracking-[-0.2px] leading-snug mb-2 group-hover:text-[#18E299] transition-colors duration-200">
            {writing.name}
          </h3>
          <p className="text-[14px] text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-3">
            {writing.shortDescription}
          </p>
        </div>

        <div className="flex items-center justify-between pt-1 border-t border-neutral-100 dark:border-neutral-800">
          <StatusBadge status={writing.status} size="sm" />
          <span className="text-[12px] font-medium text-[#18E299] group-hover:underline">
            {writing.status === "Completed" && writing.urlFile ? "Read →" : "Coming soon"}
          </span>
        </div>
      </article>
    </Link>
  );
}
