// hacer que se incluya una subentidad dentro de un json
const fs = require("fs");
let form = {
  text: "pruebas de concepto para enviar al back todo esto a ver qlq",
  intention: "286863080628662",
  entities: [
    {
      id: "655678692996329",
      rol: "interes",
      start: 0,
      end: 6,
      body: "prueba",
      entities: [],
      confidence: "",
      name: "interes",
      subcategory: false,
    },
    {
      id: "655678692996329",
      rol: "interes",
      start: 3,
      end: 4,
      body: "prueba",
      entities: [],
      confidence: "",
      name: "interes",
      subcategory: true,
    },
    {
      id: "3553510651562037",
      rol: "producto",
      start: 25,
      end: 31,
      body: "envios",
      entities: [],
      confidence: "",
      name: "producto",
      subcategory: false,
    },
    {
      id: "890279455845512",
      rol: "interes",
      start: 35,
      end: 59,
      body: "back todo esto a ver qlq",
      entities: [],
      confidence: "",
      name: "interes",
      subcategory: false,
    },
    {
      id: "1261323727912850",
      rol: "tipo_consulta",
      start: 19,
      end: 49,
      body: " para enviar al back todo esto",
      entities: [],
      confidence: "",
      name: "tipo_consulta",
      subcategory: false,
    },
  ],
  traits: null,
};

let entitiesArr = [
  {
    body: "prueba",
    confidence: 100,
    end: 6,
    entities: {},
    id: "655678692996329",
    name: "interes",
    role: "interes",
    start: 0,
    type: "value",
    value: "prueba",
    color: "#FFF8DC",
    subcategory: false,
  },
  {
    name: "producto",
    roles: [
      {
        id: "3553510651562037",
        name: "producto",
      },
    ],
    lookups: ["free-text", "keywords"],
    keywords: [
      {
        keyword: "de sombrado pq no",
        synonyms: ["de sombrado pq no"],
      },
      {
        keyword: "envios",
        synonyms: ["enviar", "envio", "envios"],
      },
    ],
    id: "993029205346415",
    role: "producto",
    color: "#E6E6FA",
    confidence: 0,
    body: "rueb",
    start: 1,
    end: 5,
    subcategory: true,
  },
  {
    body: "envios",
    confidence: 100,
    end: 31,
    entities: {},
    id: "3553510651562037",
    name: "producto",
    role: "producto",
    start: 25,
    type: "value",
    value: "envios",
    color: "#FFE4E1",
    subcategory: false,
  },
  {
    name: "interes",
    roles: [
      {
        id: "655678692996329",
        name: "interes",
      },
    ],
    lookups: ["free-text", "keywords"],
    keywords: [
      {
        keyword: "hacen envios",
        synonyms: ["hacen envios"],
      },
      {
        keyword: "probando seleccion",
        synonyms: ['<span data-start="', "probando seleccion"],
      },
      {
        keyword: "prueba",
        synonyms: ["prueba"],
      },
      {
        keyword: "prueba de sombrado",
        synonyms: ["prueba de sombrado"],
      },
      {
        keyword: "prueba desde tikket ml jesus",
        synonyms: ["prueba desde tikket ml jesus"],
      },
      {
        keyword: "vio",
        synonyms: ["vio"],
      },
    ],
    id: "890279455845512",
    role: "interes",
    color: "#FAFAD2",
    confidence: 0,
    body: "back todo esto a ver qlq",
    start: 35,
    end: 59,
    subcategory: false,
  },
  {
    name: "tipo_consulta",
    roles: [
      {
        id: "1223982698242966",
        name: "tipo_consulta",
      },
    ],
    lookups: ["free-text", "keywords"],
    keywords: [
      {
        keyword: "envio a tikket",
        synonyms: ["envio a tikket"],
      },
      {
        keyword: "horario",
        synonyms: ["cuál es el horario de la oficina", "horario"],
      },
      {
        keyword: "informacion",
        synonyms: [
          "envios",
          "hacen envios",
          "hacen envios a valencia",
          "informacion",
          "me gustaria saber a cuales ciudades hacen envios",
          "realizan envios",
        ],
      },
      {
        keyword: "precios",
        synonyms: [
          "cuanto salen los envios",
          "cuáles son los precios para enviar",
          "el precio del envio",
          "gustaria conocer los precios para envios",
          "gustaria saber cuales son los precios de envio",
          "precio de los envios",
          "precio del envio",
          "precios",
          "quiero conocer los precios de envios",
        ],
      },
      {
        keyword: "tiempo",
        synonyms: ["cuanto tiempo dura el envio", "tiempo"],
      },
      {
        keyword: "ueba",
        synonyms: ["ueba"],
      },
    ],
    id: "1261323727912850",
    role: "tipo_consulta",
    color: "#E6E6FA",
    confidence: 0,
    body: " para enviar al back todo esto",
    start: 19,
    end: 49,
    subcategory: false,
  },
];

// Copia profunda del objeto form
const formCopy = JSON.parse(JSON.stringify(form));

// Filtrar las entidades para excluir las que tienen subcategory: true
formCopy.entities = formCopy.entities.filter((entity) => !entity.subcategory);
console.log(formCopy);
// Función para verificar si una entidad está dentro de otra entidad
function estaDentro(subentidad, entidadPrincipal) {
  return (
    subentidad.start >= entidadPrincipal.start &&
    subentidad.end <= entidadPrincipal.end
  );
}

// Iterar a través de las entidades en 'form'
for (let i = 0; i < formCopy.entities.length; i++) {
  const entidadPrincipal = formCopy.entities[i];
  entidadPrincipal.entities = []; // Inicializar la propiedad 'entities'
  // Iterar a través de las entidades en 'entitiesArr' para buscar subentidades
  for (let j = 0; j < entitiesArr.length; j++) {
    const subentidad = entitiesArr[j];

    // Verificar si la subentidad está dentro de la entidad principal
    if (
      estaDentro(subentidad, entidadPrincipal) &&
      subentidad.subcategory === true &&
      entidadPrincipal.subcategory === false
    ) {
      entidadPrincipal.entities.push(subentidad); // Agregar la subentidad
    }
  }
}

// El segundo argumento (null) es para la función de reemplazo y
//   el tercer argumento (2) es para la indentación
const formJSON = JSON.stringify(formCopy, null, 2);

// Escribir el JSON en un archivo
fs.writeFileSync("salida.json", formJSON);
console.log(form); // El objeto 'form' ahora contiene las subentidades dentro de la propiedad 'entities'

let confidence = undefined;

console.log(Math.floor(confidence * 100));

let palabra = "pruebas de envio en Barquisimeto";

let arrPalabra = palabra.split("");

console.log(arrPalabra[12]);
console.log(arrPalabra[21]);
