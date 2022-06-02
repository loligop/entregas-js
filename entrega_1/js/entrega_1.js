//EJEMPLO 1
let numeroIngresado = prompt('Ingresa un número');
for (let index = 1; index <= 12; index++) {
    let resultado = parseInt(numeroIngresado) + index;
    console.log('Resultado ingresado ' + numeroIngresado + ', sumando ' + index + '= ' + resultado);
}
//EJEMPLO 2
// let entrada = '';
// while(entrada !== 'SALIR'){
//     entrada = prompt('Ingresa tu ciudad de nacimiento');
//     switch (entrada) {
//         case 'Montevideo':
//             alert('Tu ciudad de nacimiento es: ' + entrada)
//             break;
    
//         case 'Salto':
//             alert('Tu ciudad de nacimiento es: ' + entrada)
//             break;
    
//         case 'Paysandú':
//             alert('Tu ciudad de nacimiento es: ' + entrada)
//             break;
    
//         case 'Maldonado':
//             alert('Tu ciudad de nacimiento es: ' + entrada)
//             break;
    
//         case 'Rivera':
//             alert('Tu ciudad de nacimiento es: ' + entrada)
//             break;
    
//         case 'Tacuarembó':
//             alert('Tu ciudad de nacimiento es: ' + entrada)
//             break;
    
//         case 'Melo':
//             alert('Tu ciudad de nacimiento es: ' + entrada)
//             break;
    
//         case 'Artigas':
//             alert('Tu ciudad de nacimiento es: ' + entrada)
//             break;
    
//         case 'Mercedes':
//             alert('Tu ciudad de nacimiento es: ' + entrada)
//             break;
    
//         case 'Minas':
//             alert('Tu ciudad de nacimiento es: ' + entrada)
//             break;
    
//         case 'San José':
//             alert('Tu ciudad de nacimiento es: ' + entrada)
//             break;
    
//         case 'Durazno':
//             alert('Tu ciudad de nacimiento es: ' + entrada)
//             break;
    
//         case 'Florida':
//             alert('Tu ciudad de nacimiento es: ' + entrada)
//             break;
    
//         case 'Treinta y Tres':
//             alert('Tu ciudad de nacimiento es: ' + entrada)
//             break;
    
//         case 'Colonia':
//             alert('Tu ciudad de nacimiento es: ' + entrada)
//             break;
    
//         case 'Rocha':
//             alert('Tu ciudad de nacimiento es: ' + entrada)
//             break;
    
//         case 'Fray Bentos':
//             alert('Tu ciudad de nacimiento es: ' + entrada)
//             break;
    
//         case 'Trinidad':
//             alert('Tu ciudad de nacimiento es: ' + entrada)
//             break;
    
//         case 'Canelones':
//             alert('Tu ciudad de nacimiento es: ' + entrada)
//             break;
    
//         case 'SALIR':
//             alert('Usted decidió salir. Chau.');
//             break;
        
//         default:
//             alert('Usted ha ingresado una ciudad incorrecta.')
        
//     }
// }
//EJEMPLO 3
// let repeticionesIngresadas = prompt('Ingresa la cantidad de veces a repetir el texto a ingresar');
// let textoIngresado    = prompt('Ingresa el texto a repetir');
// for (let index = 0; index < repeticionesIngresadas; index++) {
//     console.log((index+1) + ' ' + textoIngresado);
// }