import GeraCPF from './modules/GeraCPF'

import './assets/css/style.css';

function gerar(){
  const resultado = document.querySelector('.cpf-gerado')
  const btn = document.querySelector('.btn')
  btn.addEventListener('click', ()=>{
    const cpfNovo = new GeraCPF()
    resultado.innerHTML =  cpfNovo.geraNovoCpf()
  })
}
gerar()