import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Achmad Fadil — Full-Stack Software Engineer",
    template: "%s | Achmad Fadil",
  },
  description:
    "Personal portfolio of Achmad Fadil, a Full-Stack Software Engineer specialising in Go backends and modern React frontends.",
  keywords: ["software engineer", "Go", "Next.js", "TypeScript", "portfolio"],
  authors: [{ name: "Achmad Fadil" }],
  creator: "Achmad Fadil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
