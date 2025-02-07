(function (idade, peso, altura) {
  const sobrenome = "Lopes";
  function criaNome(nome) {
    return `Oi ${nome} ${sobrenome}, tudo bem com você?`;
  }

  function falaNome(nome) {
    console.log(criaNome("Adriano"));
  }

  falaNome();
  console.log(idade, peso, altura);
})(29, 86, 1.75);
