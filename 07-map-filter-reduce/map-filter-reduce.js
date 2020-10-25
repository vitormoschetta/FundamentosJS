const alunos = [
    { name: 'Aluno A', nota: 10 },
    { name: 'Aluno B', nota: 5.4 },
    { name: 'Aluno C', nota: 9.1 },
    { name: 'Aluno B', nota: 5.5 },
    { name: 'Aluno C', nota: 7.0 },
]

// Missão: pegar a média da nota dos alunos aprovados (nota maior ou igual a 7):

let aprovados = el => el.nota >= 7
let notas = el => el.nota
let calculaMedia = (acumulador, el, indice, array) => {
    if (indice == array.length - 1)
        return (acumulador + el) / array.length
    else
        return acumulador + el
}

let mediaAprovados =
    alunos
        .filter(aprovados)
        .map(notas)
        .reduce(calculaMedia)

console.log(mediaAprovados)


// Concluindo:

// Filter => Filtra uma lista. 
            // Não modifica os valores, mas faz comparações e retorna qualquer quantidade
            // de elementos dessa lista.

// Map => Transforma os elementos da lista.
            // Ele não modifica o TAMANHO da lista, mas pode modificar totalmente os seus 
            // elementos, inclusive de Objeto para propriedade, pegando apenas o valor de uma
            // propriedade do objeto.

// Reduce => Faz cálculos e retorna qualquer valor.

