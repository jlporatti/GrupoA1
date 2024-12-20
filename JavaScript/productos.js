

//------------------------------------- Hoja Productos - Productos a la Venta --------------------------------------
function fntAgregaProducto( indice, idCntrPadre)
{
    // Agrega el producto segun el indice pasado en el contenedor Padre
    // Obtengo el contenedor "container"
    const contenedor = document.getElementById(idCntrPadre);

    // Creo el diMenu que contendra los datos del producto
    const divMenu = document.createElement("div");
    divMenu.id = "divMenu" + indice;
    divMenu.classList.add("clsDivMenu");

    // Las agrego al contenedor
    contenedor.appendChild(divMenu);

    // Creo los 3 div que debe contener el producto (Foto, Descripcion y Botones)
    // divFoto---->
    // Creo el Contenedor de la Foto divFoto
    const divFoto = document.createElement("div");
    divFoto.classList.add("clsDivFotoMenu");

    // Creo un img para la foto y lo Agrego al divFoto
    const imgFoto = document.createElement("img");
    imgFoto.classList.add("clsImgFotoMenu");
    imgFoto.src = productos[indice].srcFoto;
    imgFoto.alt = "Foto del Menu 8";
    divFoto.appendChild(imgFoto);

    // Agrego el divFoto al divMenu
    divMenu.appendChild(divFoto);


    const ctnFotoMenuHD = document.getElementById('divFotoMenuHD');
    const imgFotoHD = document.getElementById("imgFotoMenuHD");

    // Agrego evento para que al hacer click muestre una con mayor tamaño y definicion
    imgFoto.addEventListener("click", () => {
        imgFotoHD.src = productos[indice].srcFotoHD;
        ctnFotoMenuHD.style.display = "block";

    });
    // Agrego evento para que al hacer click deje de mostrar la imagen con mayor tamaño y definicion
    imgFotoHD.addEventListener("click", () => {
        imgFotoHD.src = "";""
        ctnFotoMenuHD.style.display = 'none';
    });
    
    // Agrego evento para que al quitar el mouse de la imagen deje de mostrar la de mayor tamaño
    // imgFoto.addEventListener("cilck", () => {
    //     ctnFotoMenuHD.style.display = 'none';
    // });
    // divFoto<----

    // divDesc--->
    // Creo el Contenedor de la Descripción divDesc
    const divDesc = document.createElement("div");
    divDesc.classList.add("clsDivDescMenu");

    // Creo un h3 para el Titulo y lo Agrego al divDesc
    const h3Tit = document.createElement("h3");
    h3Tit.id = "h3TitMenu" + indice;
    h3Tit.classList.add("clsH3TitMenu");
    h3Tit.innerText = productos[indice].titulo;
    divDesc.appendChild(h3Tit);

    // Creo un p para la Descripcion y lo Agrego al divDesc
    const pDesc = document.createElement("p");
    pDesc.id = "pDescripcion" + indice;
    pDesc.classList.add("clsPDescripcion");
    pDesc.innerText = productos[indice].descripcion;
    divDesc.appendChild(pDesc);

    // Creo un p para el Precio y lo Agrego al divDesc
    const pPcio = document.createElement("p");
    pPcio.id = "pPrecio" + indice;
    pPcio.classList.add("clsPPrecio");
    pPcio.innerText = productos[indice].precio;
    divDesc.appendChild(pPcio);

    // Las agrego al divMenu
    divMenu.appendChild(divDesc);
    //<--- divDesc

    //---> divBtn
    // Creo el Contenedor de los Botones divBtn
    const divBtn = document.createElement("div");
    divBtn.classList.add("clsDivBotonMenu")

    // Creo Boton Sacar y lo Agrego al divBtn
    const impBtnSacar = document.createElement("input");
    impBtnSacar.type = "button";
    impBtnSacar.classList.add("clsBtnSeleccion");
    impBtnSacar.classList.add("clsBtnSacar");
    impBtnSacar.value = "Sacar";

    impBtnSacar.addEventListener("click", function() {
        btnOnClickAgregarSacar(1, indice);
    });
    divBtn.appendChild(impBtnSacar);

    // Creo la etiqueta para mostrar la Cantidad y la Agrego al divBtn
    const spnCant = document.createElement("span");
    spnCant.id = "spnCantidad" + indice;
    spnCant.innerText = productos[indice].cantidad;
    spnCant.classList.add("clsSpnCantidad");
    divBtn.appendChild(spnCant);

    // Creo Boton Agregar y lo Agrego al divBtn
    const impBtnAgregar = document.createElement("input");
    impBtnAgregar.type = "button";
    impBtnAgregar.classList.add("clsBtnSeleccion");
    impBtnAgregar.classList.add("clsBtnAgregar");
    impBtnAgregar.value = "Agregar";

    impBtnAgregar.addEventListener("click", function() {
        btnOnClickAgregarSacar(2, indice);
    });
    divBtn.appendChild(impBtnAgregar);

    // Agrego el divBtn al divMenu
    divMenu.appendChild(divBtn);
    //<--- divBtn
}

//------------------------------------- Hoja Productos - Botón Agregar y Sacar Menú --------------------------------------
// Evento On Click de los Botones Agragar y Sacar Producto
function btnOnClickAgregarSacar(btn, num){        
    let spnCantidad = document.getElementById("spnCantidad" + num);
    //let divMenu = document.getElementById("divMenu" + num);
    let h3Titulo = document.getElementById("h3TitMenu" + num);

    // Decremento o Incremento la cantidad segun el boton presionado
    if (( productos[num].cantidad > 0) && (btn === 1))
    {
        productos[num].cantidad = productos[num].cantidad - 1;

    } else if  (btn === 2)
    {
        productos[num].cantidad = productos[num].cantidad + 1;
        // Si hay algun mensaje lo borro
        document.getElementById("pAviso" ).innerText = "";
        document.getElementById("pMensaje" ).innerText = "";
    }
    // Actualizo la cantidad seleccionada
    spnCantidad.innerText = productos[num].cantidad;

    // Cambio el fondo dependiendo de si hay productos seleccionados
    if (productos[num].cantidad > 0)
    {
        h3Titulo.innerText= productos[num].titulo + " ✓";
        h3Titulo.style.color = "lightseagreen";
    }
    else {
        h3Titulo.innerText = productos[num].titulo ;
        h3Titulo.style.color = "navy";
    }

    // Calculo el Total
    let total = 0;
    productos.forEach(item => {
        total += item.precio * item.cantidad;
    });

    pMonto.innerText = "Importe Total: $"+ total.toLocaleString();
}


//-------------------------------------- Hoja Productos - Pantalla Resumen ----------------------------------------------
//-------------------------------------- Hoja Productos - Botón Finalizar -----------------------------------------------
// Evento On Click Boton Finalizar
function btnOnClickFinalizar() 
{
    let pedido = "";
    let total = 0;
    fntIniciaResumen();
    // Arma el pedido a mostrar y calcula total
    productos.forEach(item => {
        if (item.cantidad > 0){
            pedido += item.cantidad + " x " + item.titulo + " Importe: $" + item.precio * item.cantidad + "\n";
            total += item.precio * item.cantidad;
        }
    });

    // Si el Total es Mayor a cero muestro el pedido
    if (total>0) {
        pedido += "\nTotal: $" + total;
        document.getElementById("txtResumen").value = pedido;
        document.getElementById("divResumen").style.display = "block"; 
    }
    else
    {
        document.getElementById("pAviso" ).innerText = "=>";
        document.getElementById("pAviso" ).style.color = "green";
        document.getElementById("pMensaje" ).innerText = "No hay Productos Seleccionados";
        document.getElementById("pMensaje" ).style.color = "rgb(237, 55, 55)";    
    }
}


//----------------------------------------- Hoja Productos - Botón Cancelar -------------------------------------------------
// Evento On Click del Botón Cancelar
function btnOnClickCancelar() 
{
    // Inicializa Resumen y sale
    fntIniciaResumen();
    // Oculta la Pantalla de Resumen
    document.getElementById("divResumen").style.display = "none"; 
    document.getElementById("pAviso" ).innerText = "";
    document.getElementById("pMensaje" ).innerText ="";
}


// Evento On Click del Botón Enviar
function btnOnClickEnviar()
{

    let mensaje = "";
    let erreMail = valEMail(document.getElementById("iptEmail").value, false);


   if (document.getElementById("iptNombre").value == "")
    {
        mensaje += "Nombre, ";
    }
    if (erreMail != "")
    {
        mensaje += "eMail, ";
    }
    if (document.getElementById("iptTelefono").value == "")
    {
        mensaje += "Teléfono, ";
    }
    if (document.getElementById("iptDireccion1" ).value == "")
    {
        mensaje += "Dirección, ";
    }
    if (document.getElementById("sltBarrio" ).value == "")
    {
        mensaje += "Barrio, ";
    }

    // Muestra el mensaje de error
    mensaje = mensaje.substring(0,mensaje.length-2);
    if (mensaje.length != "" )
    {
        fctMensaje( "Falta Ingresar: ", mensaje + ". " + erreMail);
        document.getElementById("pAviso" ).innerText = "=>";
        document.getElementById("pAviso" ).style.color = "yelow";
        document.getElementById("pMensaje" ).innerText = "Ingresar: " + mensaje;
        document.getElementById("pMensaje" ).style.color = "rgb(237, 55, 55)";

    }
    else{
        // No Hay errores
        // Coloca Cantidad en cero y los titulos de los menu
        for (let i = 0; i < productos.length; i++) {
            productos[i].cantidad = 0;
            document.getElementById("spnCantidad" + i).innerText = 0;
            document.getElementById("h3TitMenu" + i).innerText = productos[i].titulo;
            document.getElementById("h3TitMenu" + i).style.color = "navy";
            
        }

        // Muestra Total en cero
        let total = 0;
        pMonto.innerText = "Importe Total: $"+ total.toLocaleString();

        document.getElementById("iptNombre").value = "";
        document.getElementById("iptEmail").value = "";
        document.getElementById("iptTelefono").value = "";
        document.getElementById("iptDireccion1" ).value = "";
        document.getElementById("iptDireccion2" ).value = "";
        document.getElementById("sltBarrio" ).value = "";
        document.getElementById("txtAreaAclaraciones").value = "";
        
        // Oculta la Pantalla de Resumen
        document.getElementById("divResumen").style.display = "none"; 
        fctMensaje( "", "Pedido Solicitado Correctamente!!!!");
        document.getElementById("pAviso" ).innerText = "=>";
        document.getElementById("pAviso" ).style.color = "green";
        document.getElementById("pMensaje" ).innerText = "Pedido Solicitado Correctamente!!!!";
        document.getElementById("pMensaje" ).style.color = "rgb(237, 55, 55)";   

    }
}

function fntIniciaResumen()  
{
    //Inicializa las Etiquetas de Datos del Resumen
    document.getElementById("iptNombre").value = "";
    document.getElementById("iptEmail").value = "";
    document.getElementById("iptTelefono").value = "";
    document.getElementById("iptDireccion1" ).value = "";
    document.getElementById("iptDireccion2" ).value = "";
    document.getElementById("sltBarrio" ).value = "";
    document.getElementById("txtAreaAclaraciones").value = "";
}



document.addEventListener('mousemove', function(event) {
    const cntFotoHD = document.getElementById('divFotoMenuHD');
    const x = event.clientX;
    const y = event.clientY;
    
    cntFotoHD.style.left = x + 'px';
    cntFotoHD.style.top = y + 'px';
});

//--------------------------------------------Hoja Productos - Variables Globales ----------------------------------------
class Producto {
    constructor( srcFotoHD, srcFoto, titulo, descripcion, precio, cantidad=0){
        this.srcFotoHD = srcFotoHD;
        this.srcFoto= srcFoto;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;

    };
};



// Array que define el Carrito de Compra
let productos = [];
productos.push( new Producto( "./Imagenes/Tiradito de Pulpo.png", "./Imagenes/Tiradito de Pulpo.png", "Tiradito de Pulpo", "Finas láminas de pulpo español en clásica salsa de oliva del Perú.", 21500, 0),
            new Producto( "./Imagenes/Ceviche Nikkei.png", "./Imagenes/Ceviche Nikkei.png","Ceviche Nikkei", "Salmón rosado, cebolla morada, choclo, aliño, jengibre, wasabi y salsa de soja con o’nigiris.", 33600, 0),
            new Producto( "./Imagenes/Entrada Samurai.png", "./Imagenes/Entrada Samurai.png", "Entrada Samurai", "Deliciosos bocaditos de salmón, phila y palta, encintados con alga.", 14900, 0),
            new Producto( "./Imagenes/Gran Dashi.png", "./Imagenes/Gran Dashi.png","Gran Dashi", "Langostinos y salmón rosado laqueados con maracuyá, palta, roll crocante y especias.", 37000, 0),
            new Producto( "./Imagenes/Gran Steak.png", "./Imagenes/Gran Steak.png","Gran Steak", "Salmón glaseado en salsa teriyaki con salteado de vegetales y fideos de arroz.", 39500, 0),
            new Producto( "./Imagenes/Yakimeshi.png", "./Imagenes/Yakimeshi.png","Yakimeshi", "Arroz salteado al wok con vegetales, huevo y pollo/lomo/salmón/langostinos.", 6500, 0),
            new Producto( "./Imagenes/Tentacion Chocolate.png","./Imagenes/Tentacion Chocolate.png", "Tentacion Chocolate", "Mousse de chocolate amargo al caramelo con un toque de frutos del bosque.", 9400,  0),
            new Producto( "./Imagenes/Apple Dingo.png","./Imagenes/Apple Dingo.png", "Apple Dingo", "Manzanas cocidas en almíbar de naranjas con crocante de caramelo.", 4700, 0),
            new Producto( "./Imagenes/Cheese Cake.png","./Imagenes/Cheese Cake.png", "Cheese Cake", "Chesse cake vienés al limón y crocante de sésamo con frutos del bosque.", 8000, 0) );



//Agrega al DOM los Productos definidos en el menus
for (let i = 0; i < productos.length; i++) {
    fntAgregaProducto(i, "asdPrincipal" );    
}