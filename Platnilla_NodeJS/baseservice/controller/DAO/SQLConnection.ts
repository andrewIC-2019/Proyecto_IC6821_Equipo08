import { DataSource } from "./DataSource";

var Connection = require("tedious").Connection;
var config = {
  server: "localhost", //update me
  authentication: {
    type: "default",
    options: {
      userName: "sa", //update me
      password: "cer5a37Te9", //update me
    },
  },
  options: {
    // If you are on Microsoft Azure, you need encryption:
    encrypt: false,
    database: "parqueos", //update me
    enableArithAbort: true,
    trustServerCertificate: false,
  },
};
var connection = new Connection(config);
connection.on("connect", function (err: Error) {
  // If no error, then good to proceed.
  console.log("Connected");
});

connection.connect();

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

  getUser(username: string, password: string): string {
    let result: string;
    executeLogin_test(username, password).then((data) => {
      result = data;
    });
    console.log("a")
    console.log(result)
    return result;
  }
}

var Request = require("tedious").Request;
var TYPES = require("tedious").TYPES;

async function executeLogin_test(
  username: string,
  password: string
): Promise<string> {
  let request = new Request("EXEC login_test @correoInstitucional;", function (
    err: Error
  ) {
    if (err) {
      console.log(err);
    }
  });
   request.addParameter("correoInstitucional", TYPES.NVarChar, username);
  var result = "";
  await request.on("row", function (columns: any) {
    columns.forEach(function (column: any) {
      if (column.value === null) {
        console.log("NULL");
      } else {
        result += column.value + " ";
      }
    });
    console.log("acá");
    console.log(result);
    console.log("acá");
  });

  request.on("done", function (rowCount: any, more: any) {
    console.log(rowCount + " rows returned");
  });

  // Close the connection after the final event emitted by the request, after the callback passes
  request.on("requestCompleted", function (rowCount: any, more: any) {
    connection.close();
  });
  connection.execSql(request);
  console.log("salio");
  return result;
}
