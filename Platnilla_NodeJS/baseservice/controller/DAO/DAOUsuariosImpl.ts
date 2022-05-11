import { Usuario } from "../../model/Usuario";
import { DAOTransaccional } from "./DAOTransaccional";
import { SQLConnection } from "./SQLConnection";

export class DAOUsuariosImpl implements DAOTransaccional {
  create(obj: Usuario): boolean {
    throw new Error("Method not implemented.");
  }
  get(key: string): Promise<Usuario> {
    throw new Error("Method not implemented.");
  }
  getAll(): Usuario[] {
    throw new Error("Method not implemented.");
  }
  update(obj: Usuario): boolean {
    throw new Error("Method not implemented.");
  }

  public login(username: string, password: string): Promise<string> {
    return SQLConnection.getInstance().login(username, password);
  }
}
