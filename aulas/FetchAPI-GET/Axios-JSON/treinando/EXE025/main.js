const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((resposta) => resposta.json())
    .then((json) => exibirNaTela(json));
});

function exibirNaTela(json) {
  const ul = document.createElement("ul");

  for (let user of json) {
    const btnLi = document.createElement("button");
    btnLi.innerText = "Ver mais";

    const p = document.createElement("p");
    p.classList = 'display'

    let li = document.createElement("li");

    p.textContent = user.body;

    li.textContent = user.title;

    li.appendChild(p);
    li.appendChild(btnLi);

    ul.appendChild(li);

    btnLi.addEventListener("click", () => {
      p.classList.toggle('display')
      if(p.classList.contains('display')) {
        btnLi.innerText = 'Ver mais'
      } else {
        btnLi.innerText = 'Esconder'
      }
    });
  }

  const resultado = document.querySelector(".resultado");
  resultado.textContent = ''
  resultado.appendChild(ul);
}
