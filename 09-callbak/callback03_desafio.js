const carrinho = [
    { nome: 'Caneta', qtd: 10, preco: 7.99 },
    { nome: 'Impressora', qtd: 0, preco: 649.50 },
    { nome: 'Caderno', qtd: 4, preco: 27.10 },
    { nome: 'Lapis', qtd: 3, preco: 5.82 },
    { nome: 'Tesoura', qtd: 1, preco: 19.20 },
]

const nomes = obj => obj.nome
console.log(carrinho.map(nomes))

const totais = obj => obj.qtd * obj.preco
console.log(carrinho.map(totais))


// Desafio: executar as funcoes acima sem usar MAP

const nomes2 = []
carrinho.forEach(el => nomes2.push(el.nome))
console.log(nomes2)

const totais2 = []
carrinho.forEach(el => totais2.push(el.qtd * el.preco))
console.log(totais2)