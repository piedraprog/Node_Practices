const etiqueta = `lorem`;
                
const fraseSinEtiqueta = etiqueta.replace(/https:\/\/.+?(?=\s|$)/g, '');

console.log(fraseSinEtiqueta);