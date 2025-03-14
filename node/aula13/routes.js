const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const contatoController = require("./src/controllers/contatoController");

function meuMiddeleware(req, res, next) {
  req.session = { nome: "Adriano", sobrenome: "Lopes" };
  console.log();
  console.log("Passei no meu middleleware.");
  console.log();
  next();
}
// Rotas da home
route.get(
  "/",
  meuMiddeleware,
  homeController.paginaInicial,
  function (req, res, next) {
    console.log();
    console.log("Ainda estou aqui..");
    console.log(
      `'middelware anonimo' Olha onde eu tneho acesso ao req.session.sobrenome ${req.session.sobrenome}`
    );
  }
);
route.post("/", homeController.trataPost);

// Rotas de contato
route.get("/contato", contatoController.paginaInicial);

module.exports = route;
