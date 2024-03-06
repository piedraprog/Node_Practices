const inputElement = document.getElementById("miInput");

miInput.addEventListener("mouseup", function () {
  resaltarTexto(true);
});

getRandomColor = () => {
  const pastelColors = [
    "#FFB6C1", // Rosa pastel
    "#FFE4B5", // Melocotón suave
    "#FFFFE0", // Amarillo bebé
    "#E6E6FA", // Lavanda pálido
    "#87CEFA", // Azul cielo claro
    "#98FB98", // Verde menta
    "#F5F5DC", // Beige claro
    "#DCDCDC", // Gris perla
    "#FFE4E1", // Albaricoque pálido
    "#00CED1", // Verde agua
    "#E6E6FA", // Lila claro
    "#FFA07A", // Naranja suave
    "#FAFAD2", // Amarillo vainilla
    "#FFDAB9", // Rosa melocotón
    "#B0E0E6", // Celeste
    "#7FFF00", // Verde pistacho
    "#FFF8DC", // Crema
    "#E6E6FA", // Lavanda claro
    "#89CFF0", // Azul bebé
    "#FFFACD", // Amarillo limón
  ];

  return pastelColors[Math.floor(Math.random() * pastelColors.length)];
};

// cuando se le da al botón
sombrearTexto = (valorPalabra) => {
  // PRUEBA 1
  // var inputElement = document.getElementById("miInput");
  // var texto = inputElement.textContent;

  // if (inicio >= 0 && inicio < fin && fin <= texto.length) {
  //   var seleccion = document.createRange();
  //   seleccion.setStart(inputElement.firstChild, inicio);
  //   seleccion.setEnd(inputElement.firstChild, fin);

  //   var seleccionSombreada = window.getSelection();
  //   seleccionSombreada.removeAllRanges();
  //   seleccionSombreada.addRange(seleccion);
  //   resaltarTexto(true);
  //   quitarSeleccion();
  // } else {
  //   alert("Los índices de inicio y fin no son válidos.");
  // }

  // PRUEBA 2
  // var inputElement = document.getElementById("miInput");
  // var texto = inputElement.innerHTML; // Obtén el contenido como HTML

  // if (inicio >= 0 && inicio < fin && fin <= texto.length) {
  //   var contenidoAntes = texto.substring(0, inicio);
  //   var contenidoSombreado = texto.substring(inicio, fin);
  //   var contenidoDespues = texto.substring(fin);

  //   // Crea el nuevo contenido con la parte sombreada
  //   var nuevoContenido =
  //     contenidoAntes +
  //     `<span style='background-color: ${getRandomColor()};'>${contenidoSombreado}</span>` +
  //     contenidoDespues;

  //   // Actualiza el contenido del elemento con el nuevo contenido
  //   inputElement.innerHTML = nuevoContenido;

  //   // Resalta el texto
  //   // resaltarTexto(true);

  //   // Quita la selección
  //   // quitarSeleccion();
  // } else {
  //   alert("Los índices de inicio y fin no son válidos.");
  // }

  // PRUEBA 3

  var inputElement = document.getElementById("miInput");
  var valorPalabra = document.getElementById("palabra").value;
  var texto = inputElement.innerHTML; // Obtén el contenido como HTML

  // Crear una expresión regular con la palabra ingresada, haciendo coincidencias sin distinción entre mayúsculas y minúsculas
  var expresionRegular = new RegExp(valorPalabra, "gi");

  // Reemplazar todas las ocurrencias de la palabra con un fondo resaltado
  var contenidoResaltado = texto.replace(
    expresionRegular,
    (match) =>
      `<span style="background-color: ${getRandomColor()};">${match}</span>`
  );

  // Actualizar el contenido del enunciado con las ocurrencias resaltadas
  inputElement.innerHTML = contenidoResaltado;
};

// aplicar un color de fondo a lo que se selecciono
resaltarTexto = (color) => {
  //
  // let selectionStart, selectionEnd;

  // if (selection.anchorOffset <= selection.focusOffset) {
  //   selectionStart = selection.anchorOffset;
  //   selectionEnd = selection.focusOffset;
  // } else {
  //   selectionStart = selection.focusOffset;
  //   selectionEnd = selection.anchorOffset;
  // }

  // const selectedTextWithSpaces = miInput.innerText.slice(
  //   selectionStart,
  //   selectionEnd
  // );

  // if (selectedText.length > 0) {
  //   console.log(selection);
  //   console.log(selectedTextWithSpaces);
  //   // sombrearTexto(selectionStart, selectionEnd);
  //   // PRUEBA 1
  //   // const randomColor = color ? getRandomColor() : "none";
  //   // const spanElement = document.createElement("span");
  //   // spanElement.style.backgroundColor = randomColor;
  //   // spanElement.setAttribute("data-start", selectionStart);
  //   // spanElement.setAttribute("data-end", selectionEnd);
  //   // const range = selection.getRangeAt(0);
  //   // range.surroundContents(spanElement);
  //   // PRUEBA 2
  //   // const randomColor = color ? getRandomColor() : "none";
  //   // const spanElement = document.createElement("span");
  //   // spanElement.style.backgroundColor = randomColor;
  //   // spanElement.setAttribute("data-start", selectionStart);
  //   // spanElement.setAttribute("data-end", selectionEnd);
  //   // const range = selection.getRangeAt(0);
  //   // // Crear un clon del rango para mantener la selección original intacta
  //   // const clonedRange = range.cloneRange();
  //   // // Envolver el contenido del rango en el elemento span
  //   // spanElement.appendChild(clonedRange.extractContents());
  //   // // Insertar el elemento span en lugar del rango
  //   // range.insertNode(spanElement);
  //   // PRUEBA 3
  //   // const randomColor = color ? getRandomColor() : "none";
  //   // const spanElement = document.createElement("span");
  //   // spanElement.style.backgroundColor = randomColor;
  //   // spanElement.setAttribute("data-start", selectionStart);
  //   // spanElement.setAttribute("data-end", selectionEnd);
  //   // const range = selection.getRangeAt(0);
  //   // // Obtener el contenido seleccionado como una cadena de HTML
  //   // const selectedHTML = range.cloneContents();
  //   // // Configurar el contenido del elemento span con el contenido seleccionado
  //   // spanElement.innerHTML = selectedHTML.outerHTML;
  //   // // Insertar el elemento span en lugar del rango
  //   // range.deleteContents();
  //   // range.insertNode(spanElement);
  // }

  var selPosition = getSelectionPosition();
  if (selPosition) {
    var selectedText = window.getSelection().toString();
    var newText = "El nuevo texto con el sombreado"; // Cambia esto según tu lógica de sombreado
    console.log(selectedText);
    sombrearTexto(selectedText);
    // // Inserta el nuevo texto con el sombreado en la posición real de la selección
    // var textBefore = yourTextArea.textContent.slice(0, selPosition.start);
    // var textAfter = yourTextArea.textContent.slice(selPosition.end);

    // yourTextArea.innerHTML = textBefore + newText + textAfter;
  }
};

function getSelectionPosition() {
  var sel = window.getSelection();
  if (sel.rangeCount > 0) {
    var range = sel.getRangeAt(0);
    var preSelectionRange = range.cloneRange();
    preSelectionRange.selectNodeContents(document.body);
    preSelectionRange.setEnd(range.startContainer, range.startOffset);
    var start = preSelectionRange.toString().length;
    return {
      start: start,
      end: start + range.toString().length,
    };
  }
  return null;
}

quitarSeleccion = () => {
  let seleccionSombreada = window.getSelection();
  seleccionSombreada.removeAllRanges();
};

quitarTodoSombreado = (inicio, fin) => {
  var inputElement = document.getElementById("miInput");
  var spanElements = inputElement.querySelectorAll("span");

  // Elimina todos los elementos <span> con fondos de color
  spanElements.forEach(function (spanElement) {
    spanElement.outerHTML = spanElement.textContent;
  });
};

quitarSombreado2 = (inicio, fin) => {
  var inputElement = document.getElementById("miInput");
  var spanElements = inputElement.querySelectorAll("span");

  // var inputElement = document.getElementById("miInput");
  // var spanElements = inputElement.querySelectorAll("span");

  spanElements.forEach(function (spanElement) {
    var spanStart = spanElement.getAttribute("data-start");
    var spanEnd = spanElement.getAttribute("data-end");

    // Verifica si el elemento <span> coincide con el rango especificado
    if (spanStart <= fin && spanEnd >= inicio) {
      // Guarda el contenido de texto del elemento <span>
      var spanText = spanElement.textContent;

      // Divide el contenido en tres partes: antes, dentro y después del rango
      var textoAntes = spanText.substring(0, inicio - spanStart);
      var textoDentro = spanText.substring(
        inicio - spanStart,
        fin - spanStart + 1
      );
      var textoDespues = spanText.substring(fin - spanStart + 1);

      // Reemplaza el elemento <span> con tres elementos de texto
      var textoNodeAntes = document.createTextNode(textoAntes);
      var textoNodeDentro = document.createTextNode(textoDentro);
      var textoNodeDespues = document.createTextNode(textoDespues);

      spanElement.parentNode.insertBefore(textoNodeAntes, spanElement);
      spanElement.parentNode.insertBefore(textoNodeDentro, spanElement);
      spanElement.parentNode.insertBefore(textoNodeDespues, spanElement);

      spanElement.parentNode.removeChild(spanElement);
    }
  });
};

quitarSombreado3 = () => {
  var inputElement = document.getElementById("miInput");
  var valorPalabra = document.getElementById("palabra").value;
  var texto = inputElement.innerHTML;

  // / Reemplaza "tuElemento" con el ID de tu elemento contenedor
  const spans = inputElement.getElementsByTagName("span");

  for (let i = 0; i < spans.length; i++) {
    const span = spans[i];
    if (span.innerText === valorPalabra) {
      // Encuentra el span que contiene la palabra deseada
      const parent = span.parentNode;
      parent.replaceChild(document.createTextNode(valorPalabra), span); // Reemplaza el span con el texto original
    }
  }
};

quitarTodo = () => {
  let inputElement = document.getElementById("miInput");
  const spans = inputElement.getElementsByTagName("span");

  while (spans.length > 0) {
    const span = spans[0]; // Obtenemos el primer span
    const parent = span.parentNode;
    // Crea un nodo de texto con el texto original
    const textNode = document.createTextNode(span.innerText);
    // Reemplaza el span con el nodo de texto
    parent.replaceChild(textNode, span);
    // parent.removeChild(span); // Eliminamos el span del DOM
  }
};

obtenerDondeEsta = () => {
  let inputElement = document.getElementById('miInput');
  let valorPalabra = document.getElementById("palabra").value;

  let cadena = inputElement.textContent;

  console.log(cadena)

  const palabras = cadena.split(" ");

  let inicio = -1;
  let fin = -1;

  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i] === valorPalabra) {
      if (inicio === -1) {
        inicio = cadena.indexOf(palabras[i]);
      }
      fin = inicio + palabras[i].length - 1;
    }
  }

  console.log("start:" + inicio), console.log("end:" + fin);

};

