import FormCategoria from "@/components/FormCategoria";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nova categoria",
};

export default function page() {
  return (
    <div>
      <FormCategoria />
    </div>
  );
}
