import type { Metadata } from "next";
import { Nunito, Baloo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Headings font
const baloo2 = Baloo_2({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Body font
const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://yotaka-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yotaka | Software & Cloud Developer",
    template: "%s | Yotaka",
  },
  description:
    "Portfolio of Yotaka Khaowgomol — Cloud Developer learning C#, AWS, and Flutter.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Yotaka | Software & Cloud Developer",
    description:
      "Portfolio of Yotaka Khaowgomol — Cloud Developer learning C#, AWS, and Flutter.",
    url: siteUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yotaka | Software & Cloud Developer",
    description:
      "Portfolio of Yotaka Khaowgomol — Cloud Developer learning C#, AWS, and Flutter.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${nunito.variable} ${baloo2.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
