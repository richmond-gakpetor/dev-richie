"use client";

import { useSectionContext } from "@/context/SectionContext";
import React, { useEffect, useRef } from "react";
interface Props {
  children: React.ReactNode;
  sectionName: string;
  className: string;
}

const Section = (props: Props) => {
  const { children, sectionName, className } = props;

  const { getSectionDetails, setCurrentSection } = useSectionContext();
  const ref = useRef<HTMLElement>(null);
  const sectionDetails = getSectionDetails(sectionName);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentSection(sectionDetails);
          //update hash in url
          // window.location.hash = sectionDetails.link;
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    const element = ref.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [sectionDetails, setCurrentSection]);

  return (
    <section
      ref={ref}
      className={`${className} w-full flex items-center md:h-screen`}
      id={`${sectionDetails.link}`}
    >
      {children}
    </section>
  );
};

export default Section;
