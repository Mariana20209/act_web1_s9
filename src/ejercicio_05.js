const enlace = document.getElementById("Enlace");
const imagen = document.getElementById("Imagen");
const boton = document.getElementById("btnCambiar");


boton.addEventListener("click", () => {
 
  console.log("Enlace actual:", enlace.getAttribute("href"));
  console.log("Imagen actual:", imagen.getAttribute("src"));


  enlace.setAttribute("href", "https://www.google.com");
  enlace.textContent = "Google";

  imagen.setAttribute("src", "../assets/imagenes/gato-2.jpg");
  imagen.setAttribute("alt", "Imagen cambiada");
});
