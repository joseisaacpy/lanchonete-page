export default function LayoutPrivate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <header className="p-4">
        <div className="inline-block bg-green-default text-white text-sm font-semibold px-4 py-2 rounded-full shadow-sm">
          Conteúdo privado da lanchonete
        </div>
      </header>

      <main className="p-4">{children}</main>
    </section>
  );
}
