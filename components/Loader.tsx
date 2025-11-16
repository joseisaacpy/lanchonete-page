export default function Loader() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-4 text-center">
      <div className="h-20 w-20 rounded-full border-4 border-red-default border-t-transparent animate-spin"></div>
      <h1 className="font-bold text-3xl md:text-4xl">Carregando...</h1>
    </section>
  );
}
