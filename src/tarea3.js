console.log("===========================================");
console.log("====================RETO=======================");

const aprendiz = {
  nombre: "Isa",
  ficha: 3169901,
  notas: [4.0, 4.5, 3.8],
};
const promedio = (aprendiz.notas[0] + aprendiz.notas[1] + aprendiz.notas[2]) / 3;
console.log(`Promedio : ${promedio.toFixed(2)}`);
console.log(`Aprendiz: ${promedio.nombre}\nFicha: ${promedio.ficha}\nPromedio: ${promedio.toFixed(2)}\nEstado: ${promedio >= 3 ? "Aprobado" : 
  "No Aprobado"
  }`
);
