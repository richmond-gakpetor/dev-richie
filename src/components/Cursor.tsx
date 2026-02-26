"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Desktop (fine pointer) only
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;

    // Centre both on their own position; hide until first move
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

    let revealed = false;

    const onMove = ({ clientX: x, clientY: y }: MouseEvent) => {
      if (!revealed) {
        gsap.to([dot, ring], { opacity: 1, duration: 0.35, ease: "power2.out" });
        document.documentElement.style.cursor = "none";
        revealed = true;
      }
      // Dot snaps, ring lags
      gsap.to(dot, { x, y, duration: 0.08, ease: "none" });
      gsap.to(ring, { x, y, duration: 0.4, ease: "power3.out" });
    };

    const onEnter = () =>
      gsap.to(ring, {
        scale: 2.2,
        opacity: 0.3,
        borderColor: "var(--accent)",
        duration: 0.3,
        ease: "power2.out",
      });

    const onLeave = () =>
      gsap.to(ring, {
        scale: 1,
        opacity: 1,
        borderColor: "rgba(240,237,232,0.3)",
        duration: 0.3,
        ease: "power2.out",
      });

    window.addEventListener("mousemove", onMove);

    // Bind interactive targets
    const bindTargets = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    bindTargets();

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.style.cursor = "";
    };
  }, []);

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[9999] w-[7px] h-[7px] rounded-full bg-[var(--text)] pointer-events-none"
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[9998] w-9 h-9 rounded-full pointer-events-none border"
        style={{ borderColor: "rgba(240,237,232,0.3)" }}
      />
    </>
  );
}
