import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { logout } from "@/utils/logout";
import Link from "next/link";
import { LogOut, Map } from "lucide-react";

export const metadata = {
  title: "Painel",
};

export default function Painel() {
  return (
    <>
      <header className="flex items-center justify-between max-w-4xl mx-auto px-4 py-6">
        {/* titulo */}
        <h1 className="h1-title">Navegação do Painel</h1>
        {/* botão de logout */}
        <Button
          className="rounded-full"
          onClick={logout}
          title="Sair do painel"
          variant={"destructive"}
        >
          <LogOut />
        </Button>
      </header>
      <section className="section-container">
        {/* grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* cards de navegação */}
          <Card>
            <CardHeader>
              <CardTitle>Cardápio</CardTitle>
              <CardDescription>Visualize o cardápio público</CardDescription>
              <CardAction>
                <Button>
                  <Link href="/">Ver cardápio</Link>
                </Button>
              </CardAction>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Categorias</CardTitle>
              <CardDescription>Gerencie suas categorias</CardDescription>
              <CardAction>
                <Button>
                  <Link href="/painel/categorias">Ver categorias</Link>
                </Button>
              </CardAction>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Produtos</CardTitle>
              <CardDescription>Gerencie seus produtos</CardDescription>
              <CardAction>
                <Button>
                  <Link href="/painel/produtos">Ver produtos</Link>
                </Button>
              </CardAction>
            </CardHeader>
          </Card>
        </div>
      </section>
    </>
  );
}
