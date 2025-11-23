"use client";

import { getCategorias } from "@/lib/api";

import { useState, useEffect } from "react";

import Loader from "./Loader";
import { toast } from "sonner";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// types
import Produto from "@/types/produto";
import Categoria from "@/types/categoria";

export default function FormProduto() {
  //   estado para as categorias
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  // estado para laoder
  const [loader, setLoader] = useState<boolean>(false);
  //   useEffect para carregar as categorias
  useEffect(() => {
    (async () => {
      setCategorias(await getCategorias());
    })();
  }, []);
  //   função para submeter o formulário
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      // previne o reload da pagina
      e.preventDefault();
      // inicia o loader
      setLoader(true);
      if (!form.nome || !form.preco || !form.categoriaId) {
        toast.error("Preencha todos os campos obrigatórios");
        setLoader(false);
        return;
      }
      await fetch("/api/produtos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      toast.success("Produto cadastrado com sucesso");
      // limpa o form ao submeter
      setForm({
        nome: "",
        descricao: "",
        preco: 0,
        imagemUrl: "",
        categoriaId: 0,
      });
    } catch (error) {
      toast.error("Ocorreu um erro ao criar o produto");
      console.error(error);
    } finally {
      // fecha o loader
      setLoader(false);
    }
  };
  //   estado para o formulário
  const [form, setForm] = useState<Omit<Produto, "id" | "categoria">>({
    nome: "",
    descricao: "",
    preco: 0,
    imagemUrl: "",
    categoriaId: 0,
  });
  return (
    <section className="section-container">
      <h1 className="h1-title">Cadastrar produto</h1>
      <span className="text-red-default">* Campos obrigatórios</span>
      <form onSubmit={handleSubmit} className="form-default">
        <div className="campo-form">
          <Label htmlFor="nome">Nome:*</Label>
          <Input
            type="text"
            id="nome"
            value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
          />
        </div>
        <div className="campo-form">
          <Label htmlFor="descricao">Descrição</Label>
          <Input
            type="text"
            id="descricao"
            value={form.descricao ?? ""}
            onChange={(e) => setForm({ ...form, descricao: e.target.value })}
          />
        </div>

        <div className="campo-form">
          <Label htmlFor="preco">Preço:*</Label>
          <Input
            type="number"
            id="preco"
            value={form.preco}
            onChange={(e) =>
              setForm({ ...form, preco: Number(e.target.value) })
            }
          />
        </div>

        <div className="campo-form">
          <Label htmlFor="imagemUrl">Imagem (URL)</Label>
          <Input
            id="imagemUrl"
            value={form.imagemUrl ?? ""}
            onChange={(e) => setForm({ ...form, imagemUrl: e.target.value })}
          />
        </div>

        <div className="campo-form">
          <Label htmlFor="categoriaId">Categoria:*</Label>
          <Select
            value={String(form.categoriaId)}
            onValueChange={(value) =>
              setForm({ ...form, categoriaId: Number(value) })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Categorias</SelectLabel>
                {categorias.length === 0 ? (
                  <SelectItem disabled value="carregando">
                    Carregando...
                  </SelectItem>
                ) : (
                  categorias.map((categoria) => (
                    <SelectItem key={categoria.id} value={String(categoria.id)}>
                      {categoria.nome}
                    </SelectItem>
                  ))
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" variant={"outline"}>
          Cadastrar
        </Button>
      </form>
    </section>
  );
}
