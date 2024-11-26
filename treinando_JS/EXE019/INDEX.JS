// arguments que sustenta todos os argumentos enviados.
function funcao(a, b, c, d, e, f) {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(total);
  console.log(a, b, c);
  console.log(arguments);
  console.log(d, e, f); 
}
funcao(1, 2, 5);

function soma(a, b = 2, c = 4) {
    console.log(a + b + c); 
}
soma(2, undefined, 20);

