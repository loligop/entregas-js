const trip1 = {
    idViaje: 1,
    origen: "montevideo",
    destino: "paysandú",
    usuario: "Francisco",
    asientosLibres: 3,
    precio: 300
}
const trip2 = {
    idViaje: 2,
    origen: "montevideo",
    destino: "rivera",
    usuario: "Ramiro",
    asientosLibres: 2,
    precio: 645
}
const trip3 = {
    idViaje: 3,
    origen: "montevideo",
    destino: "salto",
    usuario: "Daniela",
    asientosLibres: 1,
    precio: 1075
}
const trip4 = {
    idViaje: 4,
    origen: "montevideo",
    destino: "rocha",
    usuario: "Mario",
    asientosLibres: 1,
    precio: 350
}
const trip5 = {
    idViaje: 4,
    origen: "montevideo",
    destino: "salto",
    usuario: "Fiorella",
    asientosLibres: 2,
    precio: 890
}

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

let li = document.createElement("li");

let p = document.createElement("p");

let span = document.createElement("span");

let cheaper = document.createElement("label")

//ARRAY DE PRECIOS CON DESESTRUCTURACIÓN
const precios = [trip1.precio, trip2.precio, trip3.precio, trip4.precio, trip5.precio];

//PRECIO MÁS BARATO CON SPREAD
let showCheaper = document.getElementById("cheaper-price");
cheaper.innerHTML = (`
    $${Math.min(...precios)}
    `
)
showCheaper.appendChild(cheaper);


//FUNCIÓN BUSCAR VIAJE
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
        //OPERADOR LÓGICO AND
        filtrarViajes.length === 0 && p.remove();
                                      li.remove();
                                      p.innerHTML = `No encontramos viajes de ${origen.toUpperCase()} a ${destino.toUpperCase()}`
                                      messagesContainer.appendChild(p);
         //LISTA CON VIAJES ENCONTRADOS
        let tripsList = document.getElementById("trips-list");
        for (const viajes of filtrarViajes){
            localStorage.clear();
            li.remove();
            p.remove();
            li.innerHTML = `
            Origen: ${viajes.origen.toUpperCase()} <br/> 
            Destino: ${viajes.destino.toUpperCase()} <br/>
            Precio: ${viajes.usuario} <br/> 
            Asientos Libres: ${viajes.asientosLibres} <br/> 
            Costo: $${viajes.precio} c/u.` ;
            tripsList.appendChild(li);
        };
        
        //GUARDO EN EL LOCAL STORAGE LA ÚLTIMA BÚSQUEDA
        localStorage.setItem('search_origin',(origen));
        localStorage.setItem('search_destiny',(destino));
        let origin_storage = localStorage.getItem('search_origin');
        let destiny_storage = localStorage.getItem('search_destiny');
        let storageResults = document.getElementById('last-search-container');
        span.innerHTML = (`
        Su última búsqueda fue de ${origin_storage} a ${destiny_storage}
            `
        )
        storageResults.appendChild(span);
    })
}
//BOTÓN BUSCAR
const button = document.getElementById('search-button');
button.onclick = ()=>{
    buscarViajes();
}
