function Produto (nome, preco, estoque){
  this.nome = nome
  this.preco = preco

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // Mostra ou não a chave do objeto
    value: estoque, // valor passado no parametro.
    writable: false,// poder ou não reatribuir outro valor.
    configurable: true //poder ou não configurar a chave (deletando por exemplo)
  })

  Object.defineProperties(this, {
    nome:{
      enumerable: true, 
      value: estoque, 
      writable: false,
      configurable: true 
    },
    
    preco:{
      enumerable: true, 
      value: estoque, 
      writable: false,
      configurable: true 
    }
  })
}

const p1 = new Produto('Bota', 299.99, 14)
p1.estoque = 99
delete p1.estoque
console.log(p1)