const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobro = numeros.map(valor => valor *2)
//console.log(dobro)

const nomes = pessoas.map(obj => obj.nome)
//console.log(nomes)

const idades = pessoas.map(obj => ({idade: obj.idade}))
console.log(idades)

const ids = pessoas.map((obj,indice) => {
  const newObj = {...obj}
  newObj.id = indice
  return newObj
})
console.log(ids)