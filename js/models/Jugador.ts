export class Jugador {
  private puntos: number;
  private mano: string;

  constructor(puntos: number, mano: string) {
    this.puntos = puntos;
    this.mano = mano;
  }

  get getMano() {
    return this.mano;
  }

  public get getPuntos() {
    return this.puntos;
  }

  set setMano(newMano: string) {
    this.mano = newMano;
  }

  set setPuntos(newPuntos: number) {
    this.puntos = newPuntos;
  }

  generarMano() {
    this.mano = Math.floor(Math.random() * (3 - 1 + 1) + 1).toString();
  }
}
