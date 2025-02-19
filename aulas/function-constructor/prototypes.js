function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => 'DENTRO ' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){
  return 'FORA ' + this.nome + ' ' + this.sobrenome
}

const pessoa1 = new Pessoa("Adriano", "Lopes");
const pessoa2 = new Pessoa("Sanmara", "Silva");

console.dir(pessoa1);
console.dir(pessoa2);

const data = new Date();
console.dir(data);
