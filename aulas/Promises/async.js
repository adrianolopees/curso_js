function rand(min = 0, max = 3) {
  min *= 1000; //Transformando de milesegundo para segundos.
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaCarregar(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (!isNaN(msg)) reject("ERRO");

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

async function executa() {
  try {
    const fase1 = await esperaCarregar("fase 1", rand());
    console.log(fase1);

    const fase2 = await esperaCarregar('fase 2', rand());
    console.log(fase2);

    const fase3 = await esperaCarregar("fase 3", rand());
    console.log(fase3);
    
  } catch (e) {
    console.log(e);
  }
}
executa();
