import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Data Analytics Workshop | Sacred Heart College",
  description:
    "Join our Data Analytics Workshop at Sacred Heart College from 22-24 January 2025. Learn data analysis, visualization, and machine learning with expert instructors. Enhance your skills with hands-on sessions and real-world projects. Register now!",
  viewport: {
    width: 'device-width',
    initialScale: 1.0,
  },
  openGraph: {
    title: "Data Analytics Workshop | Sacred Heart College",
    description:
      "Join our Data Analytics Workshop at Sacred Heart College from 22-24 January 2025. Learn data analysis, visualization, and machine learning with expert instructors. Enhance your skills with hands-on sessions and real-world projects. Register now!",
    url: "https://data-analytics-workshop-sh.vercel.app/",
    siteName: "Data Analytics Workshop",
    images: [
      {
        url: "/banner.jpeg",
        width: 1600,
        height: 730,
        alt: "Casa | Dept. of CS ",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Analytics Workshop | Sacred Heart College",
    description:
      "Join our Data Analytics Workshop at Sacred Heart College from 22-24 January 2025. Learn data analysis, visualization, and machine learning with expert instructors. Enhance your skills with hands-on sessions and real-world projects. Register now!",
    images: ["/banner.jpeg"],
  },
  alternates: {
    canonical: "https://data-analytics-workshop-sh.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Sreyes V" }],
  publisher: "Sacred Heart College, Thevara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
