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
function  fctMensaje(titulo = "", mensaje){

    const divMensaje = document.createElement("div");
    divMensaje.id = "divVentanaMensaje";
    const divFntMensaje = document.createElement("div");
    divFntMensaje.id = "divFntMensaje";
    const pFntMensajeTitulo = document.createElement("p")
    pFntMensajeTitulo.id = "pFntMensajeTitulo"
    pFntMensajeTitulo.innerText = titulo;
    const divContenedor = document.createElement("div");
    const pFntMensaje = document.createElement("p");
    pFntMensaje.id = "pFntMensaje";
    pFntMensaje.innerText = mensaje;
    const br = document.createElement("br");
    const btnFntMensaje = document.createElement("button");
    btnFntMensaje.id = "btnFntMensaje";
    btnFntMensaje.addEventListener("click", onClicAceptarFctMensaje);
    btnFntMensaje.innerText = "Aceptar";
    divContenedor.appendChild(pFntMensaje);
    divContenedor.appendChild(br);
    divContenedor.appendChild(btnFntMensaje);
    divFntMensaje.appendChild(pFntMensajeTitulo);
    divFntMensaje.appendChild(divContenedor);
    divMensaje.appendChild(divFntMensaje);
    document.body.appendChild(divMensaje);
}

// Evento del botón Cerrar de la funcion fctMEnsaje
function onClicAceptarFctMensaje()
{
    // Borra la Ventana del Mensaje
    document.getElementById("divVentanaMensaje").remove();
}

