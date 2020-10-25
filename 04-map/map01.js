const array01 = [1, 2, 3, 4, 5]

// A missão é retornar o array acima, com os seus elementos multiplicados por dois:
// [2, 4, 6, 8, 10]

// poderiamos criar um outro array e percorrer o array01 com foreach:
const array02 = [];
array01.forEach(el => {
    array02.push(el * 2);
});
console.log(array02);

// usar for:
const array03 = [];
for (let el of array01) {
    array03.push(el * 2);
}
console.log(array03);

// Ou poderíamos usar o map:
const array04 = array01.map(function (el) {
    return el * 2;
})
console.log(array04);

// Simplificando foreach:
const array05 = [];
array01.forEach(el => array05.push(el * 2));
console.log(array05);


// Simplificando map
const array06 = array01.map(el => el * 2);
console.log(array06);








