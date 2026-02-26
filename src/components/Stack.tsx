"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs,
  SiReact, SiExpo, SiPostgresql, SiMongodb,
  SiAmazonaws, SiServerless, SiGraphql, SiPython,
  SiSentry, SiVercel, SiFigma, SiFirebase,
} from "react-icons/si";

// ─── Data ────────────────────────────────────────────────────────────────────
const ROW_A = [
  { icon: <SiReact       size={18} />, name: "React" },
  { icon: <SiNextdotjs   size={16} />, name: "Next.js" },
  { icon: <SiTypescript  size={18} />, name: "TypeScript" },
  { icon: <SiTailwindcss size={18} />, name: "Tailwind" },
  { icon: <SiNodedotjs   size={18} />, name: "Node.js" },
  { icon: <SiExpo        size={18} />, name: "Expo" },
  { icon: <SiGraphql     size={18} />, name: "GraphQL" },
  { icon: <SiPython      size={18} />, name: "Python" },
];

const ROW_B = [
  { icon: <SiAmazonaws size={18} />, name: "AWS" },
  { icon: <SiServerless        size={18} />, name: "Serverless" },
  { icon: <SiPostgresql        size={18} />, name: "PostgreSQL" },
  { icon: <SiMongodb           size={18} />, name: "MongoDB" },
  { icon: <SiSentry            size={18} />, name: "Sentry" },
  { icon: <SiVercel            size={18} />, name: "Vercel" },
  { icon: <SiFigma             size={18} />, name: "Figma" },
  { icon: <SiFirebase          size={18} />, name: "Firebase" },
];

// ─── Single marquee row ───────────────────────────────────────────────────────
function MarqueeRow({
  items,
  direction = 1,
}: {
  items: { icon: React.ReactNode; name: string }[];
  direction?: 1 | -1;
}) {
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const strip = stripRef.current!;
    // Clone once so we have a seamless loop (two identical halves)
    const totalW = strip.scrollWidth / 2; // one copy's width
    const startX = direction === -1 ? -totalW : 0;
    const endX   = direction === -1 ? 0 : -totalW;

    gsap.fromTo(
      strip,
      { x: startX },
      {
        x: endX,
        duration: 28,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(
            (v: number) => gsap.utils.wrap(-totalW, 0, v)
          ),
        },
      }
    );
  }, [direction]);

  // Duplicate items for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <div ref={stripRef} className="flex gap-0 will-change-transform">
        {doubled.map(({ icon, name }, i) => (
          <div
            key={`${name}-${i}`}
            className="flex items-center gap-3 flex-shrink-0 px-7 py-4"
            style={{ borderRight: "1px solid var(--border)" }}
          >
            <span style={{ color: "var(--text-muted)" }}>{icon}</span>
            <span
              className="label whitespace-nowrap"
              style={{
                fontSize: "0.65rem",
                color: "var(--text-muted)",
                letterSpacing: "0.15em",
              }}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Stack Section ────────────────────────────────────────────────────────────
export default function Stack() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stack-heading",
        { y: 32, autoAlpha: 0 },
        {
          y: 0, autoAlpha: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: ".stack-heading", start: "top 85%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="stack">
      <hr className="divider" />

      {/* Heading */}
      <div className="section-pad pb-14 lg:pb-20">
        <div className="stack-heading flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6" style={{ opacity: 0 }}>
          <div>
            <span className="label block mb-5">Stack</span>
            <h2 className="text-display-md text-[var(--text)]">
              tools I reach for.
            </h2>
          </div>
          <p
            className="text-sm leading-relaxed max-w-xs"
            style={{ color: "var(--text-muted)" }}
          >
            A curated toolkit of languages, frameworks, and platforms I use to
            build fast, reliable products.
          </p>
        </div>
      </div>

      {/* Marquee rows */}
      <div
        className="flex flex-col"
        style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        {/* Row A — scrolls left */}
        <div style={{ borderBottom: "1px solid var(--border)" }}>
          <MarqueeRow items={ROW_A} direction={1} />
        </div>
        {/* Row B — scrolls right */}
        <MarqueeRow items={ROW_B} direction={-1} />
      </div>
    </section>
  );
}
