function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaUmPouco(msg, tempo) {
  return new Promise ((resolve, reject)=> {
    if(!isNaN(msg)) {
      reject( 'ERRO ')
    return
   }
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  })
}

const promises = [
  //'Primeiro valor',
  esperaUmPouco('Promessa 1', 2000),
  esperaUmPouco('Promessa 2', 3000),
  esperaUmPouco('Promessa 3', 1000),
  //esperaUmPouco(1234, 1000),
 // 'Ultimo valor ja resolvido.'
];

/* Promise.all(promises)
  .then(valor => {
    console.log(valor)
  })
  .catch(e => {
    console.log(e)
  }) */

Promise.race(promises)
  .then(valor => {
    console.log(valor)
  })
  .catch(e => {
    console.log(e)
  })