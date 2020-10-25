// Vamos usar o Map em lista de Objetos agora:

const alunos = [
    { name: 'Vitor', nota: 10 },
    { name: 'Aluno B', nota: 6.4 },
    { name: 'Aluno C', nota: 9.1 },
]

// Lembrando que o Map é como um Select do Linq CSharp. Ele sempre retornará uma lista do 
// mesmo tamanho da lista original, podendo porém modificar os elementos da lista.
// Sabendo disso, vamos retornar apenas a nota dos alunos da lista de objetos acima:

const notas = alunos.map(el => el.nota)
console.log(notas);
