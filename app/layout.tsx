import "./globals.css";

import AuthProvider from "./context/AuthProvider";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import NavBar from "./_components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " Next Auth App",
  description: "Auth Application`",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="items-center w-full min-h-screen text-white bg-gray-700">
            <NavBar/>
           {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
