'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import LanyardWrapper from '../LanyardWrapper';

interface Props {
  name: string;
  title: string;
  description: string;
}

export default function HeroSection({ name, title, description }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const lanyardRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(badgeRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )
      .fromTo(headingRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.3'
      )
      .fromTo(titleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(descRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.3'
      )
      .fromTo(ctaRef.current!.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
        '-=0.2'
      )
      .fromTo(lanyardRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 },
        '-=0.6'
      )
      .fromTo(scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        '+=0.2'
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="text-left">

            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 backdrop-blur text-[11px] font-mono font-medium uppercase tracking-[0.8px] text-brand-deep dark:text-[#6ee7b7] mb-8 shadow-sm"
              style={{ opacity: 0 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#18E299] animate-pulse" />
              Available for opportunities
            </div>

            <h1
              ref={headingRef}
              className="text-[40px] sm:text-[56px] md:text-[80px] font-bold text-neutral-900 dark:text-neutral-100 leading-[0.95] mb-4 tracking-[-2px]"
              style={{ opacity: 0 }}
            >
              {name}
            </h1>

            <p
              ref={titleRef}
              className="text-[20px] md:text-[24px] font-semibold text-[#18E299] mb-4 tracking-tight"
              style={{ opacity: 0 }}
            >
              {title}
            </p>

            <p
              ref={descRef}
              className="text-[16px] md:text-[18px] text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl mb-10"
              style={{ opacity: 0 }}
            >
              {description}
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3">
              <Link
                href="/about"
                className="group relative px-7 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-[15px] font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/5"
              >
                <span className="relative z-10">About Me</span>
                <span className="absolute inset-0 bg-[#18E299] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
              <Link
                href="/projects"
                className="px-7 py-3 rounded-full bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 text-[15px] font-medium border border-neutral-200 dark:border-neutral-700 hover:border-[#18E299] hover:text-[#18E299] hover:bg-brand-light/30 dark:hover:bg-[rgba(24,226,153,0.08)] transition-all duration-300"
              >
                View Projects
              </Link>
            </div>
          </div>

          <div
            ref={lanyardRef}
              className="relative w-full h-[320px] sm:h-[450px] md:h-[600px] hidden lg:flex justify-center items-center"
            style={{ opacity: 0 }}
          >
            <LanyardWrapper
              position={[0, 0, 14]}
              gravity={[0, -40, 0]}
              frontImage="/images/profil.png"
              transparent={true}
              lanyardWidth={2}
            />
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
        style={{ opacity: 0 }}
      >
        <span className="text-[10px] font-mono font-medium uppercase tracking-[2px] text-neutral-400 dark:text-neutral-500">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#18E299] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
