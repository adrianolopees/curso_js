const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Página inicial");
});

app.post("/", (req, res) => {
  res.send("Dados recebidos");
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
