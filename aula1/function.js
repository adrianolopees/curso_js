function soma(x = 1, y = 1){
  const resultado = x + y
  return resultado
}
console.log(soma())


const raiz1 = function (n){ // forma antiga de se fazer 
  return n ** 0.5
}
console.log(raiz1(9)) 

const raiz2 = n => n ** 0.5 // forma simplificada arrow function
console.log(raiz2(9))