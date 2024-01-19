import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

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
    <html lang="pt-BR">
      <body className={`${poppins.className} bg-zinc-900 text-white`}>{children}</body>
    </html>
  );
}
