import type { Metadata, Viewport } from "next";
import { Archivo, Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Closing } from "@/components/home/Closing";
import { MotionProvider } from "@/components/MotionProvider";
import { Cursor } from "@/components/Cursor";
import { CaseCommandPalette } from "@/components/CaseCommandPalette";
import { RecruiterAuditMatrix } from "@/components/RecruiterAuditMatrix";
import { VerticalTimelineNav } from "@/components/VerticalTimelineNav";
import { GlobalLivingBackdrop } from "@/components/AmbientBackground";
import { person } from "@/content/profile";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const body = Geist({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const display = Archivo({ variable: "--font-display-face", subsets: ["latin"], axes: ["wdth"], display: "swap" });
const mono = Geist_Mono({ variable: "--font-mono-face", subsets: ["latin"], display: "swap" });

const title = "Satyaki Mandal | Strategy, Pricing & Go-to-Market | XLRI PGDM";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | Satyaki Mandal" },
  description: person.description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", title, description: person.description, url: "/", siteName: "Satyaki Mandal", locale: "en_IN" },
  twitter: { card: "summary_large_image", title, description: person.description },
};

export const viewport: Viewport = {
  themeColor: "#f4f1ec",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  jobTitle: "PGDM Candidate",
  alumniOf: ["XLRI Jamshedpur", "Vellore Institute of Technology"],
  address: { "@type": "PostalAddress", addressLocality: "Jamshedpur", addressCountry: "IN" },
  url: siteUrl,
  image: `${siteUrl}/images/portrait-cutout.webp`,
  sameAs: [person.linkedin],
};

// Escape `<` as `\u003c` to prevent script-tag breakout in JSON-LD serialization.
const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" data-scroll-behavior="smooth" className={`${body.variable} ${display.variable} ${mono.variable}`}>
      <body suppressHydrationWarning className="min-h-screen bg-paper text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-paper"
        >
          Skip to content
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd }} />
        <MotionProvider>
          <GlobalLivingBackdrop />
          <Nav />
          <CaseCommandPalette />
          <RecruiterAuditMatrix />
          <VerticalTimelineNav />
          <main id="main" className="relative z-10">{children}</main>
          <Closing />
          <Cursor />
        </MotionProvider>
      </body>
    </html>
  );
}
