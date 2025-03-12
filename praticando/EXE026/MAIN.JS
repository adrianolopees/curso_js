async function carrega() {
  const contatos = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const contatosJson = await contatos.json();
  return console.log(contatosJson);
}

carrega();
