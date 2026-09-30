"use client";

import { useRef, useState } from "react";

const VIDEO_SRC =
  "https://www.youtube-nocookie.com/embed/0HEvLvI46gs?autoplay=1&rel=0&modestbranding=1";

/**
 * A text link that opens the intro video in a native <dialog>, which gives us
 * focus trapping, Esc-to-close and a proper modal role for free. The iframe
 * only mounts while open, so nothing loads from YouTube until it's asked for.
 */
export default function IntroVideo() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  const show = () => {
    setOpen(true);
    dialogRef.current?.showModal();
  };

  return (
    <>
      <button
        type="button"
        onClick={show}
        className="link transition-colors hover:text-fg"
      >
        Watch the intro →
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Intro video"
        onClose={() => setOpen(false)}
        // Clicks on the backdrop land on the dialog element itself
        onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}
        className="w-[min(56rem,calc(100vw-2rem))] bg-transparent p-0 backdrop:bg-black/80 backdrop:backdrop-blur-sm"
      >
        <div className="aspect-video w-full overflow-hidden rounded-md bg-black">
          {open && (
            <iframe
              src={VIDEO_SRC}
              title="Intro — Richmond Gakpetor"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          )}
        </div>
        <form method="dialog" className="mt-3 text-right">
          <button className="link font-mono text-[0.8125rem] text-white/70 transition-colors hover:text-white">
            Close (Esc)
          </button>
        </form>
      </dialog>
    </>
  );
}
