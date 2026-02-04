// Seleccionar elementos y asociar eventos


// Identificar cuando el documento cargue

document.addEventListener('DOMContentLoaded', function(){
    console.log('Contenido cargado...');
})


// Seleccionar la clase y asignarla a una variable
// const sendBtn = document.querySelector('.boton--primario');


// // Se ejecuta el evento click y se ejecuta el callback
// sendBtn.addEventListener('click', function(e){
//     console.log(e);
//     // Esta linea evita que la pagina se recargue 
//     e.preventDefault();
//     console.log('Enviando formulario');
// })

// Verificar si es null

const sendBtn = document.querySelector('.boton--primario');
console.log(sendBtn);

if(sendBtn){
    sendBtn.addEventListener('click', function(e){
        console.log(e);
        e.preventDefault();
        console.log('Enviando formulario');
    });
}else{
    console.log('El botón NO existe');
}

