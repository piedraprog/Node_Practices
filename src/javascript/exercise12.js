let palabra =" hola como estaá?"


function cambiarNombre(nombre){
    let regex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
    let regex2 = /^[a-zA-Z0-9\s]*$/g;

    return regex2.exec(nombre)[0];
    
}
    
console.log(cambiarNombre("ajbfaoba"));