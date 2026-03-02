"use client";

import { useEffect, useRef, useState } from "react";
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
  const [copied, setCopied] = useState(false);

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

  // ── Copy email to clipboard ───────────────────────────────────────────────
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
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

            {/* Email CTA */}
            <div
              className="c-email flex flex-col items-start gap-4"
              style={{ opacity: 0 }}
            >
              {/* Primary button — opens mail app */}
              <a
                href={`mailto:${EMAIL}`}
                className="group inline-flex items-center gap-3 px-6 py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:brightness-110 active:scale-95"
                style={{
                  background: "var(--accent)",
                  color: "#0d1117",
                }}
              >
                Shoot me an email
                <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            </div>
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
          <span className="label hidden" style={{ fontSize: "0.6rem" }}>
            Designed &amp; built from scratch · Next.js · GSAP · Tailwind
          </span>
        </div>
      </div>
    </section>
  );
}
