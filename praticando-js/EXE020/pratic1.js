const calcularMedia = (...notas) => {
  let soma = 0;
  for (let nota of notas) {
    soma += nota;
  }
  const media = soma / notas.length;
  return media.toFixed(2)
};


const media1 = calcularMedia(5.5, 9, 10)
const media2 = calcularMedia(8, 9, 10)
console.log('Média 1', media1);
console.log('Média 2', media2);

