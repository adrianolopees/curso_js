// JavaScript - Versão Simples
const cpfInput = document.getElementById('cpf');
const cpfFormatado = document.getElementById('cpf-formatado');

cpfInput.addEventListener('input', function() {
    // Remove tudo que não é número
    let cpf = this.value.replace(/\D/g, '');
    
    // Formata o CPF conforme digita
    if (cpf.length >= 3) {
        cpf = cpf.substring(0,3) + '.' + cpf.substring(3);
    }
    if (cpf.length >= 7) {
        cpf = cpf.substring(0,7) + '.' + cpf.substring(7);
    }
    if (cpf.length >= 11) {
        cpf = cpf.substring(0,11) + '-' + cpf.substring(11);
    }
    
    // Exibe o CPF formatado
    cpfFormatado.textContent = cpf;
});