const count = n => {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
count(5);


// identificar o numero maior e dividi-lo pelo menor
// não pode dar erro ou undefinid
// usando Operador TERNÁRIO:
function range(a, b) {
    const n1 = a == undefined ? 1 : a;
    const n2 = b == undefined ? 1 : b;
    if (n1 > n2) {
        console.log(n1 / n2);
    }
    else {
        console.log(n2 / n1);
    }

}
range(5);

// mesma funcao acima. Aqui o valor 1 é atribuída caso o parametro nao seja informado:
function range2(n1 = 1, n2 = 1) {
    if (n1 > n2) {
        console.log(n1 / n2);
    }
    else {
        console.log(n2 / n1);
    }

}

range2();