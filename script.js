window.onload = () => {
    let secciones = document.getElementsByClassName("secciones");

    for (let i = 0; i < secciones.length; i++) {
        secciones[i].addEventListener("mouseover", function() {
            cambiar(secciones[i]);
        });
        secciones[i].addEventListener("mouseout", function() {
            original(secciones[i]);
        });
    }

    const formChat = document.getElementById("formChat");
        const txtNombre = document.getElementById("txtNombre");
        const txtMensaje = document.getElementById("txtMensaje");
        const errorNombre = document.getElementById("errorNombre");
        const errorMensaje = document.getElementById("errorMensaje");

        formChat.addEventListener("submit", (event) => {
            let isValid = true;

            if (txtNombre.value.trim() === "") {
                errorNombre.style.display = "inline";
                isValid = false;
            } else {
                errorNombre.style.display = "none";
            }

            if (txtMensaje.value.trim() === "") {
                errorMensaje.style.display = "inline";
                isValid = false;
            } else {
                errorMensaje.style.display = "none";
            }

            if (!isValid) {
                event.preventDefault();
            }
        });

    
};

let cambiar = function(element) {
    element.style.background = "#ccdaef";
    element.style.border = "white";
};

let original = function(element) {
    element.style.background = "";
    element.style.border = "";
};