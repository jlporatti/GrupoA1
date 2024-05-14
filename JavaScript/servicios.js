
var inAut = 0;
var tiempoEntreFotos = 5000; 

// Función para cambiar la imagen automáticamente
function fntCambiarImagen() {
    let foto = document.getElementById("imgFoto");
    foto.src = fotos[inAut].dir;
    foto.alt = fotos[inAut].imagen;
    document.getElementById("hTituloFoto").innerText = fotos[inAut].titulo;
    document.getElementById("pDescFoto").innerText = fotos[inAut].descripcion;

    //imgFoto.src = fotos[inAut].dir;
    //imgFoto.alt = fotos[inAut].imagen;
    // hTituloFoto.innerText = fotos[inAut].titulo;
    // pDescFoto.innerText = fotos[inAut].descripcion;

    // Avanzo al siguiente índice
    inAut = (inAut + 1) % fotos.length;

    // Trancurrido el tiempo llama a la finción
    setTimeout(fntCambiarImagen, tiempoEntreFotos); 
}

class foto {
    constructor( titulo, dir, descripcion) {
        this.titulo = titulo;
        this.dir = dir;
        this.descripcion = descripcion;
    }

}
let fotos = [];

fotos.push( 
            new foto("Cenas", "./Imagenes/Cenas.jpg","Has que tu cena sea todo un show, nuestro Chef te presenta el plato"),
            new foto("Envios a Domicilio", "./Imagenes/EnvioDomicilio.jpg", "Si te anotas en nuestra pagina, podemos arreglar comida diaria a la hora que lo deses"),
            new foto("Reunones", "./Imagenes/Reuniones.jpg","Para esas ocaciones especiales, tenemos los mejores menús con excelentes presentacion"),
            new foto("Servicio a empresas", "./Imagenes/ViandasEmpresas.jpg", "Comidas variadas por dia, al mejor precio, para toda la empresa o para eventos especiales"))



// Inicio cambio de imágenes y textos
fntCambiarImagen();