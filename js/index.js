const primermensaje = "¿Qué eliges primer jugador? \nPiedra \nPapel \nTijera";
const segundomensaje = "¿Qué eliges segundo jugador? \nPiedra \nPapel \nTijera";
let ciclo = true;

function iniciarjuego() {
    let primerjugador = prompt(primermensaje).toLowerCase().trim();
    let segundojugador = prompt(segundomensaje).toLowerCase().trim();
    if (primerjugador == "piedra") {
        if (segundojugador == "piedra") {
            alert("Empate!");
        } else if (segundojugador == "papel") {
            alert("Perdio primer jugador :(");
        } else if (segundojugador == "tijera") {
            alert("Gano primer jugador!");
        }
    } else if (primerjugador == "papel") {
        if (segundojugador == "piedra") {
            alert("Gano primer jugador!");
        } else if (segundojugador == "papel") {
            alert("Empate!");
        } else if (segundojugador == "tijera") {
            alert("Perdio primer jugador!");
        }
    } else if (primerjugador == "tijera") {
        if (segundojugador == "piedra") {
            alert("Perdiio primer jugador!");
        } else if (segundojugador == "papel") {
            alert("Gano primer jugador!");
        } else if (segundojugador == "tijera") {
            alert("Empate!");
        }
    } else {
        console.error("Ingresar una opcion valida");
    }
}

function jugar() {
    while (ciclo) {
        iniciarjuego();
        ciclo = confirm("¿Queres volver a jugar?");
    }
    alert("Espero verte de vuelta, adios!");
}
