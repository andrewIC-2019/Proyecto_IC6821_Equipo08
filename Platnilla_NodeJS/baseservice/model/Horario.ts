import { TDias } from "./TDias";

export class Horario {
  /**
   * Getter $diaSemana
   * @return {TDias}
   */
  public get $diaSemana(): TDias {
    return this.diaSemana;
  }

  /**
   * Getter $horaIniciol
   * @return {Date}
   */
  public get $horaIniciol(): Date {
    return this.horaIniciol;
  }

  /**
   * Getter $horaFinal
   * @return {Date}
   */
  public get $horaFinal(): Date {
    return this.horaFinal;
  }

  /**
   * Setter $diaSemana
   * @param {TDias} value
   */
  public set $diaSemana(value: TDias) {
    this.diaSemana = value;
  }

  /**
   * Setter $horaIniciol
   * @param {Date} value
   */
  public set $horaIniciol(value: Date) {
    this.horaIniciol = value;
  }

  /**
   * Setter $horaFinal
   * @param {Date} value
   */
  public set $horaFinal(value: Date) {
    this.horaFinal = value;
  }

   diaSemana: TDias
   horaIniciol: Date
   horaFinal: Date

}
