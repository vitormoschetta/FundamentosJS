// Média das notas dos alunos aprovados (nota maior ou igual a 7)

const alunos = [
    { nome: 'Aluno A', nota: 10 },
    { nome: 'Aluno B', nota: 5.5 },
    { nome: 'Aluno C', nota: 9.5 },
    { nome: 'Aluno D', nota: 6.0 },
    { nome: 'Aluno E', nota: 7.0 },
]

// Usando Filter, Map e Reduce
var aprovados = alunos.filter(el => el.nota >= 7)
var media =
    aprovados
        .map(el => el.nota)
        .reduce((acumulador, el) => acumulador + el) / aprovados.length

console.log(media)



// Usando Promise
let promessa = new Promise(function (notasAlunos) {
    notasAlunos(alunos)
})

promessa
    .then(function (notasAlunos) {
        return notasAlunos.filter(el => el.nota >= 7)
    })
    .then(function (notasAlunos) {
        return notasAlunos.map(el => el.nota)
    })
    .then(function (notasAlunos) {
        return notasAlunos.reduce((acc, el) => acc + el) / notasAlunos.length
    })
    .then(function (notasAlunos) {
        console.log(notasAlunos)
    })


// simplificando:
promessa
    .then(notasAlunos => notasAlunos.filter(el => el.nota >= 7))
    .then(notasAlunos => notasAlunos.map(el => el.nota))
    .then(notasAlunos => notasAlunos.reduce((acc, el) => acc + el) / notasAlunos.length)
    .then(console.log)





