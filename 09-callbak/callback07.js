// criando o próprio REDUCE

// forma 01:
Array.prototype.meuReduce = function (fn) {
    const novoArray = []
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) {
            novoArray.push(this[i])
        }
    }
    return novoArray
}

// forma 02:
Array.prototype.meuReduce2 = function (fn) {
    const novoArray = []
    this.forEach(el => {
        if (fn(el)) {
            novoArray.push(el)
        }
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


