function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // Mostra ou não a chave do objeto
    configurable: true, //poder ou não configurar a chave (deletando por exemplo)
    get: () => estoquePrivado, // pegar o valor do momento e exibir.
    set: (valor) => {
      if (isNaN(valor)) {
        throw new TypeError("Deu erro");
      }
      estoquePrivado = valor;
    },
  });
}

const p1 = new Produto("Bota", 299.99, 14);
p1.estoque = 5;
console.log(p1.estoque);
