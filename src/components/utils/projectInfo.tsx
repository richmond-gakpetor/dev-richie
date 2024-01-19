import Image from "next/image";

export type URL = {
  name: string;
  href: string;
};

type ProjectInfo = {
  key: string;
  name: string;
  prevIcon?: JSX.Element;
  description: string;
  icon: JSX.Element;
  img: string;
  domain?: string;
  stack: string[];
  source?: URL;
  website?: URL;
  video?: string;
  title: string;
  emoji?: string;
  paragraphs: {
    [key: string]: string;
  };
  progress: "Building" | "Shipped";
};

// Create a new Map instance
const projectInfo = new Map<string, ProjectInfo>();

// Add entries to the Map
projectInfo.set("smartwtf", {
  key: "smartwtf",
  name: "Smart.wtf",
  progress: "Building",
  domain: "smart.wtf",
  icon: (
    <Image
      width={100}
      height={100}
      src={"https://images.codefoli.com/smartwtf.png"}
      alt="smartwtf logo"
    />
  ) as JSX.Element,
  prevIcon: (
    <Image
      width={32}
      height={32}
      src={"https://images.codefoli.com/smartwtf.png"}
      alt="smartwtf logo"
    />
  ) as JSX.Element,
  description:
    "AI first learning platform designed to make the learning process fun, intuitive, and absurd.",
  img: "https://images.codefoli.com/smart.png",
  video: "https://images.codefoli.com/smartwtfdemo.mp4",
  stack: ["TypeScript", "Next.js", "tRPC", "Clerk", "MySQL", "Tailwind.css"],
  website: { name: "smart.wtf", href: "https://smart.wtf" },
  title: "Smart.wtf",
  paragraphs: {
    "1": "Smart.wtf is an online learning platform that combines AI with creative storytelling to make learning fun and engaging.",

    "2": " The platform is designed to help students learn and retain information more effectively by using a combination of humor, interactivity and storytelling.",
  },
});

projectInfo.set("deepstar", {
  key: "deepstar",
  name: "Deep Star",
  prevIcon: (
    <Image width={32} height={32} src={"/deepstar.png"} alt="deepstar logo" />
  ),
  icon: (
    <Image
      width={100}
      height={100}
      className="my-3  rounded-lg border-opacity-50"
      src={"/deepstar.png"}
      alt="deepstar logo"
    />
  ),
  description:
    "Deep learning framework with a PyTorch-like API designed to make Deep Learning topics more students new to Deep Learning",
  progress: "Building",
  img: "/deepstar.png",
  stack: ["Python", "NumPy", "PyTorch"],
  source: {
    name: "noahgsolomon/DeepStar",
    href: "https://github.com/noahgsolomon/DeepStar",
  },
  title: "Deep Star",
  paragraphs: {
    "1": "Deep Star is a simpler framework to use for those new to Deep Learning and interested in understanding the underlying mechanics. It is being built both to deepen my own understanding of the deep learning ecosystem at a fundamental level, and to hopefully give back to help others get started in ML the right way (hands on).",
  },
});

projectInfo.set("codefoli", {
  key: "codefoli",
  name: "Codefoli",
  domain: "codefoli.com",
  emoji: "☁️",
  icon: (
    <Image
      width={148}
      height={148}
      className="my-3  rounded-lg border-opacity-50"
      src={"https://images.codefoli.com/codefolilogo.png"}
      alt="codefoli logo"
    />
  ),
  description:
    "Portfolio websites built and hosted for developers who have better things to do.",
  progress: "Shipped",
  img: "https://images.codefoli.com/codefolilogo.png",
  video: "https://images.codefoli.com/codefolivideo.mp4",
  stack: ["AWS", "React", "TypeScript", "Tailwind.css"],
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
