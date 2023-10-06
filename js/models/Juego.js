import { Jugador } from "./Jugador.js";
export class Juego {
    constructor(jugadores) {
        this.jugadores = jugadores;
    }
    get getJugadores() {
        return this.jugadores;
    }
    set setJugadores(newJugadores) {
        this.jugadores = newJugadores;
    }
    iniciarPartida() {
        this.jugadores = [new Jugador(0, "0"), new Jugador(0, "0")];
    }
    victoria() {
        let victoria = "";
        if (this.jugadores[0].getPuntos == 5) {
            victoria = "jugador";
        }
        if (this.jugadores[1].getPuntos == 5) {
            victoria = "ordenador";
        }
        return victoria;
    }
    jugarRonda(manoJugador) {
        let result = ["", ""];
        this.jugadores[0].setMano = manoJugador;
        this.jugadores[1].generarMano();
        switch (this.jugadores[0].getMano) {
            case "piedra":
                if (parseInt(this.jugadores[1].getMano.toString()) == 2) {
                    result[0] = "Ordenador";
                    result[1] = "Papel";
                    this.jugadores[1].setPuntos = this.jugadores[1].getPuntos + 1;
                }
                if (parseInt(this.jugadores[1].getMano.toString()) == 3) {
                    result[0] = "Jugador";
                    result[1] = "Piedra";
                    this.jugadores[0].setPuntos = this.jugadores[0].getPuntos + 1;
                }
                break;
            case "papel":
                if (parseInt(this.jugadores[1].getMano.toString()) == 1) {
                    result[0] = "Jugador";
                    result[1] = "Papel";
                    this.jugadores[0].setPuntos = this.jugadores[0].getPuntos + 1;
                }
                if (parseInt(this.jugadores[1].getMano.toString()) == 3) {
                    result[0] = "Ordenador";
                    result[1] = "Tijeras";
                    this.jugadores[1].setPuntos = this.jugadores[1].getPuntos + 1;
                }
                break;
            case "tijera":
                if (parseInt(this.jugadores[1].getMano.toString()) == 1) {
                    result[0] = "Ordenador";
                    result[1] = "Piedra";
                    this.jugadores[1].setPuntos = this.jugadores[1].getPuntos + 1;
                }
                if (parseInt(this.jugadores[1].getMano.toString()) == 2) {
                    result[0] = "Jugador";
                    result[1] = "Tijeras";
                    this.jugadores[0].setPuntos = this.jugadores[0].getPuntos + 1;
                }
                break;
        }
        return result;
    }
    devolverPuntos() {
        let puntos = [];
        puntos[0] = this.jugadores[0].getPuntos;
        puntos[1] = this.jugadores[1].getPuntos;
        return puntos;
    }
}
