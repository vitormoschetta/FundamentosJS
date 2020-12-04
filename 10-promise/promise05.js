// Tratamento de erro

function funcionarOuNao(chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro)
            reject('Ocorreu um erro!')
        else
            resolve('Funiona..')
    })
}


funcionarOuNao(0.5)
    .then(v => `Valor: ${v}`)
    .then(v => console.log(novo))
    .catch(err => console.log(`Erro: ${err}`)) // <-- tratando o erro de todas as Then ao final



funcionarOuNao(0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v),
        err => console.log(`Erro esperado: ${err}`) //<-- tratando erro de then especifica
    )
    .catch(err => console.log(`Erro: ${err}`))