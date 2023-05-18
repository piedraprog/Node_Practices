// tengo un array de elementos y quiero ponerle un nuevo orden

let arr = [
    {
        "name": "Nombre",
        "type": "string",
        "id": "name"
    },
    {
        "name": "Email",
        "type": "email",
        "id": "email"
    },
    {
        "name": "Teléfono",
        "type": "number",
        "id": "phone"
    }
]


function changePosition(arr, id, newPosition) {
    // Busca el índice del objeto con el id proporcionado
    const index = arr.findIndex(obj => obj.id === id);
    
    // Si el objeto no existe, devuelve el array original
    if (index === -1) {
      return arr;
    }
    
    // Elimina el objeto del array
    const [removedObj] = arr.splice(index, 1);
    
    // Inserta el objeto en la nueva posición
    arr.splice(newPosition, 0, removedObj);
    
    // Devuelve el array modificado
    return arr;
}

console.log(changePosition(arr, "email", 0))