const calculadora = require('../src/calculadora')

test('Deve somar 2 + 2 e o resultado deve ser 4', () =>{
    expect(calculadora.somar(2,2)).toBe(4)
})

test('Deve somar -10 + 20 e o resultado deve ser 10', () => {
    expect(calculadora.somar(-10,20)).toBe(10)
});

test('Deve somar 2.5 + 7.5 e o resultado deve ser 10', () => {
    expect(calculadora.somar(2.5, 7.5)).toBe(10)
});

test('Deve dividir 20 por 5 e o resultado deve ser 4', () => {
    expect(calculadora.dividir(20,5)).toBe(4)
});

test('Deve dividir por zero e dar uma mensagem de erro', () => {
    expect(calculadora.dividir(10,0)).toBe('Divisão por zero não é permitida')
});

test('Deve subtrair 10 de 30 e o resultado deve ser 20', () => {
    expect(calculadora.subtrair(30, 10)).toBe(20)
});

test('Deve multiplicar 10 por 5 e o resultado deve ser 50', () => {
    expect(calculadora.multiplicar(10, 5)).toBe(50)
});