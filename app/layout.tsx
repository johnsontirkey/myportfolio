import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import NavBar from "@/components/main/NavBar";
import Footer from "@/components/main/Footer";


const jost = Jost({
  variable: "--font-jost-sans",
});

export const metadata: Metadata = {
  title: "Spacey Portfolio",
  description: "Portfolio Created by Johnson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} bg-[#030014] overflow-y-scroll overflow-x-hidden antialiased`}
         className={`${jost.variable} bg-[#030014] overflow-y-scroll overflow-x-hidden antialiased`}
      >
        <StarsCanvas />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
