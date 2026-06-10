import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ProjectCard from "@/app/components/ProjectCard";
import { getProjects } from "@/lib/data";

import { people } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: `All projects by ${people.name} — ${people.title.toLowerCase()}.`,
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Page header */}
        <section className="hero-gradient pt-20 pb-12 md:pt-28 md:pb-16 border-b border-[rgba(0,0,0,0.05)]">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <p className="text-[12px] font-mono font-medium uppercase tracking-[0.65px] text-[#888888] mb-3">
              Work
            </p>
            <h1
              className="text-[36px] md:text-[48px] font-semibold text-[#0d0d0d] mb-4"
              style={{ letterSpacing: "-0.8px" }}
            >
              All Projects
            </h1>
            <p className="text-[16px] text-[#666666] max-w-xl">
              A collection of things I&apos;ve built — from full-stack web apps to distributed systems and tooling.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            {/* Stats row */}
            <div className="flex flex-wrap gap-6 mb-10 pb-8 border-b border-[rgba(0,0,0,0.05)]">
              {(["Completed", "In Progress", "Planned", "On Hold"] as const).map((status) => {
                const count = projects.filter((p) => p.status === status).length;
                return (
                  <div key={status} className="flex items-center gap-2">
                    <span className="text-[20px] font-semibold text-[#0d0d0d]">{count}</span>
                    <span className="text-[13px] text-[#888888] font-mono uppercase tracking-[0.4px]">{status}</span>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
