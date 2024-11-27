const btnCalcular = document.querySelector("#calcular");

btnCalcular.addEventListener("click", () => {
  const numInput = Number(document.querySelector("#num").value);
  if(!numInput) return;
  
  calcularTabuada(numInput);

  exibirResultado(acumuladorTabuada);
});


let acumuladorTabuada = "";

function calcularTabuada(num) {
  acumuladorTabuada = "";
  for (i = 1; i <= 10; i++) {
    acumuladorTabuada += `${num} x ${i} = ${num * i}<br>`;
  }
}

function exibirResultado(tabuada) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = tabuada;
}
