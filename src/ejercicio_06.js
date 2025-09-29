const titulo = document.getElementById("titulo");
const btnAgregar = document.getElementById("btnAgregar");
const btnQuitar = document.getElementById("btnQuitar");
const btnToggle = document.getElementById("btnToggle");

// Agregar clase
btnAgregar.addEventListener("click", () => {
    titulo.classList.add("destacado");
});

// Quitar clase
btnQuitar.addEventListener("click", () => {
    titulo.classList.remove("destacado");
});

// Alternar clase
btnToggle.addEventListener("click", () => {
    titulo.classList.toggle("destacado");
});
