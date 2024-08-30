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
              🔧 - I built the entire UI for RoverApp from scratch, integrated APIs, and deployed the app to production. This platform, used in Ghana, now serves over 6,000 users across iOS and Android.
            </p>
            <p className="paragraph mt-8">
              ☁️ - I'm actively expanding my expertise in cloud architecture and generative AI, focusing on mastering these areas to drive innovation.
            </p>
            <p className="paragraph mt-8">
            🎥 - I recently began my tech <a href="https://www.youtube.com/@TechTrafficControl" className="text-red-500 underline">YouTube</a> journey, sharing insights and practical tips to help others transition into the tech industry.
            </p>
          </div>
          <p className={`opacity-20 text-lg`}>&#60;&#47;p&#62;</p>
        </div>
      </article>
    </Section>
  );
};

export default About;
