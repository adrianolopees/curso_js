const listaNomes = document.querySelectorAll("#lista li ");
const inputNome = document.querySelector("#inputNome");

inputNome.addEventListener("input", () => {
  const txtDigitado = inputNome.value.toLowerCase();

  listaNomes.forEach((nome) => {
    const nomeTexto = nome.textContent.toLowerCase();
    if (nomeTexto.includes(txtDigitado)) {
      const txtNegrito = nome.textContent.replace(new RegExp(txtDigitado, 'gi'), (Math) => `<strong>${Math}</strong>`)
      nome.innerHTML = txtNegrito;
    } else {
      nome.innerHTML = nome.textContent
    }
  });
});
