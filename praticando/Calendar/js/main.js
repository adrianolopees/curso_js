
data1.addEventListener("change", () => {
  atualizarCalendar();
});
data2.addEventListener("change", () => {
  atualizarCalendar();
});


function atualizarCalendar(){
  const data1 = new Date(document.querySelector("#inputData1").value);
  const data2 = new Date(document.querySelector("#inputData2").value);

  const mes = data1.getMonth();
  const ano = data2.getFullYear();


  const primeiroDia = new Date(ano, mes, 1).getDay();
 
}
