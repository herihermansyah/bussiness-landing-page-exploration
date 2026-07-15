import type {Metadata} from "next";
import {Inter, Josefin_Sans, Libre_Baskerville} from "next/font/google";
import "./globals.css";
import Layout from "@/layouts/layout";

const interFonts = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const libreFonts = Libre_Baskerville({
  variable: "--font-libre",
  subsets: ["latin"],
});

const josefinFonts = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "bussiness-landing-page-exploration",
  description: "bussiness-landing-page-exploration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interFonts.variable} ${libreFonts.variable} ${josefinFonts.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
