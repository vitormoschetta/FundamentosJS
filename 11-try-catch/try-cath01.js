function testeErro(num1, num2) {
    try {
        return num1 * num2
    } catch (error) {
        return error
    }
}

console.log(testeErro(2, 'a'))