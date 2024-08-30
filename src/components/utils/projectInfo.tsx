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
  gallery?: string[],
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
  tags: ["Events", "Ticketing", "Social Engagment", "Feed"],
  icon: (
    <Image
      width={100}
      height={100}
      src={"/rover-app-icon.png"}
      alt="roverapp"
    />
  ) as JSX.Element,
  prevIcon: (
    <Image
      width={32}
      height={32}
      src={"/rover-app-icon.png"}
      alt="roverapp logo"
    />
  ) as JSX.Element,
  description:
    "This app delivers a unique experience for easy ticket purchase, browsing show repertoire, and engaging with feeds",
  img: "/rover-app-icon.png",
  gallery: ["/ra-1.jpg",
    "/ra-2.jpg",
    "/ra-3.jpg",
    "/ra-4.jpg",
    "/ra-5.jpg",
    "/ra-6.jpg",
    "/ra-7.jpg",
    "/ra-8.jpg",
  ],
  stack: ["React Native", "Expo Router", "Nativewind", "Sentry"],
  website: { name: "roverapp", href: "https://play.google.com/store/search?q=roverapp&c=apps&hl=en" },
  title: "RoverApp",
  paragraphs: {
    "1": "RoverApp is a mobile application that allows users to browse and purchase tickets for events. The app features a feed where users can engage with other users and event organizers. It also includes a social engagement feature that allows users to share their experiences and photos from events. The app is built using React Native and Expo Router, and is designed to provide a unique experience for users.",
    "2": "The app is designed to be user-friendly and easy to navigate, with a clean and modern interface. It is optimized for performance and reliability. The app is also integrated with Sentry for error tracking and monitoring. RoverApp is available on the Google Play Store and App Store. Its free to download and use. Enjoy!",
  },
});

projectInfo.set("eazyed", {
  key: "eazyed",
  name: "EazyEd",
  tags: ["E-learning", "Ed-Tech"],
  prevIcon: (
    <Image width={32} height={32} src={"/eazyed-logo.png"} alt="eazyed logo" />
  ),
  icon: (
    <Image
      width={100}
      height={100}
      className="my-3  rounded-lg border-opacity-50"
      src={"/eazyed-logo.png"}
      alt="eazyed logo"
    />
  ),
  description:
    "Eazyed is an innovative educational platform aimed at democratizing access to quality learning resources.",
  progress: "Beta",
  img: "/eazyed-logo.png",
  gallery: ["/eazyed-1.png", "/eazyed-2.png", "/eazyed-3.png", "/eazyed-4.png"],
  stack: ["Next.js", "TailwindCSS", "Carbon UI", "Serverless", "AWS"],
  domain: "eazyed",
  website: {
    name: "eazyed",
    href: "https://eazyed.org",
  },
  title: "EazyEd",
  paragraphs: {
    "1": "Eazyed, an innovative educational platform, is emerging as a beacon of hope in Ghana's educational landscape, to address the persistent challenges of contact hours scarcity and unequal access to quality learning resources.",
    "2": "The platform is designed to provide students with access to high-quality educational content and resources, regardless of their location or financial status. Eazyed offers a wide range of courses, including mathematics, science, and technology, to help students develop the skills they need to succeed in today's competitive world.",
  },
});

projectInfo.set("dashboard", {
  key: "dashboard",
  name: "dashboard",
  domain: "merchant dashboard",
  tags: ["Customer Dashboard", "Data Presentation"],
  prevIcon: (
    <Image width={32} height={32} src={"/hyperpay.png"} alt="hyperpay logo" />
  ),
  icon: (
    <Image
      width={148}
      height={148}
      className="my-3  rounded-lg border-opacity-50"
      src={"/hyperpay.png"}
      alt="hyperpay logo"
    />
  ),
  description: "Client dashboard for viewing customer data analytics and managing sales.",
  progress: "Shipped",
  img: "/hyperpay.png",
  gallery: ["/dashboard-1.png", "/dashboard-2.png", "/dashboard-3.png"],
  stack: ["React", "Ant Design", "Tailwind.css"],
  website: { name: "dashboard", href: "https://merchant.hyperpaygh.com" },
  title: "Dashboard",
  paragraphs: {
    "1": "The dashboard is a client-facing web application that provides users with access to customer data analytics and other management tools. The app is built using React, Ant Design, and Tailwind.css, and is designed to be user-friendly and easy to navigate. The dashboard features a clean and modern interface, with interactive tables and graphs that allow users to visualize their data in real-time.",
    
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
  domain: "my-fav-bank",
  tags: ["Banking", "Fintech"],
  prevIcon: (
    <Image
      width={32}
      height={32}
      className="my-3 rounded-lg border-opacity-50"
      src={"/vxon.jpeg"}
      alt="vxon"
    />
  ),
  icon: (
    <Image
      width={100}
      height={100}
      className="my-3 rounded-lg border-opacity-50"
      src={"/vxon.jpeg"}
      alt="vxon"
    />
  ),
  gallery: ["/bank-1.jpg",
    "/bank-2.jpg",
    "/bank-3.jpg",
  ],
  description: "MyBank is a React Native custom re-design of the EcoBank mobile app.",
  progress: "Building",
  img: "/graphzila.png",
  stack: ["React Native", "TypeScript", "Expo Router", "NativeWind"],
  source: {
    name: "dev-richie",
    href: "https://github.com/richmond-gakpetor/my-fav-bank",
  },
  website: {
    name: "dev-richie",
    href: "https://github.com/richmond-gakpetor/my-fav-bank",
  },
  title: "MyBank",
  paragraphs: {
    "1": "MyBank is a custom re-design of the EcoBank mobile app adding features like theming and animations. The app is built using React Native, TypeScript, Expo Router, and NativeWind. It is designed to provide a user-friendly and engaging experience for users. The app is still in development...",

  },
});
projectInfo.set("tresolfreight", {
  key: "tresolfreight",
  name: "tresolfreight",
  domain: "tres-solfreight.com",
  tags: ["Business", "Logistics", "Freight"],
  prevIcon: (
    <Image
      width={32}
      height={32}
      className="my-3 rounded-lg border-opacity-50"
      src={"/tres-sol-logo.png"}
      alt="tres-sol"
    />
  ),
  icon: (
    <Image
      width={100}
      height={100}
      className="my-3 rounded-lg border-opacity-50"
      src={"/tres-sol-logo.png"}
      alt="tres-sol"
    />
  ),
  video: "/tres-sol-vid.mp4",
  description: "All your freight needs delivered. Book a call today!",
  progress: "Shipped",
  img: "/tres-sol-logo.png",
  stack: ["WordPress", "Web Design", "SEO"],
  website: { name: "Tres-sol Freight Ltd", href: "https://tres-solfreight.com/" },
  title: "Tres-sol Freight",
  paragraphs: {
    "1": "Tres-sol Freight Ltd is a logistics company that provides freight services to businesses and individuals. The company offers a wide range of services, including air freight, sea freight, road freight, and warehousing. Tres-sol Freight Ltd is committed to providing reliable and efficient logistics solutions to its customers, ensuring that their goods are delivered safely and on time.",
  },
});

export default projectInfo;
