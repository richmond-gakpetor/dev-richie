"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";

// ─── Film-strip decoration ────────────────────────────────────────────────────
function FilmStrip({ count = 6 }: { count?: number }) {
  return (
    <div className="flex gap-[3px]">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="w-[11px] h-[7px] rounded-[2px]"
          style={{ background: i % 2 === 0 ? "var(--border-hover)" : "var(--border)" }}
        />
      ))}
    </div>
  );
}

// ─── MeetMeModal ─────────────────────────────────────────────────────────────
export default function MeetMeModal() {
  const [open, setOpen]           = useState(false);
  const [iframeSrc, setIframeSrc]   = useState("");

  const overlayRef = useRef<HTMLDivElement>(null);
  const cardRef    = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const YT_BASE = "https://www.youtube.com/embed/0HEvLvI46gs";
  const YT_PARAMS = "?autoplay=1&rel=0&modestbranding=1&color=white";

  // ── Trigger entrance (after hero finishes) ───────────────────────────────
  useEffect(() => {
    gsap.fromTo(
      triggerRef.current,
      { autoAlpha: 0, y: 10 },
      { autoAlpha: 1, y: 0, duration: 0.7, delay: 2.8, ease: "power3.out" }
    );
  }, []);

  // ── Close ────────────────────────────────────────────────────────────────
  const handleClose = useCallback(() => {
    gsap
      .timeline({
        onComplete: () => {
          setOpen(false);
          setIframeSrc(""); // unload iframe → stops audio/video immediately
          gsap.set(overlayRef.current, { display: "none" });
          document.body.style.overflow = "";
        },
      })
      .to(cardRef.current, {
        autoAlpha: 0,
        scale: 0.93,
        y: 20,
        duration: 0.32,
        ease: "power3.in",
      })
      .to(overlayRef.current, { autoAlpha: 0, duration: 0.28 }, "-=0.12");
  }, []);

  // ── Open ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    gsap.set(overlayRef.current, { display: "flex", autoAlpha: 0 });
    gsap.set(cardRef.current, { autoAlpha: 0, scale: 0.88, y: 28 });

    gsap
      .timeline()
      .to(overlayRef.current, { autoAlpha: 1, duration: 0.38, ease: "power2.out" })
      .to(
        cardRef.current,
        { autoAlpha: 1, scale: 1, y: 0, duration: 0.58, ease: "expo.out" },
        "-=0.12"
      );

    // Load iframe with autoplay — user gesture (button click) satisfies browser policy
    setIframeSrc(YT_BASE + YT_PARAMS);
  }, [open]);

  // ── Escape key ───────────────────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleClose]);

  return (
    <>
      {/* ── Floating trigger ─────────────────────────────────────────────── */}
      <button
        ref={triggerRef}
        onClick={() => setOpen(true)}
        aria-label="Watch intro video"
        className="fixed bottom-8 right-8 z-40 flex items-center gap-2.5 px-4 py-2.5 rounded-full label"
        style={{
          opacity: 0, // GSAP will override
          background: "var(--card)",
          border: "1px solid var(--border-hover)",
          color: "var(--text-muted)",
          fontSize: "0.62rem",
          letterSpacing: "0.2em",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          transition: "border-color 0.3s ease, color 0.3s ease, background 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--accent)";
          e.currentTarget.style.color = "var(--text)";
          e.currentTarget.style.background = "rgba(123,175,199,0.07)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--border-hover)";
          e.currentTarget.style.color = "var(--text-muted)";
          e.currentTarget.style.background = "var(--card)";
        }}
      >
        {/* Play dot */}
        <span
          className="flex items-center justify-center w-[18px] h-[18px] rounded-full flex-shrink-0"
          style={{
            background: "var(--accent)",
            color: "#090909",
            fontSize: "0.42rem",
            paddingLeft: "1px", // optical centering of play triangle
          }}
        >
          ▶
        </span>
        MEET ME
      </button>

      {/* ── Modal overlay ─────────────────────────────────────────────────── */}
      {/*   Always in DOM — GSAP controls display/opacity to enable exit anim  */}
      <div
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        aria-label="Meet Richmond"
        className="fixed inset-0 z-[200] items-center justify-center p-6 lg:p-16"
        style={{
          display: "none",
          background: "rgba(9,9,9,0.94)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) handleClose();
        }}
      >
        <div
          ref={cardRef}
          className="relative w-full max-w-3xl"
          style={{ willChange: "transform, opacity" }}
        >
          {/* ── Dismiss hint ─────────────────────────────────────────── */}
          <button
            onClick={handleClose}
            className="absolute -top-10 right-0 label"
            style={{
              fontSize: "0.58rem",
              letterSpacing: "0.24em",
              color: "var(--text-muted)",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            [ ESC TO CLOSE ]
          </button>

          {/* ── Film-strip header ─────────────────────────────────────── */}
          <div className="flex items-center gap-3 mb-3 overflow-hidden">
            <FilmStrip />
            <span
              className="label flex-shrink-0"
              style={{
                fontSize: "0.58rem",
                color: "var(--text-muted)",
                letterSpacing: "0.22em",
              }}
            >
              RICHMOND GAKPETOR — INTRO
            </span>
            <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
            <span
              className="label flex-shrink-0"
              style={{ fontSize: "0.58rem", color: "var(--text-muted)", letterSpacing: "0.15em" }}
            >
              01 / 01
            </span>
          </div>

          {/* ── Video ─────────────────────────────────────────────────── */}
          <div
            className="relative w-full overflow-hidden rounded-sm"
            style={{
              aspectRatio: "16/9",
              background: "#000",
              border: "1px solid var(--border)",
              boxShadow:
                "0 40px 80px rgba(0,0,0,0.75), 0 0 0 1px rgba(123,175,199,0.05)",
            }}
          >
            <iframe
              src={iframeSrc}
              className="w-full h-full"
              title="Meet Richmond Gakpetor"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              style={{ border: "none", display: "block" }}
            />

            {/* Subtle corner vignette — doesn't block controls */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 55%, rgba(9,9,9,0.4) 100%)",
              }}
            />
          </div>

          {/* ── Footer ────────────────────────────────────────────────── */}
          <div className="flex items-center justify-between mt-3">
            <span
              className="label"
              style={{
                fontSize: "0.58rem",
                color: "var(--text-muted)",
                letterSpacing: "0.18em",
              }}
            >
              SOFTWARE ENGINEER · ACCRA, GHANA
            </span>
            <FilmStrip />
          </div>
        </div>
      </div>
    </>
  );
}
