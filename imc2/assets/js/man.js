const formulario = document.querySelector("#form");
//Selecionei o formulário da página.

form.addEventListener("submit", function (event) {
  event.preventDefault();
  //Parei o envio padrão pelo submit.

  const inputPeso = formulario.querySelector("#peso");
  const inputAltura = formulario.querySelector("#altura");
  //Selecionei os input's

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);
  //Peguei os valores e transformei em number's
});
