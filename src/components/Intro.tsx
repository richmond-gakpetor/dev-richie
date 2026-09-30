import IntroVideo from "@/components/IntroVideo";

export default function Intro() {
  return (
    <section
      aria-label="Introduction"
      className="reveal pb-20 pt-16 sm:pb-28 sm:pt-28"
      style={{ "--i": 1 } as React.CSSProperties}
    >
      <p className="max-w-3xl [text-wrap:balance] text-[clamp(1.875rem,4.6vw,3.25rem)] font-medium leading-[1.12] tracking-[-0.03em]">
        Software engineer building web and mobile products.{" "}
        <span className="text-muted">
          I care about fundamentals, fast interfaces, and shipping things people
          actually use.
        </span>
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[0.8125rem] text-muted">
        <span className="flex items-center gap-2">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Open to new work
        </span>
        <span>Accra, Ghana</span>
        <IntroVideo />
      </div>
    </section>
  );
}
