
const boton = document.querySelector('#boton');

// boton.addEventListener('click', function(){
//     console.log('diste click');
// }) 

boton.addEventListener('click', function(){
    Notification.requestPermission()
        .then(resultado => console.log(`Permit is ${resultado}`))
})

if(Notification.permission == 'granted') {
    new Notification('Qué pedo rey', {
        icon: 'img/pug-icon.png',
        body: 'ah perro una notificación'
    })
}