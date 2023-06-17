

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
        console.log(title)
        if (title.length === 2 && wordsLengthToCut !== undefined) {
          if (title[1].length < 10) return value;
  
          title = title.map((word) => {
            if (word.length > wordsLengthToCut) {
              return word.slice(0, wordsLengthToCut);
            } else {
              return word;
            }
          });
  
          const newTitleLength = Math.floor(title.length / 8);
          const newTitle = title.slice(0, newTitleLength);
          const finalString = newTitle.join(' ');
  
          return finalString + '...';
        } else if (title.length >= 8) {
          const newTitleLength = Math.floor(title.length / 2);
          const newTitle = title.slice(0, newTitleLength);
          const finalString = newTitle.join(' ');
          return finalString.includes('(')
            ? finalString + '...)'
            : finalString + '...';
        }
      }
      return value;
}

// const transform = (value, wordsToCut = null) => {
//     if (value) {
        
//         let title = value.split(' ');
        
//         title = recortarPalabras(title,7)
        
//         if (title.length < 8) {
//             const newTitleLength = Math.floor(title.length / 2);
//             const newTitle = title.slice(0, newTitleLength);
//             const finalString = newTitle.join(' ');
//             return finalString + '...';
//         }  else  {
//             const newTitleLength = Math.floor(title.length / 4);
//             const newTitle = title.slice(0, newTitleLength);
//             const finalString = newTitle.join(' ');
//             return finalString.includes('(')
//             ? finalString + '...)'
//             : finalString + '...';
//         }
//     }
//     return value;
// }

let oracion = "{{name}}, Centralizar WhatsApp y manejar eficazmente las conversaciones"
console.log( transform(oracion, 10 ))

