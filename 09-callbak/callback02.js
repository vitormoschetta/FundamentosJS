const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(err, conteudo) {
    console.log(conteudo.toString())
}

console.log('Inicio...')
// após a leitura do arquivo, a função readFile executa a nossa função 'exibirConteudo()':
fs.readFile(caminho, exibirConteudo)
// executando com implementacao da função direto no arquivo:
fs.readFile(caminho, (err, conteudo) => console.log(conteudo.toString()))
console.log('fim...')


// Sincrono
console.log('Inicio...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('fim...')