function getTimeFromSecond(segundos) {
  let data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
}

const start = document.querySelector(".start");
const stop = document.querySelector(".stop")
const reset = document.querySelector(".reset");
const cronometro = document.querySelector(".timer");

let segundos = 0;
let timer;

function startTimer() {
  timer = setInterval(() => {
    segundos++;
    cronometro.innerHTML = getTimeFromSecond(segundos);
  }, 1000);
}

function salvarTempo(){
  localStorage.setItem('segundos',segundos);
}

function carregarTempo(){
  const tempoSalvo = localStorage.getItem('segundos');
  if(tempoSalvo){
    segundos = parseInt(tempoSalvo, 10);
    cronometro.innerHTML = getTimeFromSecond(segundos);
  }
}

document.addEventListener('click', (elemento) =>{
 const elementoClicado = elemento.target;
 
  if(elementoClicado.classList.contains('start')){
    cronometro.classList.remove('start-black','stop-red')
    startTimer()
    start.disabled = true; 
  }

  if(elementoClicado.classList.contains('stop')){
    setTimeout(()=> {
      clearInterval(timer)
      cronometro.classList.add('stop-red')
      start.disabled = false;
    })
  }

  if(elementoClicado.classList.contains('reset')){
    clearInterval(timer)
    cronometro.innerHTML = '00:00:00'
    segundos = 0
    cronometro.classList.remove('stop-red')
    start.disabled = false;
   
    
  }
})


