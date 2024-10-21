const form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputPeso = event.target.querySelector("#peso");
  const inputAltura = event.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado("Peso inválido!", false);
    return;
  }
  if (!altura) {
    setResultado("Altura inválido!", false);
    return;
  }
  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc)
  
  const msg = `Seu IMC é ${imc} (${nivelImc}).`
  setResultado(msg, true);
});

function getNivelImc(imc) {
  const nivel = [
    "Intervalo normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade mórbida (Grau 3)",
  ];

  if (imc >= 39.9)  return nivel[4];//como é muito curto o código 
  if (imc >= 34.9)  return nivel[3];//ou bloco de execução,
  if (imc >= 29.9)  return nivel[2];//não é necessário as chaves
  if (imc >= 24.9)  return nivel[1];//só colocar na mesma linha 
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = "";

  const p = criaP();
  if (isValid){
    p.classList.add('paragrafo-resultado')
  } else {
    p.classList.add('bad')
  }
  p.innerHTML = msg;
  resultado.appendChild(p);
}
