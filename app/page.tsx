"use client";

// importa hooks
import { useState } from "react";

// importa metadata
// import { Metadata } from "next";

// importa o CardProduto
import CardProduto from "./components/CardProduto";

// importa icon
import { ShoppingCart } from "lucide-react";

// define a metadata
// export const metadata: Metadata = {
//   title: "Cardápio",
// };

// mock de dados placeholder
export const produtos = [
  // Hambúrgueres
  {
    id: 1,
    nome: "X-Burger",
    categoria: "Hambúrguer",
    preco: 15,
    descricao: "Hambúrguer com queijo, alface e tomate",
    imagem: "/assets/images/hamburguer.png",
  },
  {
    id: 2,
    nome: "X-Bacon",
    categoria: "Hambúrguer",
    preco: 18,
    descricao: "Hambúrguer com bacon, queijo e molho especial",
    imagem: "/assets/images/hamburguer.png",
  },
  // Sanduíches
  {
    id: 3,
    nome: "Misto Quente",
    categoria: "Sanduíche",
    preco: 8,
    descricao: "Presunto e queijo derretido",
    imagem: "/assets/images/sanduiche.png",
  },
  {
    id: 4,
    nome: "Frango Crispy",
    categoria: "Sanduíche",
    preco: 16,
    descricao: "Frango empanado crocante com maionese",
    imagem: "/assets/images/sanduiche.png",
  },
  // Bebidas
  {
    id: 5,
    nome: "Refrigerante Lata",
    categoria: "Bebida",
    preco: 5,
    descricao: "Coca-Cola, Fanta ou Guaraná",
    imagem: "/assets/images/cola.png",
  },
  {
    id: 6,
    nome: "Suco Natural",
    categoria: "Bebida",
    preco: 7,
    descricao: "Suco de laranja ou maracujá",
    imagem: "/assets/images/suco.png",
  },
  // Sobremesas
  {
    id: 7,
    nome: "Milkshake Chocolate",
    categoria: "Sobremesa",
    preco: 12,
    descricao: "Milkshake cremoso de chocolate",
    imagem: "/assets/images/milkshake.png",
  },
  {
    id: 8,
    nome: "Brownie",
    categoria: "Sobremesa",
    preco: 9,
    descricao: "Brownie de chocolate com pedaços de noz",
    imagem: "/assets/images/brownie.png",
  },
];

export default function Cardapio() {
  // estado para filtro, por padrao é "Tudo"
  const [filtro, setFiltro] = useState<string>("Tudo");
  // estado para controlar a quantidade de produtos no carrinho
  const [quantidade, setQuantidade] = useState<number>(0);
  // estado para controlar o modal de carrinho
  const [abrirModal, setAbrirModal] = useState<boolean>(false);

  // função para filtrar produtos por meio dos botões
  const produtosFiltrados =
    filtro === "Tudo"
      ? produtos
      : produtos.filter(
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
      <div className="absolute top-4 right-4">
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
              className={`btn ${filtro === categoria ? "bg-red-600" : ""}`}
              onClick={() => setFiltro(categoria)}
            >
              {categoria}
            </button>
          );
        })}
      </div>
      {/* grid de produtos */}
      <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
