const falar = {
  falar() {
    console.log(`${this.nome + " " + this.sobrenome} esta falando`);
  },
};

const beber = {
  beber() {
    console.log(`${this.nome + " " + this.sobrenome} esta bebendo`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome + " " + this.sobrenome} esta comendo`);
  },
};

function criaPessoa(nome, sobrenome) {
  const pessoaPrototype = Object.assign({}, falar, beber, comer);
  //const pessoaPrototype = {...beber, ...comer,...falar}
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const p1 = criaPessoa("Adriano", "Henrique");
const p2 = criaPessoa("Sanmra", "Cristina");
console.log(p1, p2);
