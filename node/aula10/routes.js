const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeColtroller");
const contatoController = require("./src/controllers/contatoController");

// Rotas da home
route.get("/", homeController.paginaInicial);
route.post("/", homeController.trataPost);

// Rotas de contato
route.get("/contatos", contatoController.paginaInicial);

module.exports = route;
