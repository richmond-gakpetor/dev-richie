import Heading from "@/components/Heading";
import Section from "@/components/Section";
import Link from "next/link";

import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { HiMail } from "react-icons/hi";

const size = 25;

const platforms = [
  {
    icon: <AiOutlineGithub size={size} />,
    username: "dev-richie",
    link: "https://github.com/richmond-gakpetor",
  },
  {
    icon: <AiOutlineTwitter size={size} />,
    username: "@_vision_richie",
    link: "https://twitter.com/_vision_richie",
  },
  {
    icon: <HiMail size={size} />,
    username: "gakpetorr01@gmail.com",
    link: "mailto:gakpetorr01@gmail.com",
  },
  {
    icon: <AiFillLinkedin size={size} />,
    username: "Richmond Gakpetor",
    link: "https://www.linkedin.com/in/richmond-gakpetor/",
  },
];

const Contact = () => {
  const contacts = platforms.map((platform) => {
    return (
      <li
        key={platform.username}
        className="grid grid-cols-[10%,1fr] items-center gap-2 pb-4 "
      >
        <span className="w-7 h-7 flex items-center justify-start">
          {platform.icon}
        </span>
        <Link
          href={platform.link}
          className="hover:underline hover:underline-offset-4 animation grid place-items-center justify-start"
          target="_blank"
        >
          {platform.username}
        </Link>
      </li>
    );
  });

  return (
    <Section sectionName="contact" className="spacing pb-28 lg:pb-0 ">
      <article className="flex flex-col gap-16">
        <Heading text="contact." />

        <div>
          <p className={`opacity-20 text-lg`}>&#60;p&#62;</p>
          <p className="paragraph ml-4">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out to me on any of the platforms below.
          </p>
          <p className={`opacity-20 text-lg`}>&#60;&#47;p&#62;</p>
        </div>

        <ul>{contacts}</ul>
      </article>
    </Section>
  );
};

export default Contact;
