import ValidaCPF from "./ValidaCPF";

export default class GeraCPF {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  formatar(cpf) {
    return (
      cpf.slice(0, 3) + '.' +
      cpf.slice(3, 6) + '.' + 
      cpf.slice(6, 9) + '-' +
      cpf.slice(9, 11)
    )
  }

  geraNovoCpf() {
    const cpfSemdigito = this.rand();
    const digito1 = ValidaCPF.criaDigito(cpfSemdigito);
    const digito2 = ValidaCPF.criaDigito(cpfSemdigito + digito1);
    const cpfGerado = cpfSemdigito + digito1 + digito2;
    return this.formatar(cpfGerado);
  }
}
