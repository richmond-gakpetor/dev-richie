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
  SiExpress,
  SiMysql,
  SiNeo4J,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiRust,
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
  // { icon: <SiPytorch />, name: "PyTorch" },
  { icon: <BiLogoReact size={reg} />, name: "React" },
  { icon: <BiLogoTypescript size={reg} />, name: "TypeScript" },
  { icon: <SiNextdotjs size={sml} />, name: "Next.js" },
  { icon: <BiLogoNodejs size={reg} />, name: "Node.js" },
  { icon: <SiExpress size={reg} />, name: "Express" },
  { icon: <BiLogoGraphql size={reg} />, name: "GraphQL" },
  { icon: <BiLogoMongodb size={reg} />, name: "MongoDB" },
  // { icon: <SiSpring size={reg} />, name: "Spring" },
  { icon: <SiPython size={reg} />, name: "Python" },
  // { icon: <SiRust size={reg} />, name: "Rust" },
  { icon: <SiPostgresql size={reg} />, name: "PostgreSQL" },
  // { icon: <SiMysql size={reg} />, name: "MySQL" },
  // { icon: <SiNeo4J size={reg} />, name: "Neo4j" },
  // { icon: <SiTrpc size={reg} />, name: "tRPC" },
];

export const infrastructure: Technology[] = [
  { icon: <SiAwslambda size={reg} />, name: "Lambda" },
  { icon: <SiAmazonec2 size={reg} />, name: "EC2" },
  { icon: <SiAmazonapigateway size={reg} />, name: "API Gateway" },
  { icon: <SiAmazons3 size={reg} />, name: "S3" },
  { icon: <SiAmazonroute53 size={reg} />, name: "Route 53" },
  // { icon: <SiAmazonsqs size={reg} />, name: "SQS" },
  { icon: <SiAmazondynamodb size={reg} />, name: "DynamoDB" },
  { icon: <SiAmazonrds size={reg} />, name: "RDS" },
  { icon: <SiAwsamplify size={reg} />, name: "Amplify" },
];
