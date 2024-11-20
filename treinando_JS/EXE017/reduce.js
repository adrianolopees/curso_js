const numeros = [10, 20, 30, 40, 50];

const somandoNumeros = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log(somandoNumeros)