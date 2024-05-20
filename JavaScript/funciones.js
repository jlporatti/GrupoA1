// Validación del eMail. Si esta bien retorna "", si no el mensaje de error
//  -email: direccion a validar
//  -mostrar: true para mostrar un mensaje en una caja.
function valEMail(email, mostrar)
{
    // Validar el email con la expresión regular
    let mensaje = "El eMail debe tener el formato: nombre@dominio.com";
    const expresiones = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (expresiones.test(email)) 
        mensaje = "";
    else if (mostrar === true) 
    {
        // Mostrar un mensaje de error
        fctMensaje( "", mensaje);
    }
    return mensaje;
};

// Muestra en pantalla una caja con el Titulo y Mensaje pasado por parametro y un boton Aceptar
//  -titulo: Titulo del Mensaje
//  -mensaje: Texto del Mensaje.
function  fctMensaje(titulo = "", mensaje)
{
    const divMensaje = document.createElement("div");
    divMensaje.id = "divVentanaMensaje";
    divMensaje.innerHTML = `
                        <div id="divFntMensaje">
                            <p id="pFntMensajeTitulo">` + titulo + `</p>
                            <div>
                                <p id="pFntMensaje">` + mensaje + `</p>
                                <br>
                                <button id="btnFntMensaje" onclick="onClicAceptarFctMensaje()">Aceptar</button>
                            </div>
                        </div>
                        `;
    document.body.appendChild(divMensaje);
}

// Evento del botón Cerrar de la funcion fctMEnsaje
function onClicAceptarFctMensaje()
{
    // Borra la Ventana del Mensaje
    document.getElementById("divVentanaMensaje").remove();
}

