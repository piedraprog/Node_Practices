let palabra = "probando seleccion de subacategoria";
let palabraArr = palabra.split("");

console.log(palabraArr.length);
console.log(palabraArr[12]);
console.log(palabraArr[1]);
console.log(palabraArr[1]);
console.log(palabraArr[23]);

let start = 24,
    end = 34

for (let i = start; i <= end; i++) {
  console.log(palabraArr[i]); // Imprime los números del inicio al fin
}

let objetos = 
  [
    {
        "name": "interes",
        "start": 1,
        "end": 6,
        "subcategory": true,
        "parentEntity": "890279455845512"
    },
    {
        "name": "lugar",
        "start": 9,
        "end": 24,
        "subcategory": false
    },
    {
        "name": "producto",
        "start": 24,
        "end": 46,
        "subcategory": false
    },
    {
        "name": "interes",
        "start": 0,
        "end": 8,
        "subcategory": false
    },
    {
        "name": "tipo_consulta",
        "start": 34,
        "end": 40,
        "subcategory": true,
        "parentEntity": "993029205346415"
    }
]

// Ordenar objetos por start de forma ascendente
objetos.sort((a, b) => a.start - b.start);

// Función para verificar si un objeto está contenido dentro de otro
function estaContenido(objetoA, objetoB) {
  return objetoA.start >= objetoB.start && objetoA.end <= objetoB.end;
}

let resultado = [objetos[0]];

for (let i = 1; i < objetos.length; i++) {
  let objetoActual = objetos[i];
  let seMovio = false;

  for (let j = 0; j < resultado.length; j++) {
    let objetoExistente = resultado[j];

    if (objetoActual.start >= objetoExistente.start && objetoActual.end <= objetoExistente.end) {
      // Si el objeto actual está completamente contenido en el objeto existente, colócalo después del objeto existente
      resultado.splice(j + 1, 0, objetoActual);
      seMovio = true;
      break;
    }
  }

  if (!seMovio) {
    // Si no se movió, simplemente agrégalo al final
    resultado.push(objetoActual);
  }
}


console.log(resultado);



