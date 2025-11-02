"use client";

// importa hooks
import { useState } from "react";

import cardapioItens from "@/utils/cardapioItens";

// importa o CardProduto
import CardProduto from "../components/CardProduto";

// importa icon
import { ShoppingCart } from "lucide-react";

export default function Home() {
  // estado para filtro, por padrao é "Tudo"
  const [filtro, setFiltro] = useState<string>("Tudo");
  // estado para controlar a quantidade de produtos no carrinho
  const [quantidade, setQuantidade] = useState<number>(0);
  // estado para controlar o modal de carrinho
  const [abrirModal, setAbrirModal] = useState<boolean>(false);

  // função para filtrar produtos por meio dos botões
  const produtosFiltrados =
    filtro === "Tudo"
      ? cardapioItens
      : cardapioItens.filter(
          (produtos) =>
            produtos.categoria.toLowerCase() === filtro.toLowerCase()
        );

  // categorias
  const categorias = ["Tudo", "Hambúrguer", "Sanduíche", "Bebida", "Sobremesa"];

  return (
    <main className="px-4 py-6 relative">
      {/* titulo */}
      <h1 className="mx-2 mb-4 text-lg md:text-3xl lg:text-4xl font-bold md:text-center">
        Se liga no nosso <span className="text-green-600">Cardápio</span>!
      </h1>
      {/* carrinho */}
      <div className="hidden absolute top-4 right-4">
        <ShoppingCart size={40} className="text-white" />
        <span className="absolute bottom-0 left-0 px-2 rounded-full bg-red-600 text-white">
          {quantidade}
        </span>
      </div>
      {/* botoes de filtros */}
      <div className="flex justify-center flex-wrap gap-2 mb-4">
        {categorias.map((categoria) => {
          return (
            <button
              key={categoria}
              className={`btn ${
                filtro === categoria ? "bg-red-600" : "bg-gray-600"
              }`}
              onClick={() => setFiltro(categoria)}
            >
              {categoria}
            </button>
          );
        })}
      </div>
      {/* grid de produtos */}
      <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {produtosFiltrados.length === 0 && (
          <p className="text-center col-span-4">Nenhum produto encontrado</p>
        )}
        {/* map de produtos */}
        {produtosFiltrados.map((produto) => {
          return (
            <div
              key={produto.id}
              className="transition-all duration-300 ease-in-out transform opacity-0 scale-95 animate-fadeIn"
            >
              <CardProduto {...produto} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
