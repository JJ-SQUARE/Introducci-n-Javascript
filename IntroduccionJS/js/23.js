const metodoPago = 'paypal'

switch(metodoPago) {
    case 'crédito':
        console.log('Pago con crédito');
        break;
    case 'débito':
        console.log('Pago con Débito');
        break;z
    case 'efectivo':
        console.log('Pago con efectivo');
        break;z
    case 'transferencia interbancaria':
        console.log('Pago con Débito');
        break;z
    case 'paypal':
        console.log('Pago con paypal');
        break;z
    default: 
        console.log('Método de pago no disponible');
        break;
}