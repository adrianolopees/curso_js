const nome =  'Adriano'

function falaNome(){ // ELA VAI BUSCAR NO ESCOPO LÉXICO A VARIÁVEL PROXIMA
  console.log(nome)
}

function chamaFalaNome(){
  const nome = 'João' // NAO INTERFERE NO SCOPO DA FUNÇÃO
  falaNome()
}

chamaFalaNome() // ELA SEMPRE VAI SE LEMBRAR DO CONTEXTO ONDE FOI CRIADA.