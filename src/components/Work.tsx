"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projectInfo from "@/components/utils/projectInfo";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ───────────────────────────────────────────────────────────────────
const FEATURED_KEYS = ["roverapp", "eazyed", "dashboard", "vxonsolutions"];
const projects = FEATURED_KEYS.map((k) => projectInfo.get(k)!);
type ProjectEntry = NonNullable<ReturnType<typeof projectInfo.get>>;

const STATUS_COLORS: Record<string, { text: string; border: string }> = {
  Shipped:  { text: "var(--accent)",          border: "var(--accent-border)" },
  Beta:     { text: "#b8974a",                border: "rgba(184,151,74,0.2)" },
  Building: { text: "var(--text-muted)",       border: "var(--border)" },
};

// ─── Card ────────────────────────────────────────────────────────────────────
function Card({ project, index }: { project: ProjectEntry; index: number }) {
  const cardRef  = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  // Set GSAP perspective once on mount
  useEffect(() => {
    if (cardRef.current) gsap.set(cardRef.current, { transformPerspective: 900 });
  }, []);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card  = cardRef.current!;
    const glare = glareRef.current!;
    const rect  = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width  / 2;
    const cy = rect.height / 2;

    gsap.to(card, {
      rotateX:  ((y - cy) / cy) * -7,
      rotateY:  ((x - cx) / cx) *  7,
      duration: 0.35,
      ease: "power2.out",
    });

    // Radial glare follows the cursor
    glare.style.background = `radial-gradient(
      circle at ${(x / rect.width) * 100}% ${(y / rect.height) * 100}%,
      rgba(123,175,199,0.08) 0%,
      transparent 60%
    )`;
  };

  const onMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0, rotateY: 0,
      duration: 0.65,
      ease: "power3.out",
    });
    if (glareRef.current) glareRef.current.style.background = "none";
  };

  const colors = STATUS_COLORS[project.progress] ?? STATUS_COLORS.Building;

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="work-card relative flex-shrink-0 w-full rounded-2xl flex flex-col overflow-hidden"
      style={{
        // Desktop: fixed width + near-full-viewport height
        // Mobile: auto height (overridden via CSS below)
        border: "1px solid var(--border)",
        background: "var(--card)",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      {/* Moving glare layer */}
      <div
        ref={glareRef}
        aria-hidden
        className="absolute inset-0 pointer-events-none rounded-2xl z-10"
      />

      {/* Large muted index — decorative bg */}
      <span
        aria-hidden
        className="absolute bottom-5 right-6 font-black leading-none select-none pointer-events-none z-0"
        style={{
          fontSize: "clamp(4.5rem, 7vw, 6.5rem)",
          color: "var(--text-dim)",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Main content */}
      <div className="relative z-10 flex flex-col h-full p-8 lg:p-10">

        {/* Top: counter + status */}
        <div className="flex items-center justify-between mb-8">
          <span
            className="label"
            style={{ fontSize: "0.6rem", color: "var(--text-dim)", letterSpacing: "0.2em" }}
          >
            {String(index + 1).padStart(2, "0")}&nbsp;/&nbsp;{String(FEATURED_KEYS.length).padStart(2, "0")}
          </span>
          <span
            className="label border rounded-full px-2.5 py-[3px]"
            style={{ fontSize: "0.55rem", color: colors.text, borderColor: colors.border }}
          >
            {project.progress}
          </span>
        </div>

        {/* Project name */}
        <h3
          className="font-black text-[var(--text)] mb-4"
          style={{
            fontSize: "clamp(1.7rem, 2.4vw, 2.4rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-6"
          style={{ color: "var(--text-muted)", maxWidth: "34ch" }}
        >
          {project.description}
        </p>

        {/* Accent rule */}
        <div
          className="h-px w-10 mb-6"
          style={{ background: "var(--accent-border)" }}
        />

        {/* Stack tags */}
        <div className="flex-1">
          <span className="label block mb-3" style={{ fontSize: "0.55rem" }}>
            Stack
          </span>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="border rounded px-2 py-[3px]"
                style={{
                  fontSize: "0.6rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  color: "var(--text-muted)",
                  borderColor: "var(--border)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          className="mt-8 pt-5 flex items-center justify-between"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <span
            className="label truncate"
            style={{ fontSize: "0.6rem", maxWidth: "55%", color: "var(--text-muted)" }}
          >
            {project.domain ?? project.key}
          </span>
          {project.website && (
            <a
              href={project.website.href}
              target="_blank"
              rel="noopener noreferrer"
              className="label flex items-center gap-1.5 transition-colors duration-300 hover:text-[var(--accent)]"
              style={{ fontSize: "0.6rem" }}
            >
              View&nbsp;project&nbsp;↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Work Section ────────────────────────────────────────────────────────────
export default function Work() {
  const sectionRef  = useRef<HTMLElement>(null);
  const headingRef  = useRef<HTMLDivElement>(null);
  const trackRef    = useRef<HTMLDivElement>(null);
  const cardsRef    = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Heading scroll reveal ─────────────────────────────────────────────
      gsap.fromTo(
        headingRef.current,
        { y: 40, autoAlpha: 0 },
        {
          y: 0, autoAlpha: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 84%" },
        }
      );

      // ── Responsive scroll ─────────────────────────────────────────────────
      const mm = gsap.matchMedia();

      // DESKTOP: horizontal scroll + pin
      mm.add("(min-width: 1024px)", () => {
        const track = trackRef.current!;
        const cards = cardsRef.current!;

        // Give cards the computed desktop size before measuring
        // (they get their width from the CSS class applied on lg)
        const cardEls = cards.querySelectorAll<HTMLElement>(".work-card");
        cardEls.forEach((c) => {
          c.style.width  = "clamp(440px, 33vw, 540px)";
          c.style.height = "calc(100svh - 9rem)";
          c.style.maxHeight = "640px";
          c.style.minHeight = "460px";
        });

        // Slight delay so layout is flushed
        requestAnimationFrame(() => {
          const overflow = cards.scrollWidth - track.offsetWidth;

          gsap.to(cards, {
            x: -overflow,
            ease: "none",
            scrollTrigger: {
              trigger: track,
              start: "top top",
              end: () => `+=${cards.scrollWidth - track.offsetWidth}`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                if (progressRef.current) {
                  progressRef.current.style.transform = `scaleX(${self.progress})`;
                }
              },
            },
          });
        });

        return () => {
          gsap.set(cards, { clearProps: "x" });
          const cardEls = cards.querySelectorAll<HTMLElement>(".work-card");
          cardEls.forEach((c) => {
            c.style.removeProperty("width");
            c.style.removeProperty("height");
            c.style.removeProperty("maxHeight");
            c.style.removeProperty("minHeight");
          });
        };
      });

      // MOBILE: staggered vertical reveal
      mm.add("(max-width: 1023px)", () => {
        gsap.fromTo(
          ".work-card",
          { y: 50, autoAlpha: 0 },
          {
            y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.15, ease: "power3.out",
            scrollTrigger: { trigger: cardsRef.current, start: "top 80%" },
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work">

      {/* ── Heading ──────────────────────────────────────────────────────── */}
      <div
        ref={headingRef}
        className="section-pad pb-14 lg:pb-20"
        style={{ opacity: 0 }}
      >
        <span className="label mb-5 block">Selected Work</span>
        <h2 className="text-display-md text-[var(--text)]">
          things I&apos;ve built.
        </h2>
      </div>

      <hr className="divider" />

      {/* ── Scroll track ─────────────────────────────────────────────────── */}
      <div
        ref={trackRef}
        className="relative overflow-hidden"
        style={{ minHeight: "100svh" }}
      >
        {/* Scroll hint — desktop only */}
        <div className="absolute top-8 right-10 hidden lg:flex items-center gap-2.5 z-20 pointer-events-none">
          <span className="label" style={{ fontSize: "0.58rem" }}>scroll to explore</span>
          <div className="w-5 h-px" style={{ background: "var(--border-hover)" }} />
        </div>

        {/* Cards strip */}
        <div
          ref={cardsRef}
          className="flex flex-col lg:flex-row gap-5 px-6 lg:px-14 py-10 lg:py-0 lg:items-center lg:h-screen"
        >
          {projects.map((project, i) => (
            <Card key={project.key} project={project} index={i} />
          ))}
        </div>

        {/* Progress bar (desktop, visible when pinned) */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px hidden lg:block"
          style={{ background: "var(--border)" }}
        >
          <div
            ref={progressRef}
            className="h-full"
            style={{
              background: "var(--accent)",
              transformOrigin: "left",
              transform: "scaleX(0)",
              transition: "none",
            }}
          />
        </div>
      </div>

    </section>
  );
}
