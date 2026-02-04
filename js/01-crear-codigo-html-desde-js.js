// Craer html desde JS
// Por ejemplo cuando realizamos una compra en una plataforma online, ese producto se agrega al carrito de compras.

// Cuando se crea un nuevo elemento en JS se recomienda crear las etiquetas en mayusculas y sin apertura ni cierre de etiquetas.
const newLink = document.createElement('A');
console.log(newLink);

newLink.href = 'new-Link.html'

newLink.textContent = 'A new Link';

newLink.classList.add('navegacion__enlace');

// Agregar este link al documento 

const navigation = document.querySelector('.navegacion');
navigation.appendChild(newLink);