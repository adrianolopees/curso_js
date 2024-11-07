const form = document.querySelector("form");
form.querySelector("#btn-clicou").addEventListener("click", function () {
  const nome = form.querySelector("#nome").value;

  alert( "o comprimento do seu nome inteiro é " + nome.length);
});
