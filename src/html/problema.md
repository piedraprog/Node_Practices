Problema

se quiere hacer un input que en base a la seleccion y seleccion de un valor en un modal se quede sombreado con un color, tomando en cuenta que si sombrea dentro de lo que ya existe en el sombreado no se sombree si no que se le agregue un subrayado, debe permitir recibir valores en base a la palabra que se introduce en el input y poder pintar estos de igual forma.

Pasos:

    - se introduce una palabra
        - hace la búsqueda al back que devuelve la información con un array de la palabras que se van a sombrear o subrayar
    - se hace la selección de la palabra que se quiere identificar.
    - se dispara un modal con valores predefinidos para alegir
        - se elige el valor.
            - al elegir el valor este toma com info el texto seleccionado y la posicion de este, aparte de un color random para pintar el fondo.
            - se agrega al array tomando en cuenta la posición, en el caso que este dentro de una seleccion existente se le agrega la propiedad subEntity para identificarla mas adelante
        - se pinta o subraya la palabra.
