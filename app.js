// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let inputNombre = document.getElementById("amigo"); // Capturar el valor del campo de entrada
    let nombre = inputNombre.value.trim();
    
    if (nombre === "") { // Validar que el campo no esté vacío
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    amigos.push(nombre); // Agregar el nombre al array
    
    inputNombre.value = ""; // Limpiar el campo de entrada
    actualizarListaAmigos(); // Actualizar la lista en la interfaz
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizarla
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Crear un elemento <li>
        li.textContent = amigos[i]; // Asignar el nombre del amigo
        listaAmigos.appendChild(li); // Agregar el <li> a la lista
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debe haber al menos un amigo en la lista.");
        return;
    }

    let elegido = amigos[Math.floor(Math.random() * amigos.length)]; // Selecciona un amigo al azar

    mostrarResultado(elegido);
}

function mostrarResultado(amigo) {
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = ""; 

    let li = document.createElement("li");
    li.textContent = `Tu amigo secreto es... ${amigo}`;
    listaResultado.appendChild(li);
}