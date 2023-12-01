import Section from "@/components/Section";
import GradientBackground from "@/components/ui/GradientBackground";
import { satoshiBlack, satoshiMedium } from "@/components/utils/font";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { TiBusinessCard } from "react-icons/ti";

const Overview = () => {
  const title = () => {
    const title1 = "<Software Engineer props={";
    const title2 = "}/>";
    const resume = (
      <div className="z-20">
        <Link
          target="_blank"
          className="text-blue-200 items-center font-bold flex flex-row gap-1 text-xl underline-offset-4 hover:underline"
          href={"https://images.codefoli.com/Resume.pdf"}
        >
          Resume
        </Link>
      </div>
    );

    return (
      <div
        className={`${medium} flex flex-row items-center tracking-wide text-[1.2rem] from-blue-200  to-blue-800 bg-gradient-to-r bg-clip-text text-transparent md:text-2xl`}
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
      className="h-screen flex justify-center items-center relative md:justify-start"
      sectionName="intro"
    >
      <GradientBackground />
      <article className="flex flex-col gap-2 md:gap-3 ">
        <h1 className={`${black} font-bold text-clamp leading-[1.1] `}>
          Hi, I'm Noah.
        </h1>

        {title()}

        <p className="paragraph">
          Fullstack developer specializing in cloud architecture and
          user-centric solutions. Combining technical acumen with innovative
          design, I focus on integrating robust cloud infrastructure with
          efficient, intuitive applications.
        </p>

        <p className="paragraph leading-6 mt-2">
          <i>What I cannot create, I do not understand. – Richard Feynman</i>
        </p>

        {/* <p className="paragraph leading-6 ">
            I don&apos;t know who you are. I don&apos;t know what you want. If you&apos;re looking for ordinary websites, I can tell you I&apos;m not your developer.
              <br></br> <br></br>
            But what I do have are a very particular set of skills—skills I have acquired over some time. Skills that make me a dream for creating stunning, user-friendly frontend interfaces.
             
          </p> */}
      </article>
    </Section>
  );
};

export default Overview;
