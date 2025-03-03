import { criaProduto, mostrarProduto } from "./product.js";
import { validandoNome, validandoPreco } from "./validator.js";

function main() {
  const nome = "Produto A";
  const preco = 25;

  try {
    if (validandoNome(nome) && validandoPreco(preco)) {
      const produto = criaProduto(nome, preco);
      mostrarProduto(produto);
    }
  } catch (e) {
    console.log("Erro:", e.menssage);
  }
}

main();
