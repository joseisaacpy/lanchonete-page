import Link from "next/link";
import { prisma } from "@/lib/prisma";
import CardCategoria from "@/components/CardCategoria";

export default async function Categorias() {
  // faz a requisição para buscar as categorias
  const categorias = await prisma.categoria.findMany();
  return (
    <section className="section-container">
      <h1 className="h1-title">Lista de categorias</h1>
      <p>Quantidade de categorias: {categorias.length}</p>
      <p>
        Deseja adicionar uma nova categoria?
        <Link
          className="ml-1 text-red-default underline"
          href="/categorias/nova"
        >
          Clique aqui
        </Link>
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
