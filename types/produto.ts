type Produto = {
  id: number;
  nome: string;
  descricao: string | null;
  preco: number;
  imagemUrl: string | null;
  categoriaId: number;
  categoria: {
    id: number;
    nome: string;
  };
};

export default Produto;
