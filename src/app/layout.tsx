import type { Metadata } from "next";
import { JetBrains_Mono, Orbitron } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Name - Cyberpunk Portfolio",
  description: "Software developer, creative technologist, and AV artist specializing in cutting-edge digital experiences.",
  keywords: ["software developer", "creative technologist", "AV artist", "TouchDesigner", "cyberpunk", "portfolio"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name - Cyberpunk Portfolio",
    description: "Software developer, creative technologist, and AV artist specializing in cutting-edge digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${jetbrainsMono.variable} ${orbitron.variable} antialiased min-h-screen bg-background font-mono`}
      >
        {children}
      </body>
    </html>
  );
}
