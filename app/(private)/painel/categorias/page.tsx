import { prisma } from "@/lib/prisma";
import CardCategoria from "@/components/CardCategoria";
import { Metadata } from "next";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Categorias",
};

export default async function Categorias() {
  // faz a requisição para buscar as categorias
  const categorias = await prisma.categoria.findMany();
  return (
    <section className="section-container">
      <h1 className="h1-title">Lista de categorias</h1>
      <p>
        Quantidade de categorias:{" "}
        <span className="font-bold">{categorias.length}</span>
      </p>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
        {categorias.map((categoria) => {
          return (
            <CardCategoria
              key={categoria.id}
              id={categoria.id}
              nome={categoria.nome}
            />
          );
        })}
      </div>
    </section>
  );
}
