function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instanci de Date.");
  }
  if (!data) {
    data = new Date();
  }
  return data.toLocaleTimeString("pr-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}
try {
  const date = new Date("01-01-1970  10:53:12");
const hora = retornaHora();
console.log(hora);
} catch(e){
  //tratar erro
} finally {
  console.log('tenha um bom dia')
}
