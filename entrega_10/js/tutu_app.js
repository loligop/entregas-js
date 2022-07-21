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
    idViaje: 5,
    origen: "montevideo",
    destino: "salto",
    usuario: "Fiorella",
    asientosLibres: 2,
    precio: 890
}
const trip6 = {
    idViaje: 6,
    origen: "san josé",
    destino: "paysandú",
    usuario: "Francisco",
    asientosLibres: 3,
    precio: 300
}
const trip7 = {
    idViaje: 7,
    origen: "treinta y tres",
    destino: "rivera",
    usuario: "Ramiro",
    asientosLibres: 2,
    precio: 645
}
const trip8 = {
    idViaje: 8,
    origen: "paysandú",
    destino: "salto",
    usuario: "Daniela",
    asientosLibres: 1,
    precio: 1075
}
const trip9 = {
    idViaje: 9,
    origen: "salto",
    destino: "rocha",
    usuario: "Mario",
    asientosLibres: 1,
    precio: 350
}
const trip10 = {
    idViaje: 10,
    origen: "rivera",
    destino: "salto",
    usuario: "Fiorella",
    asientosLibres: 2,
    precio: 890
}
const trip11 = {
    idViaje: 11,
    origen: "tacuarembó",
    destino: "paysandú",
    usuario: "Francisco",
    asientosLibres: 3,
    precio: 300
}
const trip12 = {
    idViaje: 12,
    origen: "fray bentos",
    destino: "rivera",
    usuario: "Ramiro",
    asientosLibres: 2,
    precio: 645
}
const trip13 = {
    idViaje: 13,
    origen: "florida",
    destino: "salto",
    usuario: "Daniela",
    asientosLibres: 1,
    precio: 1075
}
const trip14 = {
    idViaje: 14,
    origen: "flores",
    destino: "rocha",
    usuario: "Mario",
    asientosLibres: 1,
    precio: 350
}
const trip15 = {
    idViaje: 15,
    origen: "durazno",
    destino: "salto",
    usuario: "Fiorella",
    asientosLibres: 2,
    precio: 890
}
const trip16 = {
    idViaje: 16,
    origen: "maldonado",
    destino: "paysandú",
    usuario: "Francisco",
    asientosLibres: 3,
    precio: 300
}
const trip17 = {
    idViaje: 17,
    origen: "canelones",
    destino: "rivera",
    usuario: "Ramiro",
    asientosLibres: 2,
    precio: 645
}
const trip18 = {
    idViaje: 18,
    origen: "treinta y tres",
    destino: "salto",
    usuario: "Daniela",
    asientosLibres: 1,
    precio: 1075
}
const trip19 = {
    idViaje: 19,
    origen: "rivera",
    destino: "rocha",
    usuario: "Mario",
    asientosLibres: 1,
    precio: 350
}
const trip20 = {
    idViaje: 20,
    origen: "artigas",
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
array.push(trip6);
array.push(trip7);
array.push(trip8);
array.push(trip9);
array.push(trip10);
array.push(trip11);
array.push(trip12);
array.push(trip13);
array.push(trip14);
array.push(trip15);
array.push(trip16);
array.push(trip17);
array.push(trip18);
array.push(trip19);
array.push(trip20);

//DEFINO VARIABLE PARA ORIGEN
let origen = '';

//DEFINO VARIABLE PARA DESTINO
let destino = '';


//CREO LOS ELEMENTOS QUE VOY A USAR PARA CARGAR DATOS
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
            li.className = 'list-group-item';
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
//BOTÓN LOGIN
const btn = document.querySelector('#login')
btn.addEventListener('click', () => {
    swal({
        text: 'Ingresa tu nombre de usuario.',
        content: "input",
        button: {
            text: "Ingresar",
            closeModal: false,
        },
    })
    .then((value) => {
        swal(`Bienvenido: ${value}`);
        sessionStorage.setItem('username',(value));
        location.reload();
    });
})

//CARGO NOMBRE DE USUARIO AL LADO DEL MENÚ
let username_storage = sessionStorage.getItem('username');
let storageUsername = document.getElementById('login-name');
span.innerHTML = (`
    ${username_storage}
    `
)
storageUsername.appendChild(span);
let loginButton = document.getElementById('login');
let logoutButton = document.getElementById('logout');
logoutButton.onclick = () => { 
    sessionStorage.clear();
    location.reload();
};
if (username_storage != null){
    loginButton.classList.add("d-none");
    logoutButton.classList.add("d-block");
    storageUsername.classList.add("d-block");
} else {
    loginButton.classList.add("d-block");
    logoutButton.classList.add("d-none");
    storageUsername.classList.add("d-none");
}
//FUNCIÓN PARA CARGAR LOS ÚLTIMOS VIAJES DESDE EL JSON
function loadLastTrips() {
    const lastTripsList = document.querySelector('#last-trips-container')
    fetch('../viajes.json')
        .then( (res) => res.json())
        .then( (data) => {

            data.forEach((viaje) => {
                const tr = document.createElement('tr')
                tr.innerHTML = `
                    <td>${viaje.fecha}</td>
                    <td>${viaje.origen.toUpperCase()}</td>
                    <td>${viaje.destino.toUpperCase()}</td>
                    <td style="text-align: center;">${viaje.asientosLibres}</td>
                `
                lastTripsList.append(tr)
            })
        })
}