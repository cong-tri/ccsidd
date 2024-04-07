/** @format */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "animate.css";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Connecting Communication & Solutions",
  description: "Generated by create next app",
  icons: "/public/logoCCSIDD.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <AntdRegistry>{children}</AntdRegistry>
        <Footer />
      </body>
    </html>
  );
}
