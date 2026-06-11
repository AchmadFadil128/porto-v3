import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { people } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Me",
  description: `Learn more about ${people.name} — background, career journey, education, and hobbies.`,
};

const social = [
  {
    label: "GitHub",
    href: people.contact.github,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: people.contact.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: people.contact.twitter,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: `mailto:${people.contact.email}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  const p = people;

  return (
    <>
      <Navbar />
      <main className="flex-1">

        {/* ── Profile Hero ──────────────────────────────────────────────────── */}
        <section className="pt-20 pb-14 md:pt-28 md:pb-20 border-b border-neutral-100 dark:border-neutral-800">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <p className="text-[12px] font-mono font-medium uppercase tracking-[0.65px] text-neutral-500 dark:text-neutral-400 mb-4">
              About
            </p>

            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#18E299] to-[#0fa76e] flex items-center justify-center mb-6 text-white text-[22px] font-semibold shadow-[rgba(0,0,0,0.06)_0px_1px_2px]">
              {p.name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase()}
            </div>

            <h1
              className="text-[36px] md:text-[52px] font-semibold text-neutral-900 dark:text-neutral-100 mb-3 leading-tight"
              style={{ letterSpacing: "-0.8px" }}
            >
              {p.name}
            </h1>
            <p className="text-[18px] font-medium text-[#18E299] mb-5">{p.title}</p>
            <p className="text-[16px] md:text-[17px] text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {social.map(({ href, label, icon }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-[13px] font-medium text-neutral-700 dark:text-neutral-300 hover:border-[#18E299] hover:text-[#18E299] transition-all duration-200"
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Hobbies ───────────────────────────────────────────────────────── */}
        <section className="py-16 md:py-20 border-b border-neutral-100 dark:border-neutral-800">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <p className="text-[12px] font-mono font-medium uppercase tracking-[0.65px] text-neutral-500 dark:text-neutral-400 mb-3">
              Personal
            </p>
            <h2
              className="text-[26px] md:text-[32px] font-semibold text-neutral-900 dark:text-neutral-100 mb-8"
              style={{ letterSpacing: "-0.5px" }}
            >
              Hobbies &amp; Interests
            </h2>
            <div className="flex flex-wrap gap-3">
              {p.hobbies.map((hobby) => (
                <span
                  key={hobby}
                  className="px-4 py-2 rounded-full border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-[14px] font-medium text-neutral-700 dark:text-neutral-300 hover:border-[#18E299] hover:text-[#18E299] transition-all duration-200"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Education & Career Timeline ───────────────────────────────────── */}
        <section className="py-16 md:py-20 border-b border-neutral-100 dark:border-neutral-800">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <p className="text-[12px] font-mono font-medium uppercase tracking-[0.65px] text-neutral-500 dark:text-neutral-400 mb-3">
              Journey
            </p>
            <h2
              className="text-[26px] md:text-[32px] font-semibold text-neutral-900 dark:text-neutral-100 mb-10"
              style={{ letterSpacing: "-0.5px" }}
            >
              Education &amp; Career
            </h2>

            <div className="relative">
              <div className="absolute left-3.5 top-2 bottom-2 w-px bg-neutral-100 dark:bg-neutral-800" />

              <div className="flex flex-col gap-8">
                {[...p.carrierPath].reverse().map((entry, i) => (
                  <div key={i} className="flex gap-6 pl-0">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-[#18E299] bg-white dark:bg-neutral-950 flex items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-[#18E299]" />
                    </div>
                    <div className="flex-1 pb-2">
                      <div className="rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <div>
                            <p className="text-[16px] font-semibold text-neutral-900 dark:text-neutral-100">{entry.role}</p>
                            <p className="text-[14px] font-medium text-[#18E299]">{entry.company}</p>
                          </div>
                          <span className="text-[12px] font-mono text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full flex-shrink-0">
                            {entry.period}
                          </span>
                        </div>
                        <p className="text-[14px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{entry.description}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {p.education.map((edu, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 flex items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-neutral-400 dark:bg-neutral-500" />
                    </div>
                    <div className="flex-1 pb-2">
                      <div className="rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                          <div>
                            <p className="text-[16px] font-semibold text-neutral-900 dark:text-neutral-100">{edu.degree} — {edu.field}</p>
                            <p className="text-[14px] text-neutral-500 dark:text-neutral-400">{edu.institution}</p>
                          </div>
                          <span className="text-[12px] font-mono text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full flex-shrink-0">
                            {edu.year}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Skills ───────────────────────────────────────────────────────── */}
        <section className="py-16 md:py-20 border-b border-neutral-100 dark:border-neutral-800">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <p className="text-[12px] font-mono font-medium uppercase tracking-[0.65px] text-neutral-500 dark:text-neutral-400 mb-3">
              Technical
            </p>
            <h2
              className="text-[26px] md:text-[32px] font-semibold text-neutral-900 dark:text-neutral-100 mb-8"
              style={{ letterSpacing: "-0.5px" }}
            >
              Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {p.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-[14px] font-medium text-neutral-700 dark:text-neutral-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ──────────────────────────────────────────────────────── */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <p className="text-[12px] font-mono font-medium uppercase tracking-[0.65px] text-neutral-500 dark:text-neutral-400 mb-3">
              Contact
            </p>
            <h2
              className="text-[26px] md:text-[32px] font-semibold text-neutral-900 dark:text-neutral-100 mb-4"
              style={{ letterSpacing: "-0.5px" }}
            >
              Get in Touch
            </h2>
            <p className="text-[16px] text-neutral-500 dark:text-neutral-400 mb-8 max-w-lg">
              Whether it&apos;s a project idea, a job opportunity, or just a chat about tech — my inbox is always open.
            </p>
            <a
              href={`mailto:${p.contact.email}`}
              id="contact-email-btn"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-[15px] font-medium hover:opacity-90 dark:hover:opacity-80 transition-opacity duration-200"
            >
              {p.contact.email}
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
