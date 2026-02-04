// console.log('Todo funcionando OK');

// Formas más comunes de seleccionar el contenido 

// *** 1 querySelector ***
// Retorna ningún o hasta un elemento que coincida con el selector que estoy escribiendo, es muy similar al CSS, si voy a usar una clase inicio con un punto.

// Si deseo ver todas las clases o etiquetas que coincidan se utiliza querySelectorAll('.clase o etiqueta') - tambien es una forma moderna.


// Forma antigua de seleccionar elementos, esta forma no es recomendada.
// const heading = document.querySelectorAll('a');
// console.log(heading);

// De esta manera se cambia el contenido de la etiqueta o clase.
// heading.textContent = "New heading"


// const heading = document.querySelector('.header__texto h2');
// console.log(heading);

// heading.textContent = "New heading";

// //Agregar una clase
// heading.classList.add('new.class');

// // Remover una clase
// heading.classList.remove('no-margin');

// Si el elemento no existe, la consola me arroja un null

// Con querySelector me muestra el primer elemento encontrado 
// const heading = document.querySelector('.navegacion a');
// console.log(heading);

// Me muestra solo el ultimo elemento del arreglo de enlaces 
const links = document.querySelectorAll('a');
console.log(links[0, 1, 2]);

// Modificar el texto del enlace
// links[1].textContent = 'Ustedes';

// Modificar el link en el que funciona este enlace
links[1].href = 'https://www.youtube.com';

// Agregar una clase al enlace
links[1].classList.add('newClass');

// Remover una clase al enlace
links[1].classList.remove('navegacion__enlace');




