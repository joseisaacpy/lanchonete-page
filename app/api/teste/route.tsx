import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const teste = await prisma.categoria.findMany();
    if (teste.length == 0) {
      return NextResponse.json([]);
    } else {
      return NextResponse.json(teste);
    }
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { error: err.message, stack: err.stack },
      { status: 500 }
    );
  }
}
