import { EspacioEstacionmiento } from "./EspacioEstacionamiento";
import { Estacionamiento } from "./Estacionamiento";
import { Horario } from "./Horario";
import { Usuario } from "./Usuario";

export class Reservacion {
  private numero: bigint;
  private usuario: Usuario;
  private estacionamieno: Estacionamiento;
  private espacio: EspacioEstacionmiento;
  private hora: Horario;
  private timestamp: Date;
  private recurrente: boolean;

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
   * Getter $timestamp
   * @return {Date}
   */
  public get $timestamp(): Date {
    return this.timestamp;
  }

  /**
   * Getter $recurrente
   * @return {boolean}
   */
  public get $recurrente(): boolean {
    return this.recurrente;
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

  /**
   * Setter $timestamp
   * @param {Date} value
   */
  public set $timestamp(value: Date) {
    this.timestamp = value;
  }

  /**
   * Setter $recurrente
   * @param {boolean} value
   */
  public set $recurrente(value: boolean) {
    this.recurrente = value;
  }
}
