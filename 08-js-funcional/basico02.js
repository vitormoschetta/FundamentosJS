// varias formas de construir a mesma funçao:

// 01)
function adicionaMaisUm(n) {
    return n++;
}

var numero = adicionaMaisUm(1);

// 02)
numero = function (n) {
    return n++
}

// 03) arrow function
numero = (n) => n++

// 04)
numero = n => n++


// outra funcao
const saudacao = nome => `Bem vindo(a) ${nome}!`
console.log(saudacao('Vitor'))


