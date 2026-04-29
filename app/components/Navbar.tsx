"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/writings", label: "Writings" },
  { href: "/certifications", label: "Certifications" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-[rgba(0,0,0,0.05)]">
      <nav className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-semibold text-[15px] text-[#0d0d0d] tracking-tight hover:text-[#18E299] transition-colors duration-200"
        >
          Achmad<span className="text-[#18E299]">.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-3 py-2 rounded-lg text-[14px] font-medium transition-colors duration-200 ${
                pathname === href
                  ? "text-[#18E299]"
                  : "text-[#0d0d0d] hover:text-[#18E299] hover:bg-[#d4fae8]/40"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="mailto:achmad@example.com"
            className="px-5 py-2 rounded-full bg-[#0d0d0d] text-white text-[14px] font-medium shadow-[rgba(0,0,0,0.06)_0px_1px_2px] hover:opacity-90 transition-opacity duration-200"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          id="nav-hamburger"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-[#f5f5f5] transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="17" y2="6" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="14" x2="17" y2="14" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[rgba(0,0,0,0.05)] bg-white px-6 pb-4 pt-2 flex flex-col gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`px-3 py-2.5 rounded-lg text-[14px] font-medium transition-colors duration-200 ${
                pathname === href
                  ? "text-[#18E299] bg-[#d4fae8]/40"
                  : "text-[#0d0d0d] hover:bg-[#f5f5f5]"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="mailto:achmad@example.com"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-2.5 rounded-full bg-[#0d0d0d] text-white text-[14px] font-medium text-center hover:opacity-90 transition-opacity duration-200"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
}
