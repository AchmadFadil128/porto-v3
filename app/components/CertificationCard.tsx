import Image from "next/image";
import type { Certification } from "@/lib/data";
import StatusBadge from "./StatusBadge";

export default function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <article className="card-hover rounded-2xl bg-white dark:bg-neutral-900 overflow-hidden flex flex-col">
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        <Image
          src={cert.pictureUrl}
          alt={cert.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3 className="font-semibold text-[15px] text-neutral-900 dark:text-neutral-100 tracking-[-0.15px] leading-snug">
          {cert.name}
        </h3>
        <p className="text-[12px] text-neutral-400 dark:text-neutral-500 font-mono uppercase tracking-[0.4px]">
          {cert.issuer}
        </p>
        <div className="mt-auto pt-3">
          <StatusBadge status={cert.status} size="sm" />
        </div>
      </div>
    </article>
  );
}
