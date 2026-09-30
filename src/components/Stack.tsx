import Section from "@/components/Section";

const STACK = [
  { area: "AI / ML", tools: ["PyTorch", "Hugging Face", "LLM fine-tuning", "RAG", "NLP"] },
  { area: "Languages", tools: ["Python", "TypeScript", "JavaScript"] },
  { area: "Web", tools: ["React", "Next.js", "Tailwind CSS"] },
  { area: "Mobile", tools: ["React Native", "Expo"] },
  { area: "Backend", tools: ["Node.js", "GraphQL", "PostgreSQL", "MongoDB"] },
  { area: "Platform", tools: ["AWS", "Serverless", "Vercel", "Firebase", "Sentry"] },
];

export default function Stack() {
  return (
    <Section id="stack" label="Stack" index={4}>
      <dl className="grid gap-y-3 sm:grid-cols-[8rem_1fr]">
        {STACK.map(({ area, tools }) => (
          <div key={area} className="contents">
            <dt className="font-mono text-[0.8125rem] leading-7 text-faint">{area}</dt>
            <dd className="mb-3 sm:mb-0">{tools.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
