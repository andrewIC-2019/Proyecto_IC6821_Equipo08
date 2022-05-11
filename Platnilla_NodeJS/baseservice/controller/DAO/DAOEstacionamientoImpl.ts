import { Estacionamiento } from "../../model";
import { DAOTransaccional } from "./DAOTransaccional";
import { SQLConnection } from "./SQLConnection";

export class DAOEStacionamientoImpl implements DAOTransaccional{
    create(obj: Estacionamiento): boolean {
        throw new Error("Method not implemented.");
    }
    get(key: any):Estacionamiento {
        throw new Error("Method not implemented.");
    }
    getAll(): Estacionamiento[] {
        throw new Error("Method not implemented.");
    }
    update(obj: Estacionamiento): boolean {
        throw new Error("Method not implemented.");
    }

    public getAllEStacionamientos(): Promise<string> {
        console.log("llega bien b")

        return SQLConnection.getInstance().inicio()
    }
    
}