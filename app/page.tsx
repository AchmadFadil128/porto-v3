import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import WritingCard from "./components/WritingCard";
import CertificationCard from "./components/CertificationCard";
import { getPeople, getProjects, getWritings, getCertifications } from "@/lib/data";
import HeroSection from "./components/Home/HeroSection";
import AnimatedSection from "./components/Home/AnimatedSection";

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

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <HeroSection
          name={person.name}
          title={person.title}
          description={person.description}
        />

        {/* ── Overview ─────────────────────────────────────────────────── */}
        <section className="py-24 md:py-32 relative">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="mb-16">
              <p className="text-[11px] font-mono font-medium uppercase tracking-[1.2px] text-neutral-400 dark:text-neutral-500 mb-3">
                01 / Overview
              </p>
              <h2
                className="text-[36px] md:text-[48px] font-bold text-neutral-900 dark:text-neutral-100 leading-[1.05] tracking-[-1.2px]"
              >
                At a Glance
              </h2>
            </div>

            <AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Working At */}
                <div className="group rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-8 transition-all duration-300 hover:border-[#18E299]/20 hover:bg-white dark:hover:bg-neutral-800 hover:shadow-xl hover:shadow-[rgba(24,226,153,0.04)] dark:hover:shadow-[rgba(24,226,153,0.06)] hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-light dark:bg-brand-light/20 flex items-center justify-center mb-5 text-brand-deep dark:text-[#6ee7b7]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </div>
                  <p className="text-[11px] font-mono font-medium uppercase tracking-[0.8px] text-neutral-400 dark:text-neutral-500 mb-2">
                    Currently At
                  </p>
                  <p className="text-[20px] font-semibold text-neutral-900 dark:text-neutral-100 mb-1">{person.workingAt}</p>
                  <p className="text-[14px] text-neutral-500 dark:text-neutral-400">{person.title}</p>
                </div>

                {/* Skills */}
                <div className="group rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-8 transition-all duration-300 hover:border-[#18E299]/20 hover:bg-white dark:hover:bg-neutral-800 hover:shadow-xl hover:shadow-[rgba(24,226,153,0.04)] dark:hover:shadow-[rgba(24,226,153,0.06)] hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-light dark:bg-brand-light/20 flex items-center justify-center mb-5 text-brand-deep dark:text-[#6ee7b7]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <p className="text-[11px] font-mono font-medium uppercase tracking-[0.8px] text-neutral-400 dark:text-neutral-500 mb-3">
                    Core Skills
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {person.skills.slice(0, 8).map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-[12px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors duration-200 hover:bg-brand-light dark:hover:bg-brand-light/20 hover:text-brand-deep dark:hover:text-[#6ee7b7]"
                      >
                        {skill}
                      </span>
                    ))}
                    {person.skills.length > 8 && (
                      <span className="px-3 py-1 rounded-full text-[12px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500">
                        +{person.skills.length - 8}
                      </span>
                    )}
                  </div>
                </div>

                {/* Education */}
                <div className="group rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-8 transition-all duration-300 hover:border-[#18E299]/20 hover:bg-white dark:hover:bg-neutral-800 hover:shadow-xl hover:shadow-[rgba(24,226,153,0.04)] dark:hover:shadow-[rgba(24,226,153,0.06)] hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-light dark:bg-brand-light/20 flex items-center justify-center mb-5 text-brand-deep dark:text-[#6ee7b7]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
                    </svg>
                  </div>
                  <p className="text-[11px] font-mono font-medium uppercase tracking-[0.8px] text-neutral-400 dark:text-neutral-500 mb-3">
                    Education
                  </p>
                  {person.education.map((edu, i) => (
                    <div key={i}>
                      <p className="text-[17px] font-semibold text-neutral-900 dark:text-neutral-100 leading-snug">
                        {edu.degree} — {edu.field}
                      </p>
                      <p className="text-[14px] text-neutral-500 dark:text-neutral-400 mt-1.5">{edu.institution}</p>
                      <p className="text-[12px] font-mono text-neutral-400 dark:text-neutral-500 mt-1.5">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="mt-8 flex justify-center">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-medium text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 hover:border-[#18E299] hover:text-[#18E299] transition-all duration-300"
                >
                  Read more about me
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Section Divider ──────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-neutral-100 dark:via-neutral-800 to-transparent" />
        </div>

        {/* ── Projects ─────────────────────────────────────────────────── */}
        <section className="py-24 md:py-32 relative">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="text-[11px] font-mono font-medium uppercase tracking-[1.2px] text-neutral-400 dark:text-neutral-500 mb-3">
                  02 / Work
                </p>
                <h2
                  className="text-[36px] md:text-[48px] font-bold text-neutral-900 dark:text-neutral-100 leading-[1.05] tracking-[-1.2px]"
                >
                  Featured Projects
                </h2>
              </div>
              <Link
                href="/projects"
                className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-medium text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 hover:border-[#18E299] hover:text-[#18E299] transition-all duration-300"
              >
                See All
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            <AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.slice(0, 3).map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="mt-10 md:hidden flex justify-center">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-medium text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 hover:border-[#18E299] hover:text-[#18E299] transition-all duration-300"
                >
                  See All Projects
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Section Divider ──────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-neutral-100 dark:via-neutral-800 to-transparent" />
        </div>

        {/* ── Writings ─────────────────────────────────────────────────── */}
        <section className="py-24 md:py-32 relative">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="text-[11px] font-mono font-medium uppercase tracking-[1.2px] text-neutral-400 dark:text-neutral-500 mb-3">
                  03 / Writing
                </p>
                <h2
                  className="text-[36px] md:text-[48px] font-bold text-neutral-900 dark:text-neutral-100 leading-[1.05] tracking-[-1.2px]"
                >
                  Latest Writings
                </h2>
              </div>
              <Link
                href="/writings"
                className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-medium text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 hover:border-[#18E299] hover:text-[#18E299] transition-all duration-300"
              >
                See All
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            <AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {writings.slice(0, 3).map((writing) => (
                  <WritingCard key={writing.id} writing={writing} />
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="mt-10 md:hidden flex justify-center">
                <Link
                  href="/writings"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-medium text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 hover:border-[#18E299] hover:text-[#18E299] transition-all duration-300"
                >
                  See All Writings
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Section Divider ──────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-neutral-100 dark:via-neutral-800 to-transparent" />
        </div>

        {/* ── Certifications ───────────────────────────────────────────── */}
        <section className="py-24 md:py-32 relative">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="text-[11px] font-mono font-medium uppercase tracking-[1.2px] text-neutral-400 dark:text-neutral-500 mb-3">
                  04 / Credentials
                </p>
                <h2
                  className="text-[36px] md:text-[48px] font-bold text-neutral-900 dark:text-neutral-100 leading-[1.05] tracking-[-1.2px]"
                >
                  Certifications
                </h2>
              </div>
              <Link
                href="/certifications"
                className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-medium text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 hover:border-[#18E299] hover:text-[#18E299] transition-all duration-300"
              >
                See All
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            <AnimatedSection>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {certs.slice(0, 3).map((cert) => (
                  <CertificationCard key={cert.id} cert={cert} />
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="mt-10 md:hidden flex justify-center">
                <Link
                  href="/certifications"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-medium text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 hover:border-[#18E299] hover:text-[#18E299] transition-all duration-300"
                >
                  See All Certifications
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Section Divider ──────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-neutral-100 dark:via-neutral-800 to-transparent" />
        </div>

        {/* ── CTA Banner ───────────────────────────────────────────────── */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-light/40 dark:from-brand-light/10 via-white dark:via-neutral-950 to-brand-light/20 dark:to-brand-light/5" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#18E299]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#18E299]/20 to-transparent" />

          <div className="relative max-w-6xl mx-auto px-6 md:px-8 text-center">
            <AnimatedSection>
              <p className="text-[11px] font-mono font-medium uppercase tracking-[1.2px] text-neutral-400 dark:text-neutral-500 mb-5">
                Let&apos;s work together
              </p>
              <h2
                className="text-[36px] md:text-[52px] font-bold text-neutral-900 dark:text-neutral-100 leading-[1.05] tracking-[-1.2px] mb-5"
              >
                Have a project in mind?
              </h2>
              <p className="text-[16px] text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto mb-10 leading-relaxed">
                Open to freelance projects, full-time roles, and interesting collaborations. Let&apos;s build something great together.
              </p>
              <Link
                href={`mailto:${person.contact.email}`}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-[15px] font-medium overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-white/5"
              >
                <span className="relative z-10">Say Hello</span>
                <svg className="relative z-10" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
                <span className="absolute inset-0 bg-[#18E299] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
