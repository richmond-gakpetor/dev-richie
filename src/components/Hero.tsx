import IntroVideo from "@/components/IntroVideo";
import Panel from "@/components/Panel";
import Search from "@/components/Search";

export default function Hero() {
  return (
    <Panel id="top" section="hero" index="00" label="Richmond Gakpetor" caption="Accra, Ghana">
      <h1
        data-intro
        data-headline
        className="text-[clamp(2.25rem,4.2vw,3.5rem)] font-medium leading-[1.04] tracking-[-0.035em] text-fg [text-wrap:balance]"
      >
        Software engineer building applied AI.
      </h1>
      <p data-intro className="mt-5 max-w-[38ch] text-[1.0625rem] leading-relaxed text-muted">
        I fine-tune language models, build RAG systems, and ship the products around them. This
        page is a map of that work: everything here is a point in a shared space, placed by
        similarity.
      </p>

      <div
        data-intro
        className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[0.8125rem] text-muted"
      >
        <span className="flex items-center gap-2 text-fg">
          <span aria-hidden className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          Open to AI/ML roles
        </span>
        {/* <IntroVideo />  Hide for now... */}
      </div>

      <Search />
    </Panel>
  );
}
