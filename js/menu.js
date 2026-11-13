document.addEventListener("DOMContentLoaded", () => {
    // Botones principales del header 
    const btnSesion = document.querySelector("#btn-sesion");
    const btnIdiomas = document.querySelector("#btn-idiomas");
    const menuSesion = document.querySelector("#menu-sesion");
    const menuIdiomas = document.querySelector("#menu-idiomas");

    //Botones dentro de sesion, para cambiar el estado 
    const btnIniciarSesion = document.querySelector("#btn-iniciar-sesion");
    const btnCerrarSesion = document.querySelector("#btn-cerrar-sesion");
    const sesionIniciada = document.querySelector(".sesionIniciada");
    const sesionSinIniciar = document.querySelector(".sesionSinIniciar");


    // Abrir y cerrar menú sesión
    btnSesion.addEventListener("click", () => {
        menuIdiomas.classList.remove("show");
        menuSesion.classList.toggle("show");
    });

    // Abrir y cerrar menú idiomas
    btnIdiomas.addEventListener("click", () => {
        menuSesion.classList.remove("show");
        menuIdiomas.classList.toggle("show");
    });


    // Comprobar si el clic se ha producido dentro del menú o su botón
    document.addEventListener("click", (event) => {
        const clickDentroSesion = menuSesion.contains(event.target) || btnSesion.contains(event.target);
        const clickDentroIdiomas = menuIdiomas.contains(event.target) || btnIdiomas.contains(event.target);

        // Si el clic se produce fuera del menú y su botón, cerrarlo
        if (!clickDentroSesion) {
            menuSesion.classList.remove("show");
        }

        if (!clickDentroIdiomas) {
            menuIdiomas.classList.remove("show");
        }
    });

    // Boton iniciar sesión
    btnIniciarSesion.addEventListener("click", () => {
        sesionSinIniciar.classList.remove("show");
        sesionIniciada.classList.add("show");
    });

    // Boton cerrar sesión
    btnCerrarSesion.addEventListener("click", () => {
        sesionIniciada.classList.remove("show");
        sesionSinIniciar.classList.add("show");
    });

});
