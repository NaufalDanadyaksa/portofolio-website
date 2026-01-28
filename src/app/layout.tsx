import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Naufal Danadyaksa | Backend Developer",
  description:
    "Backend Developer specializing in RESTful APIs, database design, and scalable system architecture. Experienced with PHP/Laravel, Java, and JavaScript/Express.js.",
  keywords: [
    "Backend Developer",
    "REST API",
    "PHP",
    "Laravel",
    "Java",
    "JavaScript",
    "Express.js",
    "Full Stack Developer",
    "Naufal Danadyaksa",
  ],
  authors: [{ name: "Naufal Danadyaksa" }],
  creator: "Naufal Danadyaksa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://naufaldanadyaksa.dev",
    title: "Naufal Danadyaksa | Backend Developer",
    description:
      "Backend Developer specializing in RESTful APIs, database design, and scalable system architecture.",
    siteName: "Naufal Danadyaksa Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naufal Danadyaksa | Backend Developer",
    description:
      "Backend Developer specializing in RESTful APIs, database design, and scalable system architecture.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
