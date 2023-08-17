const expLaboral = document.querySelector(".expLa");

// Si se quiere usar se comenta href de expLa.

expLaboral.addEventListener("click", function () {
    const catExpLaboral = document.querySelector('#expLa');
    expLa.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}); // prueba de hacer lo mismo que con href # en un a para llevar a sitio de la page pero con js.

document.addEventListener('DOMContentLoaded', () => {
    const opciones = document.querySelector(".opciones");
    const navbtn = document.querySelector('.navbtn')
})

// funcion de desplegar opciones

const navbtn = document.querySelector('.navbtn');
const opciones = document.querySelector('.opciones');

navbtn.addEventListener('click', () => {
    opciones.classList.toggle('visible'); // Agrega o quita la clase 'visible' en cada clic
});