const alunos = ['Luiz','Maria','João']
let nome = 'Adriano'
let nom2 = 'Samy'

alunos.push('AddEnd') // add no final do array
alunos.unshift('AddFirst') // add no começo
alunos.unshift(nome) // passando uma variável
alunos.push(nom2) // passando uma variável

const removidoEnd = alunos.pop() // remove o ultimo
const removidoFirst = alunos.shift() // remove o ultimo

//delete alunos[0] - remover um item

//console.log(alunos[50]) - devolve undefined
console.log(alunos)
console.log(alunos.slice(0, 3))// cortando de 0 a 3 o array
console.log(alunos.slice(0, -1)) // pegando do final 

console.log(typeof alunos) // é considerado um objeto
console.log(alunos instanceof Array)// verificando mesmo se é um array

/* console.log(removidoEnd)*/
/* console.log(removidoFirst) */