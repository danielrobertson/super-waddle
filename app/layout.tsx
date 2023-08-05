import classnames from "classnames";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "next-tailwind-template",
  description: "next-tailwind-template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const classes = classnames("bg-gray-900 text-gray-300", inter.className);
  return (
    <html lang="en">
      <body className={classes}>
        <Header />
        {children}
      </body>
    </html>
  );
}
