import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import "./globals.css";
import ReduxProvider from "@/Lib/redux/Provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://hevrex-commerce.vercel.app"),

  title: {
    default: "REXcommerce | Shop Quality Products Online",
    template: "%s | REXcommerce",
  },

  description:
    "Shop quality fashion, footwear, bags, perfumes and accessories at REXcommerce. Discover stylish products at great prices and enjoy a seamless online shopping experience.",

  keywords: [
    "REXcommerce",
    "online shopping",
    "ecommerce",
    "fashion",
    "shoes",
    "bags",
    "perfumes",
    "clothing",
    "accessories",
    "online store",
  ],

  authors: [
    {
      name: "REXcommerce",
    },
  ],

  creator: "REXcommerce",

  openGraph: {
    title: "REXcommerce | Shop Quality Products Online",
    description:
      "Discover quality fashion, footwear, bags, perfumes and accessories at REXcommerce.",
    url: "https://hevrex-commerce.vercel.app",
    siteName: "REXcommerce",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "REXcommerce - Shop Quality Products Online",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "REXcommerce | Shop Quality Products Online",
    description:
      "Discover quality fashion, footwear, bags, perfumes and accessories at REXcommerce.",
  },

  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} font-sans h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ReduxProvider>
          <main className="min-h-full flex flex-col">{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
