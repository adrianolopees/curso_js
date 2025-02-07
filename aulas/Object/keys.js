const produto = { nome: "Caneca", preco: 2.9 };
const outraCoisa = {...produto}

outraCoisa.preco = 50.5
console.log(Object.keys(produto)) // devolve a chave do produto

Object.entries() // valores e chaves em arrays 
//(podendo fazer desestruturação)
Object.values()// valores