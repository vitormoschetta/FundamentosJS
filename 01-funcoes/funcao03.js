// Função array

const funcaoSomaDoisNumeros = (a, b) => {
    return a + b;
}

// Se tivermos apenas um parâmetro na função, podemos fazer sem parentesis:
const incremento01 = n => {
    return n + 1;
}

// também podemos fazer assim:
const incremento02 = n => n + 1;

// Com mais de um parametro assim:
const incremento03 = (a, b) => a + b;

console.log(incremento03(5, 2));

