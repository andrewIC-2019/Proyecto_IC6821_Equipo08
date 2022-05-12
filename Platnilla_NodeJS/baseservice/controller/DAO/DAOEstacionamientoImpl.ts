import { Estacionamiento } from "../../model";
import { DAOTransaccional } from "./DAOTransaccional";
import { SQLConnection } from "./SQLConnection";

export class DAOEStacionamientoImpl implements DAOTransaccional {
  create(obj: Estacionamiento): boolean {
    throw new Error("Method not implemented.");
  }
  get(key: any): Estacionamiento {
    throw new Error("Method not implemented.");
  }
  getAll(): Estacionamiento[] {
    throw new Error("Method not implemented.");
  }
  update(obj: Estacionamiento): boolean {
    throw new Error("Method not implemented.");
  }

  public getAllEStacionamientos(): Promise<string> {
    console.log("llega bien b");

    return SQLConnection.getInstance().inicio();
  }

  public registrarEstacionamiento(
    tipoEstacionamiento: number,
    provincia: number,
    canton: string,
    distrito: string,
    direccion: string,
    nombre: string,
    formaAcceso: string,
    cantEspacios: string,
    cantEspaciosEspeciales: string,
    cantEspaciosJefaturas: number,
    cantEspaciosVisitantes: string,
    cantEspaciosOficiales: string,
    correo: string,
    telefono: number,
    identificacion: string,
    imageUrl: number,
    descripcion: string
  ): Promise<string> {
    console.log("llega bien A");
    return SQLConnection.getInstance().registrarEstacionamiento(
      tipoEstacionamiento,
      provincia,
      canton,
      distrito,
      direccion,
      nombre,
      formaAcceso,
      cantEspacios,
      cantEspaciosEspeciales,
      cantEspaciosJefaturas,
      cantEspaciosVisitantes,
      cantEspaciosOficiales,
      correo,
      telefono,
      identificacion,
      imageUrl,
      descripcion
    );
  }

  public estacionamientoInfo(estacionamientoId: string): Promise<string> {
    return SQLConnection.getInstance().estacionamientoInfo(estacionamientoId);
  }

  public eliminarEstacionamiento(identificacion: string): Promise<string> {
    return SQLConnection.getInstance().eliminarEstacionamiento(identificacion);
  }

  public registrarEstacionamientoTotal(
    nombre: string,
    correo: string,
    telefono: string,
    identificacion: string,
    direccionExacta: string,
    formaAcceso: string,
    descripcion: string,
    cantEspaciosEspeciales: string,
    cantEspaciosJefaturas: string,
    cantEspaciosVisitantes: string,
    cantEspaciosOficiales: string,
    cantEspacios: string,
    imageUrl: string,
    lunesA: string,
    lunesB: string,
    martesA: string,
    martesB: string,
    miercolesA: string,
    miercolesB: string,
    juevesA: string,
    juevesB: string,
    viernesA: string,
    viernesB: string,
    sabadoA: string,
    sabadoB: string,
    domingoA: string,
    domingoB: string,
    esInstitucional: string,
    ): Promise<string> {
    return SQLConnection.getInstance().registrarEstacionamientoTotal(nombre,
      correo,
      telefono,
      identificacion,
      direccionExacta,
      formaAcceso,
      descripcion,
      cantEspaciosEspeciales,
      cantEspaciosJefaturas,
      cantEspaciosVisitantes,
      cantEspaciosOficiales,
      cantEspacios,
      imageUrl,
      lunesA,
      lunesB,
      martesA,
      martesB,
      miercolesA,
      miercolesB,
      juevesA,
      juevesB,
      viernesA,
      viernesB,
      sabadoA,
      sabadoB,
      domingoA,
      domingoB,
      esInstitucional,);
  }
}
