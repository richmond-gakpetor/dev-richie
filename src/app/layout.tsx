import { TailwindIndicator } from "@/components/utils/tailwind-indicator";
import SectionContextProvider from "@/context/SectionContext";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Fragment } from "react";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const satoshi = localFont({
  src: "./satoshi/Satoshi-Light.otf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dev Richie | Software Engineer",
  description:
    "Full-stack developer specializing in crafting user-friendly and efficient web and mobile applications.",
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
      <body className={`${satoshi.className} text-primary`}>
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
