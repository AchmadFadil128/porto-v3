import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CertificationCard from "@/app/components/CertificationCard";
import { getCertifications } from "@/lib/data";

import { people } from "@/lib/data";

export const metadata: Metadata = {
  title: "Certifications",
  description: `Professional certifications held by ${people.name}.`,
};

export default async function CertificationsPage() {
  const certs = await getCertifications();
  const active = certs.filter((c) => c.status === "Active").length;
  const nearExpiry = certs.filter((c) => c.status === "Near Expiry").length;
  const expired = certs.filter((c) => c.status === "Expired").length;

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="hero-gradient pt-20 pb-12 md:pt-28 md:pb-16 border-b border-[rgba(0,0,0,0.05)]">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <p className="text-[12px] font-mono font-medium uppercase tracking-[0.65px] text-[#888888] mb-3">Credentials</p>
            <h1 className="text-[36px] md:text-[48px] font-semibold text-[#0d0d0d] mb-4" style={{ letterSpacing: "-0.8px" }}>
              Certifications
            </h1>
            <p className="text-[16px] text-[#666666] max-w-xl">
              Industry certifications validating expertise across cloud, infrastructure, and software development.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="flex flex-wrap gap-6 mb-10 pb-8 border-b border-[rgba(0,0,0,0.05)]">
              <div className="flex items-center gap-2">
                <span className="text-[20px] font-semibold text-[#0d0d0d]">{active}</span>
                <span className="text-[13px] text-[#0fa76e] font-mono uppercase tracking-[0.4px]">Active</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[20px] font-semibold text-[#0d0d0d]">{nearExpiry}</span>
                <span className="text-[13px] text-[#a16207] font-mono uppercase tracking-[0.4px]">Near Expiry</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[20px] font-semibold text-[#0d0d0d]">{expired}</span>
                <span className="text-[13px] text-[#d45656] font-mono uppercase tracking-[0.4px]">Expired</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {certs.map((cert) => (
                <CertificationCard key={cert.id} cert={cert} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
