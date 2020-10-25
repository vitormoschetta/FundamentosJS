// Vamos usar o Filter em lista de Objetos agora:

const alunos = [
    { name: 'Aluno A', nota: 10 },
    { name: 'Aluno B', nota: 5.5 },
    { name: 'Aluno C', nota: 9.5 },
    { name: 'Aluno D', nota: 6.0 },
    { name: 'Aluno E', nota: 7.0 },
]

// Lembrando que a função Filter seria como um 'Where' do CSharp, logo podemos retornar 
// apenas os elementos que passarem em uma determinada validação/condição
// Sabendo disso, vamos retornar apenas os alunos aprovados (nota maior ou igual a 7) 
// da lista de objetos a cima:

var aprovados = alunos.filter(el => el.nota >= 7);
console.log(aprovados);
