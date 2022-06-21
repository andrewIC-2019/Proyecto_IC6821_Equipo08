import { DAOEStacionamientoImpl } from "./DAO/DAOEstacionamientoImpl";
import { DTOEstacionamiento } from "./DTOEstacionamiento";

export class GestorEstacionamiento {
  private dtoEstacionamiento: DTOEstacionamiento;
  private daoEstacionamiento: DAOEStacionamientoImpl;

  constructor() {
    this.dtoEstacionamiento = new DTOEstacionamiento();
    this.daoEstacionamiento = new DAOEStacionamientoImpl();
  }
  /**
   * Getter $dtoEstacionamiento
   * @return {DTOEstacionamiento}
   */
  public get $dtoEstacionamiento(): DTOEstacionamiento {
    return this.dtoEstacionamiento;
  }

  /**
   * Getter $daoEstacionamiento
   * @return {DAOEStacionamientoImpl}
   */
  public get $daoEstacionamiento(): DAOEStacionamientoImpl {
    return this.daoEstacionamiento;
  }

  /**
   * Setter $dtoEstacionamiento
   * @param {DTOEstacionamiento} value
   */
  public set $dtoEstacionamiento(value: DTOEstacionamiento) {
    this.dtoEstacionamiento = value;
  }

  /**
   * Setter $daoEstacionamiento
   * @param {DAOEStacionamientoImpl} value
   */
  public set $daoEstacionamiento(value: DAOEStacionamientoImpl) {
    this.daoEstacionamiento = value;
  }

  public inicio(): Promise<string> {
    return this.daoEstacionamiento.getAllEStacionamientos();
  }

  public estacionamientoInfo(estacionamientoId: string): Promise<string> {
    return this.daoEstacionamiento.estacionamientoInfo(estacionamientoId);
  }

  public eliminarEstacionamiento(estacionamientoId: string): Promise<string> {
    return this.daoEstacionamiento.eliminarEstacionamiento(estacionamientoId);
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
    esInstitucional: string
  ): Promise<string> {
    return this.daoEstacionamiento.registrarEstacionamientoTotal(
      nombre,
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
      esInstitucional
    );
  }

  public pintarEditarEstacionamiento(
    estacionamientoId: string
  ): Promise<string> {
    return this.daoEstacionamiento.pintarEditarEstacionamiento(
      estacionamientoId
    );
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
    return this.daoEstacionamiento.guardarEditarEstacionamiento(
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
    return this.daoEstacionamiento.estacionamientosTipoSubcontratados(subcontratados);
  }

  public crearEspacios(estacionamiento: string, tipo: string, cantidad: string): Promise<string> {
    return this.daoEstacionamiento.crearEspacios(estacionamiento, tipo, cantidad);
  }

  public calcularEspaciosDisponibles(estacionamientoId: string, tipoEspacioId: string): Promise<string> {
    return this.daoEstacionamiento.calcularEspaciosDisponibles(estacionamientoId, tipoEspacioId);
  }
}
