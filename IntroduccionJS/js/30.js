// PROMISES

// Fulfilled

const usuarioAutenticado = new Promise( (resolve, reject) =>{
    const auth = true;
        if(auth) {
            resolve('Usuario autenticado')
        } else {
            reject('No se pudo iniciar sesión')
        }
    }
);

usuarioAutenticado
.then( resultado => console.log(resultado))
.catch( error => console.log(error))


// REJECTED
// const usuarioAutenticado = new Promise( (resolve, reject) =>{
//     const auth = true;
//         if(auth) {
//             resolve('Usuario autenticado')
//         } else {
//             reject('No se pudo iniciar sesión')
//         }
//     }
// );

// PENDING
// const usuarioAutenticado = new Promise( (resolve, reject) =>{
   
//         }
//     }
// );


// En los promises existen 3 valores
// Pending: No se ha cumplido ni rechazado.
// Fulfilled: Ya se cumplió.
// Rejected: Se rechazó o no se pudo cumplir.