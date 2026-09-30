import LocalTime from "@/components/LocalTime";

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-2 border-t border-line py-8 font-mono text-xs text-faint">
      <span>© {new Date().getFullYear()} Richmond Gakpetor</span>
      <LocalTime />
    </footer>
  );
}
