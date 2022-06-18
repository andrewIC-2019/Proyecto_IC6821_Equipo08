import { DAOReservacionImpl } from "./DAO/DAORservacionImpl";
import { DTOReservacion } from "./DTOReservacion";

export class GestorReservacion {
  private dtoReservacion: DTOReservacion;
  private daoRservacion: DAOReservacionImpl;

  /**
   * Getter $dtoReservacion
   * @return {DTOReservacion}
   */
  public get $dtoReservacion(): DTOReservacion {
    return this.dtoReservacion;
  }

  /**
   * Getter $daoRservacion
   * @return {DAOReservacionImpl}
   */
  public get $daoRservacion(): DAOReservacionImpl {
    return this.daoRservacion;
  }

  /**
   * Setter $dtoReservacion
   * @param {DTOReservacion} value
   */
  public set $dtoReservacion(value: DTOReservacion) {
    this.dtoReservacion = value;
  }

  /**
   * Setter $daoRservacion
   * @param {DAOReservacionImpl} value
   */
  public set $daoRservacion(value: DAOReservacionImpl) {
    this.daoRservacion = value;
  }

  public verificacionFranjas(usuario: string, entrada: string, salida: string): Promise<string> {
    return this.daoRservacion.verificacionFranjas(usuario, entrada, salida);
  }

  public verificacionDiaLaboral(jefe: string, dia: string): Promise<string> {
    return this.daoRservacion.verificacionDiaLaboral(jefe, dia);
  }

  public getDisponiblesTipo(tipo: string): Promise<string> {
    return this.daoRservacion.getDisponiblesTipo(tipo);
  }
}
