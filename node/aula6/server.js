const express = require("express");
const app = express();

//         criar   ler   atualizar apagar
// CRUD -> create, read, update,   delete
//         post    post  put       delete
// http://meusite.com/ <- GET -> Entregue a página
// http://meusite.com/sobre <- GET -> Entregue a página / sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

app.get("/", (req, res) => {
  res.send(` 
    <form action="/" method="POST">
    nome: <input type="text" name="nome"></input>
    <button> Enviar</button>
    </form>
    `);
});
app.post("/", (req, res) => {
  res.send('Recebi o form');
});

app.get("/contatos", (req, res) => {
  res.send("Obrigao por entrar em contato");
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
