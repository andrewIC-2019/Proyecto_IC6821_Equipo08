import { Estacionamiento } from "./Estacionamiento";
import { TEspacio } from "./TEspacio";

export class EspacioEstacionmiento {
  private estacionamiento: Estacionamiento;
  private numero: number;
  private tipo: TEspacio;
  private desahbilitado: boolean;
  private descipccion: string;

  /**
   * Getter $estacionamiento
   * @return {Estacionamiento}
   */
  public get $estacionamiento(): Estacionamiento {
    return this.estacionamiento;
  }

  /**
   * Getter $numero
   * @return {number}
   */
  public get $numero(): number {
    return this.numero;
  }

  /**
   * Getter $tipo
   * @return {TEspacio}
   */
  public get $tipo(): TEspacio {
    return this.tipo;
  }

  /**
   * Getter $desahbilitado
   * @return {boolean}
   */
  public get $desahbilitado(): boolean {
    return this.desahbilitado;
  }

  /**
   * Getter $descipccion
   * @return {string}
   */
  public get $descipccion(): string {
    return this.descipccion;
  }

  /**
   * Setter $estacionamiento
   * @param {Estacionamiento} value
   */
  public set $estacionamiento(value: Estacionamiento) {
    this.estacionamiento = value;
  }

  /**
   * Setter $numero
   * @param {number} value
   */
  public set $numero(value: number) {
    this.numero = value;
  }

  /**
   * Setter $tipo
   * @param {TEspacio} value
   */
  public set $tipo(value: TEspacio) {
    this.tipo = value;
  }

  /**
   * Setter $desahbilitado
   * @param {boolean} value
   */
  public set $desahbilitado(value: boolean) {
    this.desahbilitado = value;
  }

  /**
   * Setter $descipccion
   * @param {string} value
   */
  public set $descipccion(value: string) {
    this.descipccion = value;
  }
}
