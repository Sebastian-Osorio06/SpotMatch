document.addEventListener("DOMContentLoaded", () => {

    const btnSesion = document.querySelector("#btn-sesion");
    const btnIdiomas = document.querySelector("#btn-idiomas");
    const menuSesion = document.querySelector("#menu-sesion");
    const menuIdiomas = document.querySelector("#menu-idiomas");


    const btnIniciarSesion = document.querySelector("#btn-iniciar-sesion");
    const btnCerrarSesion = document.querySelector("#btn-cerrar-sesion");
    const sesionIniciada = document.querySelector(".sesionIniciada");
    const sesionSinIniciar = document.querySelector(".sesionSinIniciar");


  // Abrir y cerrar menú sesión
btnSesion.addEventListener("click", (event) => {
    event.stopPropagation();

    menuIdiomas.classList.remove("show");
    menuSesion.classList.toggle("show");
});

// Abrir y cerrar menú idiomas
btnIdiomas.addEventListener("click", (event) => {
    event.stopPropagation();
    menuSesion.classList.remove("show");
    menuIdiomas.classList.toggle("show");
});


// Cerrar al pulsar fuera de ambos menús
document.addEventListener("click", (event) => {
    const clickDentroSesion = menuSesion.contains(event.target) || btnSesion.contains(event.target);

    const clickDentroIdiomas = menuIdiomas.contains(event.target) || btnIdiomas.contains(event.target);

    if (!clickDentroSesion) {
        menuSesion.classList.remove("show");
    }

    if (!clickDentroIdiomas) {
        menuIdiomas.classList.remove("show");
    }
});


    // Cerrar al pasar a PC
    // window.addEventListener("resize", () => {
    //     if (window.innerWidth >= 992) {
    //         menuSesion.classList.remove("show");
    //     }
    // });

// Iniciar sesión
btnIniciarSesion.addEventListener("click", () => {
    sesionSinIniciar.classList.remove("show");
    sesionIniciada.classList.add("show");
});

// Cerrar sesión
btnCerrarSesion.addEventListener("click", () => {
    sesionIniciada.classList.remove("show");
    sesionSinIniciar.classList.add("show");
});

});
