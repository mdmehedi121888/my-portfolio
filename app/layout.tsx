import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md. Mehedi Hasan",
  description: "Full-Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#111633] text-white">
        <Navbar />
        <Sidebar />
        <main className="pt-20 pl-0 md:pl-20">{children}</main>
      </body>
    </html>
  );
}