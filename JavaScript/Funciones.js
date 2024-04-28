const ventana = document.createElement("div");

let valEMail=(email, mostrar) => {
    let mensaje = "El eMail debe tener el formato: nombre@dominio.com";
    const expresiones = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Validar el email con la expresión regular
    if (expresiones.test(email)) 
        mensaje = "";
    else if (mostrar === true) 
    {
        // Mostrar un mensaje de error
        alert(mensaje);
    }
    return mensaje;
};

function fctMensaje( titulo, mensaje) {

    ventana.classList.add("VentanaMensaje");
    ventana.innerHTML = `
        <div id="divFntMensaje">
            <p id="pFntMensajeTitulo">` + titulo + `</p>
            <div>
                <p id="pFntMensaje">` + mensaje + `</p>
                <br>
                <button id="btnFntMensaje" onclick="onClicCerrarFctMensaje()">Aceptar</button>
            </div>
        </div>
    `;
    document.body.appendChild(ventana);
}

function onClicCerrarFctMensaje() {
    const ventana = document.querySelector(".VentanaMensaje");
    ventana.remove();
}

