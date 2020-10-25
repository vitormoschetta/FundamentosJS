// javascript é uma linguagem muito flexível:

// undefined
function logParams(a, b) {
    console.log(a, b);
}

logParams(1, 2);
logParams(1);
logParams();

// default value => adiciona 0 caso não seja passado um valor como parametro
function defaultParams(a = 0, b = 0) {
    console.log(a, b);
}

defaultParams(1, 2);
defaultParams(1);
defaultParams();



function logNumsA(nums) {
    for (let n of nums) {
        console.log(n);
    }
}
logNumsA([1, 2, 3, 4]);


// spread/rest => transforma a sequancia em uma lista:
function logNumsB(...nums) {
    for (let n of nums) {
        console.log(n);
    }
}
logNumsB(5, 6, 7, 8);

