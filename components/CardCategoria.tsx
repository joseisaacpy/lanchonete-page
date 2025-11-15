// importa icones
import { Trash2, Edit } from "lucide-react";

// tpye da categoria
import Categoria from "@/app/types/categoria";

export default function CardCategoria({ id, nome }: Categoria) {
  return (
    <div key={id} className="bg-gray-200 rounded-md p-4 text-black">
      <h2 className="font-bold">{nome}</h2>
      <footer>
        {/* botões */}
        <div className="flex flex-row gap-2">
          <button className="btn bg-red-default">
            <Trash2 />
          </button>
          <button className="btn bg-red-default">
            <Edit />
          </button>
        </div>
      </footer>
    </div>
  );
}
