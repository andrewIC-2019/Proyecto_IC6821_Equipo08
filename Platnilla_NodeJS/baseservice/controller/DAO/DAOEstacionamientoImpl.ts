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
    return SQLConnection.getInstance().inicio();
  }


  public estacionamientoInfo(estacionamientoId: string): Promise<string> {
    return SQLConnection.getInstance().estacionamientoInfo(estacionamientoId);
  }

  public eliminarEstacionamiento(estacionamientoId: string): Promise<string> {
    return SQLConnection.getInstance().eliminarEstacionamiento(estacionamientoId);
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

  public pintarEditarEstacionamiento(estacionamientoId: string): Promise<string> {
    return SQLConnection.getInstance().pintarEditarEstacionamiento(estacionamientoId);
  }

  public guardarEditarEstacionamiento(
    estacionamientoId: string,
    identificacion: string,
    nombre: string,
    correo: string,
    telefono: string,
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
    domingoB: string
  ): Promise<string> {
    return SQLConnection.getInstance().guardarEditarEstacionamiento(
      estacionamientoId,
      identificacion,
      nombre,
      correo,
      telefono,
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
      domingoB
    );
  }

  public estacionamientosTipoSubcontratados(subcontratados: string): Promise<string> {
    return SQLConnection.getInstance().estacionamientosTipoSubcontratados(subcontratados);
  }

  public crearEspacios(estacionamiento: string, tipo: string, cantidad: string): Promise<string> {
    return SQLConnection.getInstance().crearEspacios(estacionamiento, tipo, cantidad);
  }

  public calcularEspaciosDisponibles(estacionamiento: string, tipoEspacioId: string): Promise<string> {
    return SQLConnection.getInstance().calcularEspaciosDisponibles(estacionamiento, tipoEspacioId);
  }

}
