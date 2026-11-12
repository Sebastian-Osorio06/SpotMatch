document.addEventListener("DOMContentLoaded", () => {

    const btnSesion = document.querySelector("#btn-sesion");
    const btnIdiomas = document.querySelector("#btn-idiomas");
    const menuSesion = document.querySelector("#menu-sesion");
    const menuIdiomas = document.querySelector("#menu-idiomas");


    const btnIniciarSesion = document.querySelector("#btn-iniciar-sesion");
    const btnCerrarSesion = document.querySelector("#btn-cerrar-sesion");
    const sesionIniciada = document.querySelector(".sesionIniciada");
    const sesionSinIniciar = document.querySelector(".sesionSinIniciar");


    // Abrir y cerrar menú sesion
    btnSesion.addEventListener("click", () => {
        menuSesion.classList.toggle("show");
    });


    // Abrir y cerrar menú idiomas
    btnIdiomas.addEventListener("click", () => {
        menuIdiomas.classList.toggle("show");
    });


    // Cerrar al pulsar fuera del menú
    document.addEventListener("click", (event) => {

        const clickDentroMenu = menuSesion.contains(event.target);
        const clickBotonMenu = btnSesion.contains(event.target);

        if (!clickDentroMenu && !clickBotonMenu) {
            menuSesion.classList.remove("show");
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
