fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json()) // Converte a resposta para JSON
  .then(data => {
    console.log(data);  // Exibe os dados no console
  })
  .catch(error => {
    console.error("Erro na requisição!", error);
  });
