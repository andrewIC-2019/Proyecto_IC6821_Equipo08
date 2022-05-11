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
    .input("distrito", sql.int, distrito)
    .input("direccion", sql.nvarchar(500), direccion)
    .input("nombre", sql.nvarchar(200), nombre)
    .input("formaAcceso", sql.nvarchar(200), formaAcceso)
    .input("cantEspacios", sql.int, cantEspacios)
    .input("cantEspaciosEspeciales", sql.int, cantEspaciosEspeciales)
    .input("cantEspaciosJefaturas", sql.int, cantEspaciosJefaturas)
    .input("cantEspaciosVisitantes", sql.int, cantEspaciosVisitantes)
    .input("cantEspaciosOficiales", sql.int, cantEspaciosOficiales)
    .input("correo", sql.nvarchar(200), correo)
    .input("telefono", sql.nvarchar(40), telefono)
    .input("identificacion", sql.nvarchar(60), identificacion)
    .input("imageUrl", sql.nvarchar(128), imageUrl)
    .input("descripcion", sql.nvarchar(250), descripcion)
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
    .input("tipoFuncionario", sql.int, tipoFuncionario)
    .input("division", sql.int, division)
    .input("identificacion", sql.nvarchar(60), identificacion)
    .input("nombre", sql.nvarchar(60), nombre)
    .input("apellido1", sql.nvarchar(60), apellido1)
    .input("apellido2", sql.nvarchar(40), apellido2)
    .input("telefono", sql.nvarchar(200), telefono)
    .input("correoInstitucional", sql.nvarchar(200), correoInstitucional)
    .input("correo", sql.nvarchar(200), correo)
    .input("notificarCorreoAlterno", sql.bit, notificarCorreoAlterno)
    .input("password", sql.nvarchar(100), password)
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
    .input("distrito", sql.int, distrito)
    .input("direccion", sql.nvarchar(500), direccion)
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
    .input("usuarioId", sql.bigint, usuarioId)
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
