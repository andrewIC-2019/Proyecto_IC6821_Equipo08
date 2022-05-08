import { Ubicacion } from "./Ubicacion";

export abstract class Estacionamiento {
  private deshabilitado: boolean;
  private ubicacion: Ubicacion;
  private nombre: string;
  private telefono: string;
  private formaAcceso: string;
  private descripcion: string;
  private cantEspacios: number;
  private cantEspaciosEspeciales: number;
  private cantEspaciosJefaturas: number;
  private cantEspaciosVisitantes: number;
  private cantEspaciosOficiales: number;

  /**
   * Getter $deshabilitado
   * @return {boolean}
   */
  public get $deshabilitado(): boolean {
    return this.deshabilitado;
  }

  /**
   * Getter $ubicacion
   * @return {Ubicacion}
   */
  public get $ubicacion(): Ubicacion {
    return this.ubicacion;
  }

  /**
   * Getter $nombre
   * @return {string}
   */
  public get $nombre(): string {
    return this.nombre;
  }

  /**
   * Getter $telefono
   * @return {string}
   */
  public get $telefono(): string {
    return this.telefono;
  }

  /**
   * Getter $formaAcceso
   * @return {string}
   */
  public get $formaAcceso(): string {
    return this.formaAcceso;
  }

  /**
   * Getter $descripcion
   * @return {string}
   */
  public get $descripcion(): string {
    return this.descripcion;
  }

  /**
   * Getter $cantEspacios
   * @return {number}
   */
  public get $cantEspacios(): number {
    return this.cantEspacios;
  }

  /**
   * Getter $cantEspaciosEspeciales
   * @return {number}
   */
  public get $cantEspaciosEspeciales(): number {
    return this.cantEspaciosEspeciales;
  }

  /**
   * Getter $cantEspaciosJefaturas
   * @return {number}
   */
  public get $cantEspaciosJefaturas(): number {
    return this.cantEspaciosJefaturas;
  }

  /**
   * Getter $cantEspaciosVisitantes
   * @return {number}
   */
  public get $cantEspaciosVisitantes(): number {
    return this.cantEspaciosVisitantes;
  }

  /**
   * Getter $cantEspaciosOficiales
   * @return {number}
   */
  public get $cantEspaciosOficiales(): number {
    return this.cantEspaciosOficiales;
  }

  /**
   * Setter $deshabilitado
   * @param {boolean} value
   */
  public set $deshabilitado(value: boolean) {
    this.deshabilitado = value;
  }

  /**
   * Setter $ubicacion
   * @param {Ubicacion} value
   */
  public set $ubicacion(value: Ubicacion) {
    this.ubicacion = value;
  }

  /**
   * Setter $nombre
   * @param {string} value
   */
  public set $nombre(value: string) {
    this.nombre = value;
  }

  /**
   * Setter $telefono
   * @param {string} value
   */
  public set $telefono(value: string) {
    this.telefono = value;
  }

  /**
   * Setter $formaAcceso
   * @param {string} value
   */
  public set $formaAcceso(value: string) {
    this.formaAcceso = value;
  }

  /**
   * Setter $descripcion
   * @param {string} value
   */
  public set $descripcion(value: string) {
    this.descripcion = value;
  }

  /**
   * Setter $cantEspacios
   * @param {number} value
   */
  public set $cantEspacios(value: number) {
    this.cantEspacios = value;
  }

  /**
   * Setter $cantEspaciosEspeciales
   * @param {number} value
   */
  public set $cantEspaciosEspeciales(value: number) {
    this.cantEspaciosEspeciales = value;
  }

  /**
   * Setter $cantEspaciosJefaturas
   * @param {number} value
   */
  public set $cantEspaciosJefaturas(value: number) {
    this.cantEspaciosJefaturas = value;
  }

  /**
   * Setter $cantEspaciosVisitantes
   * @param {number} value
   */
  public set $cantEspaciosVisitantes(value: number) {
    this.cantEspaciosVisitantes = value;
  }

  /**
   * Setter $cantEspaciosOficiales
   * @param {number} value
   */
  public set $cantEspaciosOficiales(value: number) {
    this.cantEspaciosOficiales = value;
  }
}
