export function criaProduto(nome, preco) {
  return { nome, preco };
}

export function mostrarProduto(produto) {
  console.log(`Produto: ${produto.nome}, preço: R$${produto.preco}`);
}
