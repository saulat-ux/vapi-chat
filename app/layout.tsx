import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import { DM_Sans } from "@next/font/google";
import "./globals.css"; // Make sure to include your global styles

const dmSans = DM_Sans({
  weight: ["400", "500", "700"], // Use 'weight' instead of 'weights'
  subsets: ["latin"],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Brainiatic",
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
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${dmSans.className} `}
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Header />
        <main
          style={{
            flexGrow: "1",
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
