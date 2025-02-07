const pessoas = [
  {id:3, nome: 'Adriano'},
  {id:2, nome: 'Sanmara'},
  {id:1, nome: 'Sophia'},
];

//const novasPessoas = {}
//for (const pessoa of pessoas){
//  const {id} = pessoa
// novasPessoas[id] = {...pessoa}
//}

const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const {id} = pessoa;
  novasPessoas.set(id, {...pessoa});
}
console.log(novasPessoas.get(1))

/*Passo a Passo no Loop
Vamos ver como isso funciona no for...of loop:

Para pessoa = { id: 3, nome: 'Adriano' }, const { id } = pessoa faz id = 3.

novasPessoas.set(id, {...pessoa}) faz novasPessoas.set(3, { id: 3, nome: 'Adriano' }).

Agora, novasPessoas tem um item onde a chave é 3 e o valor é { id: 3, nome: 'Adriano' }.

Isso se repete para cada objeto no array pessoas. */