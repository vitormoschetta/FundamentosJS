// FILTER e MAP

const carrinho = [
    { nome: 'Caneta', qtd: 10, preco: 7.99 },
    { nome: 'Impressora', qtd: 0, preco: 649.50 },
    { nome: 'Caderno', qtd: 4, preco: 27.10 },
    { nome: 'Lapis', qtd: 3, preco: 5.82 },
    { nome: 'Tesoura', qtd: 1, preco: 19.20 },
]

// Missão: Retornar nome dos produtos com quantidade menor que 3
const result = carrinho
    .filter(x => x.qtd < 3)
    .map(x => x.nome)

console.log(result)


