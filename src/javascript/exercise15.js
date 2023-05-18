

const recortarPalabras = (arrayPalabras, longitudMaxima) => {
    return arrayPalabras.map(palabra => {
        if (palabra.length > longitudMaxima) {
          return palabra.slice(0, longitudMaxima);
        } else {
          return palabra;
        }
    });
    // const [primeraPalabra, ...restoPalabras] = arrayPalabras;
    // const longitudMaxima = 7
    // const palabrasRecortadas = [primeraPalabra];

    // console.log(palabrasRecortadas)

    // let ultimaPalabraAgregada = primeraPalabra;
    // arrayPalabras.forEach(palabra => {

    //     console.log(palabra)
        
    //     // if (ultimaPalabraAgregada.length > longitudMaxima) {
    //     //     console.log(palabra)
    //     //     palabrasRecortadas.push(palabra);
            
    //     // } else {
    //         console.log(palabra.length   )
    //         if (palabra.length > longitudMaxima && primeraPalabra.length != longitudMaxima) {

    //             let palabraRecortada = palabra.slice(0, longitudMaxima);
    //             console.log(palabraRecortada)
    //             palabrasRecortadas.push(palabraRecortada);
            
    //         } else {
                
    //             palabrasRecortadas.push(palabra);
            
    //         }
    //     // }
    //     ultimaPalabraAgregada = palabrasRecortadas[palabrasRecortadas.length - 1];
    // });
    // return palabrasRecortadas;
}

const transform = (value, wordsToCut = null) => {
    if (value) {
        let title = value.split(' ');
        
        title = recortarPalabras(title,7)
        

        if (title.length < 8) {
            const newTitleLength = Math.floor(title.length / 2);
            const newTitle = title.slice(0, newTitleLength);
            const finalString = newTitle.join(' ');
            return finalString + '...';
        }  else  {
            const newTitleLength = Math.floor(title.length / 4);
            const newTitle = title.slice(0, newTitleLength);
            const finalString = newTitle.join(' ');
            return finalString.includes('(')
            ? finalString + '...)'
            : finalString + '...';
        }
    }
    return value;
}

let oracion = "anonimoaaaaaaaaa 1895y198 1234134 14134  aadadfadf adfadfa afadsfadf qqqqqqqqqqqqqqqqqqqqqq"
console.log( transform(oracion))


let fuap = "hola"

console.log(fuap.length)