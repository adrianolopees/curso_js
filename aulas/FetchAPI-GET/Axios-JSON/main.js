 fetch("pessoas.json")
  .then((resposta) => resposta.json())
  .then((json) => usuariosNaPagina(json)); 

/* axios("pessoas.json")
 .then((resposta) => usuariosNaPagina(resposta.data)); */

function usuariosNaPagina(json) {
  const tabela = document.createElement("table");

  for (let pessoa of json) {
    const tr = document.createElement("tr");

    let td = document.createElement("td");
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = pessoa.idade;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = pessoa.salario;
    tr.appendChild(td);

    tabela.appendChild(tr);
  }

  const resultado = document.querySelector(".resultado");
  resultado.appendChild(tabela);
}

usuariosNaPagina();
