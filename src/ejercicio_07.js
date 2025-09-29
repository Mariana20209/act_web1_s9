const btnAgregar = document.getElementById("btnAgregar");
const lista = document.getElementById("lista");

let contador = 1;

btnAgregar.addEventListener("click", () => {
    // Crear un nuevo elemento <li>
    const nuevoElemento = document.createElement("li");

    // Agregar contenido al <li>
    nuevoElemento.textContent = "Elemento " + contador;

    // Insertar el <li> en la lista
    lista.appendChild(nuevoElemento);

    contador++;
});
