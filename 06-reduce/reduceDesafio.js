const array01 = [1, 2, 3, 4, 5, 6]

// Missão: a média dos elementos de array01

// solucao 01: foreach
let total = 0
array01.forEach(el => {
    total += el
})
let media = total / array01.length
console.log(media);


// solucao 02: reduce
let total2 = array01.reduce((total, el) => total + el);
let media2 = total2 / array01.length;
console.log(media2)


// solucao 03: reduce com funcao de media:

let media3 = (acumulador, el, indice, array) => {
    if (indice == array.length - 1)
        return (acumulador + el) / array.length
    else
        return acumulador + el
}
let result = array01.reduce(media3);
console.log(result);

// Obs: o interessante da função acima é que pode ser reutilizada para calcular
// a média de qualquer lista de numeros:

const array02 = [10, 20]
let result2 = array02.reduce(media3);
console.log(result2)
