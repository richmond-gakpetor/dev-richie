"use client";

import { useEffect, useRef, useState } from "react";

// Assembled at runtime so the address never appears whole in the server HTML.
const USER = "gakpetorr01";
const DOMAIN = "gmail.com";
const EMAIL = [USER, DOMAIN].join("@");

const VISIBLE = 4; // leading characters that are always shown
const HIDDEN = USER.length - VISIBLE;
const GLYPHS = "abcdefghijklmnopqrstuvwxyz0123456789";
const STAGGER_MS = 35; // delay between each character settling
const SCRAMBLE_MS = 120; // how long each character flickers before settling

const masked = "•".repeat(HIDDEN);
const secret = USER.slice(VISIBLE);
const randomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

/**
 * Shows the email with part of the local name masked. Hover or focus decodes
 * the hidden characters left to right; leaving scrambles them back.
 * On touch, the first tap reveals and the second follows the mailto link.
 */
export default function EmailReveal() {
  const [text, setText] = useState(masked);
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const frame = useRef<number>(0);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const animateTo = (target: string) => {
    cancelAnimationFrame(frame.current);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(target);
      return;
    }

    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      let done = true;
      const next = Array.from(target, (char, i) => {
        if (elapsed >= i * STAGGER_MS + SCRAMBLE_MS) return char;
        done = false;
        return randomGlyph();
      }).join("");
      setText(next);
      if (!done) frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
  };

  const reveal = () => {
    if (revealed) return;
    setRevealed(true);
    animateTo(secret);
  };

  const conceal = () => {
    if (!revealed) return;
    setRevealed(false);
    animateTo(masked);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <div className="mt-8 flex flex-wrap items-baseline gap-x-5 gap-y-2">
      <a
        href={revealed ? `mailto:${EMAIL}` : undefined}
        role="link"
        tabIndex={0}
        aria-label={revealed ? `Email ${EMAIL}` : "Email address, focus to reveal"}
        onPointerEnter={(e) => e.pointerType === "mouse" && reveal()}
        onPointerLeave={(e) => e.pointerType === "mouse" && conceal()}
        onFocus={reveal}
        onBlur={conceal}
        onClick={(e) => {
          // Touch: first tap reveals rather than navigating
          if (!revealed) {
            e.preventDefault();
            reveal();
          }
        }}
        className="link cursor-pointer text-[clamp(1.375rem,3.4vw,2rem)] font-medium tracking-[-0.02em]"
      >
        {USER.slice(0, VISIBLE)}
        <span className={revealed ? undefined : "tracking-[0.08em] text-muted"}>{text}</span>@
        {DOMAIN}
      </a>
      <button
        type="button"
        onClick={copy}
        className="font-mono text-[0.8125rem] text-muted transition-colors hover:text-fg"
      >
        <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
      </button>
    </div>
  );
}
