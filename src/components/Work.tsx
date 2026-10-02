import Section from "@/components/Section";
import projectInfo from "@/components/utils/projectInfo";

const FEATURED_KEYS = ["emergo", "roverapp", "eazyed", "xposuregh", "dashboard"];
const projects = FEATURED_KEYS.map((k) => projectInfo.get(k)!);

export default function Work() {
  return (
    <Section id="work" label="Selected work" index={2}>
      <ul className="dim-siblings -mt-5">
        {projects.map((p) => (
          <li key={p.key} className="border-b border-line transition-opacity duration-300 last:border-0">
            <a
              href={p.website?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-6 py-5"
            >
              <div>
                <h3 className="flex items-baseline gap-3 font-medium">
                  {p.title}
                  {p.progress !== "Shipped" && (
                    <span className="font-mono text-xs text-muted">{p.progress}</span>
                  )}
                </h3>
                <p className="mt-1 text-muted">{p.description}</p>
                <p className="mt-3 font-mono text-xs text-faint">{p.stack.join(" · ")}</p>
              </div>
              <span
                aria-hidden
                className="mt-0.5 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
              >
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
