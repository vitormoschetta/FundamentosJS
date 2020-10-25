function bomDia() {
    console.log('Bom dia')
}

const boaTarde = function () {
    console.log('Boa tarde')
}

// 1) Passar função pra outra função
function executar(fn) {
    if (typeof fn == 'function')
        fn()
}

executar(bomDia)
executar(boaTarde)
executar(3) // <-- não deu erro por conta da verificação typeof na função executar


// 2) Retornar uma função a partir de uma outra função
function potencia(base) {
    return function potenciaDe2(exp) {
        return Math.pow(base, exp)
    }
}

let potenciaDe2 = potencia(2)
// Temos armazenado na variável 'potenciaDe2' a função
// 'potenciaDe2()', já com o valor da base, que é 2;
// Podemos calcular 2 elevado a qualquer número agora:

console.log(potenciaDe2(2))
console.log(potenciaDe2(3))
console.log(potenciaDe2(4))


// Obs: podemos simplificar a função 'potencia':
function potencia2(base) {
    return exp => Math.pow(base, exp)
}