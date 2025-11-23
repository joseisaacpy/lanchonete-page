import { Home } from "lucide-react";
import Link from "next/link";

export default function LayoutPrivate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <header className="p-4 flex justify-around">
        <h1 className="text-2xl font-bold">Painel Privado da Lanchonete</h1>
        <Link href="/" title="Ir para o cardápio da lanchonete">
          <Home />
        </Link>
      </header>

      <main className="p-4">{children}</main>
    </section>
  );
}
