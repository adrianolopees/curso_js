const produto = { nome: "Caneca", preco: 2.9 };
const outraCoisa = Object.assign({}, produto, {material: 'algodão'})
// copiar um objeto e também acrescentar outras chaves.


outraCoisa.preco = 50
outraCoisa.nome = 'Camiseta'

console.log(produto)
console.log(outraCoisa)