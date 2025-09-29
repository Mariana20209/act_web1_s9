const info = document.getElementById('info');

const titulo = document.title;
const url = document.URL;

info.innerHTML =
    `<p><strong>Título:</strong> ${titulo}</p>
<p><strong>URL actual:</strong> ${url}</p>`;
