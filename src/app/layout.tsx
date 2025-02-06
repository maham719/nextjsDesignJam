import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import FontAwesomeConfig from "./fontawesome";
import Footer from "./components/Footer";
import { ToastContainer} from 'react-toastify';
import 'swiper/css';
import 'swiper/css/pagination';

import {
  ClerkProvider,
} from '@clerk/nextjs'
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <head>
        <FontAwesomeConfig/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <Header/>
        {children}
        <ToastContainer />
        <Footer/>
      </body>
    </html>
    </ClerkProvider>
  );
}
