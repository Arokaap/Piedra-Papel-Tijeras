export class Jugador {
    constructor(puntos, mano) {
        this.puntos = puntos;
        this.mano = mano;
    }
    get getMano() {
        return this.mano;
    }
    get getPuntos() {
        return this.puntos;
    }
    set setMano(newMano) {
        this.mano = newMano;
    }
    set setPuntos(newPuntos) {
        this.puntos = newPuntos;
    }
    generarMano() {
        this.mano = Math.floor(Math.random() * (3 - 1 + 1) + 1).toString();
    }
}
