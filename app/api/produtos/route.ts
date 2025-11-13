// Arquivo para rotas POST e GET, que não precisam de ID

// importa o prisma
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET - pega todos os produtos
export async function GET() {
  try {
    const produtos = await prisma.produto.findMany();
    return NextResponse.json(produtos);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Ocorreu um erro ao buscar os produtos" },
      { status: 500 }
    );
  }
}
