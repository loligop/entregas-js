//CLASE DE VIAJES PUBLICADOS
class ViajesPublicado{
    constructor (idViaje , origen, destino, usuario, asientosLibres, precio){
        this.idViaje = idViaje
        this.origen = origen
        this.destino = destino;
        this.usuario = usuario;
        this.asientosLibres = asientosLibres;
        this.precio = precio;
    }
    mostrarViaje(){
        return this.origen + this.destino;
    }
}
const trip1 = new ViajesPublicado(1, 'Montevideo', 'Paysandú', 'Francisco', 3, 300);
const trip2 = new ViajesPublicado(2, 'Montevideo', 'Rivera', 'Ramiro', 2, 645);
const trip3 = new ViajesPublicado(3, 'Montevideo', 'Salto', 'Daniela', 1, 1075);
const trip4 = new ViajesPublicado(4, 'Montevideo', 'Rocha', 'Mario', 1, 350);
const trip5 = new ViajesPublicado(5, 'Montevideo', 'Tacuarembó', 'Fiorella',2, 890);

const array = [];
array.push(trip1);
array.push(trip2);
array.push(trip3);
array.push(trip4);
array.push(trip5);

//DEFINO ORIGEN POR DEFECTO MONTEVIDEO
let origen = 'Montevideo';

//DEFINO DESTINO VACÍO QUE ES LO QUE VA A ELEGIR EL USUARIO
let destino = '';

//VARIABLE VACÍA PARA VER SÍ EL USUARIO QUIERE QUE LE MUESTRE VIAJES O NO
let mostrarViajes = '';

//DEFINO PRECIO POR KM
const precioKM = 2.5;


function Calcular (distance, cantidadPasajeros) {
    let precioViaje = (parseInt(distance) * precioKM * parseInt(cantidadPasajeros));
    return precioViaje;
}


//FUNCIÓN PARA CALCULAR EL PRECIO DEL VIAJE EN BASE A LA (DISTANCIA DEL DESTINO * CANTIDAD DE PASAJEROS * PRECIO DEL KM)
function Comenzar() {
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
                alert('Usted ha ingresado una ciudad incorrecta.');
        }
        cantidadPasajeros = prompt('Ingresa la cantidad de pasajeros');
        let precioViaje = Calcular(distance, cantidadPasajeros);
        alert('El precio de tu viaje desde ' + origen + ' a ' + destino + ' para ' + cantidadPasajeros + ' persona(s) es de ' + '$'+precioViaje);
        mostrarViajes = prompt('¿Desea ver los viajes existentes a ' + destino + '? (SI/NO)');
        console.log(mostrarViajes);
            if (mostrarViajes === 'SI') {
                let filtrarViajes = array.filter((viaje) => {
                    return viaje.destino === destino;
                })
                console.log(filtrarViajes);
                break;
            } else{
                mostrarViajes = alert('Te esperamos en tu próxima visita.')
            }
            
    }
}
Comenzar();