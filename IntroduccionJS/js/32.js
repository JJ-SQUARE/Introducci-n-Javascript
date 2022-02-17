// Async / Await

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout( () => {
            resolve('los clientes fueron descargados.');
        }, 5000 );
    });
}

function descargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando pedidos... espere...');

        setTimeout( () => {
            resolve('los pedidos fueron descargados.');
        }, 3000 );
    });
}

async function app() {
    try {
        const resultado = await Promise.all([ descargarNuevosClientes(), descargarUltimosPedidos() ]);
        console.log(resultado[0]);
        console.log(resultado[1]);


    } catch (error) {
        console.log(error);
    }
}

app();

console.log()

// setInterval( function() {
//     console.log('set interval...')
// }, 3000)

// CUANDO SOLO ES UNA FUNCION ASYNC Y NO NECESITA ARREGLOS SE PONE ALGO ASÍ
// async function app() {
//     try {
//         const clientes = await descargarNuevosClientes();
//         console.log(clientes);

//     } catch (error) {
//         console.log(error);
//     }
// }
