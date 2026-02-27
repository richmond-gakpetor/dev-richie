"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ────────────────────────────────────────────────────────────────────
const paragraphs = [
  {
    emoji: "🔧",
    text: "Built the entire UI for RoverApp from scratch — integrated APIs, shipped to production, and now serves over 7,000 users across iOS and Android.",
  },
  {
    emoji: "☁️",
    text: "Actively expanding expertise in cloud architecture and generative AI, focusing on serverless systems and AWS infrastructure.",
  },
  {
    emoji: "🎥",
    text: "Recently launched a tech YouTube channel sharing insights and practical tips to help others break into the industry.",
  },
];

const stats = [
  { value: 10000, suffix: "+", label: "App users" },
  { value: 5,    suffix: "+", label: "Projects shipped" },
  { value: 3,    suffix: "+", label: "Years building" },
];

// ─── Animated counter ────────────────────────────────────────────────────────
function Counter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const numRef  = useRef<HTMLSpanElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: value,
        duration: 1.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 82%",
          once: true,
        },
        onUpdate() {
          if (numRef.current) {
            numRef.current.textContent =
              value >= 1000
                ? (obj.val / 1000).toFixed(1) + "k"
                : String(Math.round(obj.val));
          }
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, [value]);

  return (
    <div ref={rootRef} className="flex flex-col gap-1">
      <p
        className="font-black leading-none"
        style={{
          fontSize: "clamp(2rem, 3.5vw, 3rem)",
          letterSpacing: "-0.03em",
          color: "var(--text)",
        }}
      >
        <span ref={numRef}>0</span>
        <span style={{ color: "var(--accent)" }}>{suffix}</span>
      </p>
      <span className="label" style={{ fontSize: "0.6rem" }}>
        {label}
      </span>
    </div>
  );
}

// ─── About ───────────────────────────────────────────────────────────────────
export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef   = useRef<HTMLDivElement>(null);
  const linesRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Quote slides in from left
      gsap.fromTo(
        quoteRef.current,
        { x: -48, autoAlpha: 0 },
        {
          x: 0, autoAlpha: 1, duration: 1.1, ease: "power3.out",
          scrollTrigger: { trigger: quoteRef.current, start: "top 80%" },
        }
      );

      // Each paragraph line staggers in from the right
      const lines = linesRef.current?.querySelectorAll(".about-line");
      if (lines?.length) {
        gsap.fromTo(
          lines,
          { x: 36, autoAlpha: 0 },
          {
            x: 0, autoAlpha: 1, duration: 0.85, stagger: 0.18, ease: "power3.out",
            scrollTrigger: { trigger: linesRef.current, start: "top 78%" },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about">
      <hr className="divider" />

      <div className="section-pad">
        <span className="label block mb-14">About</span>

        {/* ── Split layout ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — big quote */}
          <div ref={quoteRef} style={{ opacity: 0 }}>
            <blockquote
              className="font-black text-[var(--text)]"
              style={{
                fontSize: "clamp(1.7rem, 3vw, 2.6rem)",
                lineHeight: 1.12,
                letterSpacing: "-0.025em",
              }}
            >
              Let&apos;s push the boundaries of what&apos;s possible.
            </blockquote>

            <p
              className="mt-6 text-sm leading-relaxed"
              style={{ color: "var(--text-muted)", maxWidth: "38ch" }}
            >
              Richmond Gakpetor — Software Engineer based in Accra, Ghana.
              Building precise, user-centred web and mobile experiences.
            </p>

            {/* Stats row */}
            <div
              className="mt-12 pt-10 grid grid-cols-3 gap-6"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              {stats.map((s) => (
                <Counter key={s.label} {...s} />
              ))}
            </div>
          </div>

          {/* Right — paragraph bullets */}
          <div ref={linesRef} className="flex flex-col gap-8">
            {paragraphs.map(({ emoji, text }) => (
              <div
                key={emoji}
                className="about-line flex gap-5 items-start"
                style={{ opacity: 0 }}
              >
                {/* Emoji bubble */}
                <span
                  aria-hidden
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {emoji}
                </span>
                <p
                  className="text-sm leading-relaxed pt-2"
                  style={{ color: "var(--text-muted)" }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
