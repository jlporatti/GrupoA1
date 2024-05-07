//--------------------------------------------Hoja Contacto - Validación ----------------------------------------
function valida_enviar(){
                
    let mensaje = "";
    let erreMail = valEMail(document.getElementById("iptEmail").value, false);

    if (document.fvalida.nombre.value.length==0){
        mensaje += "Nombre, ";
    }
 
    if (erreMail != "")
    {
        mensaje += "eMail, ";
    }
    
    if (document.fvalida.consulta.value.trim() ==''){
        mensaje += "Consulta, ";
    }
 
        // Muestra el mensaje de error
        mensaje = mensaje.substring(0,mensaje.length-2);
        if (mensaje.length != "" )
        {
            fctMensaje( "Falta Ingresar: ", mensaje + ". " + erreMail);
            document.getElementById("pAviso" ).innerHTML = "=>";
            document.getElementById("pAviso" ).style.color = "yelow";
            document.getElementById("pMensaje" ).innerHTML = "Ingresar: " + mensaje;    
            document.getElementById("pMensaje" ).style.color = "rgb(237, 55, 55)";
    
        }
        else {
            //Se envia el formulario
            fctMensaje( "", "Consulta Enviada!!!!");
            document.getElementById("pAviso" ).innerHTML = "=>";
            document.getElementById("pAviso" ).style.color = "green";
            document.getElementById("pMensaje" ).innerHTML = "Consulta Enviada!!!!";
            document.getElementById("pMensaje" ).style.color = "rgb(237, 55, 55)";    
            //document.fvalida.submit();
        }

}