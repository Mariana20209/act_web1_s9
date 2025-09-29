const btnNavegar = document.getElementById("btnNavegar");
const parrafo2 = document.getElementById("parrafo2");
const info = document.getElementById("info");

btnNavegar.addEventListener("click", () => {
  // Navegar al padre
  const padre = parrafo2.parentElement;

  // Acceder a los hijos del contenedor
  const hijos = padre.children;

  // Acceder al siguiente hermano
  const siguiente = parrafo2.nextElementSibling;

  // Mostrar información en pantalla
  info.innerHTML = `
    <p><strong>Elemento actual:</strong> ${parrafo2.textContent}</p>
    <p><strong>Padre:</strong> ${padre.id}</p>
    <p><strong>Hijos del contenedor:</strong> ${[...hijos].map(h => h.textContent).join(", ")}</p>
    <p><strong>Siguiente hermano:</strong> ${siguiente ? siguiente.textContent : "No hay siguiente"}</p>
  `;
});
