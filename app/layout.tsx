// css
import "./globals.css";

// fontes
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

// components
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

// metadata
import type { Metadata } from "next";
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
      <body
        className={`${poppins.className} antialiased min-h-screen flex flex-col`}
      >
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
