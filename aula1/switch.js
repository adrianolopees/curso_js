function getDayWeekText(diaSemana) {
  let textoDiaSemana;

  switch (diaSemana) {
    case 0:
      textoDiaSemana = "Domingo";
      return textoDiaSemana;
    case 1:
      textoDiaSemana = "Segunda";
      return textoDiaSemana;
    case 2:
      textoDiaSemana = "Domingo";
      return textoDiaSemana;
    case 3:
      textoDiaSemana = "Domingo";
      return textoDiaSemana;
    case 4:
      textoDiaSemana = "Domingo";
      return textoDiaSemana;
    case 5:
      textoDiaSemana = "Domingo";
      return textoDiaSemana;
    case 6:
      textoDiaSemana = "Domingo";
      return textoDiaSemana;
    default:
      textoDiaSemana = "errado";
  }
}
const data = new Date();
const diaSemana = data.getDay();
const textoDiaSemana = getDayWeekText(diaSemana);

console.log(diaSemana, textoDiaSemana);



/* if (diaSemana === 0) {
  textoDiaSemana = "Domingo";
} else if (diaSemana === 1) {
  textoDiaSemana = "Segunda";
} else if (diaSemana === 2) {
  textoDiaSemana = "Terça";
} else if (diaSemana === 3) {
  textoDiaSemana = "Quarta";
} else if (diaSemana === 4) {
  textoDiaSemana = "Quinta";
} else if (diaSemana === 5) {
  textoDiaSemana = "Sexta";
} else if (diaSemana === 6) {
  textoDiaSemana = "Sábado";
  console.log(diaSemana, textoDiaSemana);
} */
