import type { Metadata } from "next";
import { Orbitron, Syne } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import StarField from "@/components/canvas/StarField";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });

export const metadata: Metadata = {
  title: "Himesh Verma | Portfolio",
  description: "Portfolio of Himesh Verma, Full-Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${syne.variable}`}>
      <body className="antialiased relative" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
        <CustomCursor />
        <StarField />
        {children}
      </body>
    </html>
  );
}
