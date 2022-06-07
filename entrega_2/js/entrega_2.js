//DEFINO ORIGEN POR DEFECTO MONTEVIDEO
let origen = 'Montevideo'

//DEFINO DESTINO VACÍO QUE ES LO QUE VA A ELEGIR EL USUARIO
let destino = '';

//DEFINO PRECIO POR KM
const precioKM = 2.5

//FUNCIÓN PARA CALCULAR EL PRECIO DEL VIAJE EN BASE A LA (DISTANCIA DEL DESTINO * CANTIDAD DE PASAJEROS * PRECIO DEL KM)
function calcPrecioViaje(){
    while(destino !== 'SALIR'){
        destino = prompt('Ingresa tu destino');
        switch (destino) {    
            case 'Salto':
                distance = 496;
                break;
        
            case 'Paysandú':
                distance = 378;
                break;
        
            case 'Maldonado':
                distance = 134;
                break;
        
            case 'Rivera':
                distance = 501;
                break;
        
            case 'Tacuarembó':
                distance = 390;
                break;
        
            case 'Melo':
                distance = 387;
                break;
        
            case 'Artigas':
                distance = 601;
                break;
        
            case 'Mercedes':
                distance = 278;
                break;
        
            case 'Minas':
                distance = 122;
                break;
        
            case 'San José':
                distance = 93;
                break;
        
            case 'Durazno':
                distance = 183;
                break;
        
            case 'Florida':
                distance = 98;
                break;
        
            case 'Treinta y Tres':
                distance = 286;
                break;
        
            case 'Colonia':
                distance = 177;
                break;
        
            case 'Rocha':
                distance = 210;
                break;
        
            case 'Fray Bentos':
                distance = 309;
                break;
        
            case 'Trinidad':
                distance = 188;
                break;
        
            case 'Canelones':
                distance = 46;
                break;
        
            case 'SALIR':
                alert('Usted decidió salir. Chau.');
                break;
            
            default:
                alert('Usted ha ingresado una ciudad incorrecta.')
        }
        cantidadPasajeros = prompt('Ingresa la cantidad de pasajeros');
        let precioViaje = (parseInt(distance) * precioKM * parseInt(cantidadPasajeros));
        alert('El precio de tu viaje desde ' + origen + ' a ' + destino + ' para ' + cantidadPasajeros + ' persona(s) es de ' + '$'+precioViaje);
    }
}
calcPrecioViaje();