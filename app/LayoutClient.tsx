"use client";
// componentes
import Footer from "../components/Footer";
import { Toaster } from "@/components/ui/sonner";

export default function LayoutClient() {
  return (
    <>
      <Toaster position="top-right" />
      <Footer />
    </>
  );
}
