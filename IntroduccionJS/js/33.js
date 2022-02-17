// FETCH API

async function obtenerEmpleados() {
    const EmpleadosDB = "empleados.json"
    // fetch(EmpleadosDB)
    //     .then( resultado => resultado.json()) // Promise
    //     .then( datos => {
    //         // console.log(datos);
    //         const { empleados } = datos; // Destructuring
    //         empleados.forEach( empleado => {
    //             console.log(empleado);
    //             console.log(empleado.id);
    //             console.log(empleado.nombre);
    //             console.log(empleado.puesto);
    //         })
    //     })

    const resultado = await fetch(EmpleadosDB);
    const datos = await resultado.json();
        console.log(datos);
    const { empleados } = datos;
        empleados.forEach(empleado => {
            console.log(empleado);
            console.log(empleado.nombre)   
    });

}

obtenerEmpleados()



// Lo mismo que arriba pero un poco más largo
// function obtenerEmpleados() {
//     const EmpleadosDB = "empleados.json"
//     fetch(EmpleadosDB)
//         .then( resultado => {
//             return resultado.json();
//         })
//         .then( datos => {
//             console.log(datos);
//         })
// }