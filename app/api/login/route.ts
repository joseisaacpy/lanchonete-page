import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  // recebe email e senha do corpo da requisição
  const { email, senha } = await req.json();

  //   pega as variáveis de ambiente no env
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminHash = process.env.ADMIN_HASH ?? "";

  // logs
  console.log("HASH RAW:", adminHash);
  console.log("SENHA INSERIDA:", senha);
  console.log("EMAIL INSERIDO:", email);
  console.log(await bcrypt.compare(senha, adminHash));

  //   verifica se o email e senha estão vazios
  if (!email || !senha) {
    return NextResponse.json(
      { error: "Preencha todos os campos obrigatórios" },
      { status: 400 }
    );
  }

  //   se email for diferente do email do admin, retorna um erro
  if (email !== adminEmail) {
    return NextResponse.json(
      { error: "Credenciais incorretas" },
      { status: 401 }
    );
  }

  const isValid = await bcrypt.compare(senha, adminHash);

  if (!isValid) {
    return NextResponse.json(
      { error: "Credenciais incorretas" },
      { status: 401 }
    );
  }

  // se o login for bem sucedido, cria um cookie com o email do admin
  return NextResponse.json(
    { success: true },
    {
      status: 200,
      headers: {
        "Set-Cookie": `admin_token=logado; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=86400`,
      },
    }
  );
}
