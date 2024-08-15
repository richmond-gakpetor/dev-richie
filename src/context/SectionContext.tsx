"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type Props = {
  children: React.ReactNode;
};

type Section = { id: number; name: string; link: string };

type SectionContext = {
  currentSection: Section;
  setCurrentSection: Dispatch<SetStateAction<Section>>;
  sections: Section[];
  getSectionDetails(name: string): Section;
};

export const SectionContext = createContext<SectionContext | null>(null);

const sections: Section[] = [
  { id: 1, name: "intro", link: "intro" },
  { id: 2, name: "about", link: "about" },
  { id: 3, name: "skills", link: "skills" },
  { id: 4, name: "apps", link: "apps" },
  { id: 5, name: "contact", link: "contact" },
];

export default function SectionContextProvider(props: Props) {
  const { children } = props;
  const [currentSection, setCurrentSection] = useState(sections[0]);
  // console.log(currentSection);

  function getSectionDetails(name: string) {
    const section = sections.find((section) => section.name === name);

    if (!section) throw new Error("Section does not exist");

    return section;
  }

  const values = {
    currentSection,
    setCurrentSection,
    sections,
    getSectionDetails,
  };

  return (
    <SectionContext.Provider value={values}>{children}</SectionContext.Provider>
  );
}

export function useSectionContext() {
  const context = useContext(SectionContext);
  if (context === null) {
    throw new Error(
      "useSectionContext must be used within a SectionContextProvider"
    );
  }
  return context;
}
