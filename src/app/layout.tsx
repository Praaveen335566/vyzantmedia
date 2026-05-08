import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vyzantmedia — AI-Powered Performance Marketing Agency",
  description:
    "We replace 3 hires with AI agents. Performance marketing automation for Google Ads, Meta Ads, and UGC creative at scale.",
  keywords: [
    "performance marketing",
    "AI automation",
    "Google Ads automation",
    "Meta Ads automation",
    "n8n workflows",
    "marketing agency India",
  ],
  authors: [{ name: "Praveen Kr Pandey" }],
  openGraph: {
    title: "Vyzantmedia — AI-Powered Performance Marketing",
    description: "Replace your marketing team with AI agents. 5 years of performance marketing + Agentic AI + n8n automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}