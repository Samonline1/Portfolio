import type { Metadata } from "next";
import { Pixelify_Sans, Inter } from "next/font/google";
import "./globals.css";

const pixelFont = Pixelify_Sans({ subsets: ["latin"], weight: ["400"], variable: "--font-pixel" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Sameer Hussain | Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-[#0B0B0D] text-white ${pixelFont.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
