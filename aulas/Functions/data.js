/* const data = new Date( '2024-10-22 10:33:58.100');//1729604177157 = milésimos de segundo
console.log('Dia', data.getDate()) 
console.log('Mês', data.getMonth() + 1)//Mês começa do zero
console.log('Ano', data.getFullYear()) 
console.log('Hora', data.getHours()) 
console.log('Min', data.getMinutes()) 
console.log('Seg', data.getSeconds()) 
console.log('Ms', data.getMilliseconds()) 
console.log('Dia semana', data.getDay()) //0 - Domingo
console.log(data.toString())
//console.log(Date.now()) */

function zeroAEsquerda (num){
  return num >= 10 ? num : `0${num}`
}
function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const sec = zeroAEsquerda(data.getSeconds());
  return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
