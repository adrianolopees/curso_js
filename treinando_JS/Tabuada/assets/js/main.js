const botao = document.querySelector("#calcular");

botao.addEventListener("click", () => {
  const num1 = Number(document.querySelector("#num1").value);

  if (!num1) return; // verificação pra nao mandar vazio

  calcularTabuada(num1);
  criaBotao()
});

const calcularTabuada = (num) => {
  const resultado = document.querySelector("#resultado");
  let tabuada = "";
  for (let i = 1; i <= 10; i++) {
    tabuada += `${num} x ${i} = ${num * i}<br>`;
  }

  resultado.innerHTML = tabuada;
};

function criaBotao(){
  const novoBotaoLimpar = document.createElement("button");
  novoBotaoLimpar.textContent = "Limpar";
  novoBotaoLimpar.id = "limpar";
  botao.parentNode.replaceChild(novoBotaoLimpar, botao);
  trocaBotao(novoBotaoLimpar)
}

function trocaBotao(novoBotao){
  novoBotao.addEventListener("click", () => {
    document.querySelector("#resultado").innerHTML = "";
    document.querySelector("#num1").value = "";
    novoBotao.parentNode.replaceChild(botao, novoBotao);
  });
}
