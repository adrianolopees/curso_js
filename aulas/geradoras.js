function* geradora1() {
  yield "valor 1";
  yield "valor 2";
  yield "valor 3";
}

const g1 = geradora1();
console.log(g1.next().value); // valor: valor1 done: false
console.log(g1.next().value); // valor: valor2 done: false
console.log(g1.next().value); // valor: valor3 done: false
console.log(g1.next().value); //valor: undefined done: true

function* geradora2() {
  yield "0";
  yield "1"; 
  yield "2";
}

function* geradora3() {
  yield* geradora2(); // delegando para outra função geradora fazer a primeira contagem
  yield "3";
  yield "4";
  yield "5";
}

const g3 = geradora3();// chama a função geradora2 que conta té 2 depois continua contando até o 5
for (let valor of g3) {
  // usando o of pra pegar ja o valor ai nao precisa mais chamar usando o .value nem o .next()
  console.log(valor); // 0 , 1, 2, 3, 4, 5
}
