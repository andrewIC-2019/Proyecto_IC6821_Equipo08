import { Vehiculo } from "../dist/Vehiculo";
import { TPermisosUsuario } from "./TPermisosUsusario";

export abstract class Usuario {
  private identificacion: string;
  private nombre: string;
  private apellido1: string;
  private apellido2: string;
  private telefono: string;
  private vehiculos: Vehiculo[];
  private correo: string;
  private deshabilidato: boolean;
  private password: string;
  private esAdministrador: boolean;
  private permisos: TPermisosUsuario[];

  /**
   * Getter $identificacion
   * @return {string}
   */
  public get $identificacion(): string {
    return this.identificacion;
  }

  /**
   * Getter $nombre
   * @return {string}
   */
  public get $nombre(): string {
    return this.nombre;
  }

  /**
   * Getter $apellido1
   * @return {string}
   */
  public get $apellido1(): string {
    return this.apellido1;
  }

  /**
   * Getter $apellido2
   * @return {string}
   */
  public get $apellido2(): string {
    return this.apellido2;
  }

  /**
   * Getter $telefono
   * @return {string}
   */
  public get $telefono(): string {
    return this.telefono;
  }

  /**
   * Getter $vehiculos
   * @return {Vehiculo[]}
   */
  public get $vehiculos(): Vehiculo[] {
    return this.vehiculos;
  }

  /**
   * Getter $correo
   * @return {string}
   */
  public get $correo(): string {
    return this.correo;
  }

  /**
   * Getter $deshabilidato
   * @return {boolean}
   */
  public get $deshabilidato(): boolean {
    return this.deshabilidato;
  }

  /**
   * Getter $password
   * @return {string}
   */
  public get $password(): string {
    return this.password;
  }

  /**
   * Getter $esAdministrador
   * @return {boolean}
   */
  public get $esAdministrador(): boolean {
    return this.esAdministrador;
  }

  /**
   * Getter $permisos
   * @return {TPermisosUsuario[]}
   */
  public get $permisos(): TPermisosUsuario[] {
    return this.permisos;
  }

  /**
   * Setter $identificacion
   * @param {string} value
   */
  public set $identificacion(value: string) {
    this.identificacion = value;
  }

  /**
   * Setter $nombre
   * @param {string} value
   */
  public set $nombre(value: string) {
    this.nombre = value;
  }

  /**
   * Setter $apellido1
   * @param {string} value
   */
  public set $apellido1(value: string) {
    this.apellido1 = value;
  }

  /**
   * Setter $apellido2
   * @param {string} value
   */
  public set $apellido2(value: string) {
    this.apellido2 = value;
  }

  /**
   * Setter $telefono
   * @param {string} value
   */
  public set $telefono(value: string) {
    this.telefono = value;
  }

  /**
   * Setter $vehiculos
   * @param {Vehiculo[]} value
   */
  public set $vehiculos(value: Vehiculo[]) {
    this.vehiculos = value;
  }

  /**
   * Setter $correo
   * @param {string} value
   */
  public set $correo(value: string) {
    this.correo = value;
  }

  /**
   * Setter $deshabilidato
   * @param {boolean} value
   */
  public set $deshabilidato(value: boolean) {
    this.deshabilidato = value;
  }

  /**
   * Setter $password
   * @param {string} value
   */
  public set $password(value: string) {
    this.password = value;
  }

  /**
   * Setter $esAdministrador
   * @param {boolean} value
   */
  public set $esAdministrador(value: boolean) {
    this.esAdministrador = value;
  }

  /**
   * Setter $permisos
   * @param {TPermisosUsuario[]} value
   */
  public set $permisos(value: TPermisosUsuario[]) {
    this.permisos = value;
  }
}
