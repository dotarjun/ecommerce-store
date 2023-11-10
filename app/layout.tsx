import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";

import "./globals.css";
import ToastProvider from "@/providers/toast-provider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guitar Gear Shop",
  description:
    "GGS is the best place to buy acoustic, electric, and bass guitars online. We carry all major brands and free shipping is available.",
  keywords: ["guitars", "acoustic", "electric", "bass"],
  authors: [
    {
      name: "Arjun Singh",
      url: "https://arjunsingh.tech",
    },
  ],
  openGraph: {
    title: "Guitar Gear Shop",
    description: "Buy the best guitars online",
    url: "https://guitargear.shop",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
