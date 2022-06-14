//ARRAY DE VIAJES PUBLICADOS
class PublishedTrips{
    constructor (idViaje , origen, destino, usuario, asientosLibres, precio){
        this.viaje = idViaje
        this.origen = origen
        this.destino = destino;
        this.usuario = usuario;
        this.asientosLibres = asientosLibres;
        this.precio = precio;
    }
}
const v1 = new PublishedTrips(1, 'Salto', 'Paysandú', 'Francisco', 3, 300);
const v2 = new PublishedTrips(2, 'Pando', 'Rivera', 'Ramiro', 2, 645);
const v3 = new PublishedTrips(3, 'Artigas', 'Montevideo', 'Daniela', 1, 1075);
const v4 = new PublishedTrips(4, 'Maldonado', 'Rocha', 'Mario', 1, 350);
const v5 = new PublishedTrips(5, 'Treinta y Tres', 'Tacuarembó', 'Fiorella', 2, 890);

console.log(v1);
console.log(v2);
console.log(v3);
console.log(v4);
console.log(v5);