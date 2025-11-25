import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Painel",
};

export default function Painel() {
  return (
    <section className="section-container">
      <h1 className="h1-title">Navegação</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
  );
}
