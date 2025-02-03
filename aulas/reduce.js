const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 64 },
  { nome: "Wallace", idade: 35 },
];

const maisVelha = pessoas.reduce(function(acumulador,valor){
 if(acumulador.idade > valor.idade) return acumulador
  return valor
 })

console.log(maisVelha)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const soma = numeros.reduce( (acumulador, valor) => acumulador += valor)
console.log(soma)