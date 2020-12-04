function gerarNumrosEntre(min, max) {
    if (min > max)
        [max, min] = [min, max]

    return new Promise(resolve => {
        let fator = max - min + 1
        let aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}
gerarNumrosEntre(5, 10)
    .then(console.log)
