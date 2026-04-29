import type { ProjectStatus, WritingStatus, CertificationStatus } from "@/lib/data";

type Status = ProjectStatus | WritingStatus | CertificationStatus;

const statusConfig: Record<string, { bg: string; text: string; dot: string }> = {
  // Project
  Planned: { bg: "#EEF2FF", text: "#3772cf", dot: "#3772cf" },
  "In Progress": { bg: "#d4fae8", text: "#0fa76e", dot: "#18E299" },
  "On Hold": { bg: "#FEF9C3", text: "#a16207", dot: "#c37d0d" },
  Completed: { bg: "#d4fae8", text: "#0fa76e", dot: "#18E299" },
  Cancelled: { bg: "#FEE2E2", text: "#d45656", dot: "#d45656" },
  // Certification
  Active: { bg: "#d4fae8", text: "#0fa76e", dot: "#18E299" },
  "Near Expiry": { bg: "#FEF9C3", text: "#a16207", dot: "#c37d0d" },
  Expired: { bg: "#FEE2E2", text: "#d45656", dot: "#d45656" },
};

interface Props {
  status: Status;
  size?: "sm" | "md";
}

export default function StatusBadge({ status, size = "md" }: Props) {
  const config = statusConfig[status] ?? { bg: "#f5f5f5", text: "#888888", dot: "#888888" };
  const padding = size === "sm" ? "px-2.5 py-0.5" : "px-3 py-1";
  const fontSize = size === "sm" ? "text-[10px]" : "text-[11px]";

  return (
    <span
      className={`inline-flex items-center gap-1.5 ${padding} ${fontSize} font-mono font-semibold uppercase tracking-[0.6px] rounded-full`}
      style={{ backgroundColor: config.bg, color: config.text }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: config.dot }}
      />
      {status}
    </span>
  );
}
