//   Passar a função 'print()' para ser executada dentro da 
// função 'run()':

function run(funcao) {
    funcao();
}

function print() {
    console.log('Hello');
}

run(print);


//  Passando função anonimamente:
run(function () {
    console.log('Hello Two');
})


// Quando usar? 
// Quando você quiser que sua função só execute após uma 
// verificação de um determinada funcionalidade em outra função:
// Ex: Só pra executar a função passada, se n for maior que 5:
function run2(funcao, n) {
    if (n > 5)
        funcao();
}

function print2() {
    console.log("Só imprime se 'n' for maior que 5");
}

run2(print2, 6)