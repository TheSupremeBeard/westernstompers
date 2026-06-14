import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import icon512 from "./android-chrome-512x512.png";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Western Stompers",
  description:
    "Western Stompers, Stretford. Official site for events, socials, and updates.",
  icons: {
    icon: [
      {
        url: icon512.src,
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
