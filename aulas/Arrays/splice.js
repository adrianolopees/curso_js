const nomes = ["Maria", "João", "Pedro", "Robson", "José"];
const removidos = nomes.splice(-3, Number.MAX_VALUE);
// O MESMO QUE UTILIZAR O POP
console.log(removidos,nomes)