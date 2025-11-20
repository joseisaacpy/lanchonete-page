type Produto = {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  imagemUrl?: string;
  categoriaId: string;
  categoria: {
    id: string;
    nome: string;
  };
};

export default Produto;
