function criaCalculadora() {
  return {
    display: document.querySelector(".display"),

    inicia() {
      this.getButton();
    },

    getButton() {
      document.addEventListener("click", (event) => {
        const el = event.target;

        if (el.classList.contains("btn-num")) {
          this.addNumDisplay(el.innerText);
        }

        if (el.classList.contains("btn-del")) {
          this.delOne();
        }

        if (el.classList.contains("btn-clear")) {
          this.btnClear();
        }

        if (el.classList.contains("btn-eq")) {
          this.goTheMath();
        }
      });
    },

    addNumDisplay(valor) {
      this.display.value += valor;
    },

    delOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    btnClear() {
      this.display.value = "";
    },

    goTheMath() {
      try {
        const conta = math.evaluate(this.display.value)
        if(isNaN(conta)){
          alert('Operação inválida')
          return
        }
        this.display.value = conta
      } catch (e) {
        alert('Operação inválida')
        return
      }
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
