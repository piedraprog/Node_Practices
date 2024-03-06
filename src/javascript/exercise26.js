// Recortar la primera palabra de un string separado por un : 

let palabra = "mensaje_del_bot:mensaje_del_bot";
console.log(palabra.split(":")[0]);



// Crear un array con objetos dentro siguiendo {value : number, text: string} justo sirve para un select 
const percents = [];

for (let i = 0; i <= 100; i += 5) {
  const value = i / 100;
  const text = `${i}%`;
  percents.push({ value, text });
}

console.log(percents);
