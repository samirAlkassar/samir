import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Chatbot from "@/app/components/chatbot/Chatbot";
import ClickRipple from "@/app/components/ui/ClickRipple";
import SmoothScroll from "@/app/components/ui/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"], // Regular
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
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <SmoothScroll>
          <ClickRipple />
          {children}
          <Chatbot />
        </SmoothScroll>
      </body>
    </html>
  );
}
