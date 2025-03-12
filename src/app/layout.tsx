import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@app/components/Navbar";
import Sidebar from "@app/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "S-Kantin Dashboard",
  description: "Sistem Manajemen Kantin Sekolah",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Layout dengan Sidebar */}
        <div className="flex h-screen">
          {/* Sidebar di sebelah kiri */}
          <Sidebar />

          {/* Konten utama */}
          <main className="flex-1 p-5">{children}</main>
        </div>
      </body>
    </html>
  );
}
