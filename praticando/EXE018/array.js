const pessoas = [
  { nome: "Adriano", idade: 29, salario: 4500 },
  { nome: "João", idade: 62, salario: 2500 },
  { nome: "Sanmara", idade: 34, salario: 3500 },
  { nome: "Ana", idade: 59, salario: 1000 },
  { nome: "Sophia", idade: 17, salario: 1000 },
];

const nomes = pessoas.map((pessoa) => pessoa.nome); //peguei só os nomes no objeto
const idadeAdequada = pessoas.filter((idade) => idade.idade > 25);
//filtrei pela idade e criei um outro array que devolvel os true para condição
const somaSalarios = pessoas.reduce((acumulador, salarios) => acumulador + salarios.salario,
0);//percorreu o array de objetos somando os salarios.

console.log (
  `Pessoas cadastradas:\n${nomes}.\n
  Com idade adequada:\n${JSON.stringify(idadeAdequada, null, 2)}.\n
  Soma salários;\n${somaSalarios}`
);
//exibi no console usando tenplate strings, e como os objetos nao sao interpretados como strings , usei o JSON.stringify para fazer essa modificação passando a variavel mais formatação.