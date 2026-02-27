"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// Smooth-scroll to a hash target via the Lenis instance
function scrollTo(href: string) {
  const lenis = (window as any).lenis;
  if (lenis) {
    lenis.scrollTo(href, {
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  } else {
    // Fallback for SSR / before Lenis mounts
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Entrance animation — slides in after hero chars finish
    gsap.fromTo(
      navRef.current,
      { y: -18, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 1.6, ease: "power3.out" }
    );

    // Frosted background on scroll
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 lg:px-14 lg:py-6"
      style={{
        opacity: 0, // GSAP will override
        transition: "background 0.4s ease, border-color 0.4s ease",
        background: scrolled ? "rgba(9,9,9,0.75)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
      }}
    >
      {/* Logo mark */}
      <a
        href="#hero"
        onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
        className="label font-black tracking-[0.25em] text-[var(--text)] hover:text-[var(--accent)] transition-colors duration-300"
        style={{ fontSize: "0.7rem" }}
      >
        RG
      </a>

      {/* Section links + résumé */}
      <ul className="flex items-center gap-8 lg:gap-10">
        {links.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              onClick={(e) => { e.preventDefault(); scrollTo(href); }}
              className="label hover:text-[var(--text)] transition-colors duration-300"
            >
              {label}
            </a>
          </li>
        ))}

        {/* Résumé — visually distinct pill */}
        <li>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="label"
            style={{
              fontSize: "0.62rem",
              padding: "0.38em 0.9em",
              borderRadius: "100px",
              border: "1px solid var(--border-hover)",
              color: "var(--text-muted)",
              letterSpacing: "0.18em",
              transition: "border-color 0.3s ease, color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent)";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--text)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border-hover)";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
            }}
          >
            RÉSUMÉ ↗
          </a>
        </li>
      </ul>
    </nav>
  );
}
