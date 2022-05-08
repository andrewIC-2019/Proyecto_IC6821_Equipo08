
import { Reservacion } from "../../model";
import { DAOTransaccional } from "./DAOTransaccional";

export class DAOReservacionImpl implements DAOTransaccional{
    create(obj: Reservacion): boolean {
        throw new Error("Method not implemented.");
    }
    get(key: any): Reservacion {
        throw new Error("Method not implemented.");
    }
    getAll(): Reservacion[] {
        throw new Error("Method not implemented.");
    }
    update(obj: Reservacion): boolean {
        throw new Error("Method not implemented.");
    }
    
}