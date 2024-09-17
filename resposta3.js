// Faça um algoritmo que peça dois números e imprima a soma.

const prompt = require("prompt-sync")()

const numero1 = parseFloat(prompt("Digite o primeiro número: "))

const numero2 = parseFloat(prompt("Digite o segundo número: "))

const soma = numero1 + numero2

console.log(`A resposta é: ${soma}`)
