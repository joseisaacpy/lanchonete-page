// Arquivo para rotas POST e GET, que não precisam de ID, para categorias

import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET - pega todas as categorias
export async function GET() {
  try {
    // pega todas as categorias
    const categorias = await prisma.categoria.findMany();
    // se não tiver categorias, retornar array vazio
    if (categorias.length === 0) {
      return NextResponse.json([]);
    }
    return NextResponse.json(categorias);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao buscar categorias" },
      { status: 500 }
    );
  }
}

// POST - criar uma categoria
export async function POST(req: Request) {
  try {
    // recebe os dados pela requisição
    const data = await req.json();
    // cria a nova categoria com base nos dados
    const novaCategoria = await prisma.categoria.create({ data });
    return NextResponse.json(
      {
        message: "Categoria criado com sucesso",
        categoria: novaCategoria,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao criar categoria" },
      { status: 500 }
    );
  }
}
