import { DAOUsuariosImpl } from "./DAO/DAOUsuariosImpl";
import { DTOUsuario } from "./DTOUsuario";
import * as express from "express";
import { Usuario } from "../model/Usuario";

export class GestorUsuario {
  private dtoUsuario: DTOUsuario;
  private daoUsuario: DAOUsuariosImpl;

  constructor() {
    this.dtoUsuario = new DTOUsuario();
    this.daoUsuario = new DAOUsuariosImpl();
  }

  /**
   * Getter $dtoUsuario
   * @return {DTOUsuario}
   */
  public get $dtoUsuario(): DTOUsuario {
    return this.dtoUsuario;
  }

  /**
   * Getter $daoUsuario
   * @return {DAOUsuariosImpl}
   */
  public get $daoUsuario(): DAOUsuariosImpl {
    return this.daoUsuario;
  }

  /**
   * Setter $dtoUsuario
   * @param {DTOUsuario} value
   */
  public set $dtoUsuario(value: DTOUsuario) {
    this.dtoUsuario = value;
  }

  /**
   * Setter $daoUsuario
   * @param {DAOUsuariosImpl} value
   */
  public set $daoUsuario(value: DAOUsuariosImpl) {
    this.daoUsuario = value;
  }

  //json reponse
  public login(username: string, password: string): Promise<string> {
    return this.daoUsuario.login(username, password);
  }


  public informeFuncionarios(): Promise<string> {
    return this.daoUsuario.informeFuncionarios();
  }

  public informeEstacionamientos(): Promise<string> {
    return this.daoUsuario.informeEstacionamientos();
  }

  public franjasHorarias(): Promise<string> {
    return this.daoUsuario.franjasHorarias();
  }

  public consultaFuncionario(identificacion: string): Promise<string> {
    return this.daoUsuario.consultaFuncionario(identificacion);
  }



  public pintarEditarUsuario(usuarioId: string): Promise<string> {
    return this.daoUsuario.pintarEditarUsuario(usuarioId);
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
    return this.daoUsuario.guardarEditarUsuario(usuarioId,
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
      notificarCorreoAlterno);
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
    return this.daoUsuario.registrarUsuarioTotal(
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
    return this.daoUsuario.eliminarUsuario(usuarioId);
  }

  public diasSemana(): Promise<string> {
    return this.daoUsuario.diasSemana();
  }

  public ocupacionXTipo(estacionamiento: string): Promise<string> {
    return this.daoUsuario.ocupacionXTipo(estacionamiento);
  }

  public ocupacionXDepartamento(estacionamiento: string): Promise<string> {
    return this.daoUsuario.ocupacionXDepartamento(estacionamiento);
  }

  public ocupacionTotalXDepartamento(departamento: string): Promise<string> {
    return this.daoUsuario.ocupacionTotalXDepartamento(departamento);
  }

  public verMisReservas(usuario: string, limiteA: string, limiteB: string): Promise<string> {
    return this.daoUsuario.verMisReservas(usuario, limiteA, limiteB);
  }

  public verReservasEstacionamiento(estacionamiento: string): Promise<string> {
    return this.daoUsuario.verReservasEstacionamiento(estacionamiento);
  }

  public registrarOficial(estacionamientoId: string, placa: string, conductor: string,  entrada: string): Promise<string> {
    return this.daoUsuario.registrarOficial(estacionamientoId, placa, conductor, entrada);
  }

  public salidaOficial(estacionamientoId: string, placa: string, conductor: string,  salida: string): Promise<string> {
    return this.daoUsuario.salidaOficial(estacionamientoId, placa, conductor, salida);
  }

  public estacionamientosUsuario(objetivo: string, usuario: string): Promise<string> {
    return this.daoUsuario.estacionamientosUsuario(objetivo, usuario);
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
    return this.daoUsuario.registrarUsuarioTotalF2(
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


}
