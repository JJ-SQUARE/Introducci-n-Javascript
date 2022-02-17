// This

const reservacion = {
    nombre: 'Juan',
    apellido: 'Huerta',
    total: 5000,
    pagado: false,
    información: function() {console.log(`${reservacion.nombre} ${reservacion.apellido}, total a pagar: ${reservacion.total}`)
},
}

// si se trata de poner un Arrow function va a marcar undefined porque va a llevar a la ventana global.

// Cuando pongo la función información va a tratar de sacar 'nombre', 'apellido' y 'total' de otras partes fuera del objeto, de primera marca error.

reservacion.información();

const reservacion2 = {
    nombre: 'Juan',
    apellido: 'Huerta',
    total: 5000,
    pagado: false,
    información: function() {console.log(`${this.nombre} ${this.apellido}, total a pagar: ${this.total}`)
},
}

reservacion2.información();

// this lo utilizo para evitar estar repitiendo el nombre de la variable dentro del string que está contenido en la función.