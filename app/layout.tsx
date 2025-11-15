import type { Metadata } from "next";

import "./globals.css";

import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Lanchonete Page",
  description: "Nome da lanchonete — A melhor pizza e hambúrguer da região.",
  icons: {
    icon: "/favicon/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`antialiased min-h-screen flex flex-col`}>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
