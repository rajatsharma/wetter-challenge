import React from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { preconnect } from "react-dom";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "wetter.com Coding Challenge",
  description: "Weather Forecast powered by Wetter.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Preconnect to asset url, for quicker access to images and weather icons
  preconnect("https://cs3.wettercomassets.com", { crossOrigin: "" });

  return (
    <html lang="en">
      <body className={`${geistSans.variable}`}>{children}</body>
    </html>
  );
}
