// Arquivo para rotas POST e GET, que não precisam de ID, para categorias

import { prisma } from "@/lib/prisma";
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
