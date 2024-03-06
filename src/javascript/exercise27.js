let object = {
    "mensaje_del_bot:probando": [
      {
        body: "fuap fuap",
        confidence: 1,
        end: 9,
        entities: {},
        id: "786023946606871",
        name: "mensaje_del_bot",
        role: "probando",
        start: 0,
        type: "value",
        value: "fuap fuap",
      },
      {
        body: "fuap fuap",
        confidence: 1,
        end: 19,
        entities: {},
        id: "786023946606871",
        name: "mensaje_del_bot",
        role: "probando",
        start: 10,
        type: "value",
        value: "fuap fuap",
      },
    ],
    "pruebas:pruebas": [
      {
        body: "prueba",
        confidence: 1,
        end: 26,
        entities: {},
        id: "6528070247268726",
        name: "pruebas",
        role: "pruebas",
        start: 20,
        type: "value",
        value: "prueba",
      },
      {
        body: "prueba",
        confidence: 1,
        end: 33,
        entities: {},
        id: "6528070247268726",
        name: "pruebas",
        role: "pruebas",
        start: 27,
        type: "value",
        value: "prueba",
      },
    ],
  };
  
  function extraerObjetos(objeto) {
    const resultados = [];
  
    for (const key in objeto) {
      if (objeto.hasOwnProperty(key)) {
        resultados.push(...objeto[key]);
      }
    }
  
    return resultados;
  }
  
  const objetosExtraidos = extraerObjetos(object);
  // console.log(objetosExtraidos);



let entity = [
  {
    body: 'probando malta para eni',
    confidence: 99,
    end: 23,
    entities: {
      
    },
    id: '655678692996329',
    name: 'interes',
    role: 'interes',
    start: 0,
    suggested: true,
    type: 'value',
    value: 'probando malta para eni',
    color: '#00CED1',
  },
]

console.log(!entity[0].entities.body )