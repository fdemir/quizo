import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Quizo",
  description: `Solve it and reveal the secret word.`,
  openGraph: {
    title: "Quizo",
    description: `Solve it and reveal the secret word.`,
    url: "https://quizo.me",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quizo",
    description: `Solve it and reveal the secret word.`,
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
