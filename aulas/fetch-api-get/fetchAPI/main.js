document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  try {
    const href = el.getAttribute("href");
    const response = await fetch(href);

    if (!response.ok) throw new Error("ERRO");

    const html = await response.text();
    carregaResultado(html);
  } catch (e) {
     console.log(e);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}


fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())  // Transforma a resposta em JSON
  .then(data => console.log(data))  // Exibe os dados no console
  .catch(error => console.error('Erro:', error));

  async function buscarDados() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Erro:', error);
    }
  }
  
  buscarDados();
  