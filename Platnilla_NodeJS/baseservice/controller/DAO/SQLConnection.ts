import { Usuario } from "../../model/Usuario";
import { DataSource } from "./DataSource";
const sql = require("mssql");
const connection = sql.connect(
  "Server=localhost,1433;Database=parqueos;User Id=sa;Password=1234Pass;Encrypt=false"
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

  private constructor() { }

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

  diasSemana(): Promise<string> {
    return diasSemana();
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

  public crearEspacios(
    estacionamiento: string, tipo: string, cantidad: string
  ): Promise<string> {
    return crearEspacios(estacionamiento, tipo, cantidad);
  }

  public verificacionFranjas(
    usuario: string, entrada: string, salida: string
  ): Promise<string> {
    return verificacionFranjas(usuario, entrada, salida);
  }

  public verificacionDiaLaboral(
    jefe: string, dia: string
  ): Promise<string> {
    return verificacionDiaLaboral(jefe, dia);
  }

  public getDisponiblesTipo(
    tipo: string
  ): Promise<string> {
    return getDisponiblesTipo(tipo);
  }

  public actualizarSalidaReservaciones(
    horaPivot: string
  ): Promise<string> {
    return actualizarSalidaReservaciones(horaPivot);
  }

  public ocupacionXTipo(
    estacionamiento: string
  ): Promise<string> {
    return ocupacionXTipo(estacionamiento);
  }

  public ocupacionXDepartamento(
    estacionamiento: string
  ): Promise<string> {
    return ocupacionXDepartamento(estacionamiento);
  }

  public ocupacionTotalXDepartamento(
    departamento: string
  ): Promise<string> {
    return ocupacionTotalXDepartamento(departamento);
  }

  public verMisReservas(
    usuario: string, limiteA: string, limiteB: string
  ): Promise<string> {
    return verMisReservas(usuario, limiteA, limiteB);
  }

  public verReservasEstacionamiento(
    estacionamiento: string
  ): Promise<string> {
    return verReservasEstacionamiento(estacionamiento);
  }

  public registrarOficial(
    estacionamientoId: string, placa: string, conductor: string,  entrada: string
  ): Promise<string> {
    return registrarOficial(estacionamientoId, placa, conductor, entrada);
  }

  public salidaOficial(
    estacionamientoId: string, placa: string, conductor: string,  salida: string
  ): Promise<string> {
    return salidaOficial(estacionamientoId, placa, conductor, salida);
  }
  







}







async function salidaOficial(
  estacionamientoId: string, placa: string, conductor: string,  salida: string
): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("estacionamientoId", sql.NVarChar, estacionamientoId)
    .input("placa", sql.NVarChar, placa)
    .input("conductor", sql.NVarChar, conductor)
    .input("salida", sql.NVarChar, salida)
    .execute("sp_SalidaOficial");

  return result.returnValue;
}

async function registrarOficial(
  estacionamientoId: string, placa: string, conductor: string,  entrada: string
): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("estacionamientoId", sql.NVarChar, estacionamientoId)
    .input("placa", sql.NVarChar, placa)
    .input("conductor", sql.NVarChar, conductor)
    .input("entrada", sql.NVarChar, entrada)
    .execute("sp_RegistrarOficial");
  let str: string;
  if (result.recordsets && result.returnValue) {
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
  }
  return str;
}

async function verReservasEstacionamiento(
  estacionamiento: string
): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("estacionamiento", sql.NVarChar, estacionamiento)
    .execute("verReservasEstacionamiento");
  let str: string;
  if (result.recordsets && result.returnValue) {
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
  }

  return str;
}

async function verMisReservas(
  usuario: string, limiteA: string, limiteB: string
): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("usuario", sql.NVarChar, usuario)
    .input("limiteA", sql.NVarChar, limiteA)
    .input("limiteB", sql.NVarChar, limiteB)
    .execute("verMisReservas");
  let str: string;
  if (result.recordsets && result.returnValue) {
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
  }

  return str;
}

async function ocupacionTotalXDepartamento(
  departamento: string
): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("departamento", sql.NVarChar, departamento)
    .execute("sp_ocupacionTotalXDepartamento");
  let str: string;
  if (result.recordsets && result.returnValue) {
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
  }

  return str;
}

async function ocupacionXDepartamento(
  estacionamiento: string
): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("estacionamiento", sql.NVarChar, estacionamiento)
    .execute("sp_ocupacionXDepartamento");
  let str: string;
  if (result.recordsets && result.returnValue) {
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
  }

  return str;
}

async function ocupacionXTipo(
  estacionamiento: string
): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("estacionamiento", sql.NVarChar, estacionamiento)
    .execute("sp_ocupacionXTipo");
  let str: string;
  if (result.recordsets && result.returnValue) {
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
  }

  return str;
}

async function actualizarSalidaReservaciones(
  horaPivot: string
): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("horaPivot", sql.NVarChar, horaPivot)
    .execute("sp_actualizarSalidaReservaciones");

  console.log(result)
  return result.returnValue;
}


async function getDisponiblesTipo(
  tipo: string
): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("tipo", sql.NVarChar, tipo)
    .execute("sp_getDisponiblesTipo");
  let str: string;
  if (result.recordsets && result.returnValue) {
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
  }

  return str;
}

async function diasSemana(
): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .execute("sp_diasSemana");
  let str: string;
  if (result.recordsets && result.returnValue) {
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
  }

  return str;
}

async function verificacionDiaLaboral(
  jefe: string, dia: string
): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("jefe", sql.NVarChar, jefe)
    .input("dia", sql.NVarChar, dia)
    .execute("sp_verificacionDiaLaboral");

  console.log(result)
  return result.returnValue;
}

async function verificacionFranjas(
  usuario: string, entrada: string, salida: string
): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("usuario", sql.NVarChar, usuario)
    .input("entrada", sql.NVarChar, entrada)
    .input("salida", sql.NVarChar, salida)
    .execute("sp_verificacionFranjas");

  return result.returnValue;
}

async function crearEspacios(
  estacionamiento: string, tipo: string, cantidad: string
): Promise<string> {
  //do connection


  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp

  let result = await pool
    .request()
    .input("estacionamiento", sql.Int, estacionamiento)
    .input("tipo", sql.NVarChar, tipo)
    .input("cantidad", sql.Int, cantidad)
    .execute("sp_crearEspacios");

  return "{ok: true}";
}

async function estacionamientosTipoSubcontratados(
  subcontratados: string
): Promise<string> {
  //do connection
  console.log("previo")
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp

  let result = await pool
    .request()
    .input("subcontratados", sql.NVarChar, subcontratados)
    .execute("sp_estacionamientosTipoSubcontratados");


  let str: string;
  if (result.recordsets && result.returnValue) {
    for (var key in result.recordset[0]) {
      str = result.recordset[0][key];
    }
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

  let str: string;
  if (result.recordsets && result.returnValue) {
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
  }

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
    .input("esInstitucional", sql.NVarChar, esInstitucional)

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
    .input("notificarCorreoAlterno", sql.NVarChar, notificarCorreoAlterno)
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
    .input("notificarCorreoAlterno", sql.NVarChar, notificarCorreoAlterno)
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

  let str: string;
  if (result.recordsets && result.returnValue) {
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
  }

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

  let str: string;
  if (result.recordsets && result.returnValue) {
    str = result.recordsets;
  }

  return str;
}

async function estacionamientoInfo(estacionamientoId: string): Promise<string> {
  //do connection
  let pool = await new sql.connect(config);
  //do reques from pool, with parameters and execute sp
  let result = await pool
    .request()
    .input("estacionamientoId", sql.Int, estacionamientoId)
    .execute("sp_estacionamientoinfo");

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

  console.log(result)
  let str: string;
  if (result.recordsets && result.returnValue) {
    let obj: any = result.recordsets[0][0];
    for (var key in obj) {
      str = obj[key];
    }
    return str;
  }
}
