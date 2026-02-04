
const form = document.querySelector('.formulario');
const result = document.querySelector('.result');
const button = document.querySelector('.boton');




button.addEventListener('click', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const userData = Object.fromEntries(data.entries());

    //Mostrar mensaje personalizado
    result.textContent = `Hola ${userData.userName}, gracias por su mensaje ${userData.userMessage}, te respondemos al correo ${userData.userEmail}`

})

