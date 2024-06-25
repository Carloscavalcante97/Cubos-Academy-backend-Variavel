function solucao(preco, valorDesconto) {
  let valorTotal = preco - ((valorDesconto / 100) * preco);
  return valorTotal;
}

module.exports = solucao;
