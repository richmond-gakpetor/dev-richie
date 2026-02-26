"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

// ─── Per-character split with overflow-clip container ────────────────────────
function SplitLine({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text} role="text">
      {text.split("").map((char, i) => (
        // Each wrapper clips the char as it slides up from below
        <span
          key={i}
          className="inline-block overflow-hidden"
          style={{
            // Extra room so descenders/ascenders aren't cropped by overflow-hidden
            paddingBottom: "0.1em",
            marginBottom: "-0.1em",
          }}
        >
          <span
            className="char inline-block"
            style={{ willChange: "transform" }}
          >
            {char}
          </span>
        </span>
      ))}
    </span>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const dividerRef = useRef<HTMLHRElement>(null);
  const metaRef    = useRef<HTMLDivElement>(null);
  const scrollRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Set initial states ──────────────────────────────────────────────
      gsap.set(".char", { yPercent: 108 });
      gsap.set(dividerRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });
      gsap.set([metaRef.current, scrollRef.current], {
        autoAlpha: 0,
        y: 14,
      });

      // ── Master timeline ─────────────────────────────────────────────────
      const tl = gsap.timeline({
        delay: 0.15,
        defaults: { ease: "power4.out" },
      });

      // Characters rise — staggered per char, both lines overlap
      tl.to(".char", {
        yPercent: 0,
        duration: 1.15,
        stagger: { each: 0.034, from: "start" },
      })
        // Divider draws left-to-right
        .to(
          dividerRef.current,
          { scaleX: 1, duration: 0.9, ease: "expo.inOut" },
          "-=0.65"
        )
        // Meta bar rises
        .to(
          metaRef.current,
          { autoAlpha: 1, y: 0, duration: 0.65 },
          "-=0.45"
        )
        // Scroll cue fades in
        .to(
          scrollRef.current,
          { autoAlpha: 0.45, y: 0, duration: 0.65 },
          "-=0.3"
        );

      // Scroll line pulses after intro finishes
      gsap.to(".scroll-line", {
        scaleY: 0.2,
        transformOrigin: "top center",
        repeat: -1,
        yoyo: true,
        duration: 1.1,
        ease: "sine.inOut",
        delay: 2.8,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[100svh] flex flex-col"
    >
      {/* ── Dot-grid background ───────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(123,175,199,0.09) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
          // Fade the grid out towards the bottom so it doesn't compete with text
          maskImage:
            "radial-gradient(ellipse 100% 80% at 50% 10%, black 0%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 100% 80% at 50% 10%, black 0%, transparent 80%)",
        }}
      />

      {/* ── Radial vignette ───────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 120% 100% at 50% 100%, #090909 0%, transparent 65%)",
        }}
      />

      {/* ── Name — anchored to bottom of flex space ───────────────────── */}
      <div className="relative flex-1 flex flex-col justify-end px-6 pt-28 pb-8 lg:px-14 lg:pt-36 lg:pb-12">
        <h1
          className="text-display text-[var(--text)] select-none"
          style={{ lineHeight: 0.88 }}
        >
          <SplitLine text="Richmond" className="block" />
          <SplitLine text="Gakpetor" className="block" />
        </h1>
      </div>

      {/* ── Divider + meta bar ────────────────────────────────────────── */}
      <div className="relative px-6 pb-6 lg:px-14 lg:pb-8">
        <hr ref={dividerRef} className="divider mb-5" />
        <div
          ref={metaRef}
          className="flex items-center justify-between"
        >
          <span className="label">Software Engineer</span>
          <span className="label">Accra, Ghana&nbsp;&middot;&nbsp;2026</span>
        </div>
      </div>

      {/* ── Scroll cue ────────────────────────────────────────────────── */}
      <div
        ref={scrollRef}
        className="flex justify-center pb-10 lg:pb-14"
      >
        <div className="flex flex-col items-center gap-2">
          <span
            className="label"
            style={{ fontSize: "0.6rem", letterSpacing: "0.22em" }}
          >
            scroll
          </span>
          <div className="scroll-line w-px h-10 bg-[var(--text-muted)]" />
        </div>
      </div>
    </section>
  );
}
