// Como o nome sugere 'Reduce' reduz o retorno da função a um único valor.
// Reduce é semelhante ao 'Aggregate' do CSharp

// Dada a lista abaixo, retorne a soma dos elementos desta lista:
const listaNumeros = [1, 2, 3, 4, 5]  // <-- saída deve ser: 15

var soma = listaNumeros.reduce((soma, el) => soma + el)
console.log(soma);

// Assim como no 'Map' e no 'Filter', também podemos criar uma função de filtro para o Filter:
var funcSoma = (soma, el) => soma + el
soma = listaNumeros.reduce(funcSoma);
console.log(soma);

// Logo, perceba que, assim como no 'Map' e no 'Filter', o Reduce também recebe uma função, 
// itera sobre a 'listaNumeros' e executa a função recebida.
// A diferença básica é que existe um ACUMULADOR (Soma) no Reduce. 
// Esse Acumulador é necessário para que um único valor seja retornado.

// Vamos fazer sem o Reduce, pra entendermos o que acontece por baixo dos panos:
soma = 0
for (let el of listaNumeros) {
    soma = soma + el
}
console.log(soma)

// No Reduce, PODEMOS passar um Valor Inicial. Ficaria assim:
var soma = listaNumeros.reduce((soma, el) => soma + el, 5)
console.log(soma);

// Como a soma dos elementos da lista é 15, e passamos o 5 inicial, teremos como resultado
// o  valor 20.



// Abaixo, como um Filter é feito de verdade:

// forma 01: for => usando o índice do elemento
Array.prototype.meuReduce = function (fn, inicial) {
    let acumulador = inicial
    for (let i = 0; i < this.length; i++) {
        if (acumulador == null && i === 0) {
            acumulador = this[i]
            continue
        }
        acumulador = fn(acumulador, this[i], this)
    }
    return acumulador
}

// forma 02: for of => usando o elemento:
Array.prototype.meuReduce2 = function (fn, inicial) {
    let acumulador = inicial;
    let count = 0;
    this.forEach(el => {
        if (count == 0 && acumulador == null) {
            acumulador = el
        }
        if (count != 0)
            acumulador = fn(acumulador, el)

        count++
    })
    return acumulador
}


Array.prototype.meuReduce3 = function (fn, inicial) {
    let acumulador = inicial;
    let count = 0;
    for (let el of this) {
        if (count == 0 && acumulador == null) {
            acumulador = el
            count++
            continue
        }
        acumulador = fn(acumulador, el)
    }
    return acumulador
}

// Veja como obteremos o mesmo resultado dos exemplos anteriores usando o nosso Map:

var soma = listaNumeros.meuReduce3((soma, el) => soma + el)
console.log(soma);




