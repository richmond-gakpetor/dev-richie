import type { JSX } from "react";
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

projectInfo.set("emergo", {
  key: "emergo",
  name: "Emergo",
  tags: ["Personal Growth", "Wellness", "Affirmations"],
  prevIcon: (
    <Image width={32} height={32} src={"/emergo-logo.png"} alt="emergo logo" />
  ),
  icon: (
    <Image
      width={100}
      height={100}
      className="my-3 rounded-lg border-opacity-50"
      src={"/emergo-logo.png"}
      alt="emergo logo"
    />
  ),
  description:
    "An affirmation and personal growth app helping people build confidence and positive habits through daily spoken affirmations.",
  progress: "Shipped",
  img: "",
  gallery: [
    "",
  ],
  stack: ["React Native", "Expo", "TypeScript", "NativeWind", "RevenueCat"],
  domain: "emergo",
  website: {
    name: "Emergo",
    href: "https://tryemergo.app",
  },
  title: "Emergo",
  paragraphs: {
    "1": "Emergo is a personal growth and affirmation app that helps people build confidence, strengthen positive habits, and develop a healthier mindset through the daily practice of spoken affirmations. Users can create personalized affirmations and speak them aloud while Emergo listens and tracks their repetitions.",
    "2": "The app turns affirmation practice into an engaging daily experience with voice-based repetition tracking, personalized coaching prompts, progress and streak tracking, a growing plant that reflects consistency, motivational recaps, background sounds, and Kindred—a space for anonymous encouragement and connection. Emergo is designed to make personal growth practical, measurable, and easy to incorporate into everyday life.",
  },
});

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
    "Event discovery and ticketing app with a social feed. Live on iOS and Android.",
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
  stack: ["React Native", "Expo Router", "NativeWind", "Sentry"],
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
    "Learning platform widening access to quality course material for students in Ghana.",
  progress: "Shipped",
  img: "/eazyed-logo.png",
  gallery: ["/eazyed-1.png", "/eazyed-2.png", "/eazyed-3.png", "/eazyed-4.png"],
  stack: ["Next.js", "Tailwind CSS", "Carbon UI", "Serverless", "AWS"],
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
  description: "Merchant-facing dashboard for sales management and customer analytics.",
  progress: "Shipped",
  img: "/hyperpay.png",
  gallery: ["/dashboard-1.png", "/dashboard-2.png", "/dashboard-3.png"],
  stack: ["React", "Ant Design", "Tailwind CSS"],
  website: { name: "dashboard", href: "https://merchant.hyperpaygh.com" },
  title: "HyperPay Merchant",
  paragraphs: {
    "1": "The dashboard is a client-facing web application that provides users with access to customer data analytics and other management tools. The app is built using React, Ant Design, and Tailwind.css, and is designed to be user-friendly and easy to navigate. The dashboard features a clean and modern interface, with interactive tables and graphs that allow users to visualize their data in real-time.",

  },
});

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
projectInfo.set("vxonsolutions", {
  key: "vxonsolutions",
  name: "vxonsolutions",
  domain: "vxonsolutions.com",
  tags: ["Tech Company", "Software Development", "Consulting"],
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
  gallery: [
    "/vxon-website.png",
  ],
  description: "Company site for a software development and consulting studio.",
  progress: "Shipped",
  img: "/vxon.jpeg",
  stack: ["Next.js", "Tailwind CSS", "Aceternity UI", "Framer Motion"],
  source: {
    name: "vxonsolutions",
    href: "https://github.com/richmond-gakpetor/vxonsolutions",
  },
  website: {
    name: "vxonsolutions",
    href: "https://vxonsolutions.com/",
  },
  title: "VXON Solutions",
  paragraphs: {
    "1": "VXON Solutions is a tech company that specializes in software development and consulting. The company offers a wide range of services, including web development, mobile app development, and digital marketing. VXON Solutions is committed to providing innovative and cost-effective solutions to its clients, helping them achieve their business goals.",
    "2": "The company is built on a foundation of creativity, integrity, and excellence. VXON Solutions is dedicated to delivering high-quality work that meets the needs of its clients. The company's team of experienced professionals is passionate about technology and is always looking for new ways to push the boundaries of what is possible.",
    "3": "VXON Solutions: Pioneering Tomorrow, Today!",
    "4": "The website is still in development...",

  },
});

projectInfo.set("xposuregh", {
  key: "xposuregh",
  name: "xposuregh",
  domain: "xposuregh.com",
  tags: ["Business", "Billboard Advertising", "Marketing"],
  prevIcon: (
    <Image
      width={32}
      height={32}
      className="my-3 rounded-lg border-opacity-50"
      src={"/xposuregh.png"}
      alt="xposuregh"
    />
  ),
  icon: (
    <Image
      width={100}
      height={100}
      className="my-3 rounded-lg border-opacity-50"
      src={"/xposuregh.png"}
      alt="xposuregh"
    />
  ),
  video: "/xposuregh.mp4",
  description: "Outdoor advertising platform connecting businesses with billboard space across Ghana.",
  progress: "Shipped",
  img: "/xposuregh.png",
  stack: ["Next.js", "Tailwind CSS", "Framer Motion", "FastAPI", "AWS"],
  website: { name: "Xposure GH", href: "https://xposuregh.com/" },
  title: "Xposure GH",
  paragraphs: {
    "1": "Outdoor advertising platform connecting businesses with billboard space across Ghana.",
    "2": "Across the bustling streets of Ghana, Xposure GH stands as a beacon for businesses seeking to amplify their brand presence. With a keen understanding of the local market, Xposure GH connects businesses with billboard owners to ensure maximum visibility.",
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
