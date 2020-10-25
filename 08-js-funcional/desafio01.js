// uma função que reaproveita os valores para efetuar um dos quatro calculos:

function somar(a, b) {
    return a + b
}

function subtrair(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

function dividir(a, b) {
    return a / b
}


function calcular(a, b) {
    return function (fn) {
        return fn(a, b)
    }
}

let valores = calcular(5, 5);
console.log(valores(somar))
console.log(valores(subtrair))
console.log(valores(multiplicar))
console.log(valores(dividir))

// pode chamar direto:
console.log(calcular(2, 2)(somar))
console.log(calcular(2, 2)(subtrair))
console.log(calcular(2, 2)(multiplicar))
console.log(calcular(2, 2)(dividir))