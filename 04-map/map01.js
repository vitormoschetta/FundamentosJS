// Map 
// A função 'Map' do JS seria um 'Select' do Linq CSharp

// Dada a lista abaixo, retorne outra lista com seus elementos com valores em dobro:
const listaNumeros = [1, 2, 3, 4, 5]  // <-- Saída deve ser : [2, 4, 6, 8, 10]

var numerosEmDobro = listaNumeros.map(el => el * 2)
console.log(numerosEmDobro)


// EXPLICAÇÃO: A função Map recebe uma outra função. Vamos refazer da seguinte forma:
var funcNumDobro = function (el) {
    return el * 2
}
numerosEmDobro = listaNumeros.map(funcNumDobro)
console.log(numerosEmDobro)
// Veja que passamos a função 'funcNumDobro' como parâmetro para a função 'Map'
// O que 'Map' faz é percorrer a 'listaNumeros' executando a função 'funcNumDobro' que criamos


// Vamos fazer sem o Map, pra entendermos o que acontece por baixo dos panos:
numerosEmDobro = []
for (let el of listaNumeros) {
    var novoValor = el * 2
    numerosEmDobro.push(novoValor)
}
console.log(numerosEmDobro)



// Veja como o JS nos permite ir simplificando a função:
funcNumDobro = (el) => el * 2
numerosEmDobro = listaNumeros.map(funcNumDobro)
console.log(numerosEmDobro)

// Detalhe: se só existe UM parâmetro, não precisa usar '(' parentesis:
funcNumDobro = el => el * 2
numerosEmDobro = listaNumeros.map(funcNumDobro)
console.log(numerosEmDobro)

// Simplificando mais: Jogue a função diretamente dentro do Map
numerosEmDobro = listaNumeros.map(el => el * 2)
console.log(numerosEmDobro)

// Numa única linha
console.log(listaNumeros.map(el => el * 2))


// Usando foreach:
numerosEmDobro = []
listaNumeros.forEach(el => numerosEmDobro.push(el * 2))
console.log(numerosEmDobro)


// Usando For puro:
numerosEmDobro = []
for (let i = 0; i < listaNumeros.length; i++) {
    numerosEmDobro.push(listaNumeros[i] * 2)
}
console.log(numerosEmDobro)


// OBS:
// Uma diferença básica que percebemos é que o Map retorna uma lista, enquanto as estruturas
// de repetição precisam de uma lista pre-existente pra ir incluindo itens durante a iteração
// Abaixo, como um Map é feito de verdade, e porque ele retorna uma lista:

// forma 01: for => usando o índice do elemento
Array.prototype.meuMap = function (fn) {
    const novoArray = []
    for (let i = 0; i < this.length; i++) {
        novoArray.push(fn(this[i], i, this))
    }
    return novoArray
}

// forma 02: foreach => usando o elemento:
Array.prototype.meuMap2 = function (fn) {
    const novoArray = []
    this.forEach(el => {
        novoArray.push(fn(el))
    });
    return novoArray
}

// Veja que o Map implementa uma lista no seu interior, por isso ele pode retornar uma lista
// Observe que ele recebe uma função como parâmetro, como já falamos anteriormente.
// Ele itera/percorre a lista executando a função que recebeu.
// Veja como obteremos o mesmo resultado dos exemplos anteriores usando o nosso Map:

var numerosEmDobro = listaNumeros.meuMap(el => el * 2)
console.log(numerosEmDobro)


var numerosEmDobro = listaNumeros.meuMap2(el => el * 2)
console.log(numerosEmDobro)



