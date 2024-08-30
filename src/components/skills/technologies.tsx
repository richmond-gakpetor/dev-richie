import React from "react";
import { IconType } from "react-icons";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoFirebase,
  BiLogoGraphql,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { FaFigma, FaSass } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import {
  SiAmazonapigateway,
  SiAmazonaws,
  SiAmazondynamodb,
  SiAmazonec2,
  SiAmazonrds,
  SiAmazonroute53,
  SiAmazons3,
  SiAmazonsqs,
  SiAwsamplify,
  SiAwslambda,
  SiExpo,
  SiExpress,
  SiMysql,
  SiNeo4J,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiRust,
  SiSentry,
  SiServerless,
  SiSpring,
  SiTensorflow,
  SiTrpc,
  SiVercel,
} from "react-icons/si";

type Technology = {
  icon: React.ReactElement<IconType>;
  name: string;
};

const reg = 25;
const sml = 20;

export const tools: Technology[] = [
  { icon: <BiLogoReact size={reg} />, name: "React" },
  { icon: <SiExpo size={reg} />, name: "Expo" },
  { icon: <SiSentry size={reg} />, name: "Sentry" },
  { icon: <BiLogoTypescript size={reg} />, name: "TypeScript" },
  { icon: <SiNextdotjs size={sml} />, name: "Next.js" },
  { icon: <BiLogoNodejs size={reg} />, name: "Node.js" },
  { icon: <SiExpress size={reg} />, name: "Express" },
  { icon: <BiLogoGraphql size={reg} />, name: "GraphQL" },
  { icon: <BiLogoMongodb size={reg} />, name: "MongoDB" },
  { icon: <SiPython size={reg} />, name: "Python" },
  { icon: <SiPostgresql size={reg} />, name: "PostgreSQL" },

];

export const infrastructure: Technology[] = [
  { icon: <SiServerless size={reg} />, name: "Serverless" },
  { icon: <SiAmazonapigateway size={reg} />, name: "API Gateway" },
  { icon: <SiAmazons3 size={reg} />, name: "S3" },
  { icon: <SiAmazondynamodb size={reg} />, name: "DynamoDB" },
  { icon: <SiAmazonroute53 size={reg} />, name: "Route 53" },
  { icon: <SiAwsamplify size={reg} />, name: "Amplify" },
];
