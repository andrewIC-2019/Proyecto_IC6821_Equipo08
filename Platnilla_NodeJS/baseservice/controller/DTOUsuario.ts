import { Vehiculo } from "../model";
import { Division } from "../model/Division";
import { Usuario } from "../model/Usuario";

export class DTOUsuario {
  private identificacion: string;
  private nombre: string;
  private apellido1: string;
  private apellido2: string;
  private telefono: string;
  private vehiculos: Vehiculo[];
  private correo: string;
  private correoInstitucional: string;
  private division: Division;
  private losUsuarios: Usuario[];

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
   * Getter $correoInstitucional
   * @return {string}
   */
  public get $correoInstitucional(): string {
    return this.correoInstitucional;
  }

  /**
   * Getter $division
   * @return {Division}
   */
  public get $division(): Division {
    return this.division;
  }

  /**
   * Getter $losUsuarios
   * @return {Usuario[]}
   */
  public get $losUsuarios(): Usuario[] {
    return this.losUsuarios;
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
   * Setter $correoInstitucional
   * @param {string} value
   */
  public set $correoInstitucional(value: string) {
    this.correoInstitucional = value;
  }

  /**
   * Setter $division
   * @param {Division} value
   */
  public set $division(value: Division) {
    this.division = value;
  }

  /**
   * Setter $losUsuarios
   * @param {Usuario[]} value
   */
  public set $losUsuarios(value: Usuario[]) {
    this.losUsuarios = value;
  }
}
