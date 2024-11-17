/* const imgAltura = 5
const imgLargura = 10 

function ePaisagem(){
  if(imgAltura > imgLargura){
    return false;
  }else {
    return true;
  }
}
console.log(ePaisagem()) */

/* function ePaisagem(largura, altura){
  return largura > altura ? true : false;
}
console.log(ePaisagem(1080 , 1920)) */

/* function ePaisagem(largura, altura){
  return largura > altura;
} */

const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(1080, 1920))