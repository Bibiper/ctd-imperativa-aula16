/*
    Atividade: Crie uma calculadora

    Atividade I: Crie operações matemática para a calculadora.
    O controlador deve ser capaz de:
    (  ) Multiplicar;
    (  ) Dividir;
    (  ) Somar;
    (  ) Subtrair.
    
    Obs.: Crie um módulo chamado operações.js contendo as funções de callback.

    Atividade II: Crie uma função para resetar a calculadora.
    (  ) A função deve ser capaz de zerar o valor acumulado.
    (  ) Crie a documentação da função utilizando JavaDoc.

    Atividade Bônus: Crie uma função para guardar as operações matemáticas
    (  ) A função deve guardar cada operação matemática e retornar as operações acumuladas.
    (  ) Imprima na tela as operações matemáticas realizada com o resultado final.
    (  ) Crie a documentação da função utilizando JavaDoc.

    Exemplo: 2 * 2 + 3 / 4 - 1 = 0.75

*/

const Calculadora = require('./modulos/calculadora');

const Callback = require('./modulos/operacoes');

function somar(valores) {
    var resultadoDaSomaDeValores = valores.reduce( (valorAcumula, valorAtual) => valorAcumula + valorAtual );
    return resultadoDaSomaDeValores;
}

function multiplicar(valores) {
    var resultadoDaMultiplicacaoDeValores = valores.reduce( (valorAcumula, valorAtual) => valorAcumula * valorAtual );
    return resultadoDaMultiplicacaoDeValores;
}

function subtrair(valores) {
    var resultadoDaSubtracaoDeValores = valores.reduce( (valorAcumula, valorAtual) => valorAcumula - valorAtual );
    return resultadoDaSubtracaoDeValores;
}

function dividir(valores) {
    var resultadoDaDivisaoDeValores = valores.reduce( (valorAcumula, valorAtual) => valorAcumula / valorAtual );
    return resultadoDaDivisaoDeValores;
}

const soma = Callback.calcular([14, 6],somar);
console.log('Soma:',soma);

const multiplicacao = Callback.calcular([5, 4], multiplicar);
console.log('Multiplicação:',multiplicacao);

const subtracao = Callback.calcular([30, 17], subtrair);
console.log('Subtração:',subtracao);

const divisao = Callback.calcular([21,7],dividir)
console.log('Divisão:',divisao);

const app = new Calculadora();


/* console.log('Resultado:');
console.log('Zerando a calculadora:');
console.log('Operações:');
console.log('Operações = resultado:'); */