import Image from "next/image";

export type URL = {
  name: string;
  href: string;
};

type ProjectInfo = {
  key: string;
  name: string;
  icon: JSX.Element;
  img: string;
  stack: string[];
  source?: URL;
  website: URL;
  video: string;
  title: string;
  paragraphs: {
    [key: string]: string;
  };
};

// Create a new Map instance
const projectInfo = new Map<string, ProjectInfo>();
const size = 30;

// Add entries to the Map
projectInfo.set("smartwtf", {
  key: "smartwtf",
  name: "Smart.wtf",
  icon: (
    <Image
      width={48}
      height={48}
      className="my-3"
      src={"https://images.codefoli.com/smartwtf.png"}
      alt="smartwtf logo"
    />
  ) as JSX.Element,
  img: "https://images.codefoli.com/alienplanet.png",
  video: "https://images.codefoli.com/smartwtf.mp4",
  stack: ["TypeScript", "Next.js", "tRPC", "Clerk", "MySQL", "Tailwind.css"],
  website: { name: "smart.wtf", href: "https://smart.wtf" },
  title: "Smart.wtf",
  paragraphs: {
    "1": "Smart.wtf is an online learning platform that combines AI with creative storytelling to make learning fun and engaging.",

    "2": " The platform is designed to help students learn and retain information more effectively by using a combination of humor, interactivity and storytelling.",
  },
});

projectInfo.set("codefoli", {
  key: "codefoli",
  name: "Codefoli",
  icon: (
    <Image
      width={148}
      height={148}
      className="my-3 border border-gray-600 rounded-lg border-opacity-50"
      src={"https://images.codefoli.com/codefoli.png"}
      alt="codefoli logo"
    />
  ),
  img: "https://images.codefoli.com/codefolilogo.png",
  video: "https://images.codefoli.com/codefolivideo.mp4",
  stack: ["AWS (19 Services)", "React", "TypeScript", "Tailwind.css"],
  source: {
    name: "noahgsolomon/codefoli",
    href: "https://github.com/noahgsolomon/codefoli",
  },
  website: { name: "codefoli", href: "https://codefoli.com" },
  title: "Codefoli",
  paragraphs: {
    "1": "Building portfolio websites for developers who have better things to do. Codefoli is a platform that allows developers to build and deploy a portfolio website in minutes. Whether you are coming in with your own domain, or would just like to deploy through a subdomain (e.g. elonmusk.codefoli.com), our infrastructure is efficient enough to offer this for $0!.",
  },
});

export default projectInfo;
