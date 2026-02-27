import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Chatbot from "@/app/components/chatbot/Chatbot";
import ClickRipple from "@/app/components/ui/ClickRipple";
import SmoothScroll from "@/app/components/ui/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Samir Elkasar | Frontend Software Engineer",
  description: "Senior Frontend Engineer specializing in high-performance web applications, motion design, and premium user experiences.",
  keywords: ["Samir Elkasar", "Frontend Engineer", "React Developer", "Next.js", "Portfolio", "Web Design"],
  authors: [{ name: "Samir Elkasar" }],
  creator: "Samir Elkasar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.variable} antialiased selection:bg-primary/30`}>
        {/* <PlanetsBackground /> */}
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-noise opacity-[0.04]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(167,139,250,0.06),transparent_40%)] dark:bg-[radial-gradient(circle_at_40%_20%,rgba(167,139,250,0.08),transparent_40%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(167,139,250,0.05),transparent_40%)] dark:bg-[radial-gradient(circle_at_80%_80%,rgba(167,139,250,0.07),transparent_40%)]" />
        </div>
        <SmoothScroll>
          <ClickRipple />
          {children}
          <Chatbot />
        </SmoothScroll>
      </body>
    </html>
  );
}
