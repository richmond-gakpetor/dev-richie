import Section from "@/components/Section";

export default function About() {
  return (
    <Section id="about" label="About" index={3}>
      <div className="space-y-5 text-[1.0625rem] text-muted">
        <p>
          <span className="text-fg">I&apos;m a software engineer in Accra</span>,
          working across web and mobile, mostly in TypeScript, React, React
          Native, and the AWS services underneath them. The products I&apos;ve
          built are used by thousands of people.
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
