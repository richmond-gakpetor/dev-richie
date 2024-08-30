import Section from "@/components/Section";
import GradientBackground from "@/components/ui/GradientBackground";
import { satoshiBlack, satoshiMedium } from "@/components/utils/font";
import Link from "next/link";

const Overview = () => {
  const title = () => {
    const title1 = "<Software Engineer props={";
    const title2 = "}/>";
    const resume = (
      <div className="z-20">
        <Link
          target="_blank"
          className="underline lg:no-underline ml-4 xl:ml-0 text-blue-200 flex flex-row items-center font-bold text-xl underline-offset-4 hover:underline"
          href={"/resume.pdf"}
        >
          Resume
        </Link>
      </div>
    );

    return (
      <div
        className={`${medium} justify-start items-start flex flex-col xl:flex-row tracking-wide from-blue-200  to-blue-800 bg-gradient-to-r bg-clip-text text-transparent text-2xl`}
      >
        <p>{title1}</p>
        {resume}
        <p>{title2}</p>
      </div>
    );
  };
  const medium = satoshiMedium.className;
  const black = satoshiBlack.className;

  return (
    <Section
      className="h-screen -mt-24 lg:mt-0 flex justify-center items-center relative lg:justify-start"
      sectionName="intro"
    >
      <GradientBackground />
      <article className="flex flex-col gap-2 lg:gap-3 ">
        <h1 className={`${black} font-bold md:text-clamp leading-[1.1] text-4xl`}>
          Hi, I'm Richmond.
        </h1>
        {title()}
        <p className="paragraph">
          I'm a software engineer with a passion for creating and building things. I'm a self-taught developer with a strong foundation in web development and a keen interest in mobile development. I'm always looking for opportunities to learn and grow as a developer.
        </p>
        <p className="opacity-50 paragraph leading-6 mt-2">
          <i>If you can't explain it simply, then you don't understand it well enough. - Albert Einstein
          </i>
        </p>
      </article>
    </Section>
  );
};

export default Overview;
