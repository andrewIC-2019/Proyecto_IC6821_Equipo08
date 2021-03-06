
import { Reservacion } from "../../model";
import { DAOTransaccional } from "./DAOTransaccional";
import { SQLConnection } from "./SQLConnection";

export class DAOReservacionImpl implements DAOTransaccional {
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

    public verificacionFranjas(usuario: string, entrada: string, salida: string): Promise<string> {
        return SQLConnection.getInstance().verificacionFranjas(usuario, entrada, salida);
    }

    public verificacionDiaLaboral(jefe: string, dia: string): Promise<string> {
        return SQLConnection.getInstance().verificacionDiaLaboral(jefe, dia);
    }

    public getDisponiblesTipo(tipo: string): Promise<string> {
        return SQLConnection.getInstance().getDisponiblesTipo(tipo);
    }

    public actualizarSalidaReservaciones(horaPivot: string): Promise<string> {
        return SQLConnection.getInstance().actualizarSalidaReservaciones(horaPivot);
    }

    public reservarFuncionario(usuarioId: string, estacionamientoId: string, tipoEspacioId: string, entrada: string, salida: string): Promise<string> {
        return SQLConnection.getInstance().reservarFuncionario(usuarioId, estacionamientoId, tipoEspacioId, entrada, salida);
    }

    public reservarJefatura(usuarioId: string, estacionamientoId: string, tipoEspacioId: string, dia: string): Promise<string> {
        return SQLConnection.getInstance().reservarJefatura(usuarioId, estacionamientoId, tipoEspacioId, dia);
    }
}