import { DAOUsuariosImpl } from "./DAO/DAOUsuariosImpl";
import { DTOUsuario } from "./DTOUsuario";
import * as express from "express";
import { Usuario } from "../model/Usuario";

export class GestorUsuario {
  private dtoUsuario: DTOUsuario;
  private daoUsuario: DAOUsuariosImpl;

  constructor() {
    this.dtoUsuario = new DTOUsuario();
    this.daoUsuario = new DAOUsuariosImpl();
  }

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

  //json reponse
  public login(username: string, password: string): Promise<string> {
    return this.daoUsuario.login(username, password);
  }

  public info(username: string) : Promise<Usuario> {
    return this.daoUsuario.get(username)
  }
}
