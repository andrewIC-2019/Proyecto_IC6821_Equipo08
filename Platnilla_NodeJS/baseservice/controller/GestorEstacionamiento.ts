import { DAOEStacionamientoImpl } from "./DAO/DAOEstacionamientoImpl";
import { DTOEstacionamiento } from "./DTOEstacionamiento";

export class GestorEstacionamiento {
  private dtoEstacionamiento: DTOEstacionamiento;
  private daoEstacionamiento: DAOEStacionamientoImpl;


  constructor() {
    this.dtoEstacionamiento = new DTOEstacionamiento();
    this.daoEstacionamiento = new DAOEStacionamientoImpl();
  }
  /**
   * Getter $dtoEstacionamiento
   * @return {DTOEstacionamiento}
   */
  public get $dtoEstacionamiento(): DTOEstacionamiento {
    return this.dtoEstacionamiento;
  }

  /**
   * Getter $daoEstacionamiento
   * @return {DAOEStacionamientoImpl}
   */
  public get $daoEstacionamiento(): DAOEStacionamientoImpl {
    return this.daoEstacionamiento;
  }

  /**
   * Setter $dtoEstacionamiento
   * @param {DTOEstacionamiento} value
   */
  public set $dtoEstacionamiento(value: DTOEstacionamiento) {
    this.dtoEstacionamiento = value;
  }

  /**
   * Setter $daoEstacionamiento
   * @param {DAOEStacionamientoImpl} value
   */
  public set $daoEstacionamiento(value: DAOEStacionamientoImpl) {
    this.daoEstacionamiento = value;
  }

  public inicio() : Promise<string> {
    console.log("llega bien A")
    return this.daoEstacionamiento.getAllEStacionamientos()
  }
}
