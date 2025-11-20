import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const ping = await prisma.categoria.count();
    return NextResponse.json({ ok: true, ping });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { error: err.message, stack: err.stack },
      { status: 500 }
    );
  }
}
