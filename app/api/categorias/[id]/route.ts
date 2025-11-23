import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET - pega uma categoria
export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const categoria = await prisma.categoria.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!categoria) {
      return NextResponse.json(
        { error: "Categoria não encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(categoria);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: "Ocorreu um erro ao buscar a categoria",
      },
      { status: 500 }
    );
  }
}

// DELETE - deleta uma categoria
export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    // deleta os produtos da categoria
    await prisma.produto.deleteMany({
      where: { categoriaId: Number(id) },
    });

    // deleta a categoria
    const categoria = await prisma.categoria.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({
      message: "Categoria e seus produtos foram deletados com sucesso",
      categoria,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: "Ocorreu um erro ao deletar a categoria",
      },
      { status: 500 }
    );
  }
}
