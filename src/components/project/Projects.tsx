import Heading from "@/components/Heading";
import Section from "@/components/Section";
import { satoshiBold } from "@/components/utils/font";
import projectInfo from "@/components/utils/projectInfo";
import Image from "next/image";
import Link from "next/link";
import { TiArrowRight } from "react-icons/ti";

const Projects = () => {
  const projectData = Array.from(projectInfo).map(([_key, value], i) => {
    return {
      id: i,
      name: value.key,
      img: value.img,
      stack: value.stack,
      title: value.title,
    };
  });

  const projects = projectData.map((project) => {
    const masonry = project.id % 2 !== 0 ? "ml-auto sm:ml-0 sm:top-12 " : "";
    const name = project.name.toLowerCase();

    return (
      <figure
        key={project.id}
        className={`opacity-60 hover:opacity-100 mb-4 animation max-w-[18.75rem] relative ${masonry}`}
      >
        <Link
          scroll={false}
          href={`/project/${name}#apps`}
          id={project.id.toString()}
        >
          <Image
            src={project.img}
            alt={name}
            width={300}
            height={200}
            className="object-cover rounded-lg sm:w-full cursor-pointer animation hover:border-primary border-2 border-transparent"
          />
        </Link>

        <figcaption className="mt-1">
          <p
            className={`${satoshiBold.className} flex justify-between items-center text-base lowercase`}
          >
            <span>{project.title}</span>
            <Link href={`/project/${name}#apps`} scroll={false}>
              <TiArrowRight size={25} />
            </Link>
          </p>

          <p className="text-sm opacity-50 lowercase">
            {project.stack.join(", ").toLowerCase()}
          </p>
        </figcaption>
      </figure>
    );
  });

  return (
    <Section sectionName="apps" className="spacing lg:h-[110vh]">
      <article className="flex flex-col gap-24 w-full">
        <Heading text="Most Popular Apps." />

        <ul className="grid grid-cols-1 gap-8 max-w-2xl sm:grid-cols-2">
          {projects}
        </ul>
      </article>
    </Section>
  );
};

export default Projects;
