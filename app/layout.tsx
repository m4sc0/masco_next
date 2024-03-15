import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FunctionComponent from "@/components/FunctionComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Philip Loebl",
  description: "A simple portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <FunctionComponent />
      </body>
    </html>
  );
}
