import { Estacionamiento } from "./Estacionamiento";

export class EstacionamientoSubcontratado extends Estacionamiento {
  private identificacion: string;
  private correo: string;

  /**
   * Getter $identificacion
   * @return {string}
   */
  public get $identificacion(): string {
    return this.identificacion;
  }

  /**
   * Getter $correo
   * @return {string}
   */
  public get $correo(): string {
    return this.correo;
  }

  /**
   * Setter $identificacion
   * @param {string} value
   */
  public set $identificacion(value: string) {
    this.identificacion = value;
  }

  /**
   * Setter $correo
   * @param {string} value
   */
  public set $correo(value: string) {
    this.correo = value;
  }
}
