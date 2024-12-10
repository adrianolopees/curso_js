function criaCalculadora() {
  return {
    display: document.querySelector(".display"),
    inicia() {
      this.cliqueBotoes();
    },

    clearDisplay(){
      this.display.value = ''
    },

    limpaUm(){
      this.display.value = this.display.value.slice(0, -1)
    },

    fazConta(){
      let conta = this.display.value

      try {
        conta = eval(conta)

        if(!conta){
          alert('Conta inválida')
          return
        }
        this.display.value = conta
      } catch(e) {
        alert('Conta inválida')
        return
      }
    },

    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains('btn-clear')){
          this.clearDisplay()
        }

        if (el.classList.contains('btn-eq')){
          this.fazConta()
        }

        if (el.classList.contains('btn-del')){
          this.limpaUm()
        }
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
