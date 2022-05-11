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
    return inicio()
  }
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
