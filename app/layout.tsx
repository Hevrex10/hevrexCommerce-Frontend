import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "../components/Navigation";
import AnouncementBar from "../components/AnnouncementBar";
import Footer from "../components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "REXcommerce",
  description: "Ecommerce website",
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
        <header>
          <AnouncementBar />
          <Navigation />
        </header>
        <main className="min-h-full flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
