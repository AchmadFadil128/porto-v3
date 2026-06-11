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

import { people } from "@/lib/data";
import ThemeProvider from "./components/ThemeProvider";
import ParticleField from "./components/Home/ParticleField";

export const metadata: Metadata = {
  title: {
    default: `${people.name} — ${people.title}`,
    template: `%s | ${people.name}`,
  },
  description: people.description,
  keywords: ["software engineer", "kubernetes", "docker", "linux", "next.js", "typescript", "portfolio", ...people.skills.map(s => s.toLowerCase())],
  authors: [{ name: people.name }],
  creator: people.name,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased relative">
        <ParticleField />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
