// Reduce recebe mais parametros, podendo manipular e retornar o que desejar

const array01 = [1, 2, 3, 4, 5]

// Missão: retornar o total da soma de todos os elementos do array01

const total = array01.reduce((total, el) => total + el, 0)
console.log(total);

// usando função de filtro:
const filtro = (total, el) => total + el;
const total2 = array01.reduce(filtro);
console.log(total2);


// a função reduce faz a mesma coisa que a seguinte função:
let total3 = 0;
array01.forEach(el => {
    total3 = total3 + el;
});
console.log(total3);

