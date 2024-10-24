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

  if (!peso) {
    setResultado("Peso inválido!", false);
    return;
    //! Inverte o que for preenchido , no caso se NÃO for um Número!
  }
  if (!altura) {
    setResultado("Altura inválida!", false);
    return;
    // Dentro ainda passamos outro parametro para poder criar uma classe para quando for inválido ou válido.
  }

  console.log('cheguei aqui')
});

function criaP() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";
  const p = criaP();
  p.innerHTML = msg;
  resultado.appendChild(p)
}
