"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
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
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    close();
  }, [pathname, close]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ease-in-out ${
        scrolled || open
          ? "bg-white/90 dark:bg-neutral-950/90 backdrop-blur-xl border-b border-neutral-100 dark:border-neutral-800 shadow-[0_2px_10px_rgba(0,0,0,0.02)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
          : "bg-transparent border-b-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group shrink-0" onClick={close}>
          <Image
            src={isDark ? "/images/logo-light.png" : "/images/logo-dark.png"}
            alt="Logo"
            width={1080}
            height={1080}
            className="h-7 sm:h-8 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-0.5">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative px-3 py-2 rounded-lg text-[13px] font-medium transition-colors duration-200 ${
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
            className="flex items-center justify-center px-4 py-2 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-[13px] font-medium shadow-md hover:bg-[#18E299] hover:text-neutral-900 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative z-50 -mr-2 p-2.5 rounded-xl transition-colors duration-200 focus:outline-none hover:bg-black/5 dark:hover:bg-white/10"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <div className="w-5 h-5 flex flex-col items-center justify-center gap-[4.5px]">
            <span
              className={`block h-[2px] w-[18px] rounded-full bg-neutral-900 dark:bg-neutral-100 transition-all duration-300 origin-center ${
                open ? "translate-y-[3.25px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-[18px] rounded-full bg-neutral-900 dark:bg-neutral-100 transition-all duration-300 ${
                open ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-[18px] rounded-full bg-neutral-900 dark:bg-neutral-100 transition-all duration-300 origin-center ${
                open ? "-translate-y-[3.25px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        onClick={close}
      >
        <div
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute top-16 left-0 right-0 bg-white dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-800 shadow-xl transition-all duration-300 ease-out ${
            open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-4 sm:px-6 py-4 flex flex-col gap-0.5">
            {links.map(({ href, label }, i) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={close}
                  className={`flex items-center px-4 py-2.5 rounded-xl text-[15px] font-medium transition-all duration-200 ${
                    isActive
                      ? "text-[#18E299] bg-brand-light/40 dark:bg-[rgba(24,226,153,0.1)]"
                      : "text-neutral-700 dark:text-neutral-400 active:bg-neutral-100 dark:active:bg-neutral-800 active:text-neutral-900 dark:active:text-neutral-100"
                  }`}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {label}
                </Link>
              );
            })}
            <div className="flex items-center justify-between mt-2 pt-3 border-t border-neutral-100 dark:border-neutral-800">
              <span className="text-[13px] text-neutral-400 dark:text-neutral-500 font-medium">Theme</span>
              <AnimatedThemeToggler
                variant="circle"
                duration={500}
                className="p-2 rounded-lg text-neutral-400 dark:text-neutral-400 active:text-neutral-900 dark:active:text-neutral-100 active:bg-brand-light/40 dark:active:bg-[rgba(24,226,153,0.1)] transition-colors duration-200"
              />
            </div>
            <Link
              href={`mailto:${people.contact.email}`}
              onClick={close}
              className="mt-3 w-full px-5 py-2.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-[15px] font-medium text-center active:bg-[#18E299] active:text-neutral-900 transition-all duration-200 shadow-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
