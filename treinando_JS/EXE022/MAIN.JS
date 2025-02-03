function criaPessoa (nome, sobrenome){
return {
  nome,
  sobrenome,
  get nomeCompleto(){
    return `${this.nome} é muito lindo e seu sobrenome é ${this.sobrenome}`
  }
}
}

const p1 = criaPessoa('Adriano', 'Lopes')
console.log(p1.nomeCompleto)