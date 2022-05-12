import { Usuario } from "../../model/Usuario";
import { DataSource } from "./DataSource";
const sql = require("mssql");
const connection = sql.connect(
  "Server=localhost,1433;Database=parqueos;User Id=sa;Password=cer5a37Te9;Encrypt=false"
);

var config = {
  user: "sa",
  password: "cer5a37Te9",
  server: "localhost", // You can use 'localhost\\instance' to connect to named instance
  database: "parqueos",
};

export class SQLConnection implements DataSource {
  url: string;
  username: string;
  password: string;
  server: string;
  private static instance: SQLConnection;

  private constructor() {}

  public static getInstance(): SQLConnection {
    if (!SQLConnection.instance) {
      SQLConnection.instance = new SQLConnection();
    }
    return this.instance;
  }

  login(username: string, password: string): Promise<string> {
    /* login(username, password).then((value)=> {
      return value
    }).catch((err)=>{
      console.log(err)
      return false
    }); */

    let res = login(username, password);
    return res;
  }

  inicio(): Promise<string> {
    return inicio();
  }

  registrarVehiculo(
    usuarioId: number,
    placa: string,
    tipoVehiculo: number
  ): Promise<string> {
    return registrarVehiculo(usuarioId, placa, tipoVehiculo);
  }

  ubicaciones(
    provincia: number,
    canton: number,
    distrito: number,
    direccion: string
  ): Promise<string> {
    return ubicaciones(provincia, canton, distrito, direccion);
  }

  registrarFuncionario(
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
    return registrarFuncionario(
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
    return registrarEstacionamiento(
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

  public permisosUsuario(
    usuarioId: number,
    permisoUsuarioId: number
  ): Promise<string> {
    return permisosUsuario(usuarioId, permisoUsuarioId);
  }

  public insertarVehiculo(
    placa: string,
    tipoVehiculo: number
  ): Promise<string> {
    return insertarVehiculo(placa, tipoVehiculo);
  }

  public insertarHorario(
    diaSemana: number,
    horaInicio: string,
    horaFinal: string
  ): Promise<string> {
    return insertarHorario(diaSemana, horaInicio, horaFinal);
  }

  informeFuncionarios(): Promise<string> {
    return informeFuncionarios();
  }

  informeEstacionamientos(): Promise<string> {
    return informeEstacionamientos();
  }

  franjasHorarias(): Promise<string> {
    return franjasHorarias();
  }

  estacionamientoInfo(estacionamientoId: string): Promise<string> {
    return estacionamientoInfo(estacionamientoId);
  }

  consultaFuncionario(identificacion: string): Promise<string> {
    return consultaFuncionario(identificacion);
  }

  registrarHorario(
    usuarioId: number,
    diaSemana: number,
    horaInicio: string,
    horaFinal: string
  ): Promise<string> {
    return registrarHorario(usuarioId, diaSemana, horaInicio, horaFinal);
  }

  pintarEditarUsuario(usuarioId: string): Promise<string> {
    return pintarEditarUsuario(usuarioId);
  }

  guardarEditarUsuario(
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
    return guardarEditarUsuario(
      usuarioId,
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
      notificarCorreoAlterno
    );
  }

  registrarUsuarioTotal(
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
    return registrarUsuarioTotal(
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

  eliminarUsuario(identificacion: string): Promise<string> {
    return eliminarUsuario(identificacion);
  }

  eliminarEstacionamiento(identificacion: string): Promise<string> {
    return eliminarEstacionamiento(identificacion);
  }

  registrarEstacionamientoTotal(
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
    return registrarEstacionamientoTotal(
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
}

async function registrarEstacionamientoTotal(
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
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("nombre", sql.NVarChar(200), nombre)
    .input("correo", sql.NVarChar(200), correo)
    .input("telefono", sql.NVarChar(40), telefono)
    .input("identificacion", sql.NVarChar(60), identificacion)
    .input("direccionExacta", sql.NVarChar(500), direccionExacta)
    .input("formaAcceso", sql.NVarChar(500), formaAcceso)
    .input("descripcion", sql.NVarChar(20), descripcion)
    .input("cantEspaciosEspeciales", sql.NVarChar(250), cantEspaciosEspeciales)
    .input("cantEspaciosJefaturas", sql.Int, cantEspaciosJefaturas)
    .input("cantEspaciosVisitantes", sql.Int, cantEspaciosVisitantes)
    .input("cantEspaciosOficiales", sql.Int, cantEspaciosOficiales)
    .input("cantEspacios", sql.Int, cantEspacios)
    .input("imageUrl", sql.NVarChar(800), imageUrl)
    .input("lunesA", sql.NVarChar(20), lunesA)
    .input("lunesB", sql.NVarChar(20), lunesB)
    .input("martesA", sql.NVarChar(20), martesA)
    .input("martesB", sql.NVarChar(20), martesB)
    .input("miercolesA", sql.NVarChar(20), miercolesA)
    .input("miercolesB", sql.NVarChar(20), miercolesB)
    .input("juevesA", sql.NVarChar(20), juevesA)
    .input("juevesB", sql.NVarChar(20), juevesB)
    .input("viernesA", sql.NVarChar(20), viernesA)
    .input("viernesB", sql.NVarChar(20), viernesB)
    .input("sabadoA", sql.NVarChar(20), sabadoA)
    .input("sabadoB", sql.NVarChar(20), sabadoB)
    .input("domingoA", sql.NVarChar(20), domingoA)
    .input("domingoB", sql.NVarChar(20), domingoB)
    .input("esInstitucional", sql.Bit, esInstitucional)

    .execute("sp_registrarEstacionamientoTotal");
  console.log("sp_registrarEstacionamientoTotal");
  console.log(result);

  return result.returnValue;
}

async function eliminarEstacionamiento(
  identificacion: string
): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("identificacion", sql.NVarChar(60), identificacion)
    .execute("sp_eliminarEstacionamiento");
  console.log("sp_eliminarEstacionamiento");
  console.log(result);

  return result.returnValue;
}

async function eliminarUsuario(identificacion: string): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("identificacion", sql.NVarChar(60), identificacion)
    .execute("sp_eliminarUsuario");
  console.log("sp_eliminarUsuario");
  console.log(result);

  return result.returnValue;
}

async function registrarUsuarioTotal(
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
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("correoInstitucional", sql.NVarChar(200), correoInstitucional)
    .input("identificacion", sql.NVarChar(60), identificacion)
    .input("correo", sql.NVarChar(200), correo)
    .input("password", sql.NVarChar(200), password)
    .input("telefono", sql.NVarChar(40), telefono)
    .input("nombre", sql.NVarChar(200), nombre)
    .input("apellido1", sql.NVarChar(200), apellido1)
    .input("apellido2", sql.NVarChar(40), apellido2)
    .input("departamento", sql.NVarChar(8), departamento)
    .input("placa1", sql.NVarChar(20), placa1)
    .input("placa2", sql.NVarChar(20), placa2)
    .input("placa3", sql.NVarChar(20), placa3)
    .input("placa4", sql.NVarChar(20), placa4)
    .input("lunesA", sql.NVarChar(20), lunesA)
    .input("lunesB", sql.NVarChar(20), lunesB)
    .input("martesA", sql.NVarChar(20), martesA)
    .input("martesB", sql.NVarChar(20), martesB)
    .input("miercolesA", sql.NVarChar(20), miercolesA)
    .input("miercolesB", sql.NVarChar(20), miercolesB)
    .input("juevesA", sql.NVarChar(20), juevesA)
    .input("juevesB", sql.NVarChar(20), juevesB)
    .input("viernesA", sql.NVarChar(20), viernesA)
    .input("viernesB", sql.NVarChar(20), viernesB)
    .input("sabadoA", sql.NVarChar(20), sabadoA)
    .input("sabadoB", sql.NVarChar(20), sabadoB)
    .input("domingoA", sql.NVarChar(20), domingoA)
    .input("domingoB", sql.NVarChar(20), domingoB)
    .input("notificarCorreoAlterno", sql.Bit, notificarCorreoAlterno)
    .execute("sp_registrarUsuarioTotal");
  console.log("sp_registrarUsuarioTotal");
  console.log(result);
  console.log(result.recordset);
  return result.returnValue;
}

async function guardarEditarUsuario(
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
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("usuarioId", sql.Int, usuarioId)
    .input("correo", sql.NVarChar(200), correo)
    .input("password", sql.NVarChar(200), password)
    .input("telefono", sql.NVarChar(40), telefono)
    .input("departamento", sql.NVarChar(8), departamento)
    .input("placa1", sql.NVarChar(20), placa1)
    .input("placa2", sql.NVarChar(20), placa2)
    .input("placa3", sql.NVarChar(20), placa3)
    .input("placa4", sql.NVarChar(20), placa4)
    .input("lunesA", sql.NVarChar(20), lunesA)
    .input("lunesB", sql.NVarChar(20), lunesB)
    .input("martesA", sql.NVarChar(20), martesA)
    .input("martesB", sql.NVarChar(20), martesB)
    .input("miercolesA", sql.NVarChar(20), miercolesA)
    .input("miercolesB", sql.NVarChar(20), miercolesB)
    .input("juevesA", sql.NVarChar(20), juevesA)
    .input("juevesB", sql.NVarChar(20), juevesB)
    .input("viernesA", sql.NVarChar(20), viernesA)
    .input("viernesB", sql.NVarChar(20), viernesB)
    .input("sabadoA", sql.NVarChar(20), sabadoA)
    .input("sabadoB", sql.NVarChar(20), sabadoB)
    .input("domingoA", sql.NVarChar(20), domingoA)
    .input("domingoB", sql.NVarChar(20), domingoB)
    .input("notificarCorreoAlterno", sql.Bit, notificarCorreoAlterno)
    .execute("sp_guardarEditarUsuario");
  console.log("sp_guardarEditarUsuario");
  console.log(result);

  return '{"done": true}';
}

async function pintarEditarUsuario(usuarioId: string): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("usuarioId", sql.Int, usuarioId)
    .execute("sp_pintarEditarUsuario");
  console.log("sp_pintarEditarUsuario");
  console.log(result);

  return result.recordsets[0];
}

async function registrarHorario(
  usuarioId: number,
  diaSemana: number,
  horaInicio: string,
  horaFinal: string
): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("usuarioId", sql.Int, usuarioId)
    .input("diaSemana", sql.tinyint, diaSemana)
    .input("horaInicio", sql.NVarChar(20), horaInicio)
    .input("horaFinal", sql.NVarChar(20), horaFinal)
    .execute("sp_registrarHorario");
  console.log("sp_registrarHorario");
  console.log(result);

  return '{"done": true}';
}

async function consultaFuncionario(identificacion: string): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("identificacion", sql.NVarChar(60), identificacion)
    .execute("sp_consultaFuncionario");
  console.log("sp_consultaFuncionario");
  console.log(result);

  return result.recordsets[0];
}

async function estacionamientoInfo(estacionamientoId: string): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("estacionamientoId", sql.Int, estacionamientoId)
    .execute("sp_estacionamientoinfo");
  console.log("sp_estacionamientoinfo");
  console.log(result);

  let str: string;
  let obj: any = result.recordsets[0][0];
  for (var key in obj) {
    str = obj[key];
  }
  return str;
}

async function franjasHorarias(): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool.request().execute("sp_franjasHorarias");
  console.log("sp_franjasHorarias");
  console.log(result);

  let str: string;
  let obj: any = result.recordsets[0][0];
  for (var key in obj) {
    str = obj[key];
  }
  return str;
}

async function informeEstacionamientos(): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool.request().execute("sp_informeEstacionamientos");
  console.log("sp_informeEstacionamientos");
  console.log(result);

  let str: string;
  let obj: any = result.recordsets[0][0];
  for (var key in obj) {
    str = obj[key];
  }
  return str;
}

async function informeFuncionarios(): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool.request().execute("sp_informeFuncionarios");
  console.log("sp_informeFuncionarios");
  console.log(result);

  let str: string;
  let obj: any = result.recordsets[0][0];
  for (var key in obj) {
    str = obj[key];
  }
  return str;
}

async function insertarHorario(
  diaSemana: number,
  horaInicio: string,
  horaFinal: string
): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("diaSemana", sql.tinyint, diaSemana)
    .input("horaInicio", sql.NVarChar(20), horaInicio)
    .input("horaFinal", sql.NVarChar(20), horaFinal)
    .execute("sp_InsertarHorario");
  console.log("sp_InsertarHorario");
  console.log(result);

  return result.returnValue;
}

async function insertarVehiculo(
  placa: string,
  tipoVehiculo: number
): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("placa", sql.NVarChar(20), placa)
    .input("tipoVehiculo", sql.SMALLINT, tipoVehiculo)
    .execute("sp_InsertarVehiculo");
  console.log("sp_InsertarVehiculo");
  console.log(result);

  return '{"done": true}';
}

async function permisosUsuario(
  usuarioId: number,
  permisoUsuarioId: number
): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("usuarioId", sql.Int, usuarioId)
    .input("permisoUsuarioId", sql.Int, permisoUsuarioId)
    .execute("sp_permisosUsuario");
  console.log("sp_permisosUsuario");
  console.log(result);

  return result.returnValue;
}

async function registrarEstacionamiento(
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
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("tipoEstacionamiento", sql.smallint, tipoEstacionamiento)
    .input("provincia", sql.tinyint, provincia)
    .input("canton", sql.smallint, canton)
    .input("distrito", sql.Int, distrito)
    .input("direccion", sql.NVarChar(500), direccion)
    .input("nombre", sql.NVarChar(200), nombre)
    .input("formaAcceso", sql.NVarChar(200), formaAcceso)
    .input("cantEspacios", sql.Int, cantEspacios)
    .input("cantEspaciosEspeciales", sql.Int, cantEspaciosEspeciales)
    .input("cantEspaciosJefaturas", sql.Int, cantEspaciosJefaturas)
    .input("cantEspaciosVisitantes", sql.Int, cantEspaciosVisitantes)
    .input("cantEspaciosOficiales", sql.Int, cantEspaciosOficiales)
    .input("correo", sql.NVarChar(200), correo)
    .input("telefono", sql.NVarChar(40), telefono)
    .input("identificacion", sql.NVarChar(60), identificacion)
    .input("imageUrl", sql.NVarChar(128), imageUrl)
    .input("descripcion", sql.NVarChar(250), descripcion)
    .execute("sp_registrarEstacionamiento");
  console.log("sp_registrarEstacionamiento");
  console.log(result);

  return result.returnValue;
}

//this function is the same as test but without then and catch
async function registrarFuncionario(
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
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("tipoFuncionario", sql.Int, tipoFuncionario)
    .input("division", sql.Int, division)
    .input("identificacion", sql.NVarChar(60), identificacion)
    .input("nombre", sql.NVarChar(60), nombre)
    .input("apellido1", sql.NVarChar(60), apellido1)
    .input("apellido2", sql.NVarChar(40), apellido2)
    .input("telefono", sql.NVarChar(200), telefono)
    .input("correoInstitucional", sql.NVarChar(200), correoInstitucional)
    .input("correo", sql.NVarChar(200), correo)
    .input("notificarCorreoAlterno", sql.Bit, notificarCorreoAlterno)
    .input("password", sql.NVarChar(100), password)
    .execute("sp_RegistrarFuncionario");
  console.log("sp_RegistrarFuncionario");
  console.log(result);

  let str: string;
  let obj: any = result.recordsets[0][0];
  for (var key in obj) {
    str = obj[key];
  }
  return str;
}

//this function is the same as test but without then and catch
async function ubicaciones(
  provincia: number,
  canton: number,
  distrito: number,
  direccion: string
): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("provincia", sql.tinyint, provincia)
    .input("canton", sql.smallint, canton)
    .input("distrito", sql.Int, distrito)
    .input("direccion", sql.NVarChar(500), direccion)
    .execute("sp_ubicaciones");
  console.log("sp_ubicaciones");
  console.log(result);

  return result.returnValue;
}

//this function is the same as test but without then and catch
async function registrarVehiculo(
  usuarioId: number,
  placa: string,
  tipoVehiculo: number
): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("usuarioId", sql.Int, usuarioId)
    .input("placa", sql.NVarChar(200), placa)
    .input("tipoVehiculo", sql.SMALLINT, tipoVehiculo)
    .execute("sp_RegistrarVehiculo");
  console.log("sp_RegistrarVehiculo");
  console.log(result);

  return result.returnValue;
}

//this function is the same as test but without then and catch
async function inicio(): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool.request().execute("sp_inicio");
  console.log("sp_inicio");
  console.log(result);

  let str: string;
  let obj: any = result.recordsets[0][0];
  for (var key in obj) {
    str = obj[key];
  }
  return str;
}

//this function is the same as test but without then and catch
async function login(username: string, password: string): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("user", sql.NVarChar(200), username)
    .input("pass", sql.NVarChar(200), password)
    .execute("sp_login");
  console.log("sp_login");
  console.log(result);

  if (result.returnValue == 0) {
    return "{}";
  } else {
    let str: string;
    let obj: any = result.recordsets[0][0];
    for (var key in obj) {
      str = obj[key];
    }
    return str;
  }
}

async function test(username: string, password: string): Promise<string> {
  try {
    // make sure that any items are correctly URL encoded in the connection string
    let result: any;
    console.log("***************");
    await sql
      .connect(config)
      .then((pool: any) => {
        // Stored procedure
        console.log("dentro");
        return pool
          .request()
          .input("user", sql.NVarChar(200), username)
          .input("pass", sql.NVarChar(200), password)
          .execute("sp_login");
      })
      .then((result: any) => {
        console.log("dentro BBB");
        console.dir(result);
      })
      .catch((err: Error) => {
        console.log(err);
      });
    return result;
  } catch (err) {
    console.log(err);
  }
}

/* async function test () : Promise<string>{
  try {
      // make sure that any items are correctly URL encoded in the connection string
      await  sql.connect('Server=localhost,1433;Database=parqueos;User Id=sa;Password=cer5a37Te9;Encrypt=false')
      const result = await sql.query(`select * from Usuarios`)
     
      return result.recordset
  } catch (err) {
      console.log(err)
  }
} */
