export default function Header() {
  return (
    <header className="reveal flex items-center justify-between py-8 text-[0.9375rem]">
      <a href="/" className="font-medium">
        Richmond Gakpetor
      </a>
      <nav aria-label="Primary">
        <ul className="flex items-center gap-6 text-muted">
          <li className="hidden sm:block">
            <a href="#work" className="link transition-colors hover:text-fg">Work</a>
          </li>
          <li className="hidden sm:block">
            <a href="#contact" className="link transition-colors hover:text-fg">Contact</a>
          </li>
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="link transition-colors hover:text-fg"
            >
              Résumé ↗
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
