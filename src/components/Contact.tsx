import Section from "@/components/Section";
import EmailReveal from "@/components/EmailReveal";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/richmond-gakpetor" },
  { label: "X", href: "https://x.com/_vision_richie" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/richmond-gakpetor/" },
  { label: "YouTube", href: "https://www.youtube.com/@TechTrafficControl" },
];

export default function Contact() {
  return (
    <Section id="contact" label="Contact" index={5}>
      <p className="text-muted">
        Open to new roles, interesting problems, and good collaborators. Email
        is the fastest way to reach me.
      </p>

      <EmailReveal />

      <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[0.8125rem] text-muted">
        {SOCIALS.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="link transition-colors hover:text-fg"
            >
              {label} ↗
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
