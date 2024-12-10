
const inputData1 = document.getElementById('inputData1')
const inputData2 = document.getElementById('inputData2')

const adicionarElementoChange = (inputs => {
  inputs.addEventListener('change', atualizarCalendario)
})
 
adicionarElementoChange(inputData1)
adicionarElementoChange(inputData2)

  function atualizarCalendario() {
    // Capturar as datas selecionadas
    const dataSelecionada1 = new Date(inputData1.value + 'T00:00:00');
    const dataSelecionada2 = new Date(inputData2.value + 'T00:00:00');

    // Limpar estilo anterior
    document.querySelectorAll('.data-selecionada, .data-intervalo').forEach(tds => {
      tds.classList.remove('data-selecionada', 'data-intervalo');
    });

    // Aplicar estilos às datas selecionadas
  const aplicarClasse = (data, classe) =>{
    if(!isNaN(data.getDate())){
      const dia = data.getDate()
      const celulas = document.querySelectorAll('.calendar td')
      celulas.forEach(celula =>{
        if(parseInt(celula.textContent) == dia){
          celula.classList.add(classe)
        }
      })
    }
  }
 aplicarClasse(dataSelecionada1, 'data-selecionada')
 aplicarClasse(dataSelecionada2, 'data-selecionada')

    // Calcular a diferença em dias entre as datas
    if (inputData1.value && inputData2.value) {
      const diffTime = Math.abs(dataSelecionada2 - dataSelecionada1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) -1 ;
      console.log(`Diferença: ${diffDays} dias`);

      // Alterar a cor dos dias entre as datas selecionadas
      let dataAtual = new Date(dataSelecionada1);
      dataAtual.setDate(dataAtual.getDate() + 1);
      while (dataAtual < dataSelecionada2) {
        aplicarClasse(dataAtual, 'data-intervalo');
        dataAtual.setDate(dataAtual.getDate() + 1);
      }
    }
  }

