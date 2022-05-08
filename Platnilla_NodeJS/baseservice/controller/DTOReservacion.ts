import { Estacionamiento, Reservacion } from "../model";
import { EspacioEstacionmiento } from "../model/EspacioEstacionamiento";
import { Horario } from "../model/Horario";
import { Usuario } from "../model/Usuario";

export class DTOReservacion {
  private numero: bigint;
  private usuario: Usuario;
  private estacionamieno: Estacionamiento;
  private espacio: EspacioEstacionmiento;
  private hora: Horario;
  private reservas: Reservacion[];

  /**
   * Getter $numero
   * @return {bigint}
   */
  public get $numero(): bigint {
    return this.numero;
  }

  /**
   * Getter $usuario
   * @return {Usuario}
   */
  public get $usuario(): Usuario {
    return this.usuario;
  }

  /**
   * Getter $estacionamieno
   * @return {Estacionamiento}
   */
  public get $estacionamieno(): Estacionamiento {
    return this.estacionamieno;
  }

  /**
   * Getter $espacio
   * @return {EspacioEstacionmiento}
   */
  public get $espacio(): EspacioEstacionmiento {
    return this.espacio;
  }

  /**
   * Getter $hora
   * @return {Horario}
   */
  public get $hora(): Horario {
    return this.hora;
  }

  /**
   * Setter $numero
   * @param {bigint} value
   */
  public set $numero(value: bigint) {
    this.numero = value;
  }

  /**
   * Setter $usuario
   * @param {Usuario} value
   */
  public set $usuario(value: Usuario) {
    this.usuario = value;
  }

  /**
   * Setter $estacionamieno
   * @param {Estacionamiento} value
   */
  public set $estacionamieno(value: Estacionamiento) {
    this.estacionamieno = value;
  }

  /**
   * Setter $espacio
   * @param {EspacioEstacionmiento} value
   */
  public set $espacio(value: EspacioEstacionmiento) {
    this.espacio = value;
  }

  /**
   * Setter $hora
   * @param {Horario} value
   */
  public set $hora(value: Horario) {
    this.hora = value;
  }
}
