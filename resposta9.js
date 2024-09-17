//  Faça um algoritmo que peça a temperatura em graus Fahrenheit, transforme e mostre a 
// temperatura em graus Celsius. (C = 5 * ((F-32) / 9)).

const prompt = require("prompt-sync")()

const f = parseInt(prompt("Digite a temperatura em F°: "))

const c = 5 * ((f - 32) / 9 )

console.log(`A temperatura em graus Celsius é: ${c} C°`)
