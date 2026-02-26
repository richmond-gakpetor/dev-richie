"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ────────────────────────────────────────────────────────────────────
const EMAIL = "gakpetorr01@gmail.com";

const SOCIALS = [
  {
    icon: <AiOutlineGithub size={19} />,
    label: "GitHub",
    handle: "richmond-gakpetor",
    href: "https://github.com/richmond-gakpetor",
  },
  {
    icon: <AiOutlineTwitter size={19} />,
    label: "Twitter / X",
    handle: "@_vision_richie",
    href: "https://twitter.com/_vision_richie",
  },
  {
    icon: <AiFillLinkedin size={19} />,
    label: "LinkedIn",
    handle: "Richmond Gakpetor",
    href: "https://www.linkedin.com/in/richmond-gakpetor/",
  },
  {
    icon: <BsYoutube size={19} />,
    label: "YouTube",
    handle: "TechTrafficControl",
    href: "https://www.youtube.com/@TechTrafficControl",
  },
];

type Social = (typeof SOCIALS)[number];

// ─── Magnetic social link ────────────────────────────────────────────────────────
function MagneticLink({ icon, label, handle, href }: Social) {
  const wrapRef  = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLAnchorElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = wrapRef.current!.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width  / 2);
    const dy = e.clientY - (rect.top  + rect.height / 2);
    gsap.to(innerRef.current, {
      x: dx * 0.3, y: dy * 0.3,
      duration: 0.35, ease: "power2.out",
    });
  };

  const onMouseLeave = () => {
    gsap.to(innerRef.current, {
      x: 0, y: 0,
      duration: 0.7, ease: "elastic.out(1, 0.45)",
    });
  };

  return (
    // Enlarged hit-area wrapper that drives the magnetic field
    <div
      ref={wrapRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="py-4"
    >
      <a
        ref={innerRef}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 group"
        style={{ willChange: "transform", display: "inline-flex" }}
      >
        {/* Icon bubble */}
        <span
          className="flex items-center justify-center w-11 h-11 rounded-xl border transition-all duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent-muted)]"
          style={{
            background: "var(--card)",
            borderColor: "var(--border)",
            color: "var(--text-muted)",
          }}
        >
          {icon}
        </span>

        {/* Text */}
        <div className="flex flex-col gap-[3px]">
          <span
            className="label"
            style={{ fontSize: "0.58rem", color: "var(--text-muted)" }}
          >
            {label}
          </span>
          <span
            className="font-medium text-sm transition-colors duration-300 group-hover:text-[var(--accent)]"
            style={{
              color: "var(--text)",
              letterSpacing: "-0.01em",
            }}
          >
            {handle}
          </span>
        </div>

        {/* Arrow — slides in on hover */}
        <span
          className="ml-6 text-xs transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
          style={{ color: "var(--accent)" }}
        >
          ↗
        </span>
      </a>
    </div>
  );
}

// ─── Contact ───────────────────────────────────────────────────────────────────
export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const charsRef   = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Heading reveal
      gsap.fromTo(
        ".c-heading",
        { y: 44, autoAlpha: 0 },
        {
          y: 0, autoAlpha: 1, duration: 1.05, ease: "power3.out",
          scrollTrigger: { trigger: ".c-heading", start: "top 84%" },
        }
      );

      // Email link reveal
      gsap.fromTo(
        ".c-email",
        { y: 30, autoAlpha: 0 },
        {
          y: 0, autoAlpha: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: ".c-email", start: "top 88%" },
        }
      );

      // Socials stagger in from right
      gsap.fromTo(
        ".c-social",
        { x: 28, autoAlpha: 0 },
        {
          x: 0, autoAlpha: 1, duration: 0.7, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".c-social", start: "top 85%" },
        }
      );

      // Footer
      gsap.fromTo(
        ".c-footer",
        { autoAlpha: 0 },
        {
          autoAlpha: 1, duration: 1.2, ease: "power2.out",
          scrollTrigger: { trigger: ".c-footer", start: "top 96%" },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ── Email hover — char-level colour sweep ─────────────────────────────────
  const onEmailEnter = () => {
    gsap.to(charsRef.current, {
      color: "var(--accent)",
      duration: 0.03,
      stagger: { each: 0.022, from: "start" },
      ease: "none",
    });
    gsap.to(".c-email-line", {
      scaleX: 1, background: "var(--accent)",
      duration: 0.45, ease: "power3.out",
    });
  };

  const onEmailLeave = () => {
    gsap.to(charsRef.current, {
      color: "var(--text)",
      duration: 0.03,
      stagger: { each: 0.018, from: "end" },
      ease: "none",
    });
    gsap.to(".c-email-line", {
      scaleX: 0, background: "var(--border)",
      duration: 0.35, ease: "power2.in",
    });
  };

  return (
    <section ref={sectionRef} id="contact">
      <hr className="divider" />

      <div className="section-pad">
        {/* Label */}
        <span
          className="c-heading label block mb-14"
          style={{ opacity: 0 }}
        >
          Contact
        </span>

        {/* ── Two-column grid ────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-start">

          {/* Left — heading + description + email */}
          <div>
            <h2
              className="c-heading text-display-md text-[var(--text)] mb-8"
              style={{ opacity: 0 }}
            >
              Let&apos;s build<br />something.
            </h2>

            <p
              className="text-sm leading-relaxed mb-14"
              style={{ color: "var(--text-muted)", maxWidth: "36ch" }}
            >
              Open to new opportunities, interesting problems, and good
              collaborations. Reach out — I respond.
            </p>

            {/* Giant email with char sweep */}
            <a
              href={`mailto:${EMAIL}`}
              className="c-email block group"
              onMouseEnter={onEmailEnter}
              onMouseLeave={onEmailLeave}
              style={{ opacity: 0 }}
            >
              <p
                className="font-black leading-tight select-none"
                style={{
                  fontSize: "clamp(1rem, 2.6vw, 2rem)",
                  letterSpacing: "-0.025em",
                  wordBreak: "break-all",
                }}
              >
                {EMAIL.split("").map((char, i) => (
                  <span
                    key={i}
                    ref={(el) => { charsRef.current[i] = el; }}
                    style={{ color: "var(--text)", display: "inline" }}
                  >
                    {char}
                  </span>
                ))}
              </p>

              {/* Animated underline */}
              <div
                className="c-email-line mt-4 h-px"
                style={{
                  background: "var(--border)",
                  transformOrigin: "left",
                  transform: "scaleX(0)",
                }}
              />
            </a>
          </div>

          {/* Right — social links */}
          <div className="flex flex-col divide-y" style={{ borderColor: "var(--border)" }}>
            <div
              className="pb-5 mb-1"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <span className="label" style={{ fontSize: "0.58rem" }}>
                Find me on
              </span>
            </div>
            {SOCIALS.map((s) => (
              <div
                key={s.href}
                className="c-social"
                style={{
                  opacity: 0,
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <MagneticLink {...s} />
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Footer bar ──────────────────────────────────────────────────── */}
      <div className="c-footer" style={{ opacity: 0 }}>
        <hr className="divider" />
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-6 py-6 lg:px-14"
        >
          <span className="label" style={{ fontSize: "0.6rem" }}>
            Richmond Gakpetor &copy; 2026
          </span>
          <span className="label" style={{ fontSize: "0.6rem" }}>
            Designed &amp; built from scratch · Next.js · GSAP · Tailwind
          </span>
        </div>
      </div>
    </section>
  );
}
