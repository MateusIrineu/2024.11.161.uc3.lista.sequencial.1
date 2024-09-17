// Faça um algoritmo que converta metros para centímetros.

const prompt = require("prompt-sync")()

const numero = parseFloat(prompt("Digite um número em metros: "))

const centimetros = numero * 100

console.log(`O número em cetímetros é: ${centimetros} cm`)
