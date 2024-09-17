//  Faça um algoritmo que calcule a área de um quadrado, em seguida mostre o dobro desta 
// área para o usuário.

const prompt = require("prompt-sync")()

const base = parseInt(prompt("Digite o valor da base: "))

const altura = parseInt(prompt("Digite o valor da altura: "))

const area = base * altura

const dobro = area * 2

console.log(`A área desse quadrado é de: ${area} m², e o dobro dessa área é de: ${dobro} m2`)
