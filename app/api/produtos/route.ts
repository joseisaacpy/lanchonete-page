// Arquivo para rotas POST e GET, que não precisam de ID
// importa o prisma
import { prisma } from "@/lib/prisma";
// importa o NextResponse
import { NextResponse } from "next/server";

// GET - pega todos os produtos
export async function GET() {
  try {
    // pega todos os produtos incluindo a categoria
    const produtos = await prisma.produto.findMany({
      include: {
        categoria: true,
      },
    });
    // se a quantidade de produtos for 0, retorna um array vazio
    if (produtos.length == 0) {
      return NextResponse.json([]);
    }
    // retorna os produtos
    return NextResponse.json(produtos);
  } catch (error) {
    // se der erro, retorna um erro
    console.error(error);
    return NextResponse.json(
      { error: "Ocorreu um erro ao buscar os produtos" },
      { status: 500 }
    );
  }
}

// POST - cria um produto
export async function POST(req: Request) {
  try {
    // pega os dados vindo da requisição
    const data = await req.json();
    // cria um novo produto com os dados de data
    const novoProduto = await prisma.produto.create({
      data,
    });
    return NextResponse.json({
      message: "Produto criado com sucesso",
      produto: novoProduto,
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Ocorreu um erro ao criar o produto" },
      { status: 500 }
    );
  }
}
