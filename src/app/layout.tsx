import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/util/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Buy Hub</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <link href="https://static.zara.net/stdstatic/6.13.0/js/v2/68569.css" rel="stylesheet" type="text/css"></link>
      </head>
      <body className={`${inter.className} antialiased bg-slate-150`}>{children}</body>
    </html>
  );
}
