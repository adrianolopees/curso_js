

const form = document.querySelector('form')
form.querySelector('#btn-clicou').addEventListener('click', function(){
  const nome = form.querySelector('#nome').value
  const sobrenome = form.querySelector('#sobrenome').value
  const idade = form.querySelector('#idade').value
  alert(` Seu nome completo é ${nome + sobrenome} e você tem  ${idade} anos de idade.` )
}

)