import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "GainPlus - Easily making money while having fun",
  description:
    "Complete micro-tasks, play games, win raffles, and invest your earnings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={GeistSans.variable}>
          <Header />
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
