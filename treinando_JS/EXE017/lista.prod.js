const produtos = [
  { nome: 'Laptop', preco: 2000, estoque: 10 },
  { nome: 'Smartphone', preco: 1000, estoque: 5 },
  { nome: 'Tablet', preco: 500, estoque: 15 }
];

const valorTotalEstoque = produtos.map(produto => produto.preco * produto.estoque);
const filtrarEstoque = produtos.filter(numero => numero.estoque > 10)
const nomes = produtos.map(produto => produto.nome)
console.log(valorTotalEstoque, filtrarEstoque, nomes)
