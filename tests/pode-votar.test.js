const { avaliarVotacao } = require('../src/pode-votar')

describe('Teste de cobertura de decisões - Não pode votar', () => {
    // false, false, false
    test('Deve impedir votar menor de 16 anos, sem titulo, não brasileiro', () => {
        expect(avaliarVotacao(15, false, false)).toBe('Negado')
        
    });

    // false, true, false
    test('Deve impedir votar menor de 16 anos, com titulo, não brasileiro', () => {
        expect(avaliarVotacao(15, true, false)).toBe('Negado')
        
    });

    // false, false, true
    test('Deve impedir votar menor de 16 anos, sem titulo, é brasileiro', () => {
        expect(avaliarVotacao(15, false, true)).toBe('Negado')
        
    });

    // true, true, false
    test('Deve impedir votar maior de 16 anos, com titulo, mas não brasileiro', () => {
        expect(avaliarVotacao(18, true, false)).toBe('Negado')
        
    });

    // true, false, true
    test('Deve impedir votar maior de 16 anos, sem titulo, é brasileiro', () => {
        expect(avaliarVotacao(18, false, true)).toBe('Negado')
        
    });

    // false, true, true
    test('Deve impedir votar menor de 16 anos, com titulo, é brasileiro', () => {
        expect(avaliarVotacao(15, true, true)).toBe('Negado')
        
    });

  
});

describe('Teste de cobertura de decisões - Pode votar', () => {
    //Obrigatórios

   // obrigatório - idade minima de 18, true, true
    test('Deve permitir votar com 18 anos, com titulo, é brasileiro', () => {
        expect(avaliarVotacao(18, true, true)).toBe('Obrigatório')
        
    });

    // obrigatório - idade maior de 18, true, true
    test('Deve permitir votar maior de 18 anos, com titulo, é brasileiro', () => {
        expect(avaliarVotacao(25, true, true)).toBe('Obrigatório')
        
    });

     // obrigatório - idade limite 70, true, true
    test('Deve permitir votar maior de 70 anos, com titulo, é brasileiro', () => {
        expect(avaliarVotacao(70, true, true)).toBe('Obrigatório')
        
    });

    //Facultativos
    // facultativo - idade minima pra facultativo 16, true, true
    test('Deve permitir votar com 16 anos, com titulo, é brasileiro', () => {
        expect(avaliarVotacao(16, true, true)).toBe('Facultativo')
        
    });  

    // facultativo - idade maior que 70, true, true
    test('Deve permitir votar maior de 70 anos, com titulo, é brasileiro', () => {
        expect(avaliarVotacao(71, true, true)).toBe('Facultativo')
        
    });
    

});