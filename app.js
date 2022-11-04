const calculadora = require('./calculadora');

console.log(calculadora.sumar(8,2));
console.log(calculadora.restar(8,2));
console.log(calculadora.multiplicar(8,2));
console.log(calculadora.multiplicar(0,2));
console.log(calculadora.dividir(8,2));
console.log(calculadora.dividir(0,2));

const process = require("process");
const operacion = process.argv[2];
const numeroA = +process.argv[3];
const numeroB = +process.argv[4];

//let resultado;

// if (operacion === "sumar") {
//   resultado = calculadora.sumar(numeroA, numeroB);
// } else if (operacion === "restar") {
//   resultado = calculadora.restar(numeroA, numeroB);
// } else if (operacion === "multiplicar") {
//   resultado = calculadora.multiplicar(numeroA, numeroB);
// } else if (operacion === "dividir") {
//   resultado = calculadora.dividir(numeroA, numeroB);
// } else {
//   resultado = "error: op no val";
// }
//console.log(resultado);
