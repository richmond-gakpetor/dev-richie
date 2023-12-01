import Heading from "@/components/Heading";
import Section from "@/components/Section";
import { tools, infrastructure } from "@/components/skills/technologies";

const Skills = () => {
  const toolSkills = tools.map((tech) => {
    const { name, icon } = tech;

    return (
      <li
        key={name}
        className="grid grid-cols-[15%,1fr] items-center gap-6 pb-4 "
      >
        <span className="w-7 flex items-center justify-start">{icon}</span>
        <span>{name}</span>
      </li>
    );
  });
  const infrastructureSkills = infrastructure.map((tech) => {
    const { name, icon } = tech;

    return (
      <li
        key={name}
        className="grid grid-cols-[15%,1fr] items-center gap-6 pb-4 "
      >
        <span className="w-7 flex items-center justify-start">{icon}</span>
        <span>{name}</span>
      </li>
    );
  });

  return (
    <Section sectionName="skills" className="relative spacing  ">
      <article className="flex flex-col gap-16">
        <Heading text="skills." />

        <div>
          <p className={`opacity-20 text-sm`}>&#60;p&#62;</p>
          <p className="paragraph">
            Here are some of the technologies I&rsquo;ve been working with
            recently:
          </p>
          <p className={`opacity-20 text-sm`}>&#60;&#47;p&#62;</p>

          <p className=" mt-10 text-2xl font-bold">Tools:</p>
          <ul className="mt-2 grid grid-cols-2 gap-y-2 gap-x-8 sm:grid-cols-3 sm:gap-x-14 md:gap-x-10 lg:grid-cols-4">
            {toolSkills}
          </ul>
          <p className="mt-10 text-2xl font-bold">Infrastructure:</p>
          <ul className="mt-2 grid grid-cols-2 gap-y-2 gap-x-8 sm:grid-cols-3 sm:gap-x-14 md:gap-x-10 lg:grid-cols-4">
            {infrastructureSkills}
          </ul>
        </div>
      </article>
    </Section>
  );
};

export default Skills;
