import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Power Tools",
  description:
    "Utilizing APIs, Websockets and Maths to create powerfull tools we need every day.",
  openGraph: {
    images: "/pt-img.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          property="og:url"
          content="https://power-tools-gilt.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Power Tools" />
        <meta
          property="og:description"
          content="Utilizing APIs, Websockets and Maths to create powerfull tools we need every day."
        />
        <meta property="og:image" content="./pt-img.png" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
