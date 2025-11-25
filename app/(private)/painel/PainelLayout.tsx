import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { logout } from "@/utils/logout";

type LinkProps = {
  href: string;
  title: string;
  icon: React.ReactNode;
};

export default function PainelLayout({
  children,
  links,
}: {
  children: React.ReactNode;
  links: LinkProps[];
}) {
  return (
    <section>
      <header className="p-4 flex justify-between md:justify-around items-center">
        <h1 className="text-base md:text-2xl font-bold">
          Painel Privado da Lanchonete
        </h1>

        <nav className="flex gap-4 items-center">
          {/* links de navegação */}
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              title={link.title}
              className="opacity-80 hover:opacity-100 transition"
            >
              {link.icon}
            </Link>
          ))}
          {/* logout */}
          <Button
            onClick={logout}
            title="Sair do painel"
            className="rounded-full"
            variant={"destructive"}
          >
            <LogOut />
          </Button>
        </nav>
      </header>

      <main className="p-4">{children}</main>
    </section>
  );
}
