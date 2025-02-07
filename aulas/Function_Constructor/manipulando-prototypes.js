function Produto(nome, preco){
  this.nome = nome,
  this.preco = preco
}

Produto.prototype.desconto = function (percentual){
  this.preco -= (this.preco * percentual) / 100
}

Produto.prototype.aumento = function (percentual) {
  this.preco += (this.preco * percentual) / 100
}

const sapato = new Produto('Bota', 319.9)
sapato.desconto(10)
sapato.aumento(10)

console.log(sapato.preco.toFixed(2))

const chinelo = {
  nome: 'Rider',
  preco: 100
}

Object.setPrototypeOf(chinelo, Produto.prototype)
chinelo.desconto(10)

console.log(chinelo.preco.toFixed(2))

const meia = Object.create(Produto.prototype, {
  tamanho: {
    writable:true,
    value: 'M',
    configurable:true,
    enumerable:true
  },
  preco: {
    writable:true,
    value:29.9,
    enumerable:true,
    configurable:true
  }
})
meia.desconto(50)
console.log(meia)