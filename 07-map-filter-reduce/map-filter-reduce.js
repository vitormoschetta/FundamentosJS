// OBS: é muito improvável usar o Reduce separado do 'Map', ou do 'Filter', 
// por isso o Reduce foi o último a ser estudaddo. 

const alunos = [
    { nome: 'Aluno A', nota: 10 },
    { nome: 'Aluno B', nota: 5.5 },
    { nome: 'Aluno C', nota: 9.5 },
    { nome: 'Aluno D', nota: 6.0 },
    { nome: 'Aluno E', nota: 7.0 },
]

// Lembrando que a função Reduce seria como um 'Aggregate' do CSharp, retorna um único valor.
// Sabendo disso, vamos retornar a média das notas dos alunos aprovados (nota maior ou igual a 7):

var aprovados = alunos.filter(el => el.nota >= 7)

var media =
    aprovados
        .map(el => el.nota)
        .reduce((acumulador, el) => acumulador + el) / aprovados.length

console.log(media)




// Concluindo:

// Filter => Filtra uma lista. 
            // Ele itera sobre uma lista aplicando a função recebida. 
            // Se o resultado da função for True, ele inclui o elemento na nova lista que será
            // retornada.

// Map => Transforma os elementos da lista.
            // Ele não modifica o TAMANHO da lista, mas pode modificar totalmente os seus 
            // elementos, inclusive de Objeto para propriedade, pegando apenas o valor de uma
            // propriedade do objeto. Sua ação depende da função recebida.

// Reduce => Possui um acumulador, no qual retornará apenas um valor, após aplicar a função recebida.

