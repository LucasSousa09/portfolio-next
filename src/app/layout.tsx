import { Poppins } from "next/font/google";

import "./globals.css";

import { Header } from "@/components/Header";
import { ThemeProvider } from './themeProvider'

import type { Metadata } from "next";

const poppins = Poppins({
  weight: ["500","600","700", "900"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Portfolio LRDS",
  description: "Meu (Lucas Rodrigues) Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="light" lang="pt-BR">
        <body className={`${poppins.className} antialiased`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="bg-zinc-100 text-zinc-800 dark:bg-zinc-900 dark:text-white flex flex-col items-center">
              <Header />
              {children}          
            </div>
          </ThemeProvider>  
        </body>
    </html>
  );
}
