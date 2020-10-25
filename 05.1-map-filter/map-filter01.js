const alunos = [
    { nome: 'Aluno A', nota: 10 },
    { nome: 'Aluno B', nota: 5.5 },
    { nome: 'Aluno C', nota: 9.5 },
    { nome: 'Aluno D', nota: 6.0 },
    { nome: 'Aluno E', nota: 7.0 },
]

// Vamos usar o Map e o Filter em conjunto para trazer apenas o Nome dos alunos 
// aprovados (nota maior ou igual a 7):

var aprovados =
    alunos
        .filter(el => el.nota >= 7)
        .map(el => el.nome)

console.log(aprovados)        