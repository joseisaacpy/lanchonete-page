import Categoria from "../types/categoria";
import Link from "next/link";

// importa o CardCategoria
import CardCategoria from "@/components/CardCategoria";

// função para buscar categorias
async function getCategorias(): Promise<Categoria[]> {
  try {
    const response = await fetch("http://localhost:3000/api/categorias", {
      cache: "no-cache", // evita o cache
    });
    return response.json();
  } catch (error) {
    console.error(error);
    return []; // retorna um array vazio
  }
}

export default async function Categorias() {
  // faz a requisição para buscar as categorias
  const categorias = await getCategorias();
  return (
    <section className="p-4 flex flex-col gap-2">
      <h1 className="text-2xl font-bold">Lista de categorias</h1>
      <p>Quantidade de categorias: {categorias.length}</p>
      <p>
        Deseja adicionar uma nova categoria?
        <Link className="ml-1 text-red-default underline" href="/categorias/nova">Clique aqui</Link>
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
