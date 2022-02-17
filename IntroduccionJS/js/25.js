

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

// ForEach --- Solo se usa en Arrays ¿OK?

carrito.forEach( producto => console.log(producto.nombre));

// Cuando se quiera mostrar algo en consola o imprimir en el HTML se usa el forEach. Si se busca que se itere y se imprima en la consola, es decir, 1 por 1.

// map

const arreglo2 = carrito.map( producto => `${producto.nombre} - ${producto.precio}`);

console.log(arreglo2)
// map crea un nuevo arreglo con lo que le digas que quieras retornar, con la posibilidad de filtrar alguna de las propiedades de los objetos contenidos en el Array
