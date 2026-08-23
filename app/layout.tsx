import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased bg-[#0B0B0D] text-white">
        {children}
      </body>
    </html>
  );
}
