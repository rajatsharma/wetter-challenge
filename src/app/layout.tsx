import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { preconnect } from "react-dom";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "wetter.com Coding Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  preconnect("https://cs3.wettercomassets.com", { crossOrigin: "" });

  return (
    <html lang="en">
      <body className={`${geistSans.variable}`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
