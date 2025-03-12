exports.paginaInicial = (req, res) => {
  res.send(` 
    <form action="/" method="POST">
    nome do clientae: <input type="text" name="nome">
    <button>Olá mundo </button>
    </form>
    `);
};

exports.trataPost = (req, res) => {
  res.send("Sou sua nova rota de post");
};
