// Referências (mutavel)- array, object, function

/* let a = [1, 2, 3];
let b = a;
console.log(a, b);

a.push(4)
console.log(a,b)

b.pop()
console.log(a,b)
 */

const a = {
  nome: 'Adriano',
  sobrenome:'Lopes'
}
const b = {...a}
a.nome = 'João'
console.log(a,b)