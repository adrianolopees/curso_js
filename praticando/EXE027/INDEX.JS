function geraNum(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function recebeNumAleatorios(n) {
  let arrayNuGerados = [];

  if (n > 100) {
    return console.log("ERROR: não há números unicos entre 1 e 100");
  }
  arrayNuGerados = [];

  for (let i = 0; i < n; i++) {
    let numero = geraNum();

    if (!arrayNuGerados.includes(numero)) {
      arrayNuGerados.push(numero);
    } else {
      i--;
    }
  }
  return arrayNuGerados;
}

console.log(recebeNumAleatorios(101));
