import Image from "next/image";
import type { Certification } from "@/lib/data";
import StatusBadge from "./StatusBadge";

export default function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <article className="card-hover rounded-2xl bg-white overflow-hidden flex flex-col">
      {/* Certificate image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#f5f5f5]">
        <Image
          src={cert.pictureUrl}
          alt={cert.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3 className="font-semibold text-[15px] text-[#0d0d0d] tracking-[-0.15px] leading-snug">
          {cert.name}
        </h3>
        <p className="text-[12px] text-[#888888] font-mono uppercase tracking-[0.4px]">
          {cert.issuer}
        </p>
        <div className="mt-auto pt-3">
          <StatusBadge status={cert.status} size="sm" />
        </div>
      </div>
    </article>
  );
}
