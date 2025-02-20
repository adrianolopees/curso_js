function manipularString(str, callback) {
  return callback(str);
}

function paraMaiusculas(str){
  return str.toUpperCase()
}

function inverterString (str){
  return str.split('').reverse().join('')
}

function contarCaracteres(str){
  return str.length
}

console.log(manipularString('hello', paraMaiusculas))
console.log(manipularString('hello', inverterString))
console.log(manipularString('hello', contarCaracteres))