function criaNumeroAleatorio(min, max) {
  min *= 1000; //Transformando de milesegundo para segundos.
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaCarregar(msg, tempo) {
  return new Promise((resolve, reject) => {
   if(!isNaN(msg)) reject('ERRO')

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaCarregar("Conexão com o Banco de dados", criaNumeroAleatorio(1, 3))
  .then(resposta => {
    console.log(resposta);
    return esperaCarregar("Buscando dados da Base", criaNumeroAleatorio(1, 3))
  })
  .then(resposta => {
    console.log(resposta);
    return esperaCarregar(222, criaNumeroAleatorio(1, 3)) // restando o reject , passando um num ao inves de string
  })
  .then(()=> {
    console.log("Exibe os dados na tela.");
  })
  .catch(e => {
    console.log('deu erro valor não é um string', e)
  })

  const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve("Promessa resolvida com sucesso!");
    } else {
      reject("Erro na promessa!");
    }
  });
  
  myPromise
    .then((result) => {
      console.log(result); // "Promessa resolvida com sucesso!"
    })
    .catch((error) => {
      console.error(error); // "Erro na promessa!"
    });
  