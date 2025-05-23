/* 45 a 57 Number
65 a 90 letras maiusculas
97 a 122 letras minusculas */
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ",.;~^[]{}@!#$%&*+-/|";
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
  const senhaArray = [];
  qtd = Number(qtd);

  for (let i = 0; i < qtd; i++) {
    minusculas && senhaArray.push(geraMinuscula())
    maiusculas && senhaArray.push(geraMaiuscula())
    numeros && senhaArray.push(geraNumero())
    simbolos && senhaArray.push(geraSimbolo())
  }
  return senhaArray.join('').slice(0, qtd)
}

