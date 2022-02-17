// Arrays 
// Los Arrays se ponen con [] a diferencia de los objetos que son con {}
const numeros = [10, 20, 30, 40, 50];

// const arreglo = ["Hola", 10, true, "sí", {nombre: "Juan", trabajo: "Programador"}, [1,2,3]];

// console.table(arreglo);

// //  Acceder a los valores de un Array

// console.log(meses[2]);
// console.log(meses[4]);
// console.log(meses[10]); // No existe. dice 'undefined'

// // Conocer la extensión de un Array

// console.log(meses.length); // cuántos elementos componen un Array

// meses.forEach( function(mes) {
//     console.log(mes);
// }); // sirve para iterar uno a uno los elementos que están en un arreglo.

//  --------------------------------------
// Aumentar en los Arrays
// numeros[5] = 60;  No tan usado

// Push y Unshift - Más usado, hooy en día no se recomienda modificar los Arrays originales

numeros.push(60, 70, 80) // Agrega al final del Array

numeros.unshift(-10, -20, -30)// Agrega al inicio del Array

console.table(numeros);

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

// meses.pop() // Elimina del final del Array
// meses.shift() // Elimina del inicio del Array
// meses.splice(1,1); // elimina el elemento según su indice (lugar en el indice, cuantos más elimina desde aquí)


// --------- Rest operator o Spread Operator

const nuevoArreglo = ['Diciembre', ... meses, 'Junio'];
console.log(nuevoArreglo);

console.table(nuevoArreglo);