const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(` 
    <form action="/" method="POST">
    nome: <input type="text" name="nome"></input>
    <button> Enviar formulario</button>
    </form>
    `);
});

app.post("/", (req, res) => {
  res.send("Recebi o form");
  console.log("Teste atualização");
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
