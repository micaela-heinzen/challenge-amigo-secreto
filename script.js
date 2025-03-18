let nombres = [];

function agregarNombre() {
    let input = document.getElementById("nombre");
    let nombre = input.value.trim();
    if (nombre && !nombres.includes(nombre)) {
        nombres.push(nombre);
        let lista = document.getElementById("lista");
        let item = document.createElement("li");
        item.textContent = nombre;
        lista.appendChild(item);
        input.value = "";
    }
}

function realizarSorteo() {
    if (nombres.length < 2) {
        document.getElementById("resultado").textContent = "Agrega al menos dos nombres para sortear.";
        return;
    }
    let indice = Math.floor(Math.random() * nombres.length);
    let ganador = nombres[indice];
    document.getElementById("resultado").textContent = "El amigo secreto es: " + ganador;
}
