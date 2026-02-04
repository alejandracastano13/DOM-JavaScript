// Eventos

// Click de ratón del usuario sobre un elemento 
// Pulsación de una tecla especifica del teclado
// Reproducción de un archivo de auido/video
// Scroll del mouse sobreun elemento 
// El usuario ha activado la opcion de "Imprimir una página"

console.log(1);

// La función que está en la siguiente línea se le conoce como callback; ya que se ejecuta cuando el evento ocurre.
window.addEventListener('load', function(){
    // Archivosque dependen que el html estén listos 
    console.log(2);
    console.log('Ya cargó window');
})

// Otra forma de hacer lo mismo
window.onload = function(){
    console.log(3);
    console.log('Ya cargó window 3');
}

// console.log(2);

console.log(10);

document.addEventListener('DOMContentLoaded', function(){
    console.log(4);
    console.log('Se cargó el documento');
})

// En este sentido se ejecuta el 1, el 10, despues 2 y 3, ypor último carga el docuemnto. 

// La moraleja es que de manera general se debe usar document.addEventListener('DOMContentLoaded'), ya que siempre se debe esperar a que el HTML esté listo, para poder usar el JS. 

window.addEventListener('load', print);

function print(){
    console.log("Esta es una función externa")
}

window.onscroll = function(){
    console.log("Estoy haciendo scroll")
}