"use client";
// importa hooks
import { useState, useEffect } from "react";
// importa componentes
import CardProduto from "../../../components/CardProduto";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
// types
import Produto from "@/types/produto";
import Categoria from "@/types/categoria";
// funções de consumo da API
import { getProdutos, getCategorias } from "@/lib/api";

export default function Home() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [filtro, setFiltro] = useState<string>("Tudo");
  const [loader, setLoader] = useState<boolean>(true);
  // carrega os produtos e categorias ao iniciar o componente
  useEffect(() => {
    async function carregarDados() {
      try {
        // chama as funções
        const [prods, cats] = await Promise.all([
          getProdutos(),
          getCategorias(),
        ]);
        // define os estados
        setProdutos(prods);
        setCategorias(cats);
      } catch (error) {
        console.error(error);
      } finally {
        // fecha o loader
        setLoader(false);
      }
    }
    // chama a função de carregar os dados
    carregarDados();
  }, []);

  // se tiver carregando, mostrar o loader
  if (loader) {
    return <Loader />;
  }

  return (
    <section className="px-4 relative">
      <Header />
      {/* titulo */}
      <h1 className="mx-2 py-4 text-lg md:text-3xl lg:text-4xl font-bold md:text-center">
        Se liga no nosso <span className="text-red-600">Cardápio</span>!
      </h1>
      {/* botoes de filtros */}
      <div className="flex justify-center flex-wrap gap-2 mb-4">
        {["Tudo", ...categorias.map((categoria) => categoria.nome)].map(
          (item) => (
            <button
              key={item}
              className={`btn ${
                filtro === item
                  ? "bg-red-default opacity-100"
                  : "bg-red-default opacity-40"
              }`}
              onClick={() => setFiltro(item)}
            >
              {item}
            </button>
          )
        )}
      </div>
      {/* grid de produtos */}
      <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* map de produtos */}
        {produtos
          .filter((produto) => {
            return filtro === "Tudo" || produto.categoria.nome === filtro;
          })
          .map((produto) => {
            return <CardProduto key={produto.id} {...produto} />;
          })}
      </div>
    </section>
  );
}
