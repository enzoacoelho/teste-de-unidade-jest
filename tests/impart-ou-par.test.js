const { verificarParOuImpar } = require('../src/impar-ou-par')

describe('Verificar Par ou impar', () => {

    beforeEach(() => {
        global.prompt = jest.fn()
        global.alert = jest.fn()
    });

    test('Deve alertar que o número 10 é par', () => {
        prompt.mockReturnValue(10)
        verificarParOuImpar()
        expect(alert).toHaveBeenCalledWith('O número digitado é Par') 
    });

    test('Deve alertar que o número 7 é ímpar', () => {
        prompt.mockReturnValue(7)
        verificarParOuImpar()
        expect(alert).toHaveBeenCalledWith('O número digitado é Ímpar') 
    });

    test('Deve alertar o erro quando não for número válido', () => {
        prompt.mockReturnValue('abc')
        verificarParOuImpar()
        expect(alert).toHaveBeenCalledWith('Por favor, digite um número válido!') 
    });

    // Testes estratégico, teste de excessão, validando um caracter especial
    test('Deve alertar o erro quando inserir um caracter especial', () => {
        prompt.mockReturnValue('&')
        verificarParOuImpar()
        expect(alert).toHaveBeenCalledWith('Por favor, digite um número válido!') 
    });



    
});