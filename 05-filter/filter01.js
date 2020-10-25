// O filter é parecido com o 'map', com a singularidade de que ele
// pode retornar um número diferente de elementos do array. Como o nome
// já diz: filter => filtro

const array01 = [1, 2, 3, 4, 5, 8, 15, 25]

const array02 = array01.filter(el => el > 3);
console.log(array02);


// poderiamos criar uma função de filtro:
const filtro = el => el > 3;
const array03 = array01.filter(filtro);
console.log(array03);

// O uso da função de  fitlro, como no segundo exemplo, serve para quando temos uma 
// validação extensa, muito grande. para desacoplar o código e deixar mais legível.
// Veja o código abaixo:
const array04 = array01.filter(el => el > 3 && el < 10 && el != null);
console.log(array04);

// ficaria melhor assim:
const filtro02 = el => el > 3 && el < 10 && el != null;
const array05 = array01.filter(filtro02);
console.log(array05);