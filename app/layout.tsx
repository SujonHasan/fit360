"use client";

import "bootstrap/dist/css/bootstrap.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Navbar from "../src/components/Navbar";
import Providers from "../src/redux/provider";
import "./globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Fit360",
  description: "Generated by create Sujon Hasan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  // console.log("path name ====   ", pathName);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {pathName !== "/signin" ? (
            <>
              <Navbar />
              {children}
            </>
          ) : (
            <>{children}</>
          )}
        </Providers>
        <ToastContainer />
      </body>
    </html>
  );
}
