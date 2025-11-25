// imports
import { prisma } from "@/lib/prisma";
import CardProduto from "@/components/CardProduto";
import { Metadata } from "next";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Produtos",
};

export default async function Produtos() {
  // faz a requisição para buscar as produtos
  const produtos = await prisma.produto.findMany({
    include: {
      categoria: true,
    },
  });
  return (
    <section className="section-container">
      <h1 className="h1-title">Lista de produtos</h1>
      <p>
        Quantidade de produtos:{" "}
        <span className="font-bold">{produtos.length}</span>
      </p>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
        {produtos.map((produto) => {
          return <CardProduto key={produto.id} {...produto} />;
        })}
      </div>
    </section>
  );
}
