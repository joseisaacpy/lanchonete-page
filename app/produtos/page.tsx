// imports
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import CardProduto from "@/components/CardProduto";

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
      <p>Quantidade de produtos: {produtos.length}</p>
      <p>
        Deseja adicionar uma novo produto?
        <Link className="ml-1 text-red-default underline" href="/produto/novo">
          Clique aqui
        </Link>
      </p>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
        {produtos.map((produto) => {
          return <CardProduto key={produto.id} {...produto} />;
        })}
      </div>
    </section>
  );
}
