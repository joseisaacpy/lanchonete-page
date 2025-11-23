import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET - pega uma produto
export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const produto = await prisma.produto.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!produto) {
      return NextResponse.json(
        { error: "Produto não encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(produto);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: "Ocorreu um erro ao buscar o produto",
      },
      { status: 500 }
    );
  }
}

// DELETE - deleta uma produto
export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    // deleta o produto
    const produto = await prisma.produto.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({
      message: "Produto deletado com sucesso",
      produto,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: "Ocorreu um erro ao deletar o produto",
      },
      { status: 500 }
    );
  }
}
