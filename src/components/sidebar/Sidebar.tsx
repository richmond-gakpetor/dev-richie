"use client";

import Navbar from "@/components/Navbar";
import SectionNumber from "@/components/sidebar/SectionNumber";
import Container from "@/components/ui/Container";
import { useSectionContext } from "@/context/SectionContext";
import Link from "next/link";

interface Props {
  className: string;
}

const Sidebar = (props: Props) => {
  const { className } = props;
  const { sections, currentSection, setCurrentSection } = useSectionContext();

  const list = sections.map((section) => {
    const active = currentSection.link === section.link;

    const activeLink = active
      ? `text-primary opacity-100`
      : "text-secondary opacity-50";

    return (
      <li
        key={section.id}
        onClick={() => setCurrentSection(section)}
        className={`cursor-pointer ${activeLink} hover:text-primary hover:opacity-100 transition-all ease-in-out duration-300
        `}
      >
        <Link
          href={`#${section.link}`}
          className="grid grid-cols-[1fr,2fr] gap-2 w-32"
        >
          <p className="grid place-self-center">{section.id}.</p>
          <p>#&nbsp;{section.name}</p>
        </Link>
      </li>
    );
  });

  return (
    <aside className={`h-full ${className} `}>
      <Container className="h-full">
        <Navbar />

        <div className="h-[80%] grid grid-cols-[20%,80%]">
          <SectionNumber />
          <ul className="grid place-items-center">
            <div className="flex flex-col gap-5">{list}</div>
          </ul>
        </div>
      </Container>
    </aside>
  );
};

export default Sidebar;
