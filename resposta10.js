//  Faça um algoritmo que peça a temperatura em graus Celsius, transforme e mostre em 
// graus Fahrenheit

const prompt = require("prompt-sync")()

const c = parseFloat(prompt("Digite a temperatura em C°: "))

const f = (c * 9 / 5) + 32

console.log(`A temperatura em Fahrenheit é de: ${f} F°`)
