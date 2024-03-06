const inputElement = document.getElementById("miInput");

inputElement.addEventListener("mouseup", function () {
  resaltarTexto(true);
});

getRandomColor = () => {
  // ... (tu función getRandomColor aquí)
};

sombrearTexto = () => {
  const inputElement = document.getElementById("miInput");
  const valorPalabra = document.getElementById("palabra").value;
  const texto = inputElement.textContent; // Obtén el contenido como texto

  // Crear una expresión regular con la palabra ingresada, haciendo coincidencias sin distinción entre mayúsculas y minúsculas
  const expresionRegular = new RegExp(valorPalabra, "gi");

  // Reemplazar todas las ocurrencias de la palabra con un fondo resaltado
  const contenidoResaltado = texto.replace(
    expresionRegular,
    (match) =>
      `<span style="background-color: ${getRandomColor()}; cursor: pointer;" class="resaltado">${match}</span>`
  );

  // Actualizar el contenido del enunciado con las ocurrencias resaltadas
  inputElement.innerHTML = contenidoResaltado;

  // Agregar un evento clic a las palabras resaltadas
  const palabrasResaltadas = inputElement.getElementsByClassName("resaltado");
  for (let i = 0; i < palabrasResaltadas.length; i++) {
    palabrasResaltadas[i].addEventListener("click", () => {
      seleccionarPalabra(palabrasResaltadas[i].textContent);
    });
  }
};

seleccionarPalabra = (palabraSeleccionada) => {
  // Puedes realizar acciones con la palabra seleccionada aquí, como mostrarla en una alerta
  alert(`Palabra seleccionada: ${palabraSeleccionada}`);
};

quitarSeleccion = () => {
  const seleccionSombreada = window.getSelection();
  seleccionSombreada.removeAllRanges();
};

quitarTodoSombreado = () => {
  const inputElement = document.getElementById("miInput");
  const spanElements = inputElement.querySelectorAll("span.resaltado");

  // Elimina todos los elementos <span> con fondos de color
  spanElements.forEach(function (spanElement) {
    const textoOriginal = spanElement.textContent;
    spanElement.outerHTML = textoOriginal;
  });
};

quitarSombreado2 = (inicio, fin) => {
  const inputElement = document.getElementById("miInput");
  const spanElements = inputElement.querySelectorAll("span.resaltado");

  spanElements.forEach(function (spanElement) {
    const spanText = spanElement.textContent;
    const spanStart = spanText.indexOf(spanElement.innerText);
    const spanEnd = spanStart + spanElement.innerText.length - 1;

    if (spanStart <= fin && spanEnd >= inicio) {
      const textoAntes = spanText.substring(0, inicio - spanStart);
      const textoDentro = spanText.substring(
        inicio - spanStart,
        fin - spanStart + 1
      );
      const textoDespues = spanText.substring(fin - spanStart + 1);

      // Reemplaza el elemento <span> con tres elementos de texto
      const textoNodeAntes = document.createTextNode(textoAntes);
      const textoNodeDentro = document.createTextNode(textoDentro);
      const textoNodeDespues = document.createTextNode(textoDespues);

      spanElement.parentNode.insertBefore(textoNodeAntes, spanElement);
      spanElement.parentNode.insertBefore(textoNodeDentro, spanElement);
      spanElement.parentNode.insertBefore(textoNodeDespues, spanElement);

      spanElement.parentNode.removeChild(spanElement);
    }
  });
};
