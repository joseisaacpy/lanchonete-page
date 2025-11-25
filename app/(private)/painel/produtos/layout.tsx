import { FolderKanban, Plus, Home } from "lucide-react";
import Link from "next/link";

export default function LayoutProdutos({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-base md:text-2xl font-bold">
          Painel Privado da Lanchonete
        </h1>

        <nav className="flex gap-4 items-center">
          <Link
            href="/painel/"
            title="Painel Principal"
            className="opacity-80 hover:opacity-100 transition"
          >
            <Home />
          </Link>
          <Link
            href="/painel/produtos"
            title="Gerenciar produtos"
            className="opacity-80 hover:opacity-100 transition"
          >
            <FolderKanban />
          </Link>

          <Link
            href="/painel/produtos/novo"
            title="Adicionar produto"
            className="opacity-80 hover:opacity-100 transition"
          >
            <Plus />
          </Link>
        </nav>
      </header>

      <main className="p-4">{children}</main>
    </section>
  );
}
