// importa image
import Image from "next/image";

// type do produto
import Produto from "@/types/produto";

export default function CardProduto({
  id,
  nome,
  descricao,
  preco,
  imagemUrl,
  categoria,
}: Produto) {
  return (
    <div
      key={id}
      className="flex flex-col rounded-2xl shadow-md overflow-hidden h-full hover:scale-95 transition-all ease-in-out duration-300"
    >
      {/* div da imagem */}
      <div className="relative w-full h-40 md:h-48 lg:h-52">
        <Image
          src={imagemUrl || "/assets/images/sem-image.svg"}
          alt={nome}
          className="object-cover"
          fill
          loading="eager"
          sizes="min-width (768px) 50vw, 100vw"
        />
      </div>
      {/* conteúdo */}
      <div className="flex flex-col grow p-4 gap-2">
        <span className="text-sm text-white/40">{categoria.nome}</span>
        <h2 className="font-bold text-lg md:text-xl">{nome}</h2>
        <p className="text-gray-300 text-sm md:text-base grow">{descricao}</p>
        <p className="text-green-default text-lg md:text-xl font-bold">
          R${preco.toFixed(2)}
        </p>
        <button aria-label={`Comprar ${nome}`} className="btn bg-green-default">
          Comprar
        </button>
      </div>
    </div>
  );
}
