import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Yojana - Find Your Schemes",
  description: "Easy Access to Indian Government Schemes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
