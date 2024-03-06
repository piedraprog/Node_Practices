// Prueba 1
    // const inputElement = this.inputElement.nativeElement;
    // const selectedTextWithSpaces = inputElement.innerText.slice(
    //   info.start,
    //   info.end
    // );

    // console.log(inputElement)

    // const randomColor = info.color;
    // const spanElement = document.createElement('span');
    // spanElement.style.backgroundColor = randomColor;
    // spanElement.setAttribute('data-start', info.start);
    // spanElement.setAttribute('data-end', info.end);
    // const range = window.getSelection().getRangeAt(0);

    // // Verificar si el rango es válido antes de rodearlo con un span
    // if (range.toString() === '' && inputElement) {
    //   // No hacer nada si el rango está vacío
    //   // o si no hay inputElement
    // } else if (info.end <= inputElement.innerText.length) {
    //   // Asegúrate de que el rango no exceda la longitud del contenido
    //   range.surroundContents(spanElement);
    // } else {
    //   // Manejar el caso en el que el rango excede la longitud del contenido
    //   console.error('El rango excede la longitud del contenido');
    // }

    // PRUEBA 2
    /*const inputElement = this.inputElement.nativeElement;
    const textNode = inputElement.childNodes[0];
    const startOffset = info.start;
    const endOffset = info.end;

    // Verificar si hay un nodo de texto
    if (textNode && textNode.nodeType === Node.TEXT_NODE) {
      const text = textNode.textContent;

      // Asegurarse de que los offsets estén dentro de los límites del texto
      if (startOffset >= 0 && endOffset <= text.length) {
        // Dividir el nodo de texto en tres partes: antes, durante y después del resaltado
        const beforeText = text.substring(0, startOffset);
        const highlightedText = text.substring(startOffset, endOffset);
        const afterText = text.substring(endOffset);

        // Crear elementos para el texto resaltado y el texto circundante
        const spanElement = document.createElement('span');
        spanElement.style.backgroundColor = info.color;
        spanElement.textContent = highlightedText;

        // Crear nuevos nodos de texto para el texto circundante
        const beforeTextNode = document.createTextNode(beforeText);
        const afterTextNode = document.createTextNode(afterText);

        // Reemplazar el nodo de texto original con los nuevos nodos
        inputElement.replaceChild(beforeTextNode, textNode);
        inputElement.insertBefore(spanElement, beforeTextNode.nextSibling);
        inputElement.insertBefore(afterTextNode, spanElement.nextSibling);
      } else {
        console.error('Los offsets están fuera de los límites del texto');
      }
    } else {
      console.error('No se encontró un nodo de texto');
    }*/

    // PRUEBA 3
    /*const inputElement = this.inputElement.nativeElement;
    const textNode = inputElement.childNodes[0];
    const startOffset = info.start;
    const endOffset = info.end;

    // Verificar si hay un nodo de texto
    if (textNode && textNode.nodeType === Node.TEXT_NODE) {
      const text = textNode.textContent;

      // Asegurarse de que los offsets estén dentro de los límites del texto
      if (startOffset >= 0 && endOffset <= text.length && startOffset <= endOffset) {
        // Dividir el nodo de texto en tres partes: antes, durante y después del resaltado
        const beforeText = text.substring(0, startOffset);
        const highlightedText = text.substring(startOffset, endOffset);
        const afterText = text.substring(endOffset);

        // Crear nuevos nodos de texto para las partes circundantes
        const beforeTextNode = document.createTextNode(beforeText);
        const highlightedTextNode = document.createElement('span');
        highlightedTextNode.style.backgroundColor = info.color;
        highlightedTextNode.textContent = highlightedText;
        const afterTextNode = document.createTextNode(afterText);

        // Limpiar el contenido actual del elemento
        inputElement.innerHTML = '';

        // Insertar los nuevos nodos de texto y el nodo resaltado en el orden correcto
        inputElement.appendChild(beforeTextNode);
        inputElement.appendChild(highlightedTextNode);
        inputElement.appendChild(afterTextNode);
      } else {
        console.error('Los offsets están fuera de los límites del texto');
      }
    } else {
      console.error('No se encontró un nodo de texto');
    }*/

    // prueba 4
    /*const inputElement = this.inputElement.nativeElement;

    // Verificar si hay un nodo de texto
    const textNode = inputElement.childNodes[0];
    if (textNode && textNode.nodeType === Node.TEXT_NODE) {
      const text = textNode.textContent;

      this.entitiesArr.forEach((entity) => {
        // Asegurarse de que los offsets estén dentro de los límites del texto
        if (entity.start >= 0 && entity.end <= text.length) {
          // Dividir el nodo de texto en tres partes: antes, durante y después del resaltado
          const beforeText = text.substring(0, entity.start);
          const highlightedText = text.substring(entity.start, entity.end);
          const afterText = text.substring(entity.end);

          // Crear nuevos nodos de texto para las partes circundantes
          const beforeTextNode = document.createTextNode(beforeText);
          const highlightedTextNode = document.createElement('span');
          highlightedTextNode.style.backgroundColor = 'yellow'; // Cambiar el color según sea necesario
          highlightedTextNode.textContent = highlightedText;
          const afterTextNode = document.createTextNode(afterText);

          // Limpiar el contenido actual del elemento
          inputElement.innerHTML = '';

          // Insertar los nuevos nodos de texto y el nodo resaltado en el orden correcto
          inputElement.appendChild(beforeTextNode);
          inputElement.appendChild(highlightedTextNode);
          inputElement.appendChild(afterTextNode);
        }
      });
    }*/

    // PRUEBA 5
    // const randomColor = info.color;
    // var inputElement = document.getElementById("expression");
    // var texto = inputElement.textContent;

    // if (info.start >= 0 && info.start < info.end && info.end <= texto.length) {
    //   var contenidoAntes = texto.substring(0, info.start);
    //   var contenidoSombreado = texto.substring(info.start, info.end);
    //   var contenidoDespues = texto.substring(info.end);

    //   // Crea el nuevo contenido con la parte sombreada
    //   var nuevoContenido =
    //     contenidoAntes +
    //     `<span style='background-color: ${randomColor};'>${contenidoSombreado}</span>` +
    //     contenidoDespues;

    //   // Actualiza el contenido del elemento con el nuevo contenido
    //   inputElement.innerHTML = nuevoContenido;
    // } else {
    //   alert("Los índices de inicio y fin no son válidos.");
    // }

    // PRUEBA 6 (PARECE FUNCIONAR DIOS MIO GRACIAS)