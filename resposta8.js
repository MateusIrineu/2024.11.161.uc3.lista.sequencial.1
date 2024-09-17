// Faça um algoritmo que pergunte quanto você ganha por hora e o número de horas 
// trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

const prompt = require("prompt-sync")()

const salario = parseFloat(prompt("Digite quanto você ganha por hora: "))

const horas = parseFloat(prompt("Digite o número de horas trabalhadas no mês: "))

const total = salario * horas

console.log(`O total de seu salário no referido mês é de: ${total} reais`)
