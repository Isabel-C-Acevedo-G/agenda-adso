const nombreCompleto = "Isabel Acevedo"; 
const numeroFicha = "3169901"; 


const notas = [3.5, 4.0, 2.8]; 

const promedio = (notas [0] + notas[1] + notas[2]) / 3

const estado = promedio >= 3.0 ? "Aprobado" : "No Aprobado";


console.log("==============================");
console.log(`aprendiz: ${nombreCompleto}`);
console.log(`Ficha: ${numeroFicha}`);
console.log(`Notas: ${notas.join(", ")}`);
console.log("==============================");
console.log(`Promedio: ${promedio.toFixed(2)}`);
console.log(`Estado: ${estado}`);
console.log("==============================");