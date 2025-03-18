const HomeModel = require("../models/HomeModel");
HomeModel.create({
  titulo: "Outra coisa",
  descricao: "Outra descrição",
})
  .then((dados) => console.log(dados))
  .catch((e) => console.log(e));

exports.paginaInicial = (req, res, next) => {
  res.render("index");
  next();
};

exports.trataPost = (req, res) => {
  res.send(req.body);
};
