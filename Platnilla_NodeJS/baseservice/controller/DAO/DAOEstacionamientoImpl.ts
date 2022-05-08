import { Estacionamiento } from "../../model";
import { DAOTransaccional } from "./DAOTransaccional";

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
    
}