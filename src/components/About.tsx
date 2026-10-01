import Section from "@/components/Section";

export default function About() {
  return (
    <Section id="about" label="About" index={3}>
      <div className="space-y-5 text-[1.0625rem] text-muted">
        <p>
          <span className="text-fg">I build software that holds up in production</span>:
          web and mobile products on AWS, used by thousands of people. Lately my
          focus is language models: fine-tuning them, grounding them in real
          data, and making them reliable enough to ship.
        </p>
        <p>
          MSc in Computer Science. I also run{" "}
          <a
            href="https://www.youtube.com/@TechTrafficControl"
            target="_blank"
            rel="noopener noreferrer"
            className="link text-fg"
          >
            TechTrafficControl
          </a>
          , where I share what I learn on the job.
        </p>
      </div>
    </Section>
  );
}
