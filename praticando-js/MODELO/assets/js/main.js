



  const nomeInput = document.querySelector("#inputNome");
  const listaNomes = document.querySelectorAll("#lista li");

  nomeInput.addEventListener("input", () => {
    const textoDigitado = nomeInput.value;

    listaNomes.forEach(nome => {
      const nomeTexto = nome.textContent;
      if (nomeTexto.includes(textoDigitado)) {
        const parteNegrito = nomeTexto.replace(textoDigitado, textoDigitado.bold());
        nome.innerHTML = parteNegrito;
      } else {
        nome.innerHTML = nomeTexto; // Remove o negrito se não houver correspondência
      }
    });
  });
