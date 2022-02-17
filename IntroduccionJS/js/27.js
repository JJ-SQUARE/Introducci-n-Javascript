// POO

// Objetos
// object literal

 const producto = {
     nombre: 'tablet',
     precio: 5000, 
 }

//  de esta forma se dice que se están pasando las propiedades es con código duro, es decir de una a una.

// Object constructor

function Producto (nombre, precio) {
    this.nombre = nombre,
    this.precio = precio
}

const producto1 = new Producto ('Monitor Curvo de 49"', 10000);
const producto2 = new Producto ('Laptop HP', 12500);

console.log(producto1)
console.log(producto2)

// function formatearProducto(producto1) {
//     return `El producto ${producto1.nombre} tiene un precio de: $ ${producto1.precio}`;
// }


// Si yo quisiera crear objetos  con otras propiedades tendría que estar creando muchas funciones por cada objeto. Con prototype eso lo evitaría.

// Prototype

Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
}

console.log(producto1.formatearProducto());

console.log(producto2.formatearProducto());


// Ejercicio cliente

function Cliente (nombre, apellido, ciudad, edad) {
    this.nombre = nombre,
    this.apellido = apellido,
    this.ciudad = ciudad,
    this.edad = edad
}

const cliente = new Cliente('Juan','Huerta', 'Veracruz', 27);
const cliente1 = new Cliente('Domingo','Esparza', 'Mazatlán', 40);
const cliente2 = new Cliente('Rosario','Tijeras', 'Barranquilla', 24);

console.log(cliente)

Cliente.prototype.formatearCliente = function() {
    return `El cliente ${this.nombre} ${this.apellido} de ${this.ciudad} tiene ${this.edad} años`;
}
Cliente.prototype.obtenerEdad = function() {
    return `la edad de ${this.nombre} ${this.apellido} es de ${this.edad} años`;
}

console.log(cliente.formatearCliente());

console.log(cliente1.formatearCliente());

console.log(cliente2.formatearCliente());

console.log(cliente1.obtenerEdad())