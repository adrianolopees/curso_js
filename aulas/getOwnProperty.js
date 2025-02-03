const produto = { nome: "Caneca", preco: 2.9 };

console.log(Object.getOwnPropertyDescriptor(produto, 'nome')) 
//retorna o descritor daquela propriedade dentro do objeto
console.log(produto)
