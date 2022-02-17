const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: 'Monitor 20\"', precio: 3500},
    { nombre: 'Monitor 24\"', precio: 4600},
    { nombre: 'Monitor 29\"', precio: 5500},
    { nombre: 'Monitor 32\"', precio: 6500},
    { nombre: 'Monitor 35\"', precio: 7900},
    { nombre: 'Monitor 40\"', precio: 9500},
    { nombre: 'audifonos', precio: 500},
    { nombre: 'Celular', precio: 6500},
    { nombre: 'Laptop', precio: 16000},
];

console.log(carrito);

// meses.forEach( function(mes) {
//    console.log(mes);
// }); // devuelve una lista con cada uno de los meses.

meses.forEach( function(mes) {
    if(mes == 'Marzo') {
        console.log('Marzo sí existe');
}}
)

// Includes 

// const resultado = meses.includes('Marzo');
// console.log('Marzo sí existe'); ------ LO MISMO PERO Devuelve "Marzo sí existe"

let resultado = meses.includes('Marzo');
console.log(resultado); // LO MISMO PERO Devuelve "true"


// Some --- utilizado para arrays de objetos

resultado = carrito.some(function(articulo){
    return articulo.nombre === 'Celular'
})
console.log(resultado);

// NOTA: 'artículo' es algo que yo defino en la misma función, se toman los valores declarados en el Array para integrarlo en este caso 'nombre' y 'precio', lo único que tengo que tener cuidado es que vaya alineado con el historial de cómo se van modificando las variables.

// Reduce ---- Hace una suma de todos los elementos del carrito, determinado por la propiedad del objeto en el Array (en este caso Precio)

// resultado = carrito.reduce(function(total, articulo) {
//     return total = articulo.precio
// }, 0);


resultado = carrito.reduce((total, articulo) => total = articulo.precio, 0); //Lo mismo que antes pero con Arrow Function


// Filter 

resultado = carrito.filter(function(articulo) {
    return articulo.precio >= 6500
});

resultado = carrito.filter(function(articulo) {
    return articulo.nombre !== 'Celular'
});

// === Incluye criterio indicado
// !== Excluye criterio indicado



console.log(resultado);