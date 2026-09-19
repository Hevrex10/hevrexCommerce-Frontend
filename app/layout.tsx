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
        <ReduxProvider>
          <main className="min-h-full flex flex-col">{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
