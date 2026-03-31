const podeAcessarEvento = require('../src/acesso-evento')

describe('Teste de cobertura de condições - Pode acessar evento', () => {

    test('Deve validar acesso para maiores de 18 anos e ingresso válido', () => {
        // A (true) && B (true) = true
        expect(podeAcessarEvento(18, true)).toBe('Acesso liberado')
    });

    test('Deve bloquear acesso para maiores de 18 anos e ingresso inválido', () => {
        // B (true) && B (false) = false
        expect(podeAcessarEvento(18, false)).toBe('Acesso negado')
    });

    test('Deve bloquear acesso para menores de 18 anos e ingresso válido', () => {
        // C (false) && B (true) = false
        expect(podeAcessarEvento(17, true)).toBe('Acesso negado')
    });

    test('Deve bloquear acesso para menores de 18 anos e ingresso inválido', () => {
        // D (false) && B (false) = false
        expect(podeAcessarEvento(17, false)).toBe('Acesso negado')
    });

});