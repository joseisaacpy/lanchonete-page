"use client";

import { Trash2, Edit } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import Categoria from "@/types/categoria";

export default function CardCategoria({ id, nome }: Categoria) {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await fetch(`/api/categorias/${id}`, {
        method: "DELETE",
      });
      toast.success("Categoria deletada com sucesso");
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Ocorreu um erro ao deletar a categoria");
    }
  };
  return (
    <div key={id} className="bg-gray-200 rounded-md p-4 text-black">
      <h2 className="font-bold">{nome}</h2>
      <footer>
        {/* botões */}
        <div className="flex flex-row gap-2">
          <button onClick={handleDelete} className="btn bg-red-default">
            <Trash2 />
          </button>
          <button className="btn bg-red-default">
            <Edit />
          </button>
        </div>
      </footer>
    </div>
  );
}
