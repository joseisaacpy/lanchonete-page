"use client";

import { Trash2, Edit } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Categoria from "@/types/categoria";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CardCategoria({ id, nome }: Categoria) {
  const router = useRouter();
  // função para deletar uma categoria
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
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{nome}</CardTitle>
        <CardDescription>x produtos cadastrados</CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col gap-2">
        <Button onClick={handleDelete} className="w-full">
          <Trash2 />
        </Button>
        <Button className="w-full">
          <Edit />
        </Button>
      </CardFooter>
    </Card>
  );
}
