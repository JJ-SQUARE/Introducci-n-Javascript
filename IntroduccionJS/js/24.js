// For Loop

// for( let i = 0; i < 10; i++ ) {
//     console.log(i)
// }

// i es "indice"
// for ( valor con el que inicia el i (iniciando en 0); el código se va a ejecutar mientras el i cumpla con la 'condición'; incremento de uno en uno "i++")

// -----------------------
// Para que sólo se iteren los números que son pares menores o iguales a 100.

// for( let i = 0; i <= 100; i++ ) {
//     if( i % 2 === 0 ) {
//         console.log(`El número ${i} es PAR`)
//     }
//     else {
//         console.log(`El número ${i} es IMPAR`);
//     }
// }

const carrito = [
    { nombre: 'Monitor 20\"', precio: 3500},
    { nombre: 'Controlador MIDI', precio: 4600},
    { nombre: 'Tarjeta de Audio', precio: 5500},
    { nombre: 'Tablet', precio: 6500},
    { nombre: 'Bocinas', precio: 7900},
    { nombre: 'Televisión', precio: 9500},
    { nombre: 'Audifonos', precio: 500},
    { nombre: 'Celular', precio: 6500},
    { nombre: 'Laptop', precio: 16000},
];

for( let i = 0; i < carrito.length; i++ ) {
    console.log(carrito[i].nombre)
}
for( let i = 0; i < carrito.length; i++ ) {
    console.log(carrito[i].precio)
}

// 

//  While Loop

// let i = 1; // indice

// while( i < 100 ) {// condición
//     if(i % 2 === 0) {
//     console.log(`El número ${i} es PAR`)
//     } else {
//         console.log(`El número ${i} es IMPAR`)
//     }
//     i++; // Incremento
// }    

// let i = 0;

// while( i < carrito.length ) {
   
//     console.log(carrito[i].nombre)

//     i++;
// }    


//  Do While Loop

let i = 0;

do{

    i++;
} while (i < 10)


// While Loop: evalúa la condición y si no es verdadera no ejecuta el código. NO IMPRIME NADA.
// Do While Loop: Ejecuta el código al menos una vez y después evalúa.IMPRIME LA PRIMERA VARIABLE.