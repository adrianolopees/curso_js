const paragrafos = document.querySelector('.paragrafos')
const ps = document.querySelectorAll('p')

const estilosBory = getComputedStyle(document.body);
const backgroundColorBory = estilosBory.backgroundColor;


for (let p of ps){
  p.style.backgroundColor = backgroundColorBory;
  p.style.color = 'white'
} 