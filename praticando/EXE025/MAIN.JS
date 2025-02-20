
async function myPromise () {
  const promesa = await fetch('https://jsonplaceholder.org/users')
  const resposta = await promesa.json()
  console.log(resposta)
}

myPromise()