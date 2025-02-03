class Pessoa {
  constructor (nome, sobrenome){
    this.nome  = nome;
    this.sobrenome = sobrenome
  }

  falar() {
    console.log(`${this.nome + ' ' + this.sobrenome} está falando! `)
  }
  comer() {
    console.log(`${this.nome + ' ' + this.sobrenome} está comendo! `)
  }
  beber() {
    console.log(`${this.nome + ' ' + this.sobrenome} está bebendo! `)
  }
}

const p1 =  new Pessoa('Adriano', 'Lopes')
const p2 =  new Pessoa('Sanmara', 'Lopes')
console.log(p1)