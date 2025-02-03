const produto = { nome: "Caneca", preco: 2.9 };
const outraCoisa = {...produto}//é possivel criar metodos e outras chaves
//espalha os valores do objeto criando uma cópia
outraCoisa.preco = 50.5
console.log(produto)
console.log(outraCoisa)