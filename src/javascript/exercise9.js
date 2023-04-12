let fuap = " lorem ipsum "

function mitadPalabras(cadena) {
    // separar las palabras en un array
    let palabras = cadena.split(" ");

    // obtener la mitad de la longitud del array
    let mitad = Math.floor(palabras.length / 4);
    console.log(mitad)
    // crear un nuevo array que contenga sólo la mitad de las palabras
    let nuevasPalabras = palabras.slice(0, mitad);
    
    // unir las palabras en una cadena de texto
    let nuevaCadena = nuevasPalabras.join(" ");

    return nuevaCadena.includes('(') ? nuevaCadena + '...)' : nuevaCadena + '...';

}

console.log(mitadPalabras(fuap))