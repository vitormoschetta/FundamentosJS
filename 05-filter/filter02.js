const alunos = [
    { name: 'Aluno A', nota: 10 },
    { name: 'Aluno B', nota: 5.4 },
    { name: 'Aluno C', nota: 9.1 },
    { name: 'Aluno B', nota: 5.5 },
    { name: 'Aluno C', nota: 7.0 },
]

// missão: retornar o nome dos alunos com nota igual ou superior a 7

const alunosAprovados = alunos.filter(el => el.nota >= 7);
console.log(alunosAprovados);
