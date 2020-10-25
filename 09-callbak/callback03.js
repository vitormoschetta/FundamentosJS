// Map
const nums = [1, 2, 3, 4, 5]

const dobro = n => n * 2
const dobroMaisIndice = (n, i) => n * 2 + i
const dobroMaisIndiceMaisTamanhoArray = (n, i, a) => n * 2 + i + a.length

console.log(nums.map(dobro))
console.log(nums.map(dobroMaisIndice))
console.log(nums.map(dobroMaisIndiceMaisTamanhoArray))


const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = texto => texto[0]
console.log(nomes.map(primeiraLetra))