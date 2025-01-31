"use client";

import "./globals.css";
import Head from "./head";
import Loading from "./components/Loading";
import useTweetStore from "./store/tweetStore";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
