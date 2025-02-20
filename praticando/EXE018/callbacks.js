function executarCallback(num, callback){
  return callback(num)
}

function dobrarNum(num){
 return num * 2
}

function verificarParidade(num){
  return num % 2 === 0
}

console.log(executarCallback(5, dobrarNum))
console.log(executarCallback(4,verificarParidade))