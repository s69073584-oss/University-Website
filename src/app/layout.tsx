
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AL-RAZI School & University | Learn Today. Lead Tomorrow.",
  description:
    "Welcome to AL-RAZI School & University. Discover quality education, explore academic programs, courses, and admissions. Learn today and lead tomorrow.",
  keywords: [
    "AL-RAZI School",
    "AL-RAZI University",
    "Education",
    "School and University",
    "Academic Programs",
    "Admissions",
    "Online Learning",
  ],
  authors: [{ name: "AL-RAZI School & University" }],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
