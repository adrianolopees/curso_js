const pessoa1 = new Object();
pessoa1.nome = "Adriano";
pessoa1.sobrenome = "Lopes";
pessoa1.idade = 30;

pessoa1.getDataNacismento = function () {
  const data = new Date();
  return data.getFullYear() - this.idade;
};

console.log(pessoa1.getDataNacismento());
