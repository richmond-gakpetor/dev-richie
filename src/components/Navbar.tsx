"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

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
        className="label font-black tracking-[0.25em] text-[var(--text)] hover:text-[var(--accent)] transition-colors duration-300"
        style={{ fontSize: "0.7rem" }}
      >
        RG
      </a>

      {/* Section links */}
      <ul className="flex items-center gap-8 lg:gap-10">
        {links.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className="label hover:text-[var(--text)] transition-colors duration-300"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
