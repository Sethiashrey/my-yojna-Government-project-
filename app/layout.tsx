import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/navbar";

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
      <body>
        <ToastContainer />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
