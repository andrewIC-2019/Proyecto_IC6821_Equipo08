"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQLConnection = void 0;
var sql = require("mssql");
var connection = sql.connect("Server=localhost,1433;Database=parqueos;User Id=sa;Password=cer5a37Te9;Encrypt=false");
var config = {
    user: "sa",
    password: "cer5a37Te9",
    server: "localhost",
    database: "parqueos",
};
var SQLConnection = /** @class */ (function () {
    function SQLConnection() {
    }
    SQLConnection.getInstance = function () {
        if (!SQLConnection.instance) {
            SQLConnection.instance = new SQLConnection();
        }
        return this.instance;
    };
    SQLConnection.prototype.login = function (username, password) {
        /* login(username, password).then((value)=> {
          return value
        }).catch((err)=>{
          console.log(err)
          return false
        }); */
        var res = login(username, password);
        return res;
    };
    SQLConnection.prototype.inicio = function () {
        return inicio();
    };
    SQLConnection.prototype.registrarVehiculo = function (usuarioId, placa, tipoVehiculo) {
        return registrarVehiculo(usuarioId, placa, tipoVehiculo);
    };
    SQLConnection.prototype.ubicaciones = function (provincia, canton, distrito, direccion) {
        return ubicaciones(provincia, canton, distrito, direccion);
    };
    SQLConnection.prototype.registrarFuncionario = function (tipoFuncionario, division, identificacion, nombre, apellido1, apellido2, telefono, correoInstitucional, correo, notificarCorreoAlterno, password) {
        return registrarFuncionario(tipoFuncionario, division, identificacion, nombre, apellido1, apellido2, telefono, correoInstitucional, correo, notificarCorreoAlterno, password);
    };
    SQLConnection.prototype.registrarEstacionamiento = function (tipoEstacionamiento, provincia, canton, distrito, direccion, nombre, formaAcceso, cantEspacios, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspaciosOficiales, correo, telefono, identificacion, imageUrl, descripcion) {
        return registrarEstacionamiento(tipoEstacionamiento, provincia, canton, distrito, direccion, nombre, formaAcceso, cantEspacios, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspaciosOficiales, correo, telefono, identificacion, imageUrl, descripcion);
    };
    return SQLConnection;
}());
exports.SQLConnection = SQLConnection;
function registrarEstacionamiento(tipoEstacionamiento, provincia, canton, distrito, direccion, nombre, formaAcceso, cantEspacios, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspaciosOficiales, correo, telefono, identificacion, imageUrl, descripcion) {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool
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
                            .execute("sp_registrarEstacionamiento")];
                case 2:
                    result = _a.sent();
                    console.log("sp_registrarEstacionamiento");
                    console.log(result);
                    return [2 /*return*/, result.returnValue];
            }
        });
    });
}
//this function is the same as test but without then and catch
function registrarFuncionario(tipoFuncionario, division, identificacion, nombre, apellido1, apellido2, telefono, correoInstitucional, correo, notificarCorreoAlterno, password) {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result, str, obj, key;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool
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
                            .execute("sp_RegistrarFuncionario")];
                case 2:
                    result = _a.sent();
                    console.log("sp_RegistrarFuncionario");
                    console.log(result);
                    obj = result.recordsets[0][0];
                    for (key in obj) {
                        str = obj[key];
                    }
                    return [2 /*return*/, str];
            }
        });
    });
}
//this function is the same as test but without then and catch
function ubicaciones(provincia, canton, distrito, direccion) {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool
                            .request()
                            .input("provincia", sql.tinyint, provincia)
                            .input("canton", sql.smallint, canton)
                            .input("distrito", sql.int, distrito)
                            .input("direccion", sql.nvarchar(500), direccion)
                            .execute("sp_ubicaciones")];
                case 2:
                    result = _a.sent();
                    console.log("sp_ubicaciones");
                    console.log(result);
                    return [2 /*return*/, result.returnValue];
            }
        });
    });
}
//this function is the same as test but without then and catch
function registrarVehiculo(usuarioId, placa, tipoVehiculo) {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool
                            .request()
                            .input("usuarioId", sql.bigint, usuarioId)
                            .input("placa", sql.NVarChar(200), placa)
                            .input("tipoVehiculo", sql.SMALLINT, tipoVehiculo)
                            .execute("sp_RegistrarVehiculo")];
                case 2:
                    result = _a.sent();
                    console.log("sp_RegistrarVehiculo");
                    console.log(result);
                    return [2 /*return*/, result.returnValue];
            }
        });
    });
}
//this function is the same as test but without then and catch
function inicio() {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result, str, obj, key;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool.request().execute("sp_inicio")];
                case 2:
                    result = _a.sent();
                    console.log("sp_inicio");
                    console.log(result);
                    obj = result.recordsets[0][0];
                    for (key in obj) {
                        str = obj[key];
                    }
                    return [2 /*return*/, str];
            }
        });
    });
}
//this function is the same as test but without then and catch
function login(username, password) {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result, str, obj, key;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool
                            .request()
                            .input("user", sql.NVarChar(200), username)
                            .input("pass", sql.NVarChar(200), password)
                            .execute("sp_login")];
                case 2:
                    result = _a.sent();
                    console.log("sp_login");
                    console.log(result);
                    if (result.returnValue == 0) {
                        return [2 /*return*/, "{}"];
                    }
                    else {
                        str = void 0;
                        obj = result.recordsets[0][0];
                        for (key in obj) {
                            str = obj[key];
                        }
                        return [2 /*return*/, str];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function test(username, password) {
    return __awaiter(this, void 0, void 0, function () {
        var result, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    result = void 0;
                    console.log("***************");
                    return [4 /*yield*/, sql
                            .connect(config)
                            .then(function (pool) {
                            // Stored procedure
                            console.log("dentro");
                            return pool
                                .request()
                                .input("user", sql.NVarChar(200), username)
                                .input("pass", sql.NVarChar(200), password)
                                .execute("sp_login");
                        })
                            .then(function (result) {
                            console.log("dentro BBB");
                            console.dir(result);
                        })
                            .catch(function (err) {
                            console.log(err);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
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