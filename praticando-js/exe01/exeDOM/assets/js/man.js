const elementos = [
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "footer", texto: "Frase 3" },
  { tag: "section", texto: "Frase 4" },
];

const container = document.querySelector(".container");
const div = document.createElement("div");

for (i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);
  //tagCriada.innerText = texto
  let textoCriado = document.createTextNode(texto);//faz exatamente a mesma coisa.
  div.appendChild(tagCriada);
  tagCriada.appendChild(textoCriado)
}

container.appendChild(div);
