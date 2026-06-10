import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import WritingCard from "./components/WritingCard";
import CertificationCard from "./components/CertificationCard";
import { getPeople, getProjects, getWritings, getCertifications } from "@/lib/data";
import LanyardWrapper from "./components/LanyardWrapper";

export default async function HomePage() {
  const [person, projects, writings, certs] = await Promise.all([
    getPeople(),
    getProjects(),
    getWritings(),
    getCertifications(),
  ]);

  return (
    <>
      <Navbar />
      <main className="flex-1">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="hero-gradient pt-10 pb-12 md:pt-16 md:pb-20">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="text-left">
                {/* Available badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(0,0,0,0.08)] bg-white text-[12px] font-mono font-medium uppercase tracking-[0.6px] text-[#0fa76e] mb-8 shadow-[rgba(0,0,0,0.03)_0px_2px_4px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#18E299] animate-pulse" />
                  Available for new opportunities
                </div>

                <h1
                  className="text-[48px] md:text-[64px] font-semibold text-[#0d0d0d] leading-[1.1] mb-6"
                  style={{ letterSpacing: "-1.28px" }}
                >
                  {person.name}
                </h1>
                <p className="text-[18px] md:text-[20px] font-medium text-[#18E299] mb-4 tracking-tight">
                  {person.title}
                </p>
                <p className="text-[16px] md:text-[18px] text-[#666666] leading-relaxed max-w-2xl mb-10">
                  {person.description}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/about"
                    className="px-6 py-2.5 rounded-full bg-[#0d0d0d] text-white text-[15px] font-medium shadow-[rgba(0,0,0,0.06)_0px_1px_2px] hover:opacity-90 transition-opacity duration-200"
                  >
                    About Me
                  </Link>
                  <Link
                    href="/projects"
                    className="px-6 py-2.5 rounded-full bg-white text-[#0d0d0d] text-[15px] font-medium border border-[rgba(0,0,0,0.08)] hover:opacity-90 transition-opacity duration-200"
                  >
                    View Projects
                  </Link>
                </div>
              </div>

              {/* Lanyard Graphic */}
              <div className="relative w-full h-[500px] md:h-[600px] flex justify-center items-center rounded-2xl overflow-hidden pointer-events-auto">
                <LanyardWrapper 
                  position={[0, 0, 14]} 
                  gravity={[0, -40, 0]} 
                  frontImage="/images/profil.png" 
                  transparent={true}
                  lanyardWidth={2}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Overview ─────────────────────────────────────────────────────── */}
        <section className="py-20 md:py-24 border-t border-[rgba(0,0,0,0.05)]">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-[12px] font-mono font-medium uppercase tracking-[0.65px] text-[#888888] mb-2">
                  Overview
                </p>
                <h2
                  className="text-[32px] md:text-[40px] font-semibold text-[#0d0d0d]"
                  style={{ letterSpacing: "-0.8px" }}
                >
                  At a Glance
                </h2>
              </div>
              <Link
                href="/about"
                className="hidden md:inline-flex px-5 py-2 rounded-full bg-white text-[#0d0d0d] text-[14px] font-medium border border-[rgba(0,0,0,0.08)] hover:border-[#18E299] hover:text-[#18E299] transition-colors duration-200"
              >
                See More →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Working At */}
              <div className="rounded-2xl border border-[rgba(0,0,0,0.05)] bg-white p-6 shadow-[rgba(0,0,0,0.03)_0px_2px_4px]">
                <p className="text-[11px] font-mono font-medium uppercase tracking-[0.6px] text-[#888888] mb-3">
                  Currently At
                </p>
                <p className="text-[18px] font-semibold text-[#0d0d0d] mb-1">{person.workingAt}</p>
                <p className="text-[14px] text-[#666666]">{person.title}</p>
              </div>

              {/* Skills */}
              <div className="rounded-2xl border border-[rgba(0,0,0,0.05)] bg-white p-6 shadow-[rgba(0,0,0,0.03)_0px_2px_4px]">
                <p className="text-[11px] font-mono font-medium uppercase tracking-[0.6px] text-[#888888] mb-3">
                  Core Skills
                </p>
                <div className="flex flex-wrap gap-2">
                  {person.skills.slice(0, 8).map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-full text-[12px] font-medium bg-[#f5f5f5] text-[#333333]"
                    >
                      {skill}
                    </span>
                  ))}
                  {person.skills.length > 8 && (
                    <span className="px-2.5 py-1 rounded-full text-[12px] font-medium bg-[#f5f5f5] text-[#888888]">
                      +{person.skills.length - 8} more
                    </span>
                  )}
                </div>
              </div>

              {/* Education */}
              <div className="rounded-2xl border border-[rgba(0,0,0,0.05)] bg-white p-6 shadow-[rgba(0,0,0,0.03)_0px_2px_4px]">
                <p className="text-[11px] font-mono font-medium uppercase tracking-[0.6px] text-[#888888] mb-3">
                  Education
                </p>
                {person.education.map((edu, i) => (
                  <div key={i}>
                    <p className="text-[16px] font-semibold text-[#0d0d0d]">
                      {edu.degree} — {edu.field}
                    </p>
                    <p className="text-[14px] text-[#666666] mt-1">{edu.institution}</p>
                    <p className="text-[12px] font-mono text-[#888888] mt-1">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 md:hidden text-center">
              <Link
                href="/about"
                className="inline-flex px-5 py-2 rounded-full bg-white text-[#0d0d0d] text-[14px] font-medium border border-[rgba(0,0,0,0.08)] hover:border-[#18E299] hover:text-[#18E299] transition-colors duration-200"
              >
                See More →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Projects ─────────────────────────────────────────────────────── */}
        <section className="py-20 md:py-24 border-t border-[rgba(0,0,0,0.05)]">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-[12px] font-mono font-medium uppercase tracking-[0.65px] text-[#888888] mb-2">
                  Work
                </p>
                <h2
                  className="text-[32px] md:text-[40px] font-semibold text-[#0d0d0d]"
                  style={{ letterSpacing: "-0.8px" }}
                >
                  Featured Projects
                </h2>
              </div>
              <Link
                href="/projects"
                className="hidden md:inline-flex px-5 py-2 rounded-full bg-white text-[#0d0d0d] text-[14px] font-medium border border-[rgba(0,0,0,0.08)] hover:border-[#18E299] hover:text-[#18E299] transition-colors duration-200"
              >
                See All →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.slice(0, 3).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            <div className="mt-8 md:hidden text-center">
              <Link
                href="/projects"
                className="inline-flex px-5 py-2 rounded-full bg-white text-[#0d0d0d] text-[14px] font-medium border border-[rgba(0,0,0,0.08)] hover:border-[#18E299] hover:text-[#18E299] transition-colors duration-200"
              >
                See All Projects →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Writings ─────────────────────────────────────────────────────── */}
        <section className="py-20 md:py-24 border-t border-[rgba(0,0,0,0.05)]">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-[12px] font-mono font-medium uppercase tracking-[0.65px] text-[#888888] mb-2">
                  Writing
                </p>
                <h2
                  className="text-[32px] md:text-[40px] font-semibold text-[#0d0d0d]"
                  style={{ letterSpacing: "-0.8px" }}
                >
                  Latest Writings
                </h2>
              </div>
              <Link
                href="/writings"
                className="hidden md:inline-flex px-5 py-2 rounded-full bg-white text-[#0d0d0d] text-[14px] font-medium border border-[rgba(0,0,0,0.08)] hover:border-[#18E299] hover:text-[#18E299] transition-colors duration-200"
              >
                See All →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {writings.slice(0, 3).map((writing) => (
                <WritingCard key={writing.id} writing={writing} />
              ))}
            </div>

            <div className="mt-8 md:hidden text-center">
              <Link
                href="/writings"
                className="inline-flex px-5 py-2 rounded-full bg-white text-[#0d0d0d] text-[14px] font-medium border border-[rgba(0,0,0,0.08)] hover:border-[#18E299] hover:text-[#18E299] transition-colors duration-200"
              >
                See All Writings →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Certifications ───────────────────────────────────────────────── */}
        <section className="py-20 md:py-24 border-t border-[rgba(0,0,0,0.05)]">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-[12px] font-mono font-medium uppercase tracking-[0.65px] text-[#888888] mb-2">
                  Credentials
                </p>
                <h2
                  className="text-[32px] md:text-[40px] font-semibold text-[#0d0d0d]"
                  style={{ letterSpacing: "-0.8px" }}
                >
                  Certifications
                </h2>
              </div>
              <Link
                href="/certifications"
                className="hidden md:inline-flex px-5 py-2 rounded-full bg-white text-[#0d0d0d] text-[14px] font-medium border border-[rgba(0,0,0,0.08)] hover:border-[#18E299] hover:text-[#18E299] transition-colors duration-200"
              >
                See All →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {certs.slice(0, 3).map((cert) => (
                <CertificationCard key={cert.id} cert={cert} />
              ))}
            </div>

            <div className="mt-8 md:hidden text-center">
              <Link
                href="/certifications"
                className="inline-flex px-5 py-2 rounded-full bg-white text-[#0d0d0d] text-[14px] font-medium border border-[rgba(0,0,0,0.08)] hover:border-[#18E299] hover:text-[#18E299] transition-colors duration-200"
              >
                See All Certifications →
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA Banner ───────────────────────────────────────────────────── */}
        <section className="py-20 md:py-24 border-t border-[rgba(0,0,0,0.05)]">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="rounded-3xl border border-[rgba(0,0,0,0.05)] bg-[#fafafa] p-10 md:p-14 text-center shadow-[rgba(0,0,0,0.03)_0px_2px_4px]">
              <p className="text-[12px] font-mono font-medium uppercase tracking-[0.65px] text-[#888888] mb-4">
                Let&apos;s work together
              </p>
              <h2
                className="text-[32px] md:text-[40px] font-semibold text-[#0d0d0d] mb-4"
                style={{ letterSpacing: "-0.8px" }}
              >
                Have a project in mind?
              </h2>
              <p className="text-[16px] text-[#666666] max-w-xl mx-auto mb-8">
                I&apos;m open to freelance projects, full-time roles, and interesting collaborations. Let&apos;s build something great together.
              </p>
              <Link
                href={`mailto:${person.contact.email}`}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#18E299] text-[#0d0d0d] text-[15px] font-medium hover:opacity-90 transition-opacity duration-200"
              >
                Say Hello →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
