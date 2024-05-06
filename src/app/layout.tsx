import type { Metadata } from "next";
import { Prata } from "next/font/google";
import "./globals.css";

const prata = Prata({ subsets:["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Be creative!",
  description: "Small project that plays with Framer motion functionalities to add nice and smooth animations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={prata.className}>{children}</body>
    </html>
  );
}
