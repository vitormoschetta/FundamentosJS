// criando o próprio MAP

// forma 01:
Array.prototype.meuMap = function (fn) {
    const novoArray = []
    for (let i = 0; i < this.length; i++) {
        novoArray.push(fn(this[i], i, this))
    }
    return novoArray
}

// forma 02:
Array.prototype.meuMap2 = function (fn) {
    const novoArray = []
    this.forEach(el => {
        novoArray.push(fn(el))
    });
    return novoArray
}

const carrinho = [
    { nome: 'Caneta', qtd: 10, preco: 7.99 },
    { nome: 'Impressora', qtd: 0, preco: 649.50 },
    { nome: 'Caderno', qtd: 4, preco: 27.10 },
    { nome: 'Lapis', qtd: 3, preco: 5.82 },
    { nome: 'Tesoura', qtd: 1, preco: 19.20 },
]

const nomes = obj => obj.nome
const totais = obj => obj.qtd * obj.preco

console.log(carrinho.meuMap(nomes))
console.log(carrinho.meuMap2(nomes))

console.log(carrinho.meuMap(totais))
console.log(carrinho.meuMap2(totais))