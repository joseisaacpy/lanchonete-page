import Categoria from "../types/categoria";

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
    <div className="p-4">
      <h1>Lista de categorias</h1>
      <p>Quantidade de categorias: {categorias.length}</p>
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
    </div>
  );
}
