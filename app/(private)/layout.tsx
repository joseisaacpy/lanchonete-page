import { Home, FolderKanban, Package } from "lucide-react";
import Link from "next/link";
import { Toaster } from "sonner";

export default function LayoutPrivate({
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
            href="/"
            title="Ver cardápio público"
            className="opacity-80 hover:opacity-100 transition"
          >
            <Home />
          </Link>

          <Link
            href="/categorias"
            title="Gerenciar categorias"
            className="opacity-80 hover:opacity-100 transition"
          >
            <FolderKanban />
          </Link>

          <Link
            href="/produtos"
            title="Gerenciar produtos"
            className="opacity-80 hover:opacity-100 transition"
          >
            <Package />
          </Link>
        </nav>
      </header>

      <main className="p-4">{children}</main>

      <Toaster />
    </section>
  );
}
