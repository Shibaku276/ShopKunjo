import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import {ClerkProvider} from "@clerk/nextjs";

import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


/*
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/

export const metadata: Metadata = {
  title: {
    template: "%s | ShopKunjo Online Store",
    default: "ShopKunjo Online Store",
  },
  description: "ShopKunjo is an online store that sells a variety of products, including clothing, accessories, and home goods.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <ClerkProvider>
      <html lang="en" className={cn("font-sans", geist.variable)}>
        <body className="font-poppins antialiased">
          <Header/>
          {children}
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  );
}
