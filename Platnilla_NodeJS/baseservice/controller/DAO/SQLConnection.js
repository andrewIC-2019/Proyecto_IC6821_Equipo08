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
var connection = sql.connect("Server=localhost,1433;Database=parqueos;User Id=sa;Password=1234Pass;Encrypt=false");
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
        var res = login(username, password);
        return res;
    };
    SQLConnection.prototype.inicio = function () {
        return inicio();
    };
    SQLConnection.prototype.informeFuncionarios = function () {
        return informeFuncionarios();
    };
    SQLConnection.prototype.informeEstacionamientos = function () {
        return informeEstacionamientos();
    };
    SQLConnection.prototype.franjasHorarias = function () {
        return franjasHorarias();
    };
    SQLConnection.prototype.estacionamientoInfo = function (estacionamientoId) {
        return estacionamientoInfo(estacionamientoId);
    };
    SQLConnection.prototype.consultaFuncionario = function (identificacion) {
        return consultaFuncionario(identificacion);
    };
    SQLConnection.prototype.pintarEditarUsuario = function (usuarioId) {
        return pintarEditarUsuario(usuarioId);
    };
    SQLConnection.prototype.guardarEditarUsuario = function (usuarioId, correo, password, telefono, departamento, placa1, placa2, placa3, placa4, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB, notificarCorreoAlterno) {
        return guardarEditarUsuario(usuarioId, correo, password, telefono, departamento, placa1, placa2, placa3, placa4, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB, notificarCorreoAlterno);
    };
    SQLConnection.prototype.registrarUsuarioTotal = function (correoInstitucional, identificacion, correo, password, telefono, nombre, apellido1, apellido2, departamento, placa1, placa2, placa3, placa4, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB, notificarCorreoAlterno) {
        return registrarUsuarioTotal(correoInstitucional, identificacion, correo, password, telefono, nombre, apellido1, apellido2, departamento, placa1, placa2, placa3, placa4, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB, notificarCorreoAlterno);
    };
    SQLConnection.prototype.eliminarUsuario = function (usuarioId) {
        return eliminarUsuario(usuarioId);
    };
    SQLConnection.prototype.diasSemana = function () {
        return diasSemana();
    };
    SQLConnection.prototype.eliminarEstacionamiento = function (estacionamientoId) {
        return eliminarEstacionamiento(estacionamientoId);
    };
    SQLConnection.prototype.registrarEstacionamientoTotal = function (nombre, correo, telefono, identificacion, direccionExacta, formaAcceso, descripcion, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspaciosOficiales, cantEspacios, imageUrl, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB, esInstitucional) {
        return registrarEstacionamientoTotal(nombre, correo, telefono, identificacion, direccionExacta, formaAcceso, descripcion, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspaciosOficiales, cantEspacios, imageUrl, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB, esInstitucional);
    };
    SQLConnection.prototype.pintarEditarEstacionamiento = function (estacionamientoId) {
        return pintarEditarEstacionamiento(estacionamientoId);
    };
    SQLConnection.prototype.guardarEditarEstacionamiento = function (estacionamientoId, identificacion, nombre, correo, telefono, direccionExacta, formaAcceso, descripcion, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspaciosOficiales, cantEspacios, imageUrl, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB) {
        return guardarEditarEstacionamiento(estacionamientoId, identificacion, nombre, correo, telefono, direccionExacta, formaAcceso, descripcion, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspaciosOficiales, cantEspacios, imageUrl, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB);
    };
    SQLConnection.prototype.estacionamientosTipoSubcontratados = function (subcontratados) {
        return estacionamientosTipoSubcontratados(subcontratados);
    };
    SQLConnection.prototype.crearEspacios = function (estacionamiento, tipo, cantidad) {
        return crearEspacios(estacionamiento, tipo, cantidad);
    };
    SQLConnection.prototype.verificacionFranjas = function (usuario, entrada, salida) {
        return verificacionFranjas(usuario, entrada, salida);
    };
    SQLConnection.prototype.verificacionDiaLaboral = function (jefe, dia) {
        return verificacionDiaLaboral(jefe, dia);
    };
    SQLConnection.prototype.getDisponiblesTipo = function (tipo) {
        return getDisponiblesTipo(tipo);
    };
    SQLConnection.prototype.actualizarSalidaReservaciones = function (horaPivot) {
        return actualizarSalidaReservaciones(horaPivot);
    };
    SQLConnection.prototype.ocupacionXTipo = function (estacionamiento) {
        return ocupacionXTipo(estacionamiento);
    };
    SQLConnection.prototype.ocupacionXDepartamento = function (estacionamiento) {
        return ocupacionXDepartamento(estacionamiento);
    };
    SQLConnection.prototype.ocupacionTotalXDepartamento = function (departamento) {
        return ocupacionTotalXDepartamento(departamento);
    };
    SQLConnection.prototype.verMisReservas = function (usuario, limiteA, limiteB) {
        return verMisReservas(usuario, limiteA, limiteB);
    };
    SQLConnection.prototype.verReservasEstacionamiento = function (estacionamiento) {
        return verReservasEstacionamiento(estacionamiento);
    };
    SQLConnection.prototype.registrarOficial = function (estacionamientoId, placa, conductor, entrada) {
        return registrarOficial(estacionamientoId, placa, conductor, entrada);
    };
    SQLConnection.prototype.salidaOficial = function (estacionamientoId, placa, conductor, salida) {
        return salidaOficial(estacionamientoId, placa, conductor, salida);
    };
    return SQLConnection;
}());
exports.SQLConnection = SQLConnection;
function salidaOficial(estacionamientoId, placa, conductor, salida) {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool
                            .request()
                            .input("estacionamientoId", sql.NVarChar, estacionamientoId)
                            .input("placa", sql.NVarChar, placa)
                            .input("conductor", sql.NVarChar, conductor)
                            .input("salida", sql.NVarChar, salida)
                            .execute("sp_SalidaOficial")];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, result.returnValue];
            }
        });
    });
}
function registrarOficial(estacionamientoId, placa, conductor, entrada) {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result, str, i, key, tmpStr;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool
                            .request()
                            .input("estacionamientoId", sql.NVarChar, estacionamientoId)
                            .input("placa", sql.NVarChar, placa)
                            .input("conductor", sql.NVarChar, conductor)
                            .input("entrada", sql.NVarChar, entrada)
                            .execute("sp_RegistrarOficial")];
                case 2:
                    result = _a.sent();
                    if (result.recordsets && result.returnValue) {
                        str = "{";
                        for (i in result.recordsets) {
                            for (key in result.recordsets[i][0]) {
                                tmpStr = result.recordsets[i][0][key];
                                tmpStr = tmpStr.replace(new RegExp('"', "g"), '\\"');
                                str += '"' + i + '": "' + tmpStr + '",';
                            }
                        }
                        str = str.slice(0, -1);
                        str += "}";
                    }
                    return [2 /*return*/, str];
            }
        });
    });
}
function verReservasEstacionamiento(estacionamiento) {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result, str, i, key, tmpStr;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool
                            .request()
                            .input("estacionamiento", sql.NVarChar, estacionamiento)
                            .execute("verReservasEstacionamiento")];
                case 2:
                    result = _a.sent();
                    if (result.recordsets && result.returnValue) {
                        str = "{";
                        for (i in result.recordsets) {
                            for (key in result.recordsets[i][0]) {
                                tmpStr = result.recordsets[i][0][key];
                                tmpStr = tmpStr.replace(new RegExp('"', "g"), '\\"');
                                str += '"' + i + '": "' + tmpStr + '",';
                            }
                        }
                        str = str.slice(0, -1);
                        str += "}";
                    }
                    return [2 /*return*/, str];
            }
        });
    });
}
function verMisReservas(usuario, limiteA, limiteB) {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result, str, i, key, tmpStr;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool
                            .request()
                            .input("usuario", sql.NVarChar, usuario)
                            .input("limiteA", sql.NVarChar, limiteA)
                            .input("limiteB", sql.NVarChar, limiteB)
                            .execute("verMisReservas")];
                case 2:
                    result = _a.sent();
                    if (result.recordsets && result.returnValue) {
                        str = "{";
                        for (i in result.recordsets) {
                            for (key in result.recordsets[i][0]) {
                                tmpStr = result.recordsets[i][0][key];
                                tmpStr = tmpStr.replace(new RegExp('"', "g"), '\\"');
                                str += '"' + i + '": "' + tmpStr + '",';
                            }
                        }
                        str = str.slice(0, -1);
                        str += "}";
                    }
                    return [2 /*return*/, str];
            }
        });
    });
}
function ocupacionTotalXDepartamento(departamento) {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result, str, i, key, tmpStr;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool
                            .request()
                            .input("departamento", sql.NVarChar, departamento)
                            .execute("sp_ocupacionTotalXDepartamento")];
                case 2:
                    result = _a.sent();
                    if (result.recordsets && result.returnValue) {
                        str = "{";
                        for (i in result.recordsets) {
                            for (key in result.recordsets[i][0]) {
                                tmpStr = result.recordsets[i][0][key];
                                tmpStr = tmpStr.replace(new RegExp('"', "g"), '\\"');
                                str += '"' + i + '": "' + tmpStr + '",';
                            }
                        }
                        str = str.slice(0, -1);
                        str += "}";
                    }
                    return [2 /*return*/, str];
            }
        });
    });
}
function ocupacionXDepartamento(estacionamiento) {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result, str, i, key, tmpStr;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool
                            .request()
                            .input("estacionamiento", sql.NVarChar, estacionamiento)
                            .execute("sp_ocupacionXDepartamento")];
                case 2:
                    result = _a.sent();
                    if (result.recordsets && result.returnValue) {
                        str = "{";
                        for (i in result.recordsets) {
                            for (key in result.recordsets[i][0]) {
                                tmpStr = result.recordsets[i][0][key];
                                tmpStr = tmpStr.replace(new RegExp('"', "g"), '\\"');
                                str += '"' + i + '": "' + tmpStr + '",';
                            }
                        }
                        str = str.slice(0, -1);
                        str += "}";
                    }
                    return [2 /*return*/, str];
            }
        });
    });
}
function ocupacionXTipo(estacionamiento) {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result, str, i, key, tmpStr;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool
                            .request()
                            .input("estacionamiento", sql.NVarChar, estacionamiento)
                            .execute("sp_ocupacionXTipo")];
                case 2:
                    result = _a.sent();
                    if (result.recordsets && result.returnValue) {
                        str = "{";
                        for (i in result.recordsets) {
                            for (key in result.recordsets[i][0]) {
                                tmpStr = result.recordsets[i][0][key];
                                tmpStr = tmpStr.replace(new RegExp('"', "g"), '\\"');
                                str += '"' + i + '": "' + tmpStr + '",';
                            }
                        }
                        str = str.slice(0, -1);
                        str += "}";
                    }
                    return [2 /*return*/, str];
            }
        });
    });
}
function actualizarSalidaReservaciones(horaPivot) {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool
                            .request()
                            .input("horaPivot", sql.NVarChar, horaPivot)
                            .execute("sp_actualizarSalidaReservaciones")];
                case 2:
                    result = _a.sent();
                    console.log(result);
                    return [2 /*return*/, result.returnValue];
            }
        });
    });
}
function getDisponiblesTipo(tipo) {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result, str, i, key, tmpStr;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool
                            .request()
                            .input("tipo", sql.NVarChar, tipo)
                            .execute("sp_getDisponiblesTipo")];
                case 2:
                    result = _a.sent();
                    if (result.recordsets && result.returnValue) {
                        str = "{";
                        for (i in result.recordsets) {
                            for (key in result.recordsets[i][0]) {
                                tmpStr = result.recordsets[i][0][key];
                                tmpStr = tmpStr.replace(new RegExp('"', "g"), '\\"');
                                str += '"' + i + '": "' + tmpStr + '",';
                            }
                        }
                        str = str.slice(0, -1);
                        str += "}";
                    }
                    return [2 /*return*/, str];
            }
        });
    });
}
function diasSemana() {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result, str, i, key, tmpStr;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool
                            .request()
                            .execute("sp_diasSemana")];
                case 2:
                    result = _a.sent();
                    if (result.recordsets && result.returnValue) {
                        str = "{";
                        for (i in result.recordsets) {
                            for (key in result.recordsets[i][0]) {
                                tmpStr = result.recordsets[i][0][key];
                                tmpStr = tmpStr.replace(new RegExp('"', "g"), '\\"');
                                str += '"' + i + '": "' + tmpStr + '",';
                            }
                        }
                        str = str.slice(0, -1);
                        str += "}";
                    }
                    return [2 /*return*/, str];
            }
        });
    });
}
function verificacionDiaLaboral(jefe, dia) {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool
                            .request()
                            .input("jefe", sql.NVarChar, jefe)
                            .input("dia", sql.NVarChar, dia)
                            .execute("sp_verificacionDiaLaboral")];
                case 2:
                    result = _a.sent();
                    console.log(result);
                    return [2 /*return*/, result.returnValue];
            }
        });
    });
}
function verificacionFranjas(usuario, entrada, salida) {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool
                            .request()
                            .input("usuario", sql.NVarChar, usuario)
                            .input("entrada", sql.NVarChar, entrada)
                            .input("salida", sql.NVarChar, salida)
                            .execute("sp_verificacionFranjas")];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, result.returnValue];
            }
        });
    });
}
function crearEspacios(estacionamiento, tipo, cantidad) {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool
                            .request()
                            .input("estacionamiento", sql.Int, estacionamiento)
                            .input("tipo", sql.NVarChar, tipo)
                            .input("cantidad", sql.Int, cantidad)
                            .execute("sp_crearEspacios")];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, "{ok: true}"];
            }
        });
    });
}
function estacionamientosTipoSubcontratados(subcontratados) {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result, str, key;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    //do connection
                    console.log("previo");
                    return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool
                            .request()
                            .input("subcontratados", sql.NVarChar, subcontratados)
                            .execute("sp_estacionamientosTipoSubcontratados")];
                case 2:
                    result = _a.sent();
                    if (result.recordsets && result.returnValue) {
                        for (key in result.recordset[0]) {
                            str = result.recordset[0][key];
                        }
                    }
                    return [2 /*return*/, str];
            }
        });
    });
}
function guardarEditarEstacionamiento(estacionamientoId, identificacion, nombre, correo, telefono, direccionExacta, formaAcceso, descripcion, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspaciosOficiales, cantEspacios, imageUrl, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB) {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool
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
                            .execute("sp_guardarEditarEstacionamiento")];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, "1"];
            }
        });
    });
}
function pintarEditarEstacionamiento(estacionamientoId) {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result, str, i, key, tmpStr;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool
                            .request()
                            .input("estacionamientoId", sql.Int, estacionamientoId)
                            .execute("sp_pintarEditarEstacionamiento")];
                case 2:
                    result = _a.sent();
                    if (result.recordsets && result.returnValue) {
                        str = "{";
                        for (i in result.recordsets) {
                            for (key in result.recordsets[i][0]) {
                                tmpStr = result.recordsets[i][0][key];
                                tmpStr = tmpStr.replace(new RegExp('"', "g"), '\\"');
                                str += '"' + i + '": "' + tmpStr + '",';
                            }
                        }
                        str = str.slice(0, -1);
                        str += "}";
                    }
                    return [2 /*return*/, str];
            }
        });
    });
}
function registrarEstacionamientoTotal(nombre, correo, telefono, identificacion, direccionExacta, formaAcceso, descripcion, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspaciosOficiales, cantEspacios, imageUrl, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB, esInstitucional) {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool
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
                            .execute("sp_registrarEstacionamientoTotal")];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, result.returnValue];
            }
        });
    });
}
function eliminarEstacionamiento(estacionamientoId) {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool
                            .request()
                            .input("estacionamientoId", sql.NVarChar(60), estacionamientoId)
                            .execute("deshabilitarEstacionamiento")];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, result.returnValue];
            }
        });
    });
}
function eliminarUsuario(usuarioId) {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool
                            .request()
                            .input("usuarioId", sql.Int, usuarioId)
                            .execute("deshabilitarUsuario")];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, result.returnValue];
            }
        });
    });
}
function registrarUsuarioTotal(correoInstitucional, identificacion, correo, password, telefono, nombre, apellido1, apellido2, departamento, placa1, placa2, placa3, placa4, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB, notificarCorreoAlterno) {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool
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
                            .execute("sp_registrarUsuarioTotal")];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, result.returnValue];
            }
        });
    });
}
function guardarEditarUsuario(usuarioId, correo, password, telefono, departamento, placa1, placa2, placa3, placa4, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB, notificarCorreoAlterno) {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool
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
                            .execute("sp_guardarEditarUsuario")];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, '{"done": true}'];
            }
        });
    });
}
function pintarEditarUsuario(usuarioId) {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result, str, i, key, tmpStr;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool
                            .request()
                            .input("usuarioId", sql.Int, usuarioId)
                            .execute("sp_pintarEditarUsuario")];
                case 2:
                    result = _a.sent();
                    if (result.recordsets && result.returnValue) {
                        str = "{";
                        for (i in result.recordsets) {
                            for (key in result.recordsets[i][0]) {
                                tmpStr = result.recordsets[i][0][key];
                                tmpStr = tmpStr.replace(new RegExp('"', "g"), '\\"');
                                str += '"' + i + '": "' + tmpStr + '",';
                            }
                        }
                        str = str.slice(0, -1);
                        str += "}";
                    }
                    return [2 /*return*/, str];
            }
        });
    });
}
function consultaFuncionario(identificacion) {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result, str;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool
                            .request()
                            .input("identificacion", sql.NVarChar(60), identificacion)
                            .execute("sp_consultaFuncionario")];
                case 2:
                    result = _a.sent();
                    if (result.recordsets && result.returnValue) {
                        str = result.recordsets;
                    }
                    return [2 /*return*/, str];
            }
        });
    });
}
function estacionamientoInfo(estacionamientoId) {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result, str, obj, key;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool
                            .request()
                            .input("estacionamientoId", sql.Int, estacionamientoId)
                            .execute("sp_estacionamientoinfo")];
                case 2:
                    result = _a.sent();
                    if (result.recordsets && result.returnValue) {
                        obj = result.recordsets[0][0];
                        for (key in obj) {
                            str = obj[key];
                        }
                    }
                    return [2 /*return*/, str];
            }
        });
    });
}
function franjasHorarias() {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result, str, obj, key;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool.request().execute("sp_franjasHorarias")];
                case 2:
                    result = _a.sent();
                    obj = result.recordsets[0][0];
                    for (key in obj) {
                        str = obj[key];
                    }
                    return [2 /*return*/, str];
            }
        });
    });
}
function informeEstacionamientos() {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result, str, obj, key;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool.request().execute("sp_informeEstacionamientos")];
                case 2:
                    result = _a.sent();
                    obj = result.recordsets[0][0];
                    for (key in obj) {
                        str = obj[key];
                    }
                    return [2 /*return*/, str];
            }
        });
    });
}
function informeFuncionarios() {
    return __awaiter(this, void 0, void 0, function () {
        var pool, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new sql.connect(config)];
                case 1:
                    pool = _a.sent();
                    return [4 /*yield*/, pool.request().execute("sp_informeFuncionarios")];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, result.recordsets[0]];
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
                    if (result.recordsets && result.returnValue) {
                        obj = result.recordsets[0][0];
                        for (key in obj) {
                            str = obj[key];
                        }
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
                    console.log(result);
                    if (result.recordsets && result.returnValue) {
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
