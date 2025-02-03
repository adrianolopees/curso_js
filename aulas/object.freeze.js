function Pessoa (nome, sobrenome){
  this.nome = nome
  this.sobrenome = sobrenome
  Object.freeze(this) // travando o this aqui.
}

const p1 = new Pessoa('Adriano','Lopes')
p1.nome = 'João' // não consigo mais alterar o object. Nada vai alterar ele aqui.
console.log(p1)