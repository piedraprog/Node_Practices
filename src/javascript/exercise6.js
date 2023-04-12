const estados = [
    {
        "dia y hora": "ufabsgba",
        "Descripcion": "asdjbfiajbgbz"
    },
    {
        "dia y hora": "ufabsgba",
        "Descripcion": "asdjbfiajbgbz"
    },
    {
        "dia y hora": "ufabsgba",
        "Descripcion": "asdjbfiajbgbz"
    },
]



const newEstado = "Estado: \n" + estados.map(i => `Dia y Hora:${i["dia y hora"]} \n Descripcion: ${i.Descripcion} \n`).join("\n");
console.log(newEstado)