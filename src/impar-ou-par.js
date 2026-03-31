function verificarParOuImpar() {
    const numero = prompt('Digite um número')
    const num = parseInt(numero)

    if (isNaN(num)) {
        alert('Por favor, digite um número válido!')
        return
    } 

    if (numero % 2 === 0) {
        alert('O número digitado é Par')
    } else {
        alert('O número digitado é Ímpar')
    }
}

module.exports = { verificarParOuImpar }