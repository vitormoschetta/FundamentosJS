// I Filter é semelhando ao 'Where' do Linq CSharp
// Como o nome sugere, ele filtra os elementos de uma lista, com base em uma referência
// passada no parâmetro. Logo, ele pode trazer uma lista com um tamanho diferente da lista original

const listaNumeros = [5, 6, 8, 4, 7, 10, 9]

// Com base na lista a cima, gera uma nova lista contendo apenas elementos maiores que 6

var maioresSeis = listaNumeros.filter(el => el > 6)
console.log(maioresSeis)


// Como no 'Map', também podemos criar uma função de filtro para o Filter:
var funcMaioresSeis = el => el > 6;
maioresSeis = listaNumeros.filter(funcMaioresSeis);
console.log(maioresSeis);

// Logo, perceba que, assim como o 'Map' o 'Filter' também recebe uma função, 
// itera sobre a 'listaNumeros' e executa a função recebida.

// Vamos fazer sem o Filter, pra entendermos o que acontece por baixo dos panos:
maioresSeis = []
for (let el of listaNumeros) {
    if (el > 6)
        maioresSeis.push(el)
}
console.log(maioresSeis)
// Perceba que, diferente do 'Map' que só alterar o valor e o inclui na lista, o 'Filter'
// aplica uma validação para saber se deve incluir ou não o elemento na nova lista

// OBS:
// Da mesma forma que o 'Map', o 'Filter' declara uma nova lista internamente, e por isso
// pode nos retornar uma lista que não declaramos
// Abaixo, como um Filter é feito de verdade, e porque ele retorna uma lista:

// forma 01: for => usando o índice do elemento
Array.prototype.meuFilter = function (fn) {
    const novoArray = []
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) {
            novoArray.push(this[i])
        }
    }
    return novoArray
}

// forma 02: foreach => usando o elemento:
Array.prototype.meuFilter2 = function (fn) {
    const novoArray = []
    this.forEach(el => {
        if (fn(el)) {
            novoArray.push(el)
        }
    });
    return novoArray
}

// Observe que, assim como o 'Map', o Filter recebe uma função como parâmetro.
// Ele itera/percorre a lista executando a função que recebeu. 
// A diferença é que no Filter ele 'VALIDA' a Função recebida passando os elementos da lista.
// Se a função retornar 'True' ele inclui o elemento na nova lista, do contrário, o elemento
// é descartado.

// Veja como obteremos o mesmo resultado dos exemplos anteriores usando o nosso Map:

maioresSeis = listaNumeros.meuFilter(el => el > 6)
console.log(maioresSeis)

maioresSeis = listaNumeros.meuFilter2(el => el > 6)
console.log(maioresSeis)
