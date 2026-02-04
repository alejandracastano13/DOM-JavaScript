// Eventos de los inputs y los text area

// Esto es muy importante ya que cuando tenemos los formularios se hace necesario validar, lo que el usuario está escribiendo.

const userData = {
    userName: '',
    userEmail: '',
    userMessage: ''
}

const userName = document.querySelector('.campo__field---user-name')
const userEmail = document.querySelector('.campo__field--email')
const userMessage = document.querySelector('.campo__field--message')

// Validacion en tiempo real 

// userName.addEventListener('input', function (e){
//     //Leer lo que el usuario ingresa 
//     console.log(e.target.value);
// })

// userEmail.addEventListener('input', function (e){
//     //Leer lo que el usuario ingresa 
//     console.log(e.target.value);
// })

// userMessage.addEventListener('input', function (e){
//     //Leer lo que el usuario ingresa 
//     console.log(e.target.value);

// })

//===================================================

userName.addEventListener('input', readText);
userEmail.addEventListener('input', readText);
userMessage.addEventListener('input', readText);


// Almacenar los datos de los campos

function readText (e) {
    if(e.target.classList.contains('userName')){
        userData.userName = e.target.value
    }else if (e.target.classList.contains('userEmail')){
        userData.userEmail = e.target.value
    }else if (e.target.classList.contains('userMessage')){
        userData.userMessage = e.target.value
    }
    console.log(e.target.value);
}

//===================================================
