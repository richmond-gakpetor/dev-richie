import Heading, { black } from "@/components/Heading";
import Section from "@/components/Section";
import { satoshiMedium } from "@/components/utils/font";
import { Fragment } from "react";

const About = () => {
  return (
    <Section
      sectionName="about"
      className="relative spacing lg:h-[120vh] xl:h-screen"
    >
      <article className=" flex flex-col gap-16">
        <Heading text="about me." />

        <div>
          <Fragment>
            <h3 className={`${satoshiMedium.className} text-xl`}>
              Noah Solomon
            </h3>
            <p className="text">Software Engineer</p>
          </Fragment>
          <br></br>
          <h2
            className={`${black} text-2xl w-full -z-10 line-clamp-1 tracking-wid`}
          >
            I love building cool shit.
          </h2>
          <p className={`opacity-20 text-lg`}>&#60;p&#62;</p>
          <div className="ml-4">
            <p className="paragraph mt-2">
              🔧 - From creating a free website hosting solution @
              <a href="https://codefoli.com" className="font-bold underline">
                codefoli.com
              </a>
              , to aiming to redefine what learning looks like @
              <a href="https://smart.wtf" className="font-bold underline">
                smart.wtf
              </a>{" "}
              to working on a deep learning framework{" "}
              <span className="italic">(COMING SOON)</span>, I am obsessed with
              this space.
            </p>
            <p className="paragraph mt-8">
              ☁️ 🚀 - I focus on crafting innovative solutions that bridge the
              gap between complex backend systems and intuitive designs. With
              each project, I aim to simplify the intracacies of a space, making
              it more accessible and user-friendly together.
            </p>
            <p className="paragraph mt-8">
              💡 - Through my work, I seek to leave a mark in the tech world,
              contributing to a future where technology is both powerful and
              approachable.
            </p>
          </div>
          <p className={`opacity-20 text-lg`}>&#60;&#47;p&#62;</p>
        </div>
      </article>
    </Section>
  );
};

export default About;
