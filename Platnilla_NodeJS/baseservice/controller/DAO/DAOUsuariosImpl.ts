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

  public registrarVehiculo(
    usuarioId: number,
    placa: string,
    tipoVehiculo: number
  ): Promise<string> {
    return SQLConnection.getInstance().registrarVehiculo(
      usuarioId,
      placa,
      tipoVehiculo
    );
  }

  public ubicaciones(
    provincia: number,
    canton: number,
    distrito: number,
    direccion: string
  ): Promise<string> {
    return SQLConnection.getInstance().ubicaciones(
      provincia,
      canton,
      distrito,
      direccion
    );
  }

  public registrarFuncionario(
    tipoFuncionario: number,
    division: number,
    identificacion: string,
    nombre: string,
    apellido1: string,
    apellido2: string,
    telefono: string,
    correoInstitucional: string,
    correo: string,
    notificarCorreoAlterno: number,
    password: string
  ): Promise<string> {
    return SQLConnection.getInstance().registrarFuncionario(
      tipoFuncionario,
      division,
      identificacion,
      nombre,
      apellido1,
      apellido2,
      telefono,
      correoInstitucional,
      correo,
      notificarCorreoAlterno,
      password
    );
  }

  public permisosUsuario(
    usuarioId: number,
    permisoUsuarioId: number,
  ): Promise<string> {
    return SQLConnection.getInstance().permisosUsuario(usuarioId, permisoUsuarioId);
  }
}
