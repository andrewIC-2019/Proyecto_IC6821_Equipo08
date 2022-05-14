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
    let res = login(username, password);
    return res;
  }

  inicio(): Promise<string> {
    return inicio();
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

  eliminarUsuario(usuarioId: number): Promise<string> {
    return eliminarUsuario(usuarioId);
  }

  eliminarEstacionamiento(estacionamientoId: string): Promise<string> {
    return eliminarEstacionamiento(estacionamientoId);
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

  public pintarEditarEstacionamiento(
    estacionamientoId: string
  ): Promise<string> {
    return pintarEditarEstacionamiento(estacionamientoId);
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
    return guardarEditarEstacionamiento(
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

  public estacionamientosTipoSubcontratados(
    subcontratados: string
  ): Promise<string> {
    return estacionamientosTipoSubcontratados(subcontratados);
  }
}

async function estacionamientosTipoSubcontratados(
  subcontratados: string
): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("subcontratados", sql.Bit, subcontratados)
    .execute("sp_estacionamientosTipoSubcontratados");

  let str: string;
  for (var key in result.recordset[0]) {
    str = result.recordset[0][key];
  }

  return str;
}

async function guardarEditarEstacionamiento(
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
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("estacionamientoId", sql.NVarChar, estacionamientoId)
    .input("identificacion", sql.NVarChar, identificacion)
    .input("nombre", sql.NVarChar, nombre)
    .input("correo", sql.NVarChar, correo)
    .input("telefono", sql.NVarChar, telefono)
    .input("direccionExacta", sql.NVarChar, direccionExacta)
    .input("formaAcceso", sql.NVarChar, formaAcceso)
    .input("descripcion", sql.NVarChar, descripcion)
    .input("cantEspaciosEspeciales", sql.NVarChar, cantEspaciosEspeciales)
    .input("cantEspaciosJefaturas", sql.NVarChar, cantEspaciosJefaturas)
    .input("cantEspaciosVisitantes", sql.NVarChar, cantEspaciosVisitantes)
    .input("cantEspaciosOficiales", sql.NVarChar, cantEspaciosOficiales)
    .input("cantEspacios", sql.NVarChar, cantEspacios)
    .input("imageUrl", sql.NVarChar, imageUrl)
    .input("lunesA", sql.NVarChar, lunesA)
    .input("lunesB", sql.NVarChar, lunesB)
    .input("martesA", sql.NVarChar, martesA)
    .input("martesB", sql.NVarChar, martesB)
    .input("miercolesA", sql.NVarChar, miercolesA)
    .input("miercolesB", sql.NVarChar, miercolesB)
    .input("juevesA", sql.NVarChar, juevesA)
    .input("juevesB", sql.NVarChar, juevesB)
    .input("viernesA", sql.NVarChar, viernesA)
    .input("viernesB", sql.NVarChar, viernesB)
    .input("sabadoA", sql.NVarChar, sabadoA)
    .input("sabadoB", sql.NVarChar, sabadoB)
    .input("domingoA", sql.NVarChar, domingoA)
    .input("domingoB", sql.NVarChar, domingoB)
    .execute("sp_guardarEditarEstacionamiento");

  return "1";
}

async function pintarEditarEstacionamiento(
  estacionamientoId: string
): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("estacionamientoId", sql.Int, estacionamientoId)
    .execute("sp_pintarEditarEstacionamiento");

  let str: string = "{";
  for (var i in result.recordsets) {
    for (var key in result.recordsets[i][0]) {
      let tmpStr: string = result.recordsets[i][0][key];
      tmpStr = tmpStr.replace(new RegExp('"', "g"), '\\"');
      str += '"' + i + '": "' + tmpStr + '",';
    }
  }
  str = str.slice(0, -1);
  str += "}";

  return str;
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

  return result.returnValue;
}

async function eliminarEstacionamiento(
  estacionamientoId: string
): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("estacionamientoId", sql.NVarChar(60), estacionamientoId)
    .execute("deshabilitarEstacionamiento");

  return result.returnValue;
}

async function eliminarUsuario(usuarioId: number): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);

  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("usuarioId", sql.Int, usuarioId)
    .execute("deshabilitarUsuario");

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
    .input("correo", sql.NVarChar, correo)
    .input("password", sql.NVarChar, password)
    .input("telefono", sql.NVarChar, telefono)
    .input("departamento", sql.NVarChar, departamento)
    .input("placa1", sql.NVarChar, placa1)
    .input("placa2", sql.NVarChar, placa2)
    .input("placa3", sql.NVarChar, placa3)
    .input("placa4", sql.NVarChar, placa4)
    .input("lunesA", sql.NVarChar, lunesA)
    .input("lunesB", sql.NVarChar, lunesB)
    .input("martesA", sql.NVarChar, martesA)
    .input("martesB", sql.NVarChar, martesB)
    .input("miercolesA", sql.NVarChar, miercolesA)
    .input("miercolesB", sql.NVarChar, miercolesB)
    .input("juevesA", sql.NVarChar, juevesA)
    .input("juevesB", sql.NVarChar, juevesB)
    .input("viernesA", sql.NVarChar, viernesA)
    .input("viernesB", sql.NVarChar, viernesB)
    .input("sabadoA", sql.NVarChar, sabadoA)
    .input("sabadoB", sql.NVarChar, sabadoB)
    .input("domingoA", sql.NVarChar, domingoA)
    .input("domingoB", sql.NVarChar, domingoB)
    .input("notificarCorreoAlterno", sql.Bit, notificarCorreoAlterno)
    .execute("sp_guardarEditarUsuario");

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

  let str: string = "{";
  let json: any;
  for (var i in result.recordsets) {
    for (var key in result.recordsets[i][0]) {
      let tmpStr: string = result.recordsets[i][0][key];
      tmpStr = tmpStr.replace(new RegExp('"', "g"), '\\"');
      str += '"' + i + '": "' + tmpStr + '",';
    }
  }
  str = str.slice(0, -1);
  str += "}";

  return str;
}

async function consultaFuncionario(identificacion: string): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("identificacion", sql.NVarChar(60), identificacion)
    .execute("sp_consultaFuncionario");
  console.log(result);
  let str: string;

  console.log(result)

 /*  if (result.recordsets && result.returnValue) {
    str = "{";
    for (var i in result.recordsets) {
      for (var key in result.recordsets[i][0]) {
        let tmpStr: string = result.recordsets[i][0][key];
        tmpStr = tmpStr.replace(new RegExp('"', "g"), '\\"');
        str += '"' + i + '": "' + tmpStr + '",';
      }
    }
    str = str.slice(0, -1);
    str += "}";
  } */
  console.log(result.recordsets)

  return result.recordsets;
}

async function estacionamientoInfo(estacionamientoId: string): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("estacionamientoId", sql.Int, estacionamientoId)
    .execute("sp_estacionamientoinfo");
console.log(estacionamientoId)
console.log(result)
  let str: string;
  if (result.recordsets && result.returnValue) {
    let obj: any = result.recordsets[0][0];
    for (var key in obj) {
      str = obj[key];
    }
  }
  return str;
}

async function franjasHorarias(): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool.request().execute("sp_franjasHorarias");

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

  let str: string;
  let obj: any = result.recordsets[0][0];
  for (var key in obj) {
    str = obj[key];
  }
  return str;

  return str;
}

async function informeFuncionarios(): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool.request().execute("sp_informeFuncionarios");

  return result.recordsets[0];
}

//this function is the same as test but without then and catch
async function inicio(): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool.request().execute("sp_inicio");

  let str: string;
  if (result.recordsets && result.returnValue) {
    let obj: any = result.recordsets[0][0];
    for (var key in obj) {
      str = obj[key];
    }
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
