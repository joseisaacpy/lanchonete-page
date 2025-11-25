import { FolderKanban, Plus, Home } from "lucide-react";
import PainelLayout from "../PainelLayout";

export default function LayoutProdutos({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PainelLayout
      links={[
        { href: "/painel", title: "Painel Principal", icon: <Home /> },
        {
          href: "/painel/produtos",
          title: "Gerenciar produtos",
          icon: <FolderKanban />,
        },
        {
          href: "/painel/produtos/novo",
          title: "Adicionar produto",
          icon: <Plus />,
        },
      ]}
    >
      {children}
    </PainelLayout>
  );
}
