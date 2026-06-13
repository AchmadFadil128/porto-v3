import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import StatusBadge from "@/app/components/StatusBadge";
import { getProjectById, getProjects } from "@/lib/data";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ id: p.id }));
}

export const dynamicParams = true;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = await getProjectById(id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.name,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = await getProjectById(id);
  if (!project) notFound();

  const date = new Date(project.dateCreate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const paragraphs = project.longDescription
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <>

      <main className="flex-1">
        {/* Breadcrumb + header */}
        <section className="hero-gradient pt-20 pb-12 md:pt-28 md:pb-16 border-b border-neutral-100 dark:border-neutral-800">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-neutral-400 dark:text-neutral-500 hover:text-[#18E299] transition-colors duration-200 mb-6"
            >
              ← Back to Projects
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <StatusBadge status={project.status} />
            </div>

            <h1
              className="text-[32px] md:text-[44px] font-semibold text-neutral-900 dark:text-neutral-100 mb-4 leading-tight"
              style={{ letterSpacing: "-0.8px" }}
            >
              {project.name}
            </h1>
            <p className="text-[16px] text-neutral-500 dark:text-neutral-400 mb-6">{project.shortDescription}</p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[12px] sm:text-[13px] text-neutral-400 dark:text-neutral-500">
              <span className="font-mono">{date}</span>
              <span>·</span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-[11px] sm:text-[12px] font-mono font-medium whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured image */}
        <section className="py-10 md:py-14">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-neutral-100 dark:border-neutral-800 shadow-[0_2px_4px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
              <Image
                src={project.pictureUrl}
                alt={project.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
          </div>
        </section>

        {/* Long description */}
        <section className="pb-14 md:pb-20">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="prose-content max-w-none">
              {paragraphs.map((para, i) => (
                <p key={i} className="text-[15px] sm:text-[16px] leading-[1.8] mb-4 sm:mb-5">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        {project.otherPictures.length > 0 && (
          <section className="pb-16 md:pb-24 border-t border-neutral-100 dark:border-neutral-800 pt-12">
            <div className="max-w-4xl mx-auto px-6 md:px-8">
              <p className="text-[12px] font-mono font-medium uppercase tracking-[0.65px] text-neutral-400 dark:text-neutral-500 mb-6">
                Gallery
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {project.otherPictures.map((src, i) => (
                  <div
                    key={i}
                    className="relative w-full aspect-video rounded-xl overflow-hidden border border-neutral-100 dark:border-neutral-800 shadow-[0_2px_4px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
                  >
                    <Image
                      src={src}
                      alt={`${project.name} screenshot ${i + 2}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 896px) 100vw, 448px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

    </>
  );
}
