export function validandoNome(nome) {
  if (nome.length < 3) {
    throw new Error("Nome do produto deve ter pelo menos 3 caracteres");
  }
  return true;
}


export function validandoPreco(preco) {
  if (typeof preco !== 'number' || preco <= 0) {
    throw new Error("Preço do produto deve ser um número positivo");
  }
  return true;
}