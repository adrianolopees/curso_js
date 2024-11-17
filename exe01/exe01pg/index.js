
//Escreva uma função que recebe 2 numeros
//e retorne o maior deles

function max1(x, y) {
  if (x > y) return x;
  return y;
} 

console.log(max1(5, 30))


function max2(x , y){
  return x > y ? x : y;
}
console.log(max2(5, 6))



const max3 = (x , y) => x > y ? x : y ;

console.log(max3(5, 20))