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
exports.user = void 0;
var express = require("express");
var controller_1 = require("../controller");
var common_1 = require("../common");
var router = express.Router();
var app = express();
exports.user = app;
var log = new common_1.Logger();
app.get("/login", login);
app.post("/registrarVehiculo", registrarVehiculo);
app.post("/ubicaciones", ubicaciones);
app.post("/registrarFuncionario", registrarFuncionario);
app.post("/permisosUsuario", permisosUsuario);
app.post("/insertarVehiculo", insertarVehiculo);
app.post("/insertarHorario", insertarHorario);
app.get("/informeFuncionarios", informeFuncionarios);
app.get("/informeEstacionamientos", informeEstacionamientos);
app.get("/franjasHorarias", franjasHorarias);
app.get("/consultaFuncionario", consultaFuncionario);
app.post("/registrarHorario", registrarHorario);
app.get("/pintarEditarUsuario", pintarEditarUsuario);
app.post("/guardarEditarUsuario", guardarEditarUsuario);
app.post("/registrarUsuarioTotal", registrarUsuarioTotal);
app.post("/eliminarUsuario", eliminarUsuario);
function eliminarUsuario(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var identificacion;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    identificacion = req.body.identificacion;
                    return [4 /*yield*/, controller_1.Control.getInstance()
                            .$gestorUsuario.eliminarUsuario(identificacion)
                            .then(function (data) {
                            if (!data) {
                                data = '{"response": false}';
                            }
                            res.json(JSON.parse(data));
                        })
                            .catch(function (err) {
                            log.error(err);
                            return "";
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function registrarUsuarioTotal(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var correoInstitucional, identificacion, correo, password, telefono, nombre, apellido1, apellido2, departamento, placa1, placa2, placa3, placa4, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB, notificarCorreoAlterno;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    correoInstitucional = req.body.correoInstitucional;
                    identificacion = req.body.identificacion;
                    correo = req.body.correo;
                    password = req.body.password;
                    telefono = req.body.telefono;
                    nombre = req.body.nombre;
                    apellido1 = req.body.apellido1;
                    apellido2 = req.body.apellido2;
                    departamento = req.body.departamento;
                    placa1 = req.body.placa1;
                    placa2 = req.body.placa2;
                    placa3 = req.body.placa3;
                    placa4 = req.body.placa4;
                    lunesA = req.body.lunesA;
                    lunesB = req.body.lunesB;
                    martesA = req.body.martesA;
                    martesB = req.body.martesB;
                    miercolesA = req.body.miercolesA;
                    miercolesB = req.body.miercolesB;
                    juevesA = req.body.juevesA;
                    juevesB = req.body.juevesB;
                    viernesA = req.body.viernesA;
                    viernesB = req.body.viernesB;
                    sabadoA = req.body.sabadoA;
                    sabadoB = req.body.sabadoB;
                    domingoA = req.body.domingoA;
                    domingoB = req.body.domingoB;
                    notificarCorreoAlterno = req.body.notificarCorreoAlterno;
                    return [4 /*yield*/, controller_1.Control.getInstance()
                            .$gestorUsuario.registrarUsuarioTotal(correoInstitucional, identificacion, correo, password, telefono, nombre, apellido1, apellido2, departamento, placa1, placa2, placa3, placa4, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB, notificarCorreoAlterno)
                            .then(function (data) {
                            if (!data) {
                                data = '{"response": false}';
                            }
                            res.json(JSON.parse(data));
                        })
                            .catch(function (err) {
                            log.error(err);
                            return "";
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function guardarEditarUsuario(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var usuarioId, correo, password, telefono, departamento, placa1, placa2, placa3, placa4, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB, notificarCorreoAlterno;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    usuarioId = req.body.usuarioId;
                    correo = req.body.correo;
                    password = req.body.password;
                    telefono = req.body.telefono;
                    departamento = req.body.departamento;
                    placa1 = req.body.placa1;
                    placa2 = req.body.placa2;
                    placa3 = req.body.placa3;
                    placa4 = req.body.placa4;
                    lunesA = req.body.lunesA;
                    lunesB = req.body.lunesB;
                    martesA = req.body.martesA;
                    martesB = req.body.martesB;
                    miercolesA = req.body.miercolesA;
                    miercolesB = req.body.miercolesB;
                    juevesA = req.body.juevesA;
                    juevesB = req.body.juevesB;
                    viernesA = req.body.viernesA;
                    viernesB = req.body.viernesB;
                    sabadoA = req.body.sabadoA;
                    sabadoB = req.body.sabadoB;
                    domingoA = req.body.domingoA;
                    domingoB = req.body.domingoB;
                    notificarCorreoAlterno = req.body.notificarCorreoAlterno;
                    return [4 /*yield*/, controller_1.Control.getInstance()
                            .$gestorUsuario.guardarEditarUsuario(usuarioId, correo, password, telefono, departamento, placa1, placa2, placa3, placa4, lunesA, lunesB, martesA, martesB, miercolesA, miercolesB, juevesA, juevesB, viernesA, viernesB, sabadoA, sabadoB, domingoA, domingoB, notificarCorreoAlterno)
                            .then(function (data) {
                            if (!data) {
                                data = '{"response": false}';
                            }
                            res.json(JSON.parse(data));
                        })
                            .catch(function (err) {
                            log.error(err);
                            return "";
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function pintarEditarUsuario(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var usuarioId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    usuarioId = req.query.usuarioId;
                    return [4 /*yield*/, controller_1.Control.getInstance()
                            .$gestorUsuario.pintarEditarUsuario(usuarioId)
                            .then(function (data) {
                            if (!data) {
                                data = '{"response": false}';
                            }
                            res.json(JSON.parse(data));
                        })
                            .catch(function (err) {
                            log.error(err);
                            return "";
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function registrarHorario(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var usuarioId, diaSemana, horaInicio, horaFinal;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    usuarioId = req.body.usuarioId;
                    diaSemana = req.body.diaSemana;
                    horaInicio = req.body.horaInicio;
                    horaFinal = req.body.horaFinal;
                    return [4 /*yield*/, controller_1.Control.getInstance()
                            .$gestorUsuario.registrarHorario(usuarioId, diaSemana, horaInicio, horaFinal)
                            .then(function (data) {
                            if (!data) {
                                data = '{"response": false}';
                            }
                            res.json(JSON.parse(data));
                        })
                            .catch(function (err) {
                            log.error(err);
                            return "";
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function consultaFuncionario(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var identificacion;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    identificacion = req.query.identificacion;
                    return [4 /*yield*/, controller_1.Control.getInstance()
                            .$gestorUsuario.consultaFuncionario(identificacion)
                            .then(function (data) {
                            if (!data) {
                                data = '{"response": false}';
                            }
                            res.json(JSON.parse(data));
                        })
                            .catch(function (err) {
                            log.error(err);
                            return "";
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function franjasHorarias(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, controller_1.Control.getInstance()
                        .$gestorUsuario.franjasHorarias()
                        .then(function (data) {
                        if (!data) {
                            data = '{"response": false}';
                        }
                        res.json(JSON.parse(data));
                    })
                        .catch(function (err) {
                        log.error(err);
                        return "";
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function informeEstacionamientos(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, controller_1.Control.getInstance()
                        .$gestorUsuario.informeEstacionamientos()
                        .then(function (data) {
                        if (!data) {
                            data = '{"response": false}';
                        }
                        res.json(JSON.parse(data));
                    })
                        .catch(function (err) {
                        log.error(err);
                        return "";
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function informeFuncionarios(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, controller_1.Control.getInstance()
                        .$gestorUsuario.informeFuncionarios()
                        .then(function (data) {
                        if (data) {
                            if (!data) {
                                data = '{"response": false}';
                            }
                            res.json(JSON.parse(data));
                        }
                        if (!data) {
                            data = '{"response": false}';
                        }
                        res.json(JSON.parse(data));
                    })
                        .catch(function (err) {
                        log.error(err);
                        return "";
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function insertarHorario(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var diaSemana, horaInicio, horaFinal;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    diaSemana = req.body.diaSemana;
                    horaInicio = req.body.horaInicio;
                    horaFinal = req.body.horaFinal;
                    return [4 /*yield*/, controller_1.Control.getInstance()
                            .$gestorUsuario.insertarHorario(diaSemana, horaInicio, horaFinal)
                            .then(function (data) {
                            if (!data) {
                                data = '{"response": false}';
                            }
                            res.json(JSON.parse(data));
                        })
                            .catch(function (err) {
                            log.error(err);
                            return "";
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function insertarVehiculo(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var placa, tipoVehiculo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    placa = req.body.placa;
                    tipoVehiculo = req.body.tipoVehiculo;
                    return [4 /*yield*/, controller_1.Control.getInstance()
                            .$gestorUsuario.insertarVehiculo(placa, tipoVehiculo)
                            .then(function (data) {
                            if (!data) {
                                data = '{"response": false}';
                            }
                            res.json(JSON.parse(data));
                        })
                            .catch(function (err) {
                            log.error(err);
                            return "";
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function permisosUsuario(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var usuarioId, permisoUsuarioId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    usuarioId = req.body.usuarioId;
                    permisoUsuarioId = req.body.permisoUsuarioId;
                    return [4 /*yield*/, controller_1.Control.getInstance()
                            .$gestorUsuario.permisosUsuario(usuarioId, permisoUsuarioId)
                            .then(function (data) {
                            if (!data) {
                                data = '{"response": false}';
                            }
                            res.json(JSON.parse(data));
                        })
                            .catch(function (err) {
                            log.error(err);
                            return "";
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function registrarFuncionario(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var tipoFuncionario, division, identificacion, nombre, apellido1, apellido2, telefono, correoInstitucional, correo, notificarCorreoAlterno, password;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tipoFuncionario = req.body.tipoFuncionario;
                    division = req.body.division;
                    identificacion = req.body.identificacion;
                    nombre = req.body.nombre;
                    apellido1 = req.body.apellido1;
                    apellido2 = req.body.apellido2;
                    telefono = req.body.telefono;
                    correoInstitucional = req.body.correoInstitucional;
                    correo = req.body.correo;
                    notificarCorreoAlterno = req.body.notificarCorreoAlterno;
                    password = req.body.password;
                    return [4 /*yield*/, controller_1.Control.getInstance()
                            .$gestorUsuario.registrarFuncionario(tipoFuncionario, division, identificacion, nombre, apellido1, apellido2, telefono, correoInstitucional, correo, notificarCorreoAlterno, password)
                            .then(function (data) {
                            if (!data) {
                                data = '{"response": false}';
                            }
                            res.json(JSON.parse(data));
                        })
                            .catch(function (err) {
                            log.error(err);
                            return "";
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function ubicaciones(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var provincia, canton, distrito, direccion;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    provincia = req.body.provincia;
                    canton = req.body.canton;
                    distrito = req.body.distrito;
                    direccion = req.body.direccion;
                    return [4 /*yield*/, controller_1.Control.getInstance()
                            .$gestorUsuario.ubicaciones(provincia, canton, distrito, direccion)
                            .then(function (data) {
                            if (!data) {
                                data = '{"response": false}';
                            }
                            res.json(JSON.parse(data));
                        })
                            .catch(function (err) {
                            log.error(err);
                            return "";
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function registrarVehiculo(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var usuarioId, placa, tipoVehiculo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    usuarioId = req.body.usuarioId;
                    placa = req.body.placa;
                    tipoVehiculo = req.body.tipoVehiculo;
                    return [4 /*yield*/, controller_1.Control.getInstance()
                            .$gestorUsuario.registrarVehiculo(usuarioId, placa, tipoVehiculo)
                            .then(function (data) {
                            if (!data) {
                                data = '{"response": false}';
                            }
                            res.json(JSON.parse(data));
                        })
                            .catch(function (err) {
                            log.error(err);
                            return "";
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function login(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var username, password;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    username = req.query.username;
                    password = req.query.password;
                    console.log("login req");
                    console.log(username);
                    console.log(password);
                    return [4 /*yield*/, controller_1.Control.getInstance()
                            .$gestorUsuario.login(username, password)
                            .then(function (data) {
                            if (!data) {
                                data = '{"response": false}';
                            }
                            res.json(JSON.parse(data));
                        })
                            .catch(function (err) {
                            log.error(err);
                            return "";
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}