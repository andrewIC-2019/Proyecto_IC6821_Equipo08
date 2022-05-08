import { DAOUsuariosImpl } from "./DAO/DAOUsuariosImpl";
import { DTOUsuario } from "./DTOUsuario";

export class GestorUsuario {
  private dtoUsuario: DTOUsuario;
  private daoUsuario: DAOUsuariosImpl;

  /**
   * Getter $dtoUsuario
   * @return {DTOUsuario}
   */
  public get $dtoUsuario(): DTOUsuario {
    return this.dtoUsuario;
  }

  /**
   * Getter $daoUsuario
   * @return {DAOUsuariosImpl}
   */
  public get $daoUsuario(): DAOUsuariosImpl {
    return this.daoUsuario;
  }

  /**
   * Setter $dtoUsuario
   * @param {DTOUsuario} value
   */
  public set $dtoUsuario(value: DTOUsuario) {
    this.dtoUsuario = value;
  }

  /**
   * Setter $daoUsuario
   * @param {DAOUsuariosImpl} value
   */
  public set $daoUsuario(value: DAOUsuariosImpl) {
    this.daoUsuario = value;
  }
}
