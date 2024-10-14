/* function criaPessoa(nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa("Adriano", "Lopes", " 25");
const pessoa2 = criaPessoa("Jean", "pedro", " 21");
const pessoa3 = criaPessoa("pedro", "Lopes", " 13");
const pessoa4 = criaPessoa("gustavo", "Lopes", " 24");
const pessoa5 = criaPessoa("joao", "Lopes", " 10");
const pessoa6 = criaPessoa("Leandro", "Lopes", " 5");
console.log(pessoa1, pessoa2, pessoa3, pessoa4, pessoa5, pessoa6);
 */

const pessoa1 = {
  nome: 'Adriano',
  sobrenome:'Lopes',
  idade:25,

  fala() {
    console.log('ola mundo')
  }
}
pessoa1.fala()