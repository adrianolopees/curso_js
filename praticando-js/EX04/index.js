const nome = document.getElementById('nome')
const sobrenome = document.getElementById('sobrenome')
const btn = document.getElementById('btn-clicou')

btn.addEventListener('click', () => {
  alert(` Saudações ${nome.value} ${sobrenome.value}`)
})