let promessa = new Promise(function(cumprirPromessa) {
   cumprirPromessa(valor)
})

promessa.then(function(valor) {
    console.log(valor)
})

