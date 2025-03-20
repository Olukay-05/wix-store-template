import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Toaster } from "@/components/ui/toaster";
import ReactQueryProvider from "./ReactQueryProvider";

const lora = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Flow Shop",
    absolute: "Flow Shop",
  },
  description: "A full-stack e-commerce application built with Next.js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            <Navbar />
            {children}
            <Footer />
          </ReactQueryProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
