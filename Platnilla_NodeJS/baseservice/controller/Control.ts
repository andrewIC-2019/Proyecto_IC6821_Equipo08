import { GestorEstacionamiento } from "./GestorEstacionamiento";
import { GestorReservacion } from "./GestorReservacion";
import { GestorUsuario } from "./GestorUsuarios";

export class Control {
  private static instance: Control;
  private gestorUsuario: GestorUsuario;
  private gestorEstacionamiento: GestorEstacionamiento;
  private gestorReservacion: GestorReservacion;

  private constructor() {
    this.gestorUsuario = new GestorUsuario();
    this.gestorEstacionamiento = new GestorEstacionamiento();
    this.gestorReservacion = new GestorReservacion();
  }

  public static getInstance(): Control {
    if (!Control.instance) {
      Control.instance = new Control();
    }
    return Control.instance;
  }

  /**
   * Getter $gestorUsuario
   * @return {GestorUsuario}
   */
  public get $gestorUsuario(): GestorUsuario {
    return this.gestorUsuario;
  }

  /**
   * Getter $gestorEstacionamiento
   * @return {GestorEstacionamiento}
   */
  public get $gestorEstacionamiento(): GestorEstacionamiento {
    return this.gestorEstacionamiento;
  }

  /**
   * Getter $gestorReservacion
   * @return {GestorReservacion}
   */
  public get $gestorReservacion(): GestorReservacion {
    return this.gestorReservacion;
  }

  /**
   * Setter $gestorUsuario
   * @param {GestorUsuario} value
   */
  public set $gestorUsuario(value: GestorUsuario) {
    this.gestorUsuario = value;
  }

  /**
   * Setter $gestorEstacionamiento
   * @param {GestorEstacionamiento} value
   */
  public set $gestorEstacionamiento(value: GestorEstacionamiento) {
    this.gestorEstacionamiento = value;
  }

  /**
   * Setter $gestorReservacion
   * @param {GestorReservacion} value
   */
  public set $gestorReservacion(value: GestorReservacion) {
    this.gestorReservacion = value;
  }
}
