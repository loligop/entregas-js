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
const trip1 = new ViajesPublicado(1, 'montevideo', 'paysandú', 'Francisco', 3, 300);
const trip2 = new ViajesPublicado(2, 'montevideo', 'rivera', 'Ramiro', 2, 645);
const trip3 = new ViajesPublicado(3, 'montevideo', 'salto', 'Daniela', 1, 1075);
const trip4 = new ViajesPublicado(4, 'montevideo', 'rocha', 'Mario', 1, 350);
const trip5 = new ViajesPublicado(5, 'montevideo', 'tacuarembó', 'Fiorella',2, 890);

//ARRAY QUE RECORRE LOS VIAJES
const array = [];
array.push(trip1);
array.push(trip2);
array.push(trip3);
array.push(trip4);
array.push(trip5);

//DEFINO VARIABLE PARA ORIGEN
let origen = '';

//DEFINO VARIABLE PARA DESTINO
let destino = '';

function buscarViajes(){
    let form = document.getElementById('search-form');
    form.addEventListener('submit', (event) =>{
        event.preventDefault();
        origen = document.getElementById('from-field').value;
        destino = document.getElementById('to-field').value;
        console.log(origen);
        console.log(destino);
        let filtrarViajes = array.filter((viaje) => {
            return viaje.origen === origen.toLowerCase() && viaje.destino === destino.toLowerCase();
        });
        let messagesContainer = document.getElementById("messages-container");
        if (filtrarViajes.length == '0'){
            let p = document.createElement("p");
            p.innerHTML = `No encontramos viajes de ${origen.toUpperCase()} a ${destino.toUpperCase()}`
            messagesContainer.appendChild(p);
        }
         //LISTA CON VIAJES ENCONTRADOS
        let tripsList = document.getElementById("trips-list");
        for (const viajes of filtrarViajes){
            let li = document.createElement("li");
            li.innerHTML = `
            Origen: ${viajes.origen.toUpperCase()} <br/> 
            Destino: ${viajes.destino.toUpperCase()} <br/>
            Precio: ${viajes.usuario} <br/> 
            Asientos Libres: ${viajes.asientosLibres} <br/> 
            Costo: $${viajes.precio} c/u.` ;
            tripsList.appendChild(li)
        };
        
    })
}
const button = document.getElementById('search-button');
button.onclick = ()=>{
    buscarViajes();
}
