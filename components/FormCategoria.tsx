"use client";
// importas
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { toast } from "sonner";

export default function FormCategoria() {
  const [nome, setNome] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      // previne o reload da pagina
      e.preventDefault();
      // inicia o loader
      setLoading(true);
      // se o nome estiver vazio, retorna um erro
      if (!nome || nome.trim() === "") {
        toast.error("Preencha o nome da categoria");
        setLoading(false);
        return;
      }
    } catch (error) {
      console.log(error);
      toast.error("Erro ao cadastrar a categoria");
    }
  };
  return (
    <section className="section-container">
      <h1 className="h1-title">Cadastro de categoria</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label>Nome:</Label>
          <Input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            disabled={loading}
          />
        </div>

        <Button type="submit" variant={"outline"} disabled={loading}>
          {loading ? "Salvando..." : "Salvar"}
        </Button>
      </form>
    </section>
  );
}
