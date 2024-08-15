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
  icon?: JSX.Element;
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
  tags?: string[];
  progress: "Building" | "Shipped" | "Beta";
};

// Create a new Map instance
const projectInfo = new Map<string, ProjectInfo>();

// Add entries to the Map
projectInfo.set("roverapp", {
  key: "roverapp",
  name: "RoverApp",
  progress: "Shipped",
  domain: "roverapp",
  tags: ["React Native", "Expo Router", "Nativewind"],
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
  stack: ["React Native", "Expo Router", "Nativewind"],
  website: { name: "roverapp", href: "https://smart.wtf" },
  title: "RoverApp",
  paragraphs: {
    "1": "Smart.wtf is an online learning platform that combines AI with lesson interactivity to deliver a memorable and educational experience to the user.",

    "2": " The platform is designed to help students learn and retain information more effectively by using a combination of humor, interactivity and absurdity to boost retention and memorability.",
  },
});

projectInfo.set("eazyed", {
  key: "eazyed",
  name: "EazyEd",
  tags: ["E-learning", "Ed-Tech"],
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
  progress: "Beta",
  img: "/deepstar.png",
  stack: ["Next.js", "TailwindCSS", "Serverless", "AWS"],
  source: {
    name: "noahgsolomon/DeepStar",
    href: "https://github.com/noahgsolomon/DeepStar",
  },
  title: "EazyEd",
  paragraphs: {
    "1": "Deep Star is a simpler framework to use for those new to Deep Learning and interested in understanding the underlying mechanics. It is being built both to deepen my own understanding of the deep learning ecosystem at a fundamental level, and to hopefully give back to help others get started in ML the right way (hands on).",
  },
});

projectInfo.set("dashboard", {
  key: "dashboard",
  name: "dashboard",
  domain: "codefoli.com",
  tags: ["Customer Dashboard", "Data Presentation"],
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
  stack: ["React", "Ant Design", "Tailwind.css"],
  source: {
    name: "noahgsolomon/codefoli",
    href: "https://github.com/noahgsolomon/codefoli",
  },
  website: { name: "codefoli", href: "https://codefoli.com" },
  title: "Merchant Dashboard",
  paragraphs: {
    "1": "Building portfolio websites for developers who have better things to do. Codefoli is a platform that allows developers to build and deploy a portfolio website in minutes. Whether you are coming in with your own domain, or would just like to deploy through a subdomain (e.g. elonmusk.codefoli.com), our infrastructure is efficient enough to offer this for $0!.",
  },
});

// projectInfo.set("bank", {
//   key: "bankapp",
//   name: "My Bank",
//   domain: "investingyellow.com",
//   tags: ["Banking", "Fintech"],
//   icon: (
//     <Image
//       width={100}
//       height={100}
//       className="my-3 rounded-lg border-opacity-50"
//       src={"/investingyellow.png"}
//       alt="mr burns"
//     />
//   ),
//   video: "/investingyellow.mp4",
//   prevIcon: (
//     <Image
//       width={32}
//       height={32}
//       className="my-3 rounded-lg border-opacity-50"
//       src={"/investingyellow.png"}
//       alt="mr burns"
//     />
//   ),
//   description:
//     "Hear about your finances through the lens of your favorite characters",
//   progress: "Building",
//   img: "/mrburns.png",
//   stack: ["React Native", "TypeScript", "Expo Router", "NativeWind"],
//   source: {
//     name: "noahgsolomon/InvestingYellow",
//     href: "https://github.com/noahgsolomon/InvestingYellow",
//   },
//   website: { name: "Investing Yellow", href: "https://investingyellow.com" },
//   title: "MyBank",
//   paragraphs: {
//     "1": "Financial app that connects to bank and investment accounts, like Wells Fargo or Robinhood, using Plaid. It provides a straightforward display of spending and investments with a donut graph and a transaction list. The app uses AI to analyze financial data, offering personalized investment advice and categorizing users based on their spending habits.",
//     "2": "The app features a social platform for financial discussions, using characters like Ned Flanders and Lisa Simpson for interaction. It includes a leaderboard ranking users based on their financial management, as assessed by the app’s AI. This encourages users to improve their financial standing, aligning with the goal of moving towards a financially secure future.",
//   },
// });

projectInfo.set("bank", {
  key: "bank",
  name: "bank",
  domain: "graphzila.com",
  tags: ["Banking", "Fintech"],
  icon: (
    <Image
      width={100}
      height={100}
      className="my-3 rounded-lg border-opacity-50"
      src={"/graphzila.png"}
      alt="graphzila"
    />
  ),
  video: "/graphzila.mp4",
  emoji: "🔥",
  description: "Learn about your favorite topics through knowledge graphs.",
  progress: "Building",
  img: "/graphzila.png",
  stack: ["React Native", "TypeScript", "Expo Router", "NativeWind"],
  source: {
    name: "noahgsolomon/Graphzila",
    href: "https://github.com/noahgsolomon/Graphzila",
  },
  website: { name: "Graphzila", href: "https://graphzila.com" },
  title: "MyBank",
  paragraphs: {
    "1": "Knowledge graph generator powered by OpenAI's GPT-4. Takes an input of the concept/topic, and spits out a knowledge graph with edges specifying relations and nodes specifying different topics related to the searched topic, or a sub-topic.",
  },
});

export default projectInfo;
