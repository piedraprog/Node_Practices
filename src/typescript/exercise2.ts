
const bodyText = 
    `Lorem`; 

// const hasLink = parsedValue.body.querySelector('a');


function obtenerEtiquetaA(texto) {
    const regex = /<a\s.*?>(.*?)<\/a>/;
    const match = texto.match(regex);
    return match ? match[0] : '';
}

const combinarEtiquetaA = (texto) => {
    const regex = /&lt;a href="([^"]*)"([^>]*)>(.*?)<\/a>(.*?)&lt;\/a&gt;/;
    const match = texto.match(regex);
  
    if (match) {
      const href = match[1];
      const rest = match[2] + match[3] + match[4];
      console.log(rest)
      return `<a href="${href}">${rest}</a>`;
    } else {
      return texto;
    }
}


function obtenerTextoConEtiquetaA(texto) {
    const regex = /<a\s.*?>(.*?)<\/a>/;
    if (regex.test(texto)) {
        const decodedText = decodeURIComponent(texto);
        return obtenerEtiquetaA(decodedText);
    } else {
        return texto;
    }
}

const textoCombinado = combinarEtiquetaA(bodyText)

console.log(textoCombinado)


const regex2 = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/i;
const regex =  /<br\s*\/?>/i;

if ( regex.test(bodyText) && !regex2.test(bodyText)) {
    console.log('Hola');
}