const verificarIdade = require('../src/verificar-idade')

describe('Validar maior idade', () => {

    test('Deve validar se o usuário é maior ou tem 18 anos', () => {
        expect(verificarIdade(18)).toBe('Maior de idade')
        
    });
    
    test('Deve validar erro se o usuário tiver menos que 18 anos', () => {
        expect(verificarIdade(17)).not.toBe('Maior de idade')
    });
});