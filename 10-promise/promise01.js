let promessa = new Promise(function (cumprirPromessa) {
    cumprirPromessa(3)
})

promessa.then(function (valor) {
    console.log(valor)
})

// simplificando:
promessa.then(valor => console.log(valor))

// simplificando mais:
promessa.then(console.log)
