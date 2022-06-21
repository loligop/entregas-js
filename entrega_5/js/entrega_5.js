//CLASE DE VIAJES PUBLICADOS
class ViajesPublicado{
    constructor (idViaje , origen, destino, usuario, asientosLibres, precio){
        this.idViaje = idViaje;
        this.origen = origen;
        this.destino = destino;
        this.usuario = usuario;
        this.asientosLibres = asientosLibres;
        this.precio = precio;
    }
}
const trip1 = new ViajesPublicado(1, 'Montevideo', 'Paysandú', 'Francisco', 3, 300);
const trip2 = new ViajesPublicado(2, 'Montevideo', 'Rivera', 'Ramiro', 2, 645);
const trip3 = new ViajesPublicado(3, 'Montevideo', 'Salto', 'Daniela', 1, 1075);
const trip4 = new ViajesPublicado(4, 'Montevideo', 'Rocha', 'Mario', 1, 350);
const trip5 = new ViajesPublicado(5, 'Montevideo', 'Tacuarembó', 'Fiorella',2, 890);

//ARRAY QUE RECORRE LOS VIAJES
const array = [];
array.push(trip1);
array.push(trip2);
array.push(trip3);
array.push(trip4);
array.push(trip5);

//LISTA CON ÚLTIMOS VIAJES PUBLICADOS
let tripsList = document.getElementById("trips-list");
for (const trip of array) {
    let li = document.createElement("li");
    li.innerHTML = `
    Origen: ${trip.origen} <br/> 
    Destino: ${trip.destino} <br/>
    Precio: ${trip.usuario} <br/> 
    Asientos Libres: ${trip.asientosLibres} <br/> 
    Costo: $${trip.precio}c/u.` ;
    tripsList.appendChild(li)
}