import Image from "next/image";

export default function Header() {
  return (
    <header className="relative w-full h-[300px] flex flex-col items-center justify-center">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 bg-[url('/assets/images/bg-header.png')] bg-cover bg-center bg-no-repeat rounded-full"></div>

      {/* Overlay preto com opacidade */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Conteúdo acima do overlay */}
      <div className="relative flex flex-col items-center justify-center gap-2">
        <Image
          src="/assets/images/logo-placeholder.png"
          width={200}
          height={200}
          alt="Logo da lanchonete"
          loading="eager"
          className="rounded-full border-4 border-white"
        />
        <h1 className="text-white text-2xl font-bold">Lanchonete Fullstack</h1>
      </div>
    </header>
  );
}
