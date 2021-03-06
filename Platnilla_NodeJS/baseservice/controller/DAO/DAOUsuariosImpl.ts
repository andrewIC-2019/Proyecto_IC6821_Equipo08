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

  public informeFuncionarios(): Promise<string> {
    return SQLConnection.getInstance().informeFuncionarios();
  }

  public informeEstacionamientos(): Promise<string> {
    return SQLConnection.getInstance().informeEstacionamientos();
  }

  public franjasHorarias(): Promise<string> {
    return SQLConnection.getInstance().franjasHorarias();
  }

  public consultaFuncionario(identificacion: string): Promise<string> {
    return SQLConnection.getInstance().consultaFuncionario(identificacion);
  }


  public pintarEditarUsuario(usuarioId: string): Promise<string> {
    return SQLConnection.getInstance().pintarEditarUsuario(usuarioId);
  }

  public guardarEditarUsuario(
    usuarioId: string,
    correo: string,
    password: string,
    telefono: string,
    departamento: string,
    placa1: string,
    placa2: string,
    placa3: string,
    placa4: string,
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
    notificarCorreoAlterno: string
  ): Promise<string> {
    return SQLConnection.getInstance().guardarEditarUsuario( usuarioId, 
      correo,
      password, 
      telefono, 
      departamento, 
      placa1, 
      placa2, 
      placa3, 
      placa4, 
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
      notificarCorreoAlterno,);
  }

  public registrarUsuarioTotal(
    correoInstitucional: string,
    identificacion: string,
    correo: string,
    password: string,
    telefono: string,
    nombre: string,
    apellido1: string,
    apellido2: string,
    departamento: string,
    placa1: string,
    placa2: string,
    placa3: string,
    placa4: string,
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
    notificarCorreoAlterno: string
  ): Promise<string> {
    return SQLConnection.getInstance().registrarUsuarioTotal(
      correoInstitucional,
      identificacion,
      correo,
      password,
      telefono,
      nombre,
      apellido1,
      apellido2,
      departamento,
      placa1,
      placa2,
      placa3,
      placa4,
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
      notificarCorreoAlterno
    );
  }

  public eliminarUsuario(usuarioId: number): Promise<string> {
    return SQLConnection.getInstance().eliminarUsuario(usuarioId);
  }

  public diasSemana(): Promise<string> {
    return SQLConnection.getInstance().diasSemana();
  }

  public ocupacionXTipo(estacionamiento: string): Promise<string> {
    return SQLConnection.getInstance().ocupacionXTipo(estacionamiento);
  }

  public ocupacionXDepartamento(estacionamiento: string): Promise<string> {
    return SQLConnection.getInstance().ocupacionXDepartamento(estacionamiento);
  }

  public ocupacionTotalXDepartamento(departamento: string): Promise<string> {
    return SQLConnection.getInstance().ocupacionTotalXDepartamento(departamento);
  }

  public verMisReservas(usuario: string, limiteA: string, limiteB: string): Promise<string> {
    return SQLConnection.getInstance().verMisReservas(usuario, limiteA, limiteB);
  }

  public verReservasEstacionamiento(estacionamiento: string): Promise<string> {
    return SQLConnection.getInstance().verReservasEstacionamiento(estacionamiento);
  }

  public registrarOficial(usuarioId: string, estacionamientoId: string, tipoEspacioId: string,
    entrada: string, placa: string, conductor: string, sede: string, modelo: string): Promise<string> {
    return  SQLConnection.getInstance().registrarOficial(usuarioId, estacionamientoId, tipoEspacioId,
      entrada, placa, conductor, sede, modelo);
  }

  public salidaOficial(placa: string, conductor: string,  salida: string): Promise<string> {
    return SQLConnection.getInstance().salidaOficial(placa, conductor, salida);
  }

  public estacionamientosUsuario(objetivo: string, usuario: string): Promise<string> {
    return SQLConnection.getInstance().estacionamientosUsuario(objetivo, usuario);
  }


  public registrarUsuarioTotalF2(
    correoInstitucional: string,
    identificacion: string,
    correo: string,
    password: string,
    telefono: string,
    nombre: string,
    apellido1: string,
    apellido2: string,
    departamento: string,
    placa1: string,
    placa2: string,
    placa3: string,
    placa4: string,
    notificarCorreoAlterno: string,
    esAdministrador: boolean,
    esJefatura: boolean,
    esDiscapacitado: boolean,
    esOperador: boolean,
    horarios: JSON[],
  ): Promise<string> {
    return SQLConnection.getInstance().registrarUsuarioTotalF2(
      correoInstitucional,
      identificacion,
      correo,
      password,
      telefono,
      nombre,
      apellido1,
      apellido2,
      departamento,
      placa1,
      placa2,
      placa3,
      placa4,
      notificarCorreoAlterno,
      esAdministrador,
      esJefatura,
      esDiscapacitado,
      esOperador,
      horarios
    );
  }


  public guardarEditarUsuarioF2(
    usuarioId: string,
    correo: string,
    password: string,
    telefono: string,
    departamento: string,
    placa1: string,
    placa2: string,
    placa3: string,
    placa4: string,
    notificarCorreoAlterno: string,
    esAdministrador: boolean,
    esJefatura: boolean,
    esDiscapacitado: boolean,
    esOperador: boolean,
    horarios: JSON[],
  ): Promise<string> {
    return SQLConnection.getInstance().guardarEditarUsuarioF2(
      usuarioId,
      correo,
      password,
      telefono,
      departamento,
      placa1,
      placa2,
      placa3,
      placa4,
      notificarCorreoAlterno,
      esAdministrador,
      esJefatura,
      esDiscapacitado,
      esOperador,
      horarios
    );
  }

  public ocupacionXTipoJefe(estacionamiento: string, departamento: string): Promise<string> {
    return SQLConnection.getInstance().ocupacionXTipoJefe(estacionamiento, departamento);
  }

  public ocupacionXDepartamentoJefe(estacionamiento: string, departamento: string): Promise<string> {
    return SQLConnection.getInstance().ocupacionXDepartamentoJefe(estacionamiento, departamento);
  }

  public registrarVisita(usuarioId: string, estacionamientoId: string, tipoEspacioId: string,
    entrada: string, visitante: string, identificacion: string, vehiculo: string, motivo: string, destino: string): Promise<string> {
    return SQLConnection.getInstance().registrarVisita(usuarioId, estacionamientoId, tipoEspacioId,
      entrada, visitante, identificacion, vehiculo, motivo, destino);
  }

  public salidaVisita(vehiculo: string, identificacion: string,  salida: string): Promise<string> {
    return SQLConnection.getInstance().salidaVisita(vehiculo, identificacion, salida);
  }


}
