import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://naufaldanadyaksa.vercel.app"),
  title: {
    default: "Naufal Danadyaksa - Backend Developer | Portfolio",
    template: "%s | Naufal Danadyaksa",
  },
  description:
    "Naufal Danadyaksa adalah Backend Developer dari Indonesia yang berfokus pada pengembangan RESTful API, arsitektur sistem, dan database design menggunakan PHP/Laravel, Java, dan Express.js. Mahasiswa Teknik Informatika Universitas Duta Bangsa Surakarta.",
  keywords: [
    "Naufal Danadyaksa",
    "Backend Developer",
    "Backend Developer Indonesia",
    "REST API Developer",
    "PHP Developer",
    "Laravel Developer",
    "Java Developer",
    "Express.js Developer",
    "Full Stack Developer",
    "Web Developer Indonesia",
    "Programmer Indonesia",
    "Universitas Duta Bangsa",
    "Teknik Informatika",
    "Portfolio Developer",
  ],
  authors: [{ name: "Naufal Danadyaksa", url: "https://github.com/NaufalDanadyaksa" }],
  creator: "Naufal Danadyaksa",
  publisher: "Naufal Danadyaksa",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",
    url: "https://naufaldanadyaksa.vercel.app",
    siteName: "Naufal Danadyaksa Portfolio",
    title: "Naufal Danadyaksa - Backend Developer",
    description:
      "Backend Developer Indonesia yang berfokus pada RESTful API, database design, dan arsitektur sistem. Berpengalaman dengan PHP/Laravel, Java, dan Express.js.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Naufal Danadyaksa - Backend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naufal Danadyaksa - Backend Developer",
    description:
      "Backend Developer Indonesia - RESTful API, Laravel, Java, Express.js",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here after getting it
    // google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://naufaldanadyaksa.vercel.app",
    languages: {
      "en-US": "https://naufaldanadyaksa.vercel.app",
      "id-ID": "https://naufaldanadyaksa.vercel.app",
    },
  },
  category: "technology",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Naufal Danadyaksa",
  url: "https://naufaldanadyaksa.vercel.app",
  image: "https://github.com/NaufalDanadyaksa.png",
  sameAs: ["https://github.com/NaufalDanadyaksa"],
  jobTitle: "Backend Developer",
  worksFor: {
    "@type": "EducationalOrganization",
    name: "Universitas Duta Bangsa Surakarta",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Universitas Duta Bangsa Surakarta",
  },
  knowsAbout: [
    "Backend Development",
    "REST API",
    "PHP",
    "Laravel",
    "Java",
    "JavaScript",
    "Express.js",
    "Database Design",
    "MySQL",
    "PostgreSQL",
  ],
  description:
    "Backend Developer dari Indonesia yang berfokus pada pengembangan RESTful API dan arsitektur sistem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
