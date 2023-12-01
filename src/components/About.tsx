import Heading from "@/components/Heading";
import Section from "@/components/Section";
import { satoshiMedium } from "@/components/utils/font";
import { Fragment } from "react";

const About = () => {
  return (
    <Section
      sectionName="about"
      className="relative spacing md:h-[120vh] lg:h-screen"
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
          <Fragment>
            <p className={`opacity-20 text-sm`}>&#60;p&#62;</p>
            <p className="paragraph">
              ☁️ - As a fullstack developer with a deep passion for cloud
              architecture, I thrive on crafting innovative solutions that
              bridge the gap between complex backend systems and intuitive
              front-end designs.
            </p>

            <p className="paragraph mt-8">
              🚀 - My journey in tech is fueled by a relentless pursuit of
              knowledge and a commitment to excellence. With each project, I aim
              to simplify the intracacies of a space, making it accessible and
              user-friendly. together.
            </p>

            <p className="paragraph mt-8">
              🔧 - My approach blends technical rigor with creative
              problem-solving, ensuring that every application is not only
              robust and scalable but also engaging and responsive to user
              needs. At the heart of my work lies a belief in the power of
              simplicity in design, guided by the principle that the most
              effective solutions are often the most straightforward. I take
              pride in my ability to turn theoretical concepts into practical,
              real-world applications, constantly pushing the boundaries of what
              is possible in cloud computing and software development.
            </p>

            <p className="paragraph mt-8">
              💡 - Through my work, I seek to leave a mark in the tech world,
              contributing to a future where technology is both powerful and
              approachable. Let's build something amazing
            </p>

            <p className={`opacity-20 text-sm`}>&#60;&#47;p&#62;</p>
          </Fragment>
        </div>
      </article>
    </Section>
  );
};

export default About;
