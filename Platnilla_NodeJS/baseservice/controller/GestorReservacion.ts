import { DAOReservacionImpl } from "./DAO/DAORservacionImpl";
import { DTOReservacion } from "./DTOReservacion";

export class GestorReservacion {
  private dtoReservacion: DTOReservacion;
  private daoReservacion: DAOReservacionImpl;

  constructor() {
    this.dtoReservacion = new DTOReservacion();
    this.daoReservacion = new DAOReservacionImpl();
  }
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
    return this.daoReservacion;
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
    this.daoReservacion = value;
  }

  public verificacionFranjas(usuario: string, entrada: string, salida: string): Promise<string> {
    return this.daoReservacion.verificacionFranjas(usuario, entrada, salida);
  }

  public verificacionDiaLaboral(jefe: string, dia: string): Promise<string> {
    return this.daoReservacion.verificacionDiaLaboral(jefe, dia);
  }

  public getDisponiblesTipo(tipo: string): Promise<string> {
    return this.daoReservacion.getDisponiblesTipo(tipo);
  }
}
