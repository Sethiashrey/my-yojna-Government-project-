import type { Metadata } from "next";
import "./globals.css";
import NavbarWrapper from "./components/navbarWrapper";

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
        <NavbarWrapper />
        {children}
      </body>
    </html>
  );
}
