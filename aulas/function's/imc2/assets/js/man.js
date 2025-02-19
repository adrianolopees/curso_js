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

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc)
  const msg = `Seu IMC é ${imc} (${nivelImc})`

  setResultado(msg, true)
});

function getNivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade G1",
    "Obesidade G2",
    "Obesidade Mórbida",
  ];

  if (imc >= 39.9) return nivel[5]
  if (imc >= 34.9) return nivel[4]
  if (imc >= 29.9) return nivel[3]
  if (imc >= 24.9) return nivel[2]
  if (imc >= 18.5) return nivel[1]
  if (imc < 18.5) return nivel[0]
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
  //fazer o calculo do imc                                                                                                                                                                              
}

function criaP() {
  const p = document.createElement("p");
  return p;
  //Criada apenas para criar um elemento 'p'
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = ""; //zerando o HTML para que não some + valores
  const p = criaP(); //jogando pra dentro do p a função criar paragrafo

  if (isValid){
    p.classList.add('value_valido')
  }else {
    p.classList.add('value_invalido')
  }
  p.innerHTML = msg; //chamando o parametro MSG pra dentro do p escvrevendo na tela
  resultado.appendChild(p); // jogando tudo pra dentro do resultado
}
