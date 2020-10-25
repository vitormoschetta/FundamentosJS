const alunos = [
    { name: 'Vitor', nota: 10 },
    { name: 'Aluno B', nota: 6.4 },
    { name: 'Aluno C', nota: 9.1 },
]

// Missão: retornar array apenas com as notas dos alunos:

const notas = alunos.map(function (el) {
    return el.nota;
})
console.log(notas);

// simplificando:
const notas2 = alunos.map(el => el.nota);
console.log(notas2);

// simplificando mais:
console.log(alunos.map(el => el.nota));