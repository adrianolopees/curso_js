exports.paginaInicial = (req, res, next) => {
  console.log("respondi o cliente");
  res.render("index");
  console.log(
    `'paginaInicial' Olha onde eu tneho acesso ao req.session.nome ${req.session.nome}`
  );
  next();
};

exports.trataPost = (req, res) => {
  res.send("Ei, sou sua nova rota de POST.");
};
