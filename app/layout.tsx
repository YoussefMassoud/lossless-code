import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LossLess Code",
  description: "Modern & Minimal JS Mastery Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.jpeg" sizes="any" />
      </head>
      <body className={inter.className}>
        <div className="relative w-full">
          <FloatingNav navItems={navItems} />
            {children}
        </div>
      </body>
    </html>
  );
}
