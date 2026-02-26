import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Grain from "@/components/Grain";
import "./globals.css";

const satoshi = localFont({
  src: [
    { path: "./satoshi/Satoshi-Light.otf",      weight: "300", style: "normal" },
    { path: "./satoshi/Satoshi-LightItalic.otf", weight: "300", style: "italic" },
    { path: "./satoshi/Satoshi-Regular.otf",     weight: "400", style: "normal" },
    { path: "./satoshi/Satoshi-Italic.otf",      weight: "400", style: "italic" },
    { path: "./satoshi/Satoshi-Medium.otf",      weight: "500", style: "normal" },
    { path: "./satoshi/Satoshi-Bold.otf",        weight: "700", style: "normal" },
    { path: "./satoshi/Satoshi-Black.otf",       weight: "900", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Richmond Gakpetor — Software Engineer",
  description:
    "Software engineer crafting precise, user-centered web and mobile experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={satoshi.variable}>
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Cursor />
        <Grain />
        <Analytics />
      </body>
    </html>
  );
}
