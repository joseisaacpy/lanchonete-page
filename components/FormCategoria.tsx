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
      // se tiver nome. faz o POST
      const response = await fetch("/api/categorias", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome }),
      });
      // se der erro
      const data = await response.json();
      if (data.error) {
        toast.error(data.error); // mostra o erro
        setLoading(false); // fecha o loader
        return;
      }
      // se der certo
      toast.success("Categoria cadastrada com sucesso"); // mostra o sucesso
      setNome(""); // limpa o nome
      setLoading(false); // fecha o loader
    } catch (error) {
      console.log(error);
      toast.error("Erro ao cadastrar a categoria");
    }
  };
  return (
    <section className="section-container">
      <h1 className="h1-title">Cadastro de categoria</h1>

      <form onSubmit={handleSubmit} className="form-default">
        <div className="campo-form">
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
