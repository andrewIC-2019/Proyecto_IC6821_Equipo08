import { Usuario } from "../../model/Usuario";
import { DAOTransaccional } from "./DAOTransaccional";
import { SQLConnection } from "./SQLConnection";

export class DAOUsuariosImpl implements DAOTransaccional {
  create(obj: Usuario): boolean {
    throw new Error("Method not implemented.");
  }
  get(key: any): Usuario {
    throw new Error("Method not implemented.");
  }
  getAll(): Usuario[] {
    throw new Error("Method not implemented.");
  }
  update(obj: Usuario): boolean {
    throw new Error("Method not implemented.");
  }

  public getUser(username: string, password: string): Promise<boolean> {
    return SQLConnection.getInstance().getUser(username, password);
  }
}
