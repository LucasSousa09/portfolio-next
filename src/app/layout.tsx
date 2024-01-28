import { Poppins } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from '../components/themeProvider'

import type { Metadata } from "next";

const poppins = Poppins({
  weight: ["400","500","600","700", "900"],
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
    <html lang="pt-BR" className="scroll-smooth">
        <body className={`${poppins.className} antialiased max-w-8xl mx-auto`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>  
        </body>
    </html>
  );
}
