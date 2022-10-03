// Este ejercicio se basa en determinar la cantidad de personas menores de edad 
// se muestran diferentes maneras de hacerlo 


const invitados = {
    Luna: {
        edad: 25
    },
    Sebas: {
        edad: 7
    }, 
    Marce:{
        edad: 34
    },
    Nicky:{
        edad: 17
    },
    penelope:{
        edad: 29
    },
    manuel:{
        edad: 30
    },
    jaunito:{
        edad: 40
    },
    pancho:{
        edad: 50
    },
    Juan:{
        edad: 60
    }
}


// JOSE 
let inviEdad = []; 

for (const key in invitados) {
    if (Object.hasOwnProperty.call(invitados, key)) {
        inviEdad.push(invitados[key]["edad"]);        
    }
}

const menores = inviEdad.map(val=>{
    return val;
}).filter(val=> val < 18)

console.log(menores.length)

// OSCAR 
function menor_edad(inv){
    var suma =0;
    for (const [key, value] of Object.entries(inv)) {
        if(value['edad'] < 18){
            suma++;
        }
    }
    return suma
  }
console.log(menor_edad(invitados))

// KEVINC 
const countMenores = (invitados = {}) => {
    const menores = Object.values(invitados).filter((invitado) => invitado.edad < 18);
    return Object.values(menores).length;
};
  
const res = countMenores(invitados);
console.log(res);