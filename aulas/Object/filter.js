const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const maior = numeros.filter(valor =>  valor > 10);
console.log(maior);


const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const fiveLetras = pessoas.filter(obj => obj.nome.length >= 5 )
console.log(fiveLetras)

const maior50 = pessoas.filter(obj => obj.idade > 50)
console.log(maior50)

const terminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
console.log(terminaComA)