// Classes

class Producto {
    constructor(nombre,precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
    }

    retornarPrecio() {
        console.log(this.precio);
        return `El precio de ${this.nombre} es de ${this.precio} MXN`;
    }
}

const producto = new Producto('Cámara Canon SL3', 16000);
const producto1 = new Producto ('Monitor Curvo de 49"', 10000);
const producto2 = new Producto ('Laptop HP', 12500);



console.log(producto)
console.log(producto.formatearProducto())
console.log(producto.retornarPrecio())


// Herencia: pasar valores o atributos de un lado hacia otro.

class Libro extends Producto {
    constructor(nombre, precio, autor) {
        super(nombre, precio);
        this.autor = autor;
    }

    formatearProducto() {
        return `${super.formatearProducto()} y su autor es ${this.autor}`; // Cuando son return se pone el super como strings
    }

    retornarPrecio() {
        super.retornarPrecio();
        console.log(`Sí hay en existencias: ${this.nombre}`)
        // cuando son funciones se pone como método.
    }
}

const libro = new Libro('Cien años de Soledad', 200, 'Gabriel García Márquez')
const libro2 = new Libro('Demian', 150,'Herman Hesse')
const libro3 = new Libro('Las batallas en el desierto', 150, 'José Emilio Pacheco')

console.log(libro);
console.log(libro2);
console.log(libro3);

console.log(libro.formatearProducto());
console.log(libro.retornarPrecio());