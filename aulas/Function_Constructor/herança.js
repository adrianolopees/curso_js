function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

// Camiseta -> Tamanho
function Camiseta(nome, preco, tamanho) {
  Produto.call(this, nome, preco);
  this.tamanho = tamanho;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

// reescrevendo o método aumento 
Camiseta.prototype.desconto = function (percentual) {
  this.preco = this.preco - (this.preco * percentual) / 100;
};

// Meia -> Cor
function Meia(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}
Meia.prototype = Object.create(Produto.prototype);
Meia.prototype.constructor = Meia;

function Bermuda(nome, preco, material) {
  Produto.call(this, nome, preco);

  Object.defineProperty(this, "material", {
    enumerable: true,
    configurable: false,

    get: function () {
      return material;
    },
    set: function (valor) {
      if (typeof valor !== "string") return;
      material = valor;
    },
  });
}
Bermuda.prototype = Object.create(Produto.prototype);
Bermuda.prototype.constructor = Bermuda;

const produto = new Produto("GEN", 10);
const camiseta = new Camiseta("Regata", 29.9, "M");
const meia = new Meia("Soquete", 54.9, "Branca");
const bermuda = new Bermuda("Cargo", 199.9, "Jeans");
bermuda.material = 10
console.log(camiseta, meia, bermuda, produto);
