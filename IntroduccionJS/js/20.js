// Métodos de propiedad: son funciones con sintaxis de Método

// Se puede colocar dentro del objeto.

const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo canción: ${id}`)
    },
    pausar : function(id) {
        console.log('Pausando...')
    },
    crearPlaylist : function(nombre) {
        console.log(`Creando la playlist: ${nombre}...`)
    },
    reproducirPlaylist : function(nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}...`)
    }
}

// Se puede colocar fuera del objeto.

reproductor.borrarCancion = function(id) {
    console.log(`Eliminanco canción con id: ${id}...`)
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(2200);
reproductor.crearPlaylist('T-Square')
reproductor.reproducirPlaylist('T-Square')
