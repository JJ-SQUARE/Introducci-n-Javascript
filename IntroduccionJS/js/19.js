/*function sumar(numero1 = 0, numero2 = 0) {
    return numero1 + numero2;
}
const resultado = sumar(2, 3);

console.log(resultado);
*/

let total = 0; 

function agregarCarrito(precio) {
    return total += precio;
}

total = agregarCarrito(200);
total = agregarCarrito(1600);
total = agregarCarrito(2100);
total = agregarCarrito(25);

console.log(total);

// En esta ocasión, por la función la variable 'total' se fue añadiendo por cada vez que se ingresó un nuevo valor.

function calcularImpuesto(total) {
    return 1.16 * total;
}

const totalAPagar = calcularImpuesto(total)

// Aquí para hacer el cálculo, se tomó el historial de la variable total y se llegó a 

console.log(`El total a pagar con impuestos es de: ${totalAPagar}`);