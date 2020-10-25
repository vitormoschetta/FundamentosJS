const somar = (x, y) => console.log(x + y)
const subtrair = (x, y) => console.log(x - y)

function calcular(fn, a, b) {
    return fn(a, b)
}

calcular(somar, 1, 2)
calcular(subtrair, 10, 5)


///// conceito de callback: passar função como parametro pra outra função, que vai 
// aguardar um evento para executar a função passada como parametro

let cb = () => console.log('Executando...')
setInterval(cb, 1000)

setInterval(() => {
    console.log('Exec02...')
}, 3000);