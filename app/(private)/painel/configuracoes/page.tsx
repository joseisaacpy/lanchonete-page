import { prisma } from "@/lib/prisma";
import Image from "next/image";

export default async function Configuracoes() {
  // pega informações da lanchonete do banco
  const lanchonete = await prisma.lanchonete.findUnique({
    where: {
      id: 1,
    },
  });
  return (
    <section className="section-container">
      <h1 className="h1-title">Configurações</h1>
      <p>Configurações da lanchonete</p>
      {/* Se for nulo, mostra mensagem */}
      {!lanchonete && <p>Nenhuma configuração encontrada.</p>}

      {lanchonete && (
        <div className="space-y-4 p-4 rounded border bg-white/5">
          <div>
            <strong>Nome:</strong>
            <p>{lanchonete.nome}</p>
          </div>

          <div>
            <strong>Logo atual:</strong>
            <div className="mt-2">
              <Image
                src={lanchonete.imagemLogo ?? ""}
                alt="Logo da lanchonete"
                width={300}
                height={300}
                className="rounded-md border"
              />
            </div>
          </div>

          <div>
            <strong>Imagem de fundo:</strong>
            <div className="mt-2">
              <Image
                src={lanchonete.imagemFundo ?? ""}
                alt="Imagem de fundo da lanchonete"
                width={400}
                height={200}
                className="rounded-md border w-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
