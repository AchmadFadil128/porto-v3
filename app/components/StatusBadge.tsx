"use client";

import { useEffect, useState } from "react";
import type { ProjectStatus, WritingStatus, CertificationStatus } from "@/lib/data";

type Status = ProjectStatus | WritingStatus | CertificationStatus;

const statusConfig: Record<string, { bg: string; text: string; dot: string; darkBg: string; darkText: string }> = {
  Planned: { bg: "#EEF2FF", text: "#3772cf", dot: "#3772cf", darkBg: "rgba(55,114,207,0.15)", darkText: "#93b4f5" },
  "In Progress": { bg: "#d4fae8", text: "#0fa76e", dot: "#18E299", darkBg: "rgba(24,226,153,0.12)", darkText: "#6ee7b7" },
  "On Hold": { bg: "#FEF9C3", text: "#a16207", dot: "#c37d0d", darkBg: "rgba(195,125,13,0.15)", darkText: "#fcd34d" },
  Completed: { bg: "#d4fae8", text: "#0fa76e", dot: "#18E299", darkBg: "rgba(24,226,153,0.12)", darkText: "#6ee7b7" },
  Published: { bg: "#d4fae8", text: "#0fa76e", dot: "#18E299", darkBg: "rgba(24,226,153,0.12)", darkText: "#6ee7b7" },
  Cancelled: { bg: "#FEE2E2", text: "#d45656", dot: "#d45656", darkBg: "rgba(212,86,86,0.15)", darkText: "#fca5a5" },
  Active: { bg: "#d4fae8", text: "#0fa76e", dot: "#18E299", darkBg: "rgba(24,226,153,0.12)", darkText: "#6ee7b7" },
  "Near Expiry": { bg: "#FEF9C3", text: "#a16207", dot: "#c37d0d", darkBg: "rgba(195,125,13,0.15)", darkText: "#fcd34d" },
  Expired: { bg: "#FEE2E2", text: "#d45656", dot: "#d45656", darkBg: "rgba(212,86,86,0.15)", darkText: "#fca5a5" },
};

interface Props {
  status: Status;
  size?: "sm" | "md";
}

export default function StatusBadge({ status, size = "md" }: Props) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const obs = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  const config = statusConfig[status] ?? {
    bg: "#f5f5f5", text: "#888888", dot: "#888888",
    darkBg: "rgba(255,255,255,0.08)", darkText: "#999999",
  };
  const padding = size === "sm" ? "px-2.5 py-0.5" : "px-3 py-1";
  const fontSize = size === "sm" ? "text-[10px]" : "text-[11px]";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-mono font-semibold uppercase tracking-[0.6px] ${padding} ${fontSize}`}
      style={{
        backgroundColor: isDark ? config.darkBg : config.bg,
        color: isDark ? config.darkText : config.text,
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: isDark ? config.darkText : config.dot }}
      />
      {status}
    </span>
  );
}
