const elemento = document.getElementsByClassName("resaltar");
 for (let i = 0; i < elemento.length; i++) {
     elemento[i].style.backgroundColor = "yellow";
     elemento[i].style.fontWeight = "bold";
     elemento[i].style.color = "blue";

 }

const contador = document.getElementById("contador");
contador.textContent = `Hay ${elemento.length} elementos con la clase "resaltar".`;