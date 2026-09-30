import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const satoshi = localFont({
  src: [
    { path: "./satoshi/Satoshi-Regular.otf", weight: "400", style: "normal" },
    { path: "./satoshi/Satoshi-Medium.otf",  weight: "500", style: "normal" },
    { path: "./satoshi/Satoshi-Bold.otf",    weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Richmond Gakpetor — Software Engineer, Applied AI",
  description:
    "Software engineer in Accra, Ghana, building applied AI: fine-tuned language models, RAG systems, and the products around them. MSc Computer Science.",
  openGraph: {
    title: "Richmond Gakpetor",
    description: "Software engineer building applied AI.",
    type: "website",
  },
  twitter: { card: "summary_large_image", creator: "@_vision_richie" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)",  color: "#111110" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${satoshi.variable} ${mono.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
