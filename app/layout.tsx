import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crowdfunding | Latein A-Team | RGC Nürnberg",
  description:
    "Unterstütze das Latein A-Team des RGC Nürnberg auf dem Weg in die 1. Bundesliga – neue Kostüme für eine neue Saison!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased grid grid-rows-[auto_1fr_auto] min-h-svh bg-base-900 text-base-200 text-pretty`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
