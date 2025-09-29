
const caja = document.getElementById("caja");
const boton = document.getElementById("boton");


boton.addEventListener("click", () => {
  caja.textContent = "¡Feliz Cumpleaños!";
  caja.style.backgroundColor = "pink";
});


caja.addEventListener("mouseover", () => {
  caja.style.backgroundColor = "purple";
  caja.textContent = "Que la pases muy bien";
});


caja.addEventListener("mouseout", () => {
  caja.style.backgroundColor = "lightblue";
  caja.textContent = "Sorpresa!";
});
