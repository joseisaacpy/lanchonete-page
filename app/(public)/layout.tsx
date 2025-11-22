"use client";
import { Toaster } from "sonner";

export default function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Toaster position="top-right" />
      {children}
    </>
  );
}
