class Conta {
  constructor (agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
  }

  verSaldo() {
    console.log(`Saldo R$ ${this.saldo.toFixed(2)} reais.`)
  }

  sacar(valor) {
    if (this.saldo < valor) {
      console.log(`Saldo insuficiente você tem apenas ${this.saldo.toFixed(2)}`)
      return;
    }
    this.saldo -= valor;
    console.log(`Você sacou ${valor} reias`)
    this.verSaldo()
  }

  depositar(valor) {
    console.log(`Você depositou R$ ${valor.toFixed(2)} reais`)
    this.saldo += valor
    this.verSaldo()
  }

}
class CC  extends Conta{
constructor  (agencia, conta, saldo , limite) {
  super(agencia, conta, saldo)
  this.limite = limite
}
sacar(valor) {
  if (valor > (this.saldo + this.limite)) {
    console.log(`Saldo insuficiente`); return
  }
  this.saldo + this.limite - valor

}
}

const conta = new Conta(22, 123, 500)
const  cc = new CC(11, 321, 100, 100)
cc.sacar(100)
console.log(cc.verSaldo())

