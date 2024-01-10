import { TailwindIndicator } from "@/components/utils/tailwind-indicator";
import SectionContextProvider from "@/context/SectionContext";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Fragment } from "react";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

// Font files can be colocated inside of `app`
const satoshi = localFont({
  src: "./satoshi/Satoshi-Light.otf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noah Solomon | Software Engineer",
  description:
    "Fullstack developer specializing in cloud architecture and user-centric solutions. Combining technical acumen with innovative design, I focus on integrating robust cloud infrastructure with efficient, intuitive applications.",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${satoshi.className} text-primary grainy`}>
        <SectionContextProvider>
          <Fragment>{children}</Fragment>
          <Fragment>{modal}</Fragment>
        </SectionContextProvider>
        <Analytics />
        <TailwindIndicator />
      </body>
    </html>
  );
}
