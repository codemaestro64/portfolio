import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SOCIALS, BASE_URL } from "@/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* 🔍 SEO Metadata */
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Michael Eze — Full-Stack Software Engineer",
    template: "%s | Michael Eze",
  },
  description:
    "Michael Eze is a full-stack software engineer specializing in Go, Python, Node.js, React, Next.js, TypeScript, and scalable web platforms.",
  keywords: [
    "Michael Eze",
    "Full Stack Engineer",
    "Software Engineer",
    "React Developer",
    "Next.js",
    "Go Developer",
    "Python Developer",
    "PHP Developer",
    "Blockchain Engineer",
    "Web Engineer",
    "Frontend Engineer",
    "Backend Engineer",
  ],
  authors: [{ name: "Michael Eze" }],
  creator: "Michael Eze",
  openGraph: {
    title: "Michael Eze — Full-Stack Software Engineer",
    description:
      "I build high-performance web platforms using React, Next.js, TypeScript, and Go.",
    url: BASE_URL,
    siteName: "Michael Eze Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Michael Eze — Full-Stack Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Eze — Full-Stack Software Engineer",
    description:
      "Full-stack engineer focused on React ecosystems, design systems, and scalable backends.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Michael Eze",
              url: BASE_URL,
              jobTitle: "Full-Stack Software Engineer",
              sameAs: SOCIALS.map(social => social.href)
            }),
          }}
        />
        <header>
          <Navbar />
        </header>

        <main id="main-content" className="min-h-screen">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}