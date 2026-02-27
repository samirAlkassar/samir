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
      <body className={`${inter.variable} antialiased selection:bg-primary/30`}>
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-noise opacity-[0.03] dark:opacity-[0.05]" />
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] dark:opacity-10 opacity-0 transition-opacity duration-1000" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] dark:opacity-10 opacity-0 transition-opacity duration-1000" />
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
