// importa types
import Produto from "@/types/produto";
import Categoria from "@/types/categoria";

// função para buscar produtos
export async function getProdutos(): Promise<Produto[]> {
  try {
    const response = await fetch("/api/produtos", {
      cache: "no-cache", // evita o cache
    });
    return response.json();
  } catch (error) {
    console.error(error);
    return []; // retorna um array vazio
  }
}

// função para buscar categorias
export async function getCategorias(): Promise<Categoria[]> {
  try {
    const response = await fetch("/api/categorias", {
      cache: "no-cache", // evita o cache
    });
    return response.json();
  } catch (error) {
    console.error(error);
    return []; // retorna um array vazio
  }
}
