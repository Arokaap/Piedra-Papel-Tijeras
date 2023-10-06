import { Juego } from "../models/Juego.js";

let permitirIniciar = true;
const partida = new Juego([]);
const menuInicio = <HTMLDivElement>document.getElementById("menuInicio");
const menuPartida = <HTMLDivElement>document.getElementById("menuPartida");
const btnMusica = <HTMLInputElement>document.getElementById("btnMusicaInicio");
const btnMusicaPartida = <HTMLInputElement>(
  document.getElementById("btnMusicaPartida")
);
const audio = <HTMLAudioElement>document.getElementById("audio");
const btnComenzar = <HTMLInputElement>document.getElementById("btnComenzar");
const btnInicializar = <HTMLInputElement>(
  document.getElementById("btnInicializar")
);
const imgOrdenador = <HTMLImageElement>document.getElementById("imgOrdenador");
const imgJugador = <HTMLImageElement>document.getElementById("imgJugador");
const puntosJugador = <HTMLHeadingElement>(
  document.getElementById("puntosJugador")
);
const puntosOrdenador = <HTMLHeadingElement>(
  document.getElementById("puntosOrdenador")
);
const ganador = <HTMLHeadingElement>document.getElementById("ganador");
const btnPapel = <HTMLInputElement>document.getElementById("btnPapel");
const btnPiedra = <HTMLInputElement>document.getElementById("btnPiedra");
const btnTijeras = <HTMLInputElement>document.getElementById("btnTijeras");
const bordeJugador = <HTMLDivElement>document.getElementById("bordeJugador");
const bordeOrdenador = <HTMLDivElement>(
  document.getElementById("bordeOrdenador")
);

btnMusica.addEventListener("click", () => {
  playStopMusica();
});

btnMusicaPartida.addEventListener("click", () => {
  playStopMusica();
});

btnComenzar.addEventListener("click", () => {
  menuInicio.style.visibility = "hidden";
  menuPartida.removeAttribute("hidden");
  menuPartida.style.visibility = "visible";
  imgOrdenador.src = "assets/img/logo.png";
  imgJugador.src = "assets/img/logo.png";
  ganador.textContent = "Comienza pulsando Iniciar";
  deshabilitarManos();
});

btnInicializar.addEventListener("click", () => {
  if (permitirIniciar) {
    partida.iniciarPartida();
    habilitarManos();
    actualizarPuntos();
    imgOrdenador.src = "assets/img/logo.png";
    imgJugador.src = "assets/img/logo.png";
    ganador.textContent = "¡Elige tu mano!";
    btnInicializar.value = "Inicializar";
  }
});

btnTijeras.addEventListener("click", () => {
  deshabilitarManos();
  animacionOrdenador();
  animacionJugador();
  let jugadores = partida.getJugadores;
  let result = partida.jugarRonda("tijera");

  imgJugador.src = "assets/img/tijeras.png";

  setTimeout(() => {
    if (result[0] == "") {
      imgOrdenador.src = "assets/img/tijeras.png";
      ganador.textContent = `Empate`;
    }

    if (result[0] == "Ordenador") {
      imgOrdenador.src = `assets/img/piedra.png`;
      ganador.innerHTML = `<h2 id="ganador"><i class="fa-regular fa-star mt-2"></i> Gana ${result[1]} (${result[0]})</h2>`;
    }

    if (result[0] == "Jugador") {
      imgOrdenador.src = "assets/img/papel.png";
      ganador.innerHTML = `<h2 id="ganador"><i class="fa-regular fa-star mt-2"></i> Gana ${result[1]} (${result[0]})</h2>`;
    }

    actualizarPuntos();
    habilitarManos();

    if (partida.victoria() == "ordenador") {
      ganarOrdenador();
    }

    if (partida.victoria() == "jugador") {
      ganaJugador();
    }
  }, 1500);
});

btnPapel.addEventListener("click", () => {
  deshabilitarManos();
  animacionOrdenador();
  animacionJugador();
  let jugadores = partida.getJugadores;
  let result = partida.jugarRonda("papel");

  setTimeout(() => {
    if (result[0] == "") {
      imgOrdenador.src = "assets/img/papel.png";
      ganador.textContent = `Empate`;
    }

    if (result[0] == "Ordenador") {
      imgOrdenador.src = `assets/img/tijeras.png`;
      ganador.innerHTML = `<h2 id="ganador"><i class="fa-regular fa-star mt-2"></i> Gana ${result[1]} (${result[0]})</h2>`;
    }

    if (result[0] == "Jugador") {
      imgOrdenador.src = "assets/img/piedra.png";
      ganador.innerHTML = `<h2 id="ganador"><i class="fa-regular fa-star mt-2"></i> Gana ${result[1]} (${result[0]})</h2>`;
    }
    imgJugador.src = "assets/img/papel.png";
    actualizarPuntos();
    habilitarManos();

    if (partida.victoria() == "ordenador") {
      ganarOrdenador();
    }

    if (partida.victoria() == "jugador") {
      ganaJugador();
    }
  }, 1500);
});

btnPiedra.addEventListener("click", () => {
  deshabilitarManos();
  animacionOrdenador();
  animacionJugador();
  let jugadores = partida.getJugadores;
  let result = partida.jugarRonda("piedra");

  setTimeout(() => {
    if (result[0] == "") {
      imgOrdenador.src = "assets/img/piedra.png";
      ganador.textContent = `Empate`;
    }

    if (result[0] == "Ordenador") {
      imgOrdenador.src = `assets/img/papel.png`;
      ganador.innerHTML = `<h2 id="ganador"><i class="fa-regular fa-star mt-2"></i> Gana ${result[1]} (${result[0]})</h2>`;
    }

    if (result[0] == "Jugador") {
      imgOrdenador.src = "assets/img/tijeras.png";
      ganador.innerHTML = `<h2 id="ganador"><i class="fa-regular fa-star mt-2"></i> Gana ${result[1]} (${result[0]})</h2>`;
    }

    imgJugador.src = "assets/img/piedra.png";
    actualizarPuntos();
    habilitarManos();

    if (partida.victoria() == "ordenador") {
      ganarOrdenador();
    }

    if (partida.victoria() == "jugador") {
      ganaJugador();
    }
  }, 1500);
});

function playStopMusica() {
  if (audio.paused) {
    audio.play();
    btnMusica.style.backgroundColor = "red";
    btnMusicaPartida.style.backgroundColor = "red";
    btnMusica.value = "Stop";
    btnMusicaPartida.value = "Stop";
  } else {
    audio.pause();
    btnMusica.style.backgroundColor = "green";
    btnMusicaPartida.style.backgroundColor = "green";
    btnMusica.value = "Start";
    btnMusicaPartida.value = "Start";
  }
}

function animacionOrdenador() {
  let intervalo1 = setInterval(() => {
    imgOrdenador.src = "assets/img/piedra.png";
  }, 200);
  let intervalo2 = setInterval(() => {
    imgOrdenador.src = "assets/img/papel.png";
  }, 300);
  let intervalo3 = setInterval(() => {
    imgOrdenador.src = "assets/img/tijeras.png";
  }, 400);

  setTimeout(() => {
    clearInterval(intervalo1);
    clearInterval(intervalo2);
    clearInterval(intervalo3);
  }, 1500);
}

function animacionJugador() {
  let intervalo1 = setInterval(() => {
    imgJugador.src = "assets/img/papel.png";
  }, 200);
  let intervalo2 = setInterval(() => {
    imgJugador.src = "assets/img/tijeras.png";
  }, 300);
  let intervalo3 = setInterval(() => {
    imgJugador.src = "assets/img/piedra.png";
  }, 400);

  setTimeout(() => {
    clearInterval(intervalo1);
    clearInterval(intervalo2);
    clearInterval(intervalo3);
  }, 1500);
}

function deshabilitarManos() {
  btnTijeras.disabled = true;
  btnPiedra.disabled = true;
  btnPapel.disabled = true;
}

function habilitarManos() {
  btnTijeras.disabled = false;
  btnPiedra.disabled = false;
  btnPapel.disabled = false;
}

function actualizarPuntos() {
  let puntos = partida.devolverPuntos();

  puntosJugador.innerHTML = `<h4 id='puntosJugador' class='display-5 mt-2'><i class='fa-regular fa-user'></i> Jugador&nbsp;&nbsp;&nbsp;&nbsp;Puntos: ${puntos[0]}</h4>`;
  puntosOrdenador.innerHTML = ` <h4 id="puntosOrdenador" class="display-5 mt-2"><i class="fa-solid fa-desktop"></i> Ordenador&nbsp;&nbsp;&nbsp;Puntos: ${puntos[1]}</h4>`;
}

function ganaJugador() {
  permitirIniciar = false;
  deshabilitarManos();
  ganador.innerHTML = `<h2 id="ganador"><i class="fa-regular fa-star mt-2"></i> Partida finalizada gana Jugador</h2>`;

  const intervalo1 = setInterval(() => {
    bordeJugador.style.borderColor = "green";
  }, 400);

  const intervalo2 = setInterval(() => {
    bordeJugador.style.borderColor = "black";
  }, 800);

  setTimeout(() => {
    permitirIniciar = true;
    clearInterval(intervalo1);
    clearInterval(intervalo2);
  }, 4000);
}

function ganarOrdenador() {
  permitirIniciar = false;
  deshabilitarManos();
  ganador.innerHTML = `<h2 id="ganador"><i class="fa-regular fa-star mt-2"></i> Partida finalizada gana la IA</h2>`;

  const intervalo1 = setInterval(() => {
    bordeOrdenador.style.borderColor = "green";
  }, 400);

  const intervalo2 = setInterval(() => {
    bordeOrdenador.style.borderColor = "black";
  }, 800);

  setTimeout(() => {
    permitirIniciar = true;
    clearInterval(intervalo1);
    clearInterval(intervalo2);
  }, 4000);
}
