function verificarIdade(idade) {
  let mensagem = ''

  if (idade >= 18) {
    mensagem = 'Maior de idade'
  }

  return mensagem
}

module.exports = verificarIdade;

