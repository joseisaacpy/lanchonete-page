"use client";

import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Login() {
  //   estado para o formulário
  const [form, setForm] = useState({
    email: "",
    senha: "",
  });

  //   função para lidar com o envio do formulário / login
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      // previne o reload da pagina
      e.preventDefault();

      // se o email ou senha estiverem vazios, retorna um erro
      if (!form.email || !form.senha) {
        toast.error("Preencha todos os campos obrigatórios");
        return;
      }

      // faz o POST
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      // pega os dados da requisição e transforma em json
      const data = await response.json();

      // se der erro, retorna um erro
      if (!response.ok) {
        toast.error(data.error);
        return;
      }

      // mensagem de sucesso
      toast.success("Login efetuado com sucesso!");

      // redireciona para o painel privado
      window.location.href = "/categorias";
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="section-container">
      <h1 className="h1-title">Login</h1>
      <p>Para acessar o painel privado, efetue o login.</p>
      <form onSubmit={handleLogin} className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email:</Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="senha">Senha:</Label>
          <Input
            id="senha"
            type="password"
            value={form.senha}
            onChange={(e) => setForm({ ...form, senha: e.target.value })}
          />
        </div>
        <Button type="submit" variant="outline" className="cursor-pointer">
          Entrar
        </Button>
      </form>
    </section>
  );
}
