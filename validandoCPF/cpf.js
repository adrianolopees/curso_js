class ValidaCPF {
  constructor(cfpEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      enumerable: true,
      get: function () {
        return cfpEnviado.replace(/\D+/g, "");
      },
    });
  }
  valida() {
    if (!cpfLimpo) return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
  }
  criaDigito(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);

    let contagemRegressiva = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
      ac += contagemRegressiva * Number(val);
      contagemRegressiva--;

      return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? "0" : String(digito);
  }
  isSequencia() {
    const sequencia = this.cpfLimpo[0].repeat(11);
    return sequencia === this.cpfLimpo;
  }
}




const cpf = new ValidaCPF("111.111.111.11");

console.log(cpf.valida());
