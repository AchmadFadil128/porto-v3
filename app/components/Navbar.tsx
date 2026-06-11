"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { people } from "@/lib/data";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/writings", label: "Writings" },
  { href: "/certifications", label: "Certifications" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-white/90 dark:bg-neutral-950/90 backdrop-blur-xl border-b border-neutral-100 dark:border-neutral-800 shadow-[0_2px_10px_rgba(0,0,0,0.02)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
          : "bg-transparent border-b-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#18E299] to-[#0fa76e] flex items-center justify-center text-white font-bold shadow-sm transition-transform duration-300 transform group-hover:scale-105">
            {people.name.charAt(0)}
          </div>
          <span className="font-semibold text-[15px] text-neutral-900 dark:text-neutral-100 tracking-tight hidden sm:block">
            {people.name.split(" ")[0]}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative px-4 py-2 rounded-lg text-[14px] font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[#18E299]"
                    : "text-neutral-900 dark:text-neutral-300 hover:text-[#18E299] hover:bg-brand-light/40 dark:hover:bg-[rgba(24,226,153,0.1)]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center mr-2">
          <AnimatedThemeToggler
            variant="circle"
            duration={500}
            className="p-2 rounded-lg text-neutral-400 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-brand-light/40 dark:hover:bg-[rgba(24,226,153,0.1)] transition-colors duration-200"
          />
        </div>

        <div className="hidden md:flex items-center">
          <Link
            href={`mailto:${people.contact.email}`}
            className="flex items-center justify-center px-5 py-2 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-[14px] font-medium shadow-md hover:bg-[#18E299] hover:text-neutral-900 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-lg transition-colors duration-200 focus:outline-none ${
            scrolled ? "hover:bg-black/5 dark:hover:bg-white/10" : "hover:bg-white/20"
          }`}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-neutral-900 dark:text-neutral-100"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" className="origin-center transition-transform duration-300" />
                <line x1="6" y1="6" x2="18" y2="18" className="origin-center transition-transform duration-300" />
              </>
            ) : (
              <>
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      <div
        className={`absolute top-full left-0 w-full bg-white dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-800 shadow-lg transition-all duration-300 ease-in-out origin-top md:hidden overflow-hidden ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-lg text-[15px] font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[#18E299] bg-brand-light/40 dark:bg-[rgba(24,226,153,0.1)]"
                    : "text-neutral-700 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <div className="flex items-center justify-center my-2">
            <AnimatedThemeToggler
              variant="circle"
              duration={500}
              className="p-2 rounded-lg text-neutral-400 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-brand-light/40 dark:hover:bg-[rgba(24,226,153,0.1)] transition-colors duration-200"
            />
          </div>
          <div className="w-full h-[1px] bg-neutral-100 dark:bg-neutral-800 my-2" />
          <Link
            href={`mailto:${people.contact.email}`}
            onClick={() => setOpen(false)}
            className="mt-1 px-5 py-3 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-[15px] font-medium text-center hover:bg-[#18E299] hover:text-neutral-900 transition-all duration-300 shadow-sm"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
