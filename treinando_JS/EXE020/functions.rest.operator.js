/* function funcao({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}
funcao({ nome: "Adriano", sobrenome: "Henrique", idade: 29 }); */

/* function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === '+' ) acumulador += numero;
    if (operador === '-' ) acumulador -= numero;
    if (operador === '/' ) acumulador /= numero;
    if (operador === '*' ) acumulador *= numero;
  }
  console.log(acumulador);
}
conta('+', 1, 20, 30, 40, 50); */

// function expression
/* const conta = function(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === '+' ) acumulador += numero;
    if (operador === '-' ) acumulador -= numero;
    if (operador === '/' ) acumulador /= numero;
    if (operador === '*' ) acumulador *= numero;
  }
  console.log(acumulador);
};
conta('+', 0, 20, 30, 40, 50); */

//arrow function
const conta = (operador, acumulador, ...numeros) => {
  for (let numero of numeros) {
    if (operador === '+' ) acumulador += numero;
    if (operador === '-' ) acumulador -= numero;
    if (operador === '/' ) acumulador /= numero;
    if (operador === '*' ) acumulador *= numero;
  }
  console.log(acumulador);
};
conta('+', 0, 20, 30, 40, 50);


