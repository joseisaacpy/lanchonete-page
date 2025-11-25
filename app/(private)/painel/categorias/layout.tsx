import { FolderKanban, Plus, Home } from "lucide-react";
import PainelLayout from "../PainelLayout";

export default function LayoutCategorias({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PainelLayout
      links={[
        { href: "/painel", title: "Painel Principal", icon: <Home /> },
        {
          href: "/painel/categorias",
          title: "Gerenciar categorias",
          icon: <FolderKanban />,
        },
        {
          href: "/painel/categorias/nova",
          title: "Adicionar categoria",
          icon: <Plus />,
        },
      ]}
    >
      {children}
    </PainelLayout>
  );
}
