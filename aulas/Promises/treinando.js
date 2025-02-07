function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaUmPouco(msg, tempo) {
  return new Promise ((resolve, reject)=> {
    if(!isNaN(msg)) reject( 'ERRO ')
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  })

}
esperaUmPouco('Carregando BD', rand (1, 3))
  .then((resolve) => {
    console.log(resolve)
    return esperaUmPouco('buscando mais', rand (1, 3))
  })
  .then((resolve) => {
    console.log(resolve)
    return esperaUmPouco('ta quase lá', rand (1, 3))
  })
  .then((resolve)=> {
    console.log(resolve)
    return esperaUmPouco(1223 , rand(1,3))
  })
  .catch((e) => {
    console.log('DEU RUIM')
  })
