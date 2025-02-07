// Contnue 

const numeros = [1,2,3,4,5,6,7,8,9]

for (let valor of numeros){

  if (valor === 2){
    console.log('pulei o numero 2')
    continue; // pula ou deixa e contar com o valor que voce deseja
  } 
  
  console.log(valor)
  if(valor === 6){
    console.log('6 encontrado')
    break // poupar a execução caso ache o q e preciso
  }
}