function calcularValorFinal(qtd, preco, taxaJuros) {
    let valor = qtd * preco;
    let juros = valor * taxaJuros;
    let valortotal = valor + juros;
    return valortotal;
}

console.log(calcularValorFinal(3, 4, 0.3))
console.log(calcularValorFinal(5, 8, 0.3))
console.log(calcularValorFinal(1, 20, 0.3))



function calcularValorFinal2(taxaJuros) {
    return function (qtd, preco) {
        let valor = qtd * preco;
        let juros = valor * taxaJuros;
        let valortotal = valor + juros;
        return valortotal;
    }
}

var valorTot = calcularValorFinal2(0.3)(3, 4)
console.log(valorTot);
