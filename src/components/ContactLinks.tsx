import Link from "next/link";

import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
const size = 22;

const platforms = [
  {
    icon: <AiOutlineGithub size={size} />,
    link: "https://github.com/richmond-gakpetor",
  },
  {
    icon: <AiOutlineTwitter size={size} />,
    link: "https://twitter.com/_vision_richie",
  },
  {
    icon: <AiFillLinkedin size={size} />,
    link: "https://www.linkedin.com/in/richmond-gakpetor/",
  },
];

interface Props {
  className?: string;
}

const ContactLinks = (props: Props) => {
  const { className } = props;

  const contacts = platforms.map((platform, i) => {
    return (
      <Link
        href={platform.link}
        key={i}
        target="_blank"
        className="flex items-center justify-center mr-3"
      >
        {platform.icon}
      </Link>
    );
  });

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      {contacts}
    </div>
  );
};

export default ContactLinks;
