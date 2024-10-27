const h1 = document.querySelector('.container h1')

let options = {     
  dateStyle: ('full' || 'long' || 'medium' || 'short' ), 
  timeStyle: ('full' || 'long' || 'medium' || 'short' ) 
}
h1.innerHTML = new Date().toLocaleDateString('pt-br', options)
