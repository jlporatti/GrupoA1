
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
            new foto("Cenas Privadas", "./Imagenes/Foto5.jpg","Has que tu cena sea todo un show, nuestro Chef te presenta el plato"),
            new foto("Envios a Domicilio", "./Imagenes/Foto2.jpg", "Compra en nuestra pagina wwww.Sushi_Jel.com, desde la comodidad de tucasa"),
            new foto("Reunones Ocacionales", "./Imagenes/Foto3.jpg","Para esas ocaciones especiales, tenemos los mejores menús con excelentes presentacion"),
            new foto("Cenas Show", "./Imagenes/Foto4.jpg", "Nuestro Chef prepara los platos a la vista y nos cuenta sobre la procedencia e historia de las preparaciones"))



// Inicio cambio de imágenes y textos
fntCambiarImagen();