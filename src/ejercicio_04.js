const contenido = document.getElementById("contenido");
const boton = document.getElementById("btnCambiar");


boton.addEventListener("click", () => {

    contenido.textContent = "Las mariposas son uno de los insectos más llamativos de la naturaleza gracias a sus alas llenas de colores y formas únicas. Pasan por un proceso de transformación llamado metamorfosis, que incluye cuatro etapas: huevo, oruga, crisálida y finalmente mariposa adulta.";


    contenido.innerHTML += "<br><strong>Las mariposas simbolizan el cambio, la libertad y la esperanza, porque nos recuerdan que incluso después de pasar por momentos difíciles, siempre es posible renacer y volar más alto.</strong>";
});
