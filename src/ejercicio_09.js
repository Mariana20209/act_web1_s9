const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); 

 
  const valorNombre = nombre.value.trim();
  const valorEmail = email.value.trim();


  if (valorNombre === "" || valorEmail === "") {
    mensaje.textContent = " ✖ Todos los campos son obligatorios.";
    mensaje.className = "error";
  } else {
    mensaje.textContent = " ✔ Formulario enviado con éxito.";
    mensaje.className = "exito";

    
    nombre.value = "";
    email.value = "";
  }
});
