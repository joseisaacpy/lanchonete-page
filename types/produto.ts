type Produto = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagemUrl?: string;
  categoriaId: string;
  categoria: {
    id: number;
    nome: string;
  };
};

export default Produto;
