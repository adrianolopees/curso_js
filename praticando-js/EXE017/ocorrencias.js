const frutas = ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'maçã'];

// Usando reduce para contar a frequência de cada fruta
const qtsVezes = frutas.reduce((acumulador, fruta) => {
  if (acumulador[fruta]) {
    acumulador[fruta]++;
  } else {
    acumulador[fruta] = 1;
  }
  return acumulador;
}, {});

console.log(qtsVezes); 
// Resultado esperado: { maçã: 3, banana: 2, laranja: 1 }
