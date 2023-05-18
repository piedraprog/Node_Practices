// Primer ID a buscar
let idABuscar = "17841448644860206";

// Objeto
let objeto = [
    {
        "channels": [
            "132141343222",
            "134123143134",
            "13412374134y1838481",
            "1234141341322"
        ],
        "option": false,
        "id": "aABDBADBSUABFUAUBDUABV"
    }
];


// Verificar si el primer ID coincide con algún ID dentro de "channels"
let coincide = false;
let optionalSend;

for (var i = 0; i < objeto.length; i++) {
    if (objeto[i].channels.includes(idABuscar)) {
        coincide = true;
        optionalSend = objeto[i].optional_send;
        break;
    }
}


// // Imprimir el resultado
if (coincide) {
    console.log("El primer ID coincide con al menos un ID dentro de 'channels'");
    console.log("Optional send ", optionalSend);
} else {
    console.log("El primer ID no coincide con ninguno de los ID dentro de 'channels'");
}