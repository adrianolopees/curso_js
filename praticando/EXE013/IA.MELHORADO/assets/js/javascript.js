function calcular(event) {
  event.preventDefault();

  const nota1 = document.getElementById("num1").value.trim();
  const nota2 = document.getElementById("num2").value.trim();
  const nota3 = document.getElementById("num3").value.trim();
  const advertencia = document.getElementById("advertencia");
  const resultado = document.getElementById("resultado");

  // Limpa mensagens anteriores
  advertencia.innerHTML = "";
  resultado.innerHTML = "";

  // Verifica se os inputs estão vazios ou contêm strings
  if (nota1 === "" || nota2 === "" || nota3 === "") {
    advertencia.innerHTML = "Preencha todos os campos.";
    return;
  }

  const nota1Num = Number(nota1);
  const nota2Num = Number(nota2);
  const nota3Num = Number(nota3);

  if (isNaN(nota1Num) || isNaN(nota2Num) || isNaN(nota3Num)) {
    advertencia.innerHTML = "Preencha os campos com números válidos.";
    return;
  }

  if (nota1Num === 0 && nota2Num === 0 && nota3Num === 0) {
    advertencia.innerHTML =
      "Preencha os campos com números diferentes de zero.";
    return;
  }

  let media = (nota1Num + nota2Num + nota3Num) / 3;

  if (media >= 7) {
    resultado.innerHTML = `Sua média é ${media.toFixed(1)} <br> Você está Aprovado`;
    resultado.className = "aprovado";
  } else {
    resultado.innerHTML = `Sua média é ${media.toFixed(1)} <br> Você está Reprovado`;
    resultado.className = "reprovado";
  }
}

function reset() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  resultado.className = "";

  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.value = "";
  });

  const advertencia = document.getElementById("advertencia");
  advertencia.innerHTML = "";
}
