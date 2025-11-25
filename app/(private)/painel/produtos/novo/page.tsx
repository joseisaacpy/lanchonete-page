import FormProduto from "@/components/FormProduto";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Novo produto",
};

export default function page() {
  return (
    <div>
      <FormProduto />
    </div>
  );
}
