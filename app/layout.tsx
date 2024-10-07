import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const gilroyBold = localFont({
  src: "./fonts/Gilroy-Bold.ttf",
  variable: "--font-gilroy-bold",
  weight: "100 900",
});
const gilroyMedium = localFont({
  src: "./fonts/Gilroy-Medium.ttf",
  variable: "--font-gilroy-medium",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Top100Designers",
  description: "Website for the top 100 designers in Kerala",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="./favicon.ico" />
      </head>
      <body
        className={`${gilroyBold.variable} ${gilroyMedium.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
