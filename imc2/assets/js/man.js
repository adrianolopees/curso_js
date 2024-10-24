const formulario = document.querySelector("#form");
//Selecionei o formulário da página.

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  //Cancela o envio padrão do formulario pelo submit.
  const inputPeso = formulario.querySelector("#peso");
  const inputAltura = formulario.querySelector("#altura");
  //Selecionei os input's

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);
  //Peguei os valores e transformei em number's

 
});

function criaP() {
  const p = document.createElement("p");
  p.classList.add("resultado-valido");
  p.innerHTML = "Porra";
}
function setResultado(msg) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";
  resultado.appendChild(p);
}
