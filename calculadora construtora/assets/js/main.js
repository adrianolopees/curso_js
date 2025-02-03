class Calculadora {
  constructor() {
    this.display = document.querySelector(".display");

    this.inicia = () => {
      this.clickButton();
      this.capturaEnter();
    };
    this.capturaEnter = () => {
      document.addEventListener('keyup', e => {
        if (e.key !== 'Enter') return;
        this.fazConta();
      });
    };
    this.clearDisplay = () => this.display.value = "";
    this.clearOne = () => this.display.value = this.display.value.slice(0, -1);
    this.fazConta = () => {
      try {
        const conta = math.evaluate(this.display.value);
        if (isNaN(conta)) {
          alert("Conta inválida");
          return;
        }
        this.display.value = conta;
      } catch (e) {
        alert("Operação Inválida");
        this.display.value = '';
        return;
      }
    };
    this.clickButton = () => {
      document.addEventListener("click", (e) => {
        const el = e.target;
        if (el.classList.contains("btn-num")) {
          this.display.value += el.innerText;
          this.display.focus();
        }
        if (el.classList.contains("btn-clear")) this.clearDisplay();
        if (el.classList.contains("btn-eq")) this.fazConta();
        if (el.classList.contains("btn-del")) this.clearOne();
      });
    };
  }
}

const calculadora = new Calculadora();
calculadora.inicia();
