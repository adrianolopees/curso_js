function calcular(event) {
  event.preventDefault();

  const nota1 = Number(document.getElementById("num1").value);
  const nota2 = Number(document.getElementById("num2").value);
  const nota3 = Number(document.getElementById("num3").value);

  const resultado = document.getElementById("resultado");
  const advertencia = document.querySelector('.advertencia')

  resultado.innerHTML = "";
  advertencia.innerHTML = "";

  if (nota1 === "" || nota2 === "" || nota3 === ""){
    advertencia.innerHTML = 'Preencha os campos.'
    return;
  } else if(nota1 === 0 && nota2 === 0 && nota3 ===0){
    advertencia.innerHTML = ' Não da pra calcular médias com o numero 0'
  }

  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    advertencia.innerHTML = "Preencha os campos com números.";
    return;
  }
  let media = (nota1 + nota2 + nota3) / 3;

  if (media >= 7) {
    resultado.innerHTML = `Sua média é ${media.toFixed(1)} <br> Você está Aprovado`;
    document.getElementById("resultado").className = "aprovado";
  } else if (media > 0){
    resultado.innerHTML = `Sua média é ${media.toFixed(1)} <br> Você está Reprovado`;

    document.getElementById("resultado").classList = "reprovado";
  }
}

function reset() {
  resultado.innerHTML = "";
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.value = "";
  });
  document.getElementById("resultado").className = "";

 const advertencia = document.querySelectorAll('.advertencia')
  advertencia.innerHTML = ""
}
