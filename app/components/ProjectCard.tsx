import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/data";
import StatusBadge from "./StatusBadge";

export default function ProjectCard({ project }: { project: Project }) {
  const date = new Date(project.dateCreate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });

  return (
    <Link href={`/projects/${project.id}`} className="group block">
      <article className="card-hover rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 h-full flex flex-col">
        <div className="relative w-full aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-800">
          <Image
            src={project.pictureUrl}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="p-5 sm:p-6 flex flex-col flex-1 gap-3">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-semibold text-[16px] sm:text-[17px] text-neutral-900 dark:text-neutral-100 tracking-[-0.2px] leading-snug group-hover:text-[#18E299] transition-colors duration-200">
              {project.name}
            </h3>
            <StatusBadge status={project.status} size="sm" />
          </div>

          <p className="text-[13px] sm:text-[14px] text-neutral-500 dark:text-neutral-400 leading-relaxed flex-1 line-clamp-3">
            {project.shortDescription}
          </p>

          <div className="flex items-center justify-between pt-1 gap-2">
            <div className="flex flex-wrap gap-1.5 min-w-0">
              {project.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500 whitespace-nowrap">
                  +{project.techStack.length - 3}
                </span>
              )}
            </div>
            <span className="text-[11px] sm:text-[12px] text-neutral-400 dark:text-neutral-500 flex-shrink-0">{date}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
