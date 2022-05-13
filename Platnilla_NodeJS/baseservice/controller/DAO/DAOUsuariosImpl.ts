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

  public eliminarUsuario(identificacion: string): Promise<string> {
    return SQLConnection.getInstance().eliminarUsuario(identificacion);
  }
}
