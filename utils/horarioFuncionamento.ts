function horarioFuncionamento() {
  // pega a hora
  const horaAtual = new Date().getHours();

  //   se a hora for maior ou igual a 18 e menor ou igual a 23, retorna true
  if (horaAtual >= 18 && horaAtual <= 23) {
    return true;
  }

  return false;
}

export default horarioFuncionamento;
