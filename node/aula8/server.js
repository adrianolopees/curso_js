const express = require("express");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send(` <form action="/" method="POST">
  nome do clientae: <input type="text" name="nome">
  <button>Olá mundo </button>
  </form>`);
});

app.get("/testes/:idUsuarios?/:parametro?", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(req.params);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(`O que você me enviou foi : ${req.body.nome}`);
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
