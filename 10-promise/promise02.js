let promessa = new Promise(function (cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'Carlos'])
})

promessa
    .then(console.log
    )

// Encadeamento:    

promessa
    .then(el => el[0])
    .then(console.log)

promessa
    .then(el => el[0])
    .then(el => el[0])
    .then(console.log)



let primeiroElemento = el => el[0]
let minusculo = el => el.toLowerCase()
promessa
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(minusculo)
    .then(console.log)


