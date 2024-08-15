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
              Richmond Gakpetor
            </h3>
            <p className="text">Software Engineer</p>
          </Fragment>
          <br></br>
          <h2
            className={`${black} text-2xl w-full -z-10 line-clamp-1 tracking-wid`}
          >
            Let's push the boundaries of what's possible.
          </h2>
          <p className={`opacity-20 text-lg`}>&#60;p&#62;</p>
          <div className="ml-4">
            <p className="paragraph mt-2">
              🔧 - I now have an app in the PlayStore. It's that Netflix alternative you wish you had.
              The app is called <a className="text-red-500 underline" href="https://play.google.com/store/apps/details?id=com.hyperpay.rovermanapp">Roverman Tickets</a>.
              Version 2.0 is in the works and I'm excited to share it with you.
            </p>
            <p className="paragraph mt-8">
              ☁️ - Quite the cloud enthusiast, I have been prepping for the AWS Solutions Architect certification and have been working on a few projects to solidify my understanding of the cloud.
            </p>
            <p className="paragraph mt-8">
              💡 - I truly believe in the power of innovation to change the future. That is my ethos in my work--build the future you want to see with technology.
            </p>
          </div>
          <p className={`opacity-20 text-lg`}>&#60;&#47;p&#62;</p>
        </div>
      </article>
    </Section>
  );
};

export default About;
