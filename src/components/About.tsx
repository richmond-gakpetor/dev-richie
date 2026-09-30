import Section from "@/components/Section";

export default function About() {
  return (
    <Section id="about" label="About" index={3}>
      <div className="space-y-5 text-[1.0625rem] text-muted">
        <p>
          <span className="text-fg">
            I&apos;m a software engineer in Accra with an MSc in Computer Science
          </span>
          . My thesis focused on fine-tuning
          quantized small language models, and I&apos;ve built RAG applications
          with the Hugging Face ecosystem.
        </p>
        <p>
          Day to day, I ship production software: web and mobile products in
          TypeScript, React, and React Native on AWS, used by thousands of
          people. That&apos;s the edge I bring to AI work. A model
          only matters once it&apos;s reliable, fast, and in someone&apos;s hands.
        </p>
        <p>
          I put fundamentals first. Tools turn over every quarter; a real
          understanding of how the platform works is what lets me pick up the
          useful ones quickly and ship without guessing.
        </p>
        <p>
          I also run{" "}
          <a
            href="https://www.youtube.com/@TechTrafficControl"
            target="_blank"
            rel="noopener noreferrer"
            className="link text-fg"
          >
            TechTrafficControl
          </a>
          , a YouTube channel where I share what I learn on the job, for anyone
          building that foundation on their own.
        </p>
      </div>
    </Section>
  );
}
