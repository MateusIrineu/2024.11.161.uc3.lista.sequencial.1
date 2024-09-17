// Faça um algoritmo que peça o raio de um círculo, calcule e mostre sua área.

const prompt = require("prompt-sync")()

const raio = parseInt(prompt("Digite o raio desejado: "))

const area = 3.14 * (raio ** 2)

console.log(`A área do círculo será: ${area.toFixed(2)}`)

