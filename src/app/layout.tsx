import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Quizo",
  description: `Solve it and reveal the secret word. Daily general knowledge quiz.`,
  openGraph: {
    title: "Quizo",
    description: `Solve it and reveal the secret word.`,
    url: "https://quizo.me",
    images: [
      {
        url: "https://quizo.me/og.png",
        width: 1200,
        height: 630,
        alt: "Quizo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quizo",
    description: `Solve it and reveal the secret word.`,
    images: [
      {
        url: "https://quizo.me/og.png",
        width: 1200,
        height: 630,
        alt: "Quizo",
      },
    ],
  },
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
