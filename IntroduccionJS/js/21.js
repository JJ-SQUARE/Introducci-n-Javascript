// ---- Declaración de función ---- en esta función no importa el orden de la declaración y de la llamada, va a funcionar igual

// function multiply() {
//     console.log(10 * 15);
// } // Se establece la función

// multiply() // Llamar a la función para que haga su chamba

// En la declaración de la función no se pueden usar Arrow functions.

// -----------------------

// ---- Expresión de la función ---- en esta función sí importa el orden de la declaración y de la llamada, no va a funcionar

// const sumar = function() {
//     console.log(10 +10);
// };

// sumar(); 

// ---- Arrow functions ----

// Pasamos de esto:

// const sumar = function(n1, n2) {
//     console.log(n1 + n2);
// };

// sumar(5, 10); 

// A esto: 

const sumar = (n1, n2) => {
    console.log(n1 + n2);
};

sumar(5, 10); 

// Y si la función es de 1 sola línea se pueden quitar los "{}" y dejarlo todo en una sola.

const restar = (n1, n2) => console.log(n1 - n2);
restar(12, 4);

const aprendiendo = (tecnología1, tecnología2) => console.log(`Aprendiendo tecnologías: ${tecnología1} y ${tecnología2}`);
aprendiendo('Javascript', 'Python');

const desayunar = opción => console.log(`Hoy voy a desayunar: ${opción}`)
desayunar('torta')

// Arrays con Arrow function

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

// Pasamos de esto:

// meses.forEach( function(mes) {
//     if(mes == 'Marzo') {
//         console.log('Marzo sí existe');
// }}
// )

// A esto:

meses.forEach( mes => {
    if(mes == 'Marzo') {
        console.log('Marzo sí existe');
    }
});


// ---- Some ---- utilizado para arrays de objetos

// Pasamos de esto: 

// resultado = carrito.some(function(articulo){
//     return articulo.nombre === 'Celular'
// })
// console.log(resultado);

resultado = carrito.some( articulo => articulo.nombre === 'Celular')


// ---- Reduce ----

resultado = carrito.reduce((total, articulo) => total = articulo.precio, 0); 



// Filter 

resultado = carrito.filter(articulo => articulo.precio >= 6500);
console.log(resultado);

resultado1 = carrito.filter( articulo => articulo.nombre === 'Celular');
console.log(resultado1);

resultado2 = carrito.filter( articulo => articulo.nombre !== 'Celular'
);
console.log(resultado2);

// === Incluye criterio indicado
// !== Excluye criterio indicado



