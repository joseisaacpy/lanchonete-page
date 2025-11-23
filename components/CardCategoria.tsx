"use client";

import { Trash2, Edit } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Categoria from "@/types/categoria";
import { useState, useEffect } from "react";

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

  const [quantidadeProdutos, setQuantidadeProdutos] = useState<number>(0);

  useEffect(() => {
    // função para pegar quantidade de produtos da categoria
    async function getQuantidadeProdutos() {
      try {
        const response = await fetch(`/api/categorias/${id}`, {
          cache: "no-cache", // evita o cache
        });
        const data = await response.json();
        setQuantidadeProdutos(data.quantidadeProdutos);
      } catch (error) {
        console.error(error);
        toast.error("Ocorreu um erro ao buscar a quantidade de produtos");
      }
    }

    getQuantidadeProdutos();
  });

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
        <CardDescription>{`${
          quantidadeProdutos === 1
            ? "1 produto cadastrado"
            : `${quantidadeProdutos} produtos cadastrados`
        }`}</CardDescription>
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
