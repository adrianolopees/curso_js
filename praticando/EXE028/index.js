function geraNumeroAleatorio(min = 1, max = 50) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function geraArrayComNumUnicos(num) {
  let arrayDeNumeros = [];

  for (let i = 0; i < num; i++) {
    let numero = geraNumeroAleatorio();

    if (!arrayDeNumeros.includes(numero)) {
      arrayDeNumeros.push(numero);
    } else {
      i--;
    }
  }

  return arrayDeNumeros;
}

console.log(geraArrayComNumUnicos(5));
