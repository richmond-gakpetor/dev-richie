/**
 * Shared editorial row: a small mono label in the left rail, content on the
 * right. Collapses to a single column on small screens.
 */
export default function Section({
  id,
  label,
  index,
  children,
}: {
  id: string;
  label: string;
  index: number;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-label`}
      className="reveal grid gap-6 border-t border-line py-16 sm:py-24 md:grid-cols-[11rem_1fr] md:gap-8"
      style={{ "--i": index } as React.CSSProperties}
    >
      <h2 id={`${id}-label`} className="font-mono text-[0.8125rem] text-muted">
        {label}
      </h2>
      <div className="max-w-2xl">{children}</div>
    </section>
  );
}
