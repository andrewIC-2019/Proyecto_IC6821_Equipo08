import { Usuario } from "../../model/Usuario";
import { DAOTransaccional } from "./DAOTransaccional";

export class DAOUsuariosImpl implements DAOTransaccional{
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
    
}