import Link from "next/link";

export default function notFound() {
  return (
    <section className="relative bg-[url('/assets/images/lanchonete.webp')] bg-cover bg-left md:bg-center bg-no-repeat flex flex-col items-center justify-center h-screen">
      <div className="absolute bg-black/50 inset-0"></div>
      <div className="z-20 text-center flex flex-col gap-4">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Ops, página não encontrada!
        </h1>
        <Link
          href="/"
          className="p-2 border-2 rounded-md font-semibold text-2xl bg-transparent hover:bg-white hover:text-black transition-all ease-in-out duration-300"
        >
          Início
        </Link>
      </div>
    </section>
  );
}
